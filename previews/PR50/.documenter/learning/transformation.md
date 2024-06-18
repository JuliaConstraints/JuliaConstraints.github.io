
# Transformations Layer {#Transformations-Layer}



Some text to describe the transformation layer within usual ICNs.

The implementation of the transformation relies heavily on the use of the lazy function (make a ref, open an issue to make `@lazy` macro in front of each transformation).

## List of transformations {#List-of-transformations}

List the possible parameters and how it affects the transformations.

### Non-parametric
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_identity-learning-transformation' href='#CompositionalNetworks.tr_identity-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_identity</u></b> &mdash; <i>Function</i>.




```julia
tr_identity(i, x)
tr_identity(x)
tr_identity(x, X::AbstractVector)
```


Identity function. Already defined in Julia as `identity`, specialized for vectors. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L3-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_eq-learning-transformation' href='#CompositionalNetworks.tr_count_eq-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_eq</u></b> &mdash; <i>Function</i>.




```julia
tr_count_eq(i, x)
tr_count_eq(x)
tr_count_eq(x, X::AbstractVector)
```


Count the number of elements equal to `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L16-L23)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_eq_right-learning-transformation' href='#CompositionalNetworks.tr_count_eq_right-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_eq_right</u></b> &mdash; <i>Function</i>.




```julia
tr_count_eq_right(i, x)
tr_count_eq_right(x)
tr_count_eq_right(x, X::AbstractVector)
```


Count the number of elements to the right of and equal to `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L26-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_eq_left-learning-transformation' href='#CompositionalNetworks.tr_count_eq_left-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_eq_left</u></b> &mdash; <i>Function</i>.




```julia
tr_count_eq_left(i, x)
tr_count_eq_left(x)
tr_count_eq_left(x, X::AbstractVector)
```


