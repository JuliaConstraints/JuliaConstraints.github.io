# Comparison Layer

```@meta
CurrentModule = CompositionalNetworks
```

Some text to describe the comparison layer within usual ICNs.

## List of comparisons

List the possible parameters and how it affects the comparison.

### Non-parametric

```@docs; canonical=false
co_identity
co_euclidian
co_abs_diff_val_vars
co_val_minus_vars
co_vars_minus_val
```

### Param: `:val`

```@docs; canonical=false
co_abs_diff_val_param
co_val_minus_param
co_param_minus_val
co_euclidian_param
```


### Layer generation

```@docs; canonical=false
make_comparisons
comparison_layer
```
