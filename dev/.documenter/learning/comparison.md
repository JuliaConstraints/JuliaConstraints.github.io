
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


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/layers/comparison.jl#L1-L4)

</div>
<br>

::: warning Missing docstring.

Missing docstring for `co_euclidian`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `co_abs_diff_val_vars`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `co_val_minus_vars`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `co_vars_minus_val`. Check Documenter&#39;s build log for details.

:::

### Param: `:val` {#Param:-:val}

::: warning Missing docstring.

Missing docstring for `co_abs_diff_val_param`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `co_val_minus_param`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `co_param_minus_val`. Check Documenter&#39;s build log for details.

:::

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


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/layers/comparison.jl#L83-L86)

</div>
<br>
