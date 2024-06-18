
# A layer structure for any ICN {#A-layer-structure-for-any-ICN}



The `layer.jl` file defines a `Layer` structure and several associated functions for manipulating and interacting with this structure in the context of an Interpretable Compositional Network (ICN).

The `Layer` structure is used to store a `LittleDict` of operations that can be selected during the learning phase of an ICN. Each layer can be exclusive, meaning only one operation can be selected at a time. This is particularly useful in the context of ICNs, which are used to learn alternative expressions for highly combinatorial functions, such as those found in Constraint-based Local Search solvers.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.Layer-learning-layers' href='#CompositionalNetworks.Layer-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.Layer</u></b> &mdash; <i>Type</i>.




```julia
Layer
```


A structure to store a `LittleDict` of operations that can be selected during the learning phase of an ICN. If the layer is exclusive, only one operation can be selected at a time.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.functions-learning-layers' href='#CompositionalNetworks.functions-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.functions</u></b> &mdash; <i>Function</i>.




```julia
functions(layer)
```


Access the operations of a layer. The container is ordered.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L11-L14)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.length-Tuple{CompositionalNetworks.Layer}-learning-layers' href='#Base.length-Tuple{CompositionalNetworks.Layer}-learning-layers'>#</a>&nbsp;<b><u>Base.length</u></b> &mdash; <i>Method</i>.




```julia
length(layer)
```


Return the number of operations in a layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L17-L20)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.exclu-learning-layers' href='#CompositionalNetworks.exclu-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.exclu</u></b> &mdash; <i>Function</i>.




```julia
exclu(layer)
```


Return `true` if the layer has mutually exclusive operations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L23-L26)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.symbol-learning-layers' href='#CompositionalNetworks.symbol-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.symbol</u></b> &mdash; <i>Function</i>.




```julia
symbol(layer, i)
```


Return the i-th symbols of the operations in a given layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L29-L32)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.nbits_exclu-learning-layers' href='#CompositionalNetworks.nbits_exclu-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.nbits_exclu</u></b> &mdash; <i>Function</i>.




```julia
nbits_exclu(layer)
```


Convert the length of an exclusive layer into a number of bits.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L35-L38)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.show_layer-learning-layers' href='#CompositionalNetworks.show_layer-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.show_layer</u></b> &mdash; <i>Function</i>.




```julia
show_layer(layer)
```


Return a string that contains the elements in a layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L41-L44)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.selected_size-learning-layers' href='#CompositionalNetworks.selected_size-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.selected_size</u></b> &mdash; <i>Function</i>.




```julia
selected_size(layer, layer_weights)
```


Return the number of operations selected by `layer_weights` in `layer`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L47-L50)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.is_viable-learning-layers' href='#CompositionalNetworks.is_viable-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.is_viable</u></b> &mdash; <i>Function</i>.




```julia
is_viable(layer, w)
is_viable(icn)
is_viable(icn, w)
```


Assert if a pair of layer/icn and weights compose a viable pattern. If no weights are given with an icn, it will check the current internal value.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L53-L58)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.generate_inclusive_operations-learning-layers' href='#CompositionalNetworks.generate_inclusive_operations-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.generate_inclusive_operations</u></b> &mdash; <i>Function</i>.




```julia
generate_inclusive_operations(predicate, bits)
generate_exclusive_operation(max_op_number)
```


Generates the operations (weights) of a layer with inclusive/exclusive operations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L61-L65)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.generate_exclusive_operation-learning-layers' href='#CompositionalNetworks.generate_exclusive_operation-learning-layers'>#</a>&nbsp;<b><u>CompositionalNetworks.generate_exclusive_operation</u></b> &mdash; <i>Function</i>.




```julia
generate_exclusive_operation(max_op_number)
```


Generates the operations (weigths) of a layer with exclusive operations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L75-L78)

</div>
<br>

::: warning Missing docstring.

Missing docstring for `generate_weigths`. Check Documenter&#39;s build log for details.

:::