Count the number of elements to the left of and equal to `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L36-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_greater-learning-transformation' href='#CompositionalNetworks.tr_count_greater-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_greater</u></b> &mdash; <i>Function</i>.




```julia
tr_count_greater(i, x)
tr_count_greater(x)
tr_count_greater(x, X::AbstractVector)
```


Count the number of elements greater than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L51-L58)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_lesser-learning-transformation' href='#CompositionalNetworks.tr_count_lesser-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_lesser</u></b> &mdash; <i>Function</i>.




```julia
tr_count_lesser(i, x)
tr_count_lesser(x)
tr_count_lesser(x, X::AbstractVector)
```


Count the number of elements lesser than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L61-L68)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_g_left-learning-transformation' href='#CompositionalNetworks.tr_count_g_left-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_g_left</u></b> &mdash; <i>Function</i>.




```julia
tr_count_g_left(i, x)
tr_count_g_left(x)
tr_count_g_left(x, X::AbstractVector)
```


Count the number of elements to the left of and greater than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L71-L78)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_g_right-learning-transformation' href='#CompositionalNetworks.tr_count_g_right-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_g_right</u></b> &mdash; <i>Function</i>.




```julia
tr_count_g_right(i, x)
tr_count_g_right(x)
tr_count_g_right(x, X::AbstractVector)
```


Count the number of elements to the right of and greater than `x[i]`. Extended method to vector with sig `(x)` are generated.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L91-L97)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_l_right-learning-transformation' href='#CompositionalNetworks.tr_count_l_right-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_l_right</u></b> &mdash; <i>Function</i>.




```julia
tr_count_l_right(i, x)
tr_count_l_right(x)
tr_count_l_right(x, X::AbstractVector)
```


Count the number of elements to the right of and lesser than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L100-L107)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_contiguous_vals_minus-learning-transformation' href='#CompositionalNetworks.tr_contiguous_vals_minus-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_contiguous_vals_minus</u></b> &mdash; <i>Function</i>.




```julia
tr_contiguous_vals_minus(i, x)
tr_contiguous_vals_minus(x)
tr_contiguous_vals_minus(x, X::AbstractVector)
```


Return the difference `x[i] - x[i + 1]` if positive, `0.0` otherwise. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L190-L197)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_contiguous_vals_minus_rev-learning-transformation' href='#CompositionalNetworks.tr_contiguous_vals_minus_rev-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_contiguous_vals_minus_rev</u></b> &mdash; <i>Function</i>.




```julia
tr_contiguous_vals_minus_rev(i, x)
tr_contiguous_vals_minus_rev(x)
tr_contiguous_vals_minus_rev(x, X::AbstractVector)
```


Return the difference `x[i + 1] - x[i]` if positive, `0.0` otherwise. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L201-L208)

</div>
<br>

### Param: `:val` {#Param:-:val}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_eq_param-learning-transformation' href='#CompositionalNetworks.tr_count_eq_param-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_eq_param</u></b> &mdash; <i>Function</i>.




```julia
tr_count_eq_param(i, x; param)
tr_count_eq_param(x; param)
tr_count_eq_param(x, X::AbstractVector; param)
```


Count the number of elements equal to `x[i] + param`. Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L116-L123)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_l_param-learning-transformation' href='#CompositionalNetworks.tr_count_l_param-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_l_param</u></b> &mdash; <i>Function</i>.




```julia
tr_count_l_param(i, x; param)
tr_count_l_param(x; param)
tr_count_l_param(x, X::AbstractVector; param)
```


Count the number of elements lesser than `x[i] + param`. Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L126-L133)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_g_param-learning-transformation' href='#CompositionalNetworks.tr_count_g_param-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_g_param</u></b> &mdash; <i>Function</i>.




```julia
tr_count_g_param(i, x; param)
tr_count_g_param(x; param)
tr_count_g_param(x, X::AbstractVector; param)
```


Count the number of elements greater than `x[i] + param`. Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L136-L143)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_bounding_param-learning-transformation' href='#CompositionalNetworks.tr_count_bounding_param-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_bounding_param</u></b> &mdash; <i>Function</i>.




```julia
tr_count_bounding_param(i, x; param)
tr_count_bounding_param(x; param)
tr_count_bounding_param(x, X::AbstractVector; param)
```


Count the number of elements bounded (not strictly) by `x[i]` and `x[i] + param`. An extended method to vector with sig `(x, param)` is generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L151-L158)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_val_minus_param-learning-transformation' href='#CompositionalNetworks.tr_val_minus_param-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_val_minus_param</u></b> &mdash; <i>Function</i>.




```julia
tr_val_minus_param(i, x; param)
tr_val_minus_param(x; param)
tr_val_minus_param(x, X::AbstractVector; param)
```


Return the difference `x[i] - param` if positive, `0.0` otherwise.  Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L166-L173)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_param_minus_val-learning-transformation' href='#CompositionalNetworks.tr_param_minus_val-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_param_minus_val</u></b> &mdash; <i>Function</i>.




```julia
tr_param_minus_val(i, x; param)
tr_param_minus_val(x; param)
tr_param_minus_val(x, X::AbstractVector; param)
```


Return the difference `param - x[i]` if positive, `0.0` otherwise.  Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L176-L183)

</div>
<br>

### Layer generation {#Layer-generation}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.make_transformations-learning-transformation' href='#CompositionalNetworks.make_transformations-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.make_transformations</u></b> &mdash; <i>Function</i>.




```julia
make_transformations(param::Symbol)
```


Generates a dictionary of transformation functions based on the specified parameterization. This function facilitates the creation of parametric layers for constraint transformations, allowing for flexible and dynamic constraint manipulation according to the needs of different constraint programming models.

**Parameters**
- `param::Symbol`: Specifies the type of transformations to generate. It can be `:none` for basic transformations that do not depend on external parameters, or `:val` for transformations that operate with respect to a specific value parameter.
  

**Returns**
- `LittleDict{Symbol, Function}`: A dictionary mapping transformation names (`Symbol`) to their corresponding functions (`Function`). The functions encapsulate various types of transformations, such as counting, comparison, and contiguous value processing.
  

**Transformation Types**
- When `param` is `:none`, the following transformations are available:
  - `:identity`: No transformation is applied.
    
  - `:count_eq`, `:count_eq_left`, `:count_eq_right`: Count equalities under different conditions.
    
  - `:count_greater`, `:count_lesser`: Count values greater or lesser than a threshold.
    
  - `:count_g_left`, `:count_l_left`, `:count_g_right`, `:count_l_right`: Count values with greater or lesser comparisons from different directions.
    
  - `:contiguous_vals_minus`, `:contiguous_vals_minus_rev`: Process contiguous values with subtraction in normal and reverse order.
    
  
- When `param` is `:val`, the transformations relate to operations involving a parameter value:
  - `:count_eq_param`, `:count_l_param`, `:count_g_param`: Count equalities or comparisons against a parameter value.
    
  - `:count_bounding_param`: Count values bounding a parameter value.
    
  - `:val_minus_param`, `:param_minus_val`: Subtract a parameter value from values or vice versa.
    
  

The function delegates to a version that uses `Val(param)` for dispatch, ensuring compile-time selection of the appropriate transformation set.

**Examples**

```julia
# Get basic transformations
basic_transforms = make_transformations(:none)

# Apply an identity transformation
identity_result = basic_transforms[:identity](data)

# Get value-based transformations
val_transforms = make_transformations(:val)

# Apply a count equal to parameter transformation
count_eq_param_result = val_transforms[:count_eq_param](data, param)
```



[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L216-L262)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.transformation_layer-learning-transformation' href='#CompositionalNetworks.transformation_layer-learning-transformation'>#</a>&nbsp;<b><u>CompositionalNetworks.transformation_layer</u></b> &mdash; <i>Function</i>.




```julia
transformation_layer(param = false)
```


Generate the layer of transformations functions of the ICN. Iff `param` value is true, also includes all the parametric transformations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L298-L301)

</div>
<br>
