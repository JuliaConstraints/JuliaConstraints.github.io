# A layer structure for any ICN

```@meta
CurrentModule = CompositionalNetworks
```

The `layer.jl` file defines a `Layer` structure and several associated functions for manipulating and interacting with this structure in the context of an Interpretable Compositional Network (ICN).

The `Layer` structure is used to store a `LittleDict` of operations that can be selected during the learning phase of an ICN. Each layer can be exclusive, meaning only one operation can be selected at a time. This is particularly useful in the context of ICNs, which are used to learn alternative expressions for highly combinatorial functions, such as those found in Constraint-based Local Search solvers.

```@docs; canonical=false
Layer
functions
Base.length(layer::Layer)
exclu
symbol
nbits_exclu
show_layer
selected_size
is_viable
generate_inclusive_operations
generate_exclusive_operation
generate_weights
```
