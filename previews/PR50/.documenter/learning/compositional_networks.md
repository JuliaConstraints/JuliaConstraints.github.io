
# CompositionalNetworks.jl



Documentation for `CompositionalNetworks.jl`.

## Utilities
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.map_tr!-learning-compositional_networks' href='#CompositionalNetworks.map_tr!-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.map_tr!</u></b> &mdash; <i>Function</i>.




```julia
map_tr!(f, x, X, param)
```


Return an anonymous function that applies `f` to all elements of `x` and store the result in `X`, with a parameter `param` (which is set to `nothing` for function with no parameter).


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.lazy-learning-compositional_networks' href='#CompositionalNetworks.lazy-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.lazy</u></b> &mdash; <i>Function</i>.




```julia
lazy(funcs::Function...)
```


Generate methods extended to a vector instead of one of its components. A function `f` should have the following signature: `f(i::Int, x::V)`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L22-L25)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.lazy_param-learning-compositional_networks' href='#CompositionalNetworks.lazy_param-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.lazy_param</u></b> &mdash; <i>Function</i>.




```julia
lazy_param(funcs::Function...)
```


Generate methods extended to a vector instead of one of its components. A function `f` should have the following signature: `f(i::Int, x::V; param)`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L36-L39)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.as_bitvector-learning-compositional_networks' href='#CompositionalNetworks.as_bitvector-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.as_bitvector</u></b> &mdash; <i>Function</i>.




```julia
as_bitvector(n::Int, max_n::Int = n)
```


Convert an Int to a BitVector of minimal size (relatively to `max_n`).


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L48-L51)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.as_int-learning-compositional_networks' href='#CompositionalNetworks.as_int-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.as_int</u></b> &mdash; <i>Function</i>.




```julia
as_int(v::AbstractVector)
```


Convert a `BitVector` into an `Int`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L65-L68)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.reduce_symbols-learning-compositional_networks' href='#CompositionalNetworks.reduce_symbols-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.reduce_symbols</u></b> &mdash; <i>Function</i>.




```julia
reduce_symbols(symbols, sep)
```


Produce a formatted string that separates the symbols by `sep`. Used internally for `show_composition`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L77-L80)

</div>
<br>

::: warning Missing docstring.

Missing docstring for `CompositionalNeworks.tr_in`. Check Documenter&#39;s build log for details.

:::

## Metrics
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.hamming-learning-compositional_networks' href='#CompositionalNetworks.hamming-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.hamming</u></b> &mdash; <i>Function</i>.




```julia
hamming(x, X)
```


Compute the hamming distance of `x` over a collection of solutions `X`, i.e. the minimal number of variables to switch in `x`to reach a solution.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/metrics.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.minkowski-learning-compositional_networks' href='#CompositionalNetworks.minkowski-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.minkowski</u></b> &mdash; <i>Function</i>.




```julia
minkowski(x, X, p)
```



[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/metrics.jl#L7-L9)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.manhattan-learning-compositional_networks' href='#CompositionalNetworks.manhattan-learning-compositional_networks'>#</a>&nbsp;<b><u>CompositionalNetworks.manhattan</u></b> &mdash; <i>Function</i>.




```julia
manhattan(x, X)
```



[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/metrics.jl#L12-L14)

</div>
<br>

::: warning Missing docstring.

Missing docstring for `weigths_bias`. Check Documenter&#39;s build log for details.

:::
