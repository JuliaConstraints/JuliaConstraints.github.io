
# ConstraintLearning.jl

Documentation for `ConstraintLearning.jl`.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.ICNConfig' href='#ConstraintLearning.ICNConfig'>#</a>&nbsp;<b><u>ConstraintLearning.ICNConfig</u></b> &mdash; <i>Type</i>.




```julia
struct ICNConfig{O <: ICNOptimizer}
```


A structure to hold the metric and optimizer configurations used in learning the weights of an ICN.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/base.jl#L8-L12)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.ICNConfig-Tuple{}' href='#ConstraintLearning.ICNConfig-Tuple{}'>#</a>&nbsp;<b><u>ConstraintLearning.ICNConfig</u></b> &mdash; <i>Method</i>.




```julia
ICNConfig(; metric = :hamming, optimizer = ICNGeneticOptimizer())
```


Constructor for `ICNConfig`. Defaults to hamming metric using a genetic algorithm.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/genetic.jl#L150-L154)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.ICNGeneticOptimizer-Tuple{}' href='#ConstraintLearning.ICNGeneticOptimizer-Tuple{}'>#</a>&nbsp;<b><u>ConstraintLearning.ICNGeneticOptimizer</u></b> &mdash; <i>Method</i>.




```julia
ICNGeneticOptimizer(; kargs...)
```


Default constructor to learn an ICN through a Genetic Algorithm. Default `kargs` TBW.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/genetic.jl#L111-L115)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.ICNLocalSearchOptimizer' href='#ConstraintLearning.ICNLocalSearchOptimizer'>#</a>&nbsp;<b><u>ConstraintLearning.ICNLocalSearchOptimizer</u></b> &mdash; <i>Type</i>.




```julia
ICNLocalSearchOptimizer(options = LocalSearchSolvers.Options())
```


Default constructor to learn an ICN through a CBLS solver.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/cbls.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.ICNOptimizer' href='#ConstraintLearning.ICNOptimizer'>#</a>&nbsp;<b><u>ConstraintLearning.ICNOptimizer</u></b> &mdash; <i>Type</i>.




```julia
const ICNOptimizer = CompositionalNetworks.AbstractOptimizer
```


An abstract type for optmizers defined to learn ICNs.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/base.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.QUBOGradientOptimizer-Tuple{}' href='#ConstraintLearning.QUBOGradientOptimizer-Tuple{}'>#</a>&nbsp;<b><u>ConstraintLearning.QUBOGradientOptimizer</u></b> &mdash; <i>Method</i>.




```julia
QUBOGradientOptimizer(; kargs...)
```


A QUBO optimizer based on gradient descent. Defaults TBW


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo/gradient.jl#L8-L12)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.QUBOOptimizer' href='#ConstraintLearning.QUBOOptimizer'>#</a>&nbsp;<b><u>ConstraintLearning.QUBOOptimizer</u></b> &mdash; <i>Type</i>.




```julia
const QUBOOptimizer = QUBOConstraints.AbstractOptimizer
```


An abstract type for optimizers used to learn QUBO matrices from constraints.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo/base.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.optimize!-Tuple{Any, Any, Any, Any, Any, ICNGeneticOptimizer}' href='#CompositionalNetworks.optimize!-Tuple{Any, Any, Any, Any, Any, ICNGeneticOptimizer}'>#</a>&nbsp;<b><u>CompositionalNetworks.optimize!</u></b> &mdash; <i>Method</i>.




```julia
CompositionalNetworks.optimize!(icn, solutions, non_sltns, dom_size, metric, optimizer::ICNGeneticOptimizer; parameters...)
```


Extends the `optimize!` method to `ICNGeneticOptimizer`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/genetic.jl#L126-L130)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.optimize!-Tuple{Any, Any, Any, Any, Any, ICNLocalSearchOptimizer}' href='#CompositionalNetworks.optimize!-Tuple{Any, Any, Any, Any, Any, ICNLocalSearchOptimizer}'>#</a>&nbsp;<b><u>CompositionalNetworks.optimize!</u></b> &mdash; <i>Method</i>.




```julia
CompositionalNetworks.optimize!(icn, solutions, non_sltns, dom_size, metric, optimizer::ICNLocalSearchOptimizer; parameters...)
```


Extends the `optimize!` method to `ICNLocalSearchOptimizer`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/cbls.jl#L37-L41)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning._optimize!-NTuple{7, Any}' href='#ConstraintLearning._optimize!-NTuple{7, Any}'>#</a>&nbsp;<b><u>ConstraintLearning._optimize!</u></b> &mdash; <i>Method</i>.




```julia
_optimize!(icn, X, X_sols; metric = hamming, pop_size = 200)
```


Optimize and set the weights of an ICN with a given set of configuration `X` and solutions `X_sols`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/genetic.jl#L11-L14)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.domain_size-Tuple{Number}' href='#ConstraintLearning.domain_size-Tuple{Number}'>#</a>&nbsp;<b><u>ConstraintLearning.domain_size</u></b> &mdash; <i>Method</i>.




```julia
domain_size(ds::Number)
```


Extends the domain_size function when `ds` is number (for dispatch purposes).


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/common.jl#L24-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.generate_population-Tuple{Any, Any}' href='#ConstraintLearning.generate_population-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.generate_population</u></b> &mdash; <i>Method</i>.




```julia
generate_population(icn, pop_size
```


Generate a pôpulation of weights (individuals) for the genetic algorithm weighting `icn`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/genetic.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.icn-Tuple{Any, Any}' href='#ConstraintLearning.icn-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.icn</u></b> &mdash; <i>Method</i>.




