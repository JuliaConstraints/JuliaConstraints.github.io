
# Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}



### Elementary Constraints {#Elementary-Constraints}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_instantiation-constraints-elementary_constraints' href='#Constraints.xcsp_instantiation-constraints-elementary_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_instantiation</u></b> &mdash; <i>Function</i>.




```julia
xcsp_instantiation(; list, values)
```


Return `true` if the instantiation constraint is satisfied, `false` otherwise. The instantiation constraint is a global constraint used in constraint programming that ensures that a list of variables takes on a specific set of values in a specific order.

**Arguments**
- `list::AbstractVector`: list of values to check.
  
- `values::AbstractVector`: list of values to check against.
  

**Variants**
- `:instantiation`: The instantiation constraint is a global constraint used in constraint programming that ensures that a list of variables takes on a specific set of values in a specific order.
  

```julia
concept(:instantiation, x; pair_vars)
concept(:instantiation)(x; pair_vars)
```


**Examples**

```julia
c = concept(:instantiation)

c([1, 2, 3, 4, 5]; pair_vars=[1, 2, 3, 4, 5])
c([1, 2, 3, 4, 5]; pair_vars=[1, 2, 3, 4, 6])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/instantiation.jl#L5-L28)

</div>
<br>
