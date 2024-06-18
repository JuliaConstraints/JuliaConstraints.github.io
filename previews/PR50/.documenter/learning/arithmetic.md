
# Arithmetic Layer {#Arithmetic-Layer}



Some text to describe the arithmetic layer within usual ICNs.

## List of arithmetic operations {#List-of-arithmetic-operations}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ar_sum-learning-arithmetic' href='#CompositionalNetworks.ar_sum-learning-arithmetic'>#</a>&nbsp;<b><u>CompositionalNetworks.ar_sum</u></b> &mdash; <i>Function</i>.




```julia
ar_sum(x)
```


Reduce `k = length(x)` vectors through sum to a single vector.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/arithmetic.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ar_prod-learning-arithmetic' href='#CompositionalNetworks.ar_prod-learning-arithmetic'>#</a>&nbsp;<b><u>CompositionalNetworks.ar_prod</u></b> &mdash; <i>Function</i>.




```julia
ar_prod(x)
```


Reduce `k = length(x)` vectors through product to a single vector.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/arithmetic.jl#L7-L10)

</div>
<br>

## Layer generation {#Layer-generation}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.arithmetic_layer-learning-arithmetic' href='#CompositionalNetworks.arithmetic_layer-learning-arithmetic'>#</a>&nbsp;<b><u>CompositionalNetworks.arithmetic_layer</u></b> &mdash; <i>Function</i>.




```julia
arithmetic_layer()
```


Generate the layer of arithmetic operations of the ICN. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/arithmetic.jl#L13-L16)

</div>
<br>
