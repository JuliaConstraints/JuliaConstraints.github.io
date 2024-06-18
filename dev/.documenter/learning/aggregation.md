
# Aggregation Layer {#Aggregation-Layer}



Some text to describe the aggragation layer within usual ICNs.

## List of aggregations {#List-of-aggregations}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ag_sum-learning-aggregation' href='#CompositionalNetworks.ag_sum-learning-aggregation'>#</a>&nbsp;<b><u>CompositionalNetworks.ag_sum</u></b> &mdash; <i>Function</i>.




```julia
ag_sum(x)
```


Aggregate through `+` a vector into a single scalar.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/aggregation.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ag_count_positive-learning-aggregation' href='#CompositionalNetworks.ag_count_positive-learning-aggregation'>#</a>&nbsp;<b><u>CompositionalNetworks.ag_count_positive</u></b> &mdash; <i>Function</i>.




```julia
ag_count_positive(x)
```


Count the number of strictly positive elements of `x`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/aggregation.jl#L7-L10)

</div>
<br>

## Layer generation {#Layer-generation}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.aggregation_layer-learning-aggregation' href='#CompositionalNetworks.aggregation_layer-learning-aggregation'>#</a>&nbsp;<b><u>CompositionalNetworks.aggregation_layer</u></b> &mdash; <i>Function</i>.




```julia
aggregation_layer()
```


Generate the layer of aggregations of the ICN. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/aggregation.jl#L13-L16)

</div>
<br>
