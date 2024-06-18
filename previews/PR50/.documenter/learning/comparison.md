
# Comparison Layer {#Comparison-Layer}



Some text to describe the comparison layer within usual ICNs.

## List of comparisons {#List-of-comparisons}

List the possible parameters and how it affects the comparison.

### Non-parametric
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_identity-learning-comparison' href='#CompositionalNetworks.co_identity-learning-comparison'>#</a>&nbsp;<b><u>CompositionalNetworks.co_identity</u></b> &mdash; <i>Function</i>.




```julia
co_identity(x)
```


Identity function. Already defined in Julia as `identity`, specialized for scalars in the `comparison` layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L1-L4)

</div>
<br>

::: warning Missing docstring.

Missing docstring for `co_euclidian`. Check Documenter&#39;s build log for details.

:::
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_abs_diff_val_vars-learning-comparison' href='#CompositionalNetworks.co_abs_diff_val_vars-learning-comparison'>#</a>&nbsp;<b><u>CompositionalNetworks.co_abs_diff_val_vars</u></b> &mdash; <i>Function</i>.




```julia
co_abs_diff_val_vars(x; nvars)
```


Return the absolute difference between `x` and the number of variables `nvars`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L41-L44)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_val_minus_vars-learning-comparison' href='#CompositionalNetworks.co_val_minus_vars-learning-comparison'>#</a>&nbsp;<b><u>CompositionalNetworks.co_val_minus_vars</u></b> &mdash; <i>Function</i>.




```julia
co_val_minus_vars(x; nvars)
```


Return the difference `x - nvars` if positive, `0.0` otherwise, where `nvars` denotes the numbers of variables.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L47-L50)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_vars_minus_val-learning-comparison' href='#CompositionalNetworks.co_vars_minus_val-learning-comparison'>#</a>&nbsp;<b><u>CompositionalNetworks.co_vars_minus_val</u></b> &mdash; <i>Function</i>.




```julia
co_vars_minus_val(x; nvars)
```


Return the difference `nvars - x` if positive, `0.0` otherwise, where `nvars` denotes the numbers of variables.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L54-L57)

</div>
<br>

### Param: `:val` {#Param:-:val}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_abs_diff_val_param-learning-comparison' href='#CompositionalNetworks.co_abs_diff_val_param-learning-comparison'>#</a>&nbsp;<b><u>CompositionalNetworks.co_abs_diff_val_param</u></b> &mdash; <i>Function</i>.




```julia
co_abs_diff_val_param(x; param)
```


Return the absolute difference between `x` and `param`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_val_minus_param-learning-comparison' href='#CompositionalNetworks.co_val_minus_param-learning-comparison'>#</a>&nbsp;<b><u>CompositionalNetworks.co_val_minus_param</u></b> &mdash; <i>Function</i>.




```julia
co_val_minus_param(x; param)
```


Return the difference `x - param` if positive, `0.0` otherwise.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L13-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_param_minus_val-learning-comparison' href='#CompositionalNetworks.co_param_minus_val-learning-comparison'>#</a>&nbsp;<b><u>CompositionalNetworks.co_param_minus_val</u></b> &mdash; <i>Function</i>.




```julia
co_param_minus_val(x; param)
```


Return the difference `param - x` if positive, `0.0` otherwise.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L19-L22)

</div>
<br>

::: warning Missing docstring.

Missing docstring for `co_euclidian_param`. Check Documenter&#39;s build log for details.

:::

### Layer generation {#Layer-generation}

::: warning Missing docstring.

Missing docstring for `make_comparisons`. Check Documenter&#39;s build log for details.

:::
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.comparison_layer-learning-comparison' href='#CompositionalNetworks.comparison_layer-learning-comparison'>#</a>&nbsp;<b><u>CompositionalNetworks.comparison_layer</u></b> &mdash; <i>Function</i>.




```julia
comparison_layer(param = false)
```


Generate the layer of transformations functions of the ICN. Iff `param` value is set, also includes all the parametric comparison with that value. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L85-L88)

</div>
<br>
