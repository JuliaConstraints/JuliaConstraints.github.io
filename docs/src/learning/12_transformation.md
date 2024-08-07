# Transformations Layer

```@meta
CurrentModule = CompositionalNetworks
```

Some text to describe the transformation layer within usual ICNs.

The implementation of the transformation relies heavily on the use of the lazy function (make a ref, open an issue to make `@lazy` macro in front of each transformation).

## List of transformations

List the possible parameters and how it affects the transformations.

### Non-parametric

```@docs; canonical=false
tr_identity
tr_count_eq
tr_count_eq_right
tr_count_eq_left
tr_count_greater
tr_count_lesser
tr_count_g_left
tr_count_g_right
tr_count_l_right
tr_contiguous_vals_minus
tr_contiguous_vals_minus_rev
```

### Param: `:val`

```@docs; canonical=false
tr_count_eq_param
tr_count_l_param
tr_count_g_param
tr_count_bounding_param
tr_val_minus_param
tr_param_minus_val
```


### Layer generation

```@docs; canonical=false
make_transformations
transformation_layer
```
