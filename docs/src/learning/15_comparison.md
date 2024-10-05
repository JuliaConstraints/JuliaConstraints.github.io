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
co_euclidean
co_abs_diff_var_vars
co_var_minus_vars
co_vars_minus_var
```

### Param: `:val`

```@docs; canonical=false
co_abs_diff_var_val
co_var_minus_val
co_val_minus_var
co_euclidean_val
```


### Layer generation

```@docs; canonical=false
make_comparisons
comparison_layer
```
