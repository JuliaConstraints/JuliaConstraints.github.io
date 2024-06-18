
# Learning QUBO matrices {#Learning-QUBO-matrices}



## Interface
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.AbstractOptimizer-learning-qubo_learning' href='#QUBOConstraints.AbstractOptimizer-learning-qubo_learning'>#</a>&nbsp;<b><u>QUBOConstraints.AbstractOptimizer</u></b> &mdash; <i>Type</i>.




```julia
AbstractOptimizer
```


An abstract type (interface) used to learn QUBO matrices from constraints. Only a `train` method is required.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/learn.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.train-learning-qubo_learning' href='#QUBOConstraints.train-learning-qubo_learning'>#</a>&nbsp;<b><u>QUBOConstraints.train</u></b> &mdash; <i>Function</i>.




```julia
train(args...)
```


Default `train` method for any AbstractOptimizer.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/learn.jl#L8-L12)

</div>
<br>

## Examples with various optimizers {#Examples-with-various-optimizers}

### Gradient Descent {#Gradient-Descent}

```julia
struct GradientDescentOptimizer <: QUBOConstraints.AbstractOptimizer
    binarization::Symbol
    η::Float64
    precision::Int
    oversampling::Bool
end

function GradientDescentOptimizer(;
    binarization = :one_hot,
    η = .001,
    precision = 5,
    oversampling = false,
)
    return GradientDescentOptimizer(binarization, η, precision, oversampling)
end


predict(x, Q) = transpose(x) * Q * x

loss(x, y, Q) = (predict(x, Q) .-y).^2

function make_df(X, Q, penalty, binarization, domains)
    df = DataFrame()
    for (i,x) in enumerate(X)
        if i == 1
            df = DataFrame(transpose(x), :auto)
        else
            push!(df, transpose(x))
        end
    end

    dim = length(df[1,:])

    if binarization == :none
        df[!,:penalty] = map(r -> penalty(Vector(r)), eachrow(df))
        df[!,:predict] = map(r -> predict(Vector(r), Q), eachrow(df[:, 1:dim]))
    else
        df[!,:penalty] = map(
            r -> penalty(binarize(Vector(r), domains; binarization)),
            eachrow(df)
        )
        df[!,:predict] = map(
            r -> predict(binarize(Vector(r), domains; binarization), Q),
            eachrow(df[:, 1:dim])
        )
    end

    min_false = minimum(
        filter(:penalty => >(minimum(df[:,:penalty])), df)[:,:predict];
        init = typemax(Int)
    )
    df[!,:shifted] = df[:,:predict] .- min_false
    df[!,:accurate] = df[:, :penalty] .* df[:,:shifted] .≥ 0.

    return df
end

function preliminaries(X, domains, binarization)
    if binarization==:none
        n = length(first(X))
        return X, zeros(n,n)
    else
        Y = map(x -> collect(binarize(x, domains; binarization)), X)
        n = length(first(Y))
        return Y, zeros(n,n)
    end
end

function preliminaries(X, _)
    n = length(first(X))
    return X, zeros(n,n)
end

function train!(Q, X, penalty, η, precision, X_test, oversampling, binarization, domains)
    θ = params(Q)
    try
        penalty(first(X))
    catch e
        if isa(e, UndefKeywordError)
            penalty = (x; dom_size = δ_extrema(Iterators.flatten(X)))-> penalty(x; dom_size)
        else
            throw(e)
        end
    end
    for x in (oversampling ? oversample(X, penalty) : X)
        grads = gradient(() -> loss(x, penalty(x), Q), θ)
        Q .-= η * grads[Q]
    end

    Q[:,:] = round.(precision*Q)

    df = make_df(X_test, Q, penalty, binarization, domains)
    return pretty_table(describe(df[!, [:penalty, :predict, :shifted, :accurate]]))
end

function train(
    X,
    penalty,
    domains::Vector{D};
    optimizer = GradientDescentOptimizer(),
    X_test = X,
) where {D <: DiscreteDomain}
    Y, Q = preliminaries(X, domains, optimizer.binarization)
    train!(
        Q, Y, penalty, optimizer.η, optimizer.precision, X_test,
        optimizer.oversampling, optimizer.binarization, domains
    )
    return Q
end

function train(
    X,
    penalty,
    dom_stuff = nothing;
    optimizer = GradientDescentOptimizer(),
    X_test = X,
)
    return train(X, penalty, to_domains(X, dom_stuff); optimizer, X_test)
end
```


### Constraint-based Local Search {#Constraint-based-Local-Search}