```julia
icn(X,X̅; kargs..., parameters...)
```


TBW


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.loss-Tuple{Any, Any, Any}' href='#ConstraintLearning.loss-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.loss</u></b> &mdash; <i>Method</i>.




```julia
loss(x, y, Q)
```


Loss of the prediction given by `Q`, a training set `y`, and a given configuration `x`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo/gradient.jl#L29-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.make_df-NTuple{5, Any}' href='#ConstraintLearning.make_df-NTuple{5, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.make_df</u></b> &mdash; <i>Method</i>.




```julia
make_df(X, Q, penalty, binarization, domains)
```


DataFrame arrangement to output some basic evaluation of a matrix `Q`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo/gradient.jl#L36-L40)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.make_set_penalty-Tuple{Any, Any}' href='#ConstraintLearning.make_set_penalty-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.make_set_penalty</u></b> &mdash; <i>Method</i>.




```julia
make_set_penalty(X, X̅, args...; kargs)
```


Return a penalty function when the training set is already split into a pair of solutions `X` and non solutions `X̅`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/common.jl#L63-L67)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.make_training_sets-NTuple{4, Any}' href='#ConstraintLearning.make_training_sets-NTuple{4, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.make_training_sets</u></b> &mdash; <i>Method</i>.




```julia
make_training_sets(X, penalty, args...)
```


Return a pair of solutions and non solutions sets based on `X` and `penalty`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/common.jl#L31-L35)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.mutually_exclusive-Tuple{Any, Any}' href='#ConstraintLearning.mutually_exclusive-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.mutually_exclusive</u></b> &mdash; <i>Method</i>.




```julia
mutually_exclusive(layer, w)
```


Constraint ensuring that `w` encode exclusive operations in `layer`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/cbls.jl#L12-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.no_empty_layer-Tuple{Any}' href='#ConstraintLearning.no_empty_layer-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintLearning.no_empty_layer</u></b> &mdash; <i>Method</i>.




```julia
no_empty_layer(x; X = nothing)
```


Constraint ensuring that at least one operation is selected.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/cbls.jl#L23-L27)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.optimize!-NTuple{8, Any}' href='#ConstraintLearning.optimize!-NTuple{8, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.optimize!</u></b> &mdash; <i>Method</i>.




```julia
optimize!(icn, X, X_sols, global_iter, local_iter; metric=hamming, popSize=100)
```


Optimize and set the weights of an ICN with a given set of configuration `X` and solutions `X_sols`. The best weights among `global_iter` will be set.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/genetic.jl#L57-L60)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.parameter_specific_operations-Tuple{Any}' href='#ConstraintLearning.parameter_specific_operations-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintLearning.parameter_specific_operations</u></b> &mdash; <i>Method</i>.




```julia
parameter_specific_operations(x; X = nothing)
```


Constraint ensuring that at least one operation related to parameters is selected if the error function to be learned is parametric.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/icn/cbls.jl#L30-L34)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.predict-Tuple{Any, Any}' href='#ConstraintLearning.predict-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.predict</u></b> &mdash; <i>Method</i>.




```julia
predict(x, Q)
```


Return the predictions given by `Q` for a given configuration `x`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo/gradient.jl#L22-L26)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.preliminaries-Tuple{Any, Any, Any}' href='#ConstraintLearning.preliminaries-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.preliminaries</u></b> &mdash; <i>Method</i>.




```julia
preliminaries(args)
```


Preliminaries to the training process in a `QUBOGradientOptimizer` run.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo/gradient.jl#L77-L81)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.qubo' href='#ConstraintLearning.qubo'>#</a>&nbsp;<b><u>ConstraintLearning.qubo</u></b> &mdash; <i>Function</i>.




```julia
qubo(X,X̅; kargs..., parameters...)
```


TBW


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.sub_eltype-Tuple{Any}' href='#ConstraintLearning.sub_eltype-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintLearning.sub_eltype</u></b> &mdash; <i>Method</i>.




```julia
sub_eltype(X)
```


Return the element type of of the first element of a collection.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/common.jl#L17-L21)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.train!-NTuple{9, Any}' href='#ConstraintLearning.train!-NTuple{9, Any}'>#</a>&nbsp;<b><u>ConstraintLearning.train!</u></b> &mdash; <i>Method</i>.




```julia
train!(Q, X, penalty, η, precision, X_test, oversampling, binarization, domains)
```


Training inner method.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo/gradient.jl#L98-L102)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.train-Union{Tuple{D}, Tuple{Any, Any, Vector{D}}} where D<:DiscreteDomain' href='#ConstraintLearning.train-Union{Tuple{D}, Tuple{Any, Any, Vector{D}}} where D<:DiscreteDomain'>#</a>&nbsp;<b><u>ConstraintLearning.train</u></b> &mdash; <i>Method</i>.




```julia
train(X, penalty[, d]; optimizer = QUBOGradientOptimizer(), X_test = X)
```


Learn a QUBO matrix on training set `X` for a constraint defined by `penalty` with optional domain information `d`. By default, it uses a `QUBOGradientOptimizer` and `X` as a testing set.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/qubo/gradient.jl#L127-L131)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintLearning.δ-Tuple{Any}' href='#ConstraintLearning.δ-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintLearning.δ</u></b> &mdash; <i>Method</i>.




```julia
δ(X[, Y]; discrete = true)
```


Compute the extrema over a collection `X``or a pair of collection`(X, Y)`.


[source](https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.7/src/common.jl#L1-L5)

</div>
<br>
