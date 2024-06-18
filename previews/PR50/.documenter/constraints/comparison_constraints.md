
# Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}



### Comparison-based Constraints {#Comparison-based-Constraints}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_all_different-constraints-comparison_constraints' href='#Constraints.xcsp_all_different-constraints-comparison_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_all_different</u></b> &mdash; <i>Function</i>.




```julia
xcsp_all_different(list::Vector{Int})
```


Return `true` if all the values of `list` are different, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  

**Variants**
- `:all_different`:     Global constraint ensuring that all the values of `x` are all different.
  

```julia
concept(:all_different, x; vals)
concept(:all_different)(x; vals)
```


**Examples**

```julia
c = concept(:all_different)

c([1, 2, 3, 4])
c([1, 2, 3, 1])
c([1, 0, 0, 4]; vals=[0])
c([1, 0, 0, 1]; vals=[0])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/all_different.jl#L7-L31)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_all_equal-constraints-comparison_constraints' href='#Constraints.xcsp_all_equal-constraints-comparison_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_all_equal</u></b> &mdash; <i>Function</i>.




```julia
xcsp_all_equal(list::Vector{Int}, val::Int)
```


Return `true` if all the values of `list` are equal to `val`, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `val::Int`: value to compare to.
  

**Variants**
- `:all_equal`:     Global constraint ensuring that all the values of `x` are all equal.
  

```julia
concept(:all_equal, x; val=nothing, pair_vars=zeros(x), op=+)
concept(:all_equal)(x; val=nothing, pair_vars=zeros(x), op=+)
```


**Examples**

```julia
c = concept(:all_equal)

c([0, 0, 0, 0])
c([1, 2, 3, 4])
c([3, 2, 1, 0]; pair_vars=[0, 1, 2, 3])
c([0, 1, 2, 3]; pair_vars=[0, 1, 2, 3])
c([1, 2, 3, 4]; op=/, val=1, pair_vars=[1, 2, 3, 4])
c([1, 2, 3, 4]; op=*, val=1, pair_vars=[1, 2, 3, 4])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/all_equal.jl#L9-L36)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_ordered-constraints-comparison_constraints' href='#Constraints.xcsp_ordered-constraints-comparison_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_ordered</u></b> &mdash; <i>Function</i>.




```julia
xcsp_ordered(list::Vector{Int}, operator, lengths)
```


Return `true` if all the values of `list` are in an increasing order, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `operator`: comparison operator to use.
  
- `lengths`: list of lengths to use. Defaults to `nothing`.
  

**Variants**
- `:ordered`:     Global constraint ensuring that all the values of `x` are in an increasing order.
  

```julia
concept(:ordered, x; op=≤, pair_vars=nothing)
concept(:ordered)(x; op=≤, pair_vars=nothing)
```

- `:increasing`:     Global constraint ensuring that all the values of `x` are in an increasing order.
  

```julia
concept(:increasing, x; op=≤, pair_vars=nothing)
concept(:increasing)(x; op=≤, pair_vars=nothing)
```

- `:decreasing`:     Global constraint ensuring that all the values of `x` are in a decreasing order.
  

```julia
concept(:decreasing, x; op=≥, pair_vars=nothing)
concept(:decreasing)(x; op=≥, pair_vars=nothing)
```

- `:strictly_increasing`:     Global constraint ensuring that all the values of `x` are in a strictly increasing order.
  

```julia
concept(:strictly_increasing, x; op=<, pair_vars=nothing)
concept(:strictly_increasing)(x; op=<, pair_vars=nothing)
```

- `:strictly_decreasing`:     Global constraint ensuring that all the values of `x` are in a strictly decreasing order.
  

```julia
concept(:strictly_decreasing, x; op=>, pair_vars=nothing)
concept(:strictly_decreasing)(x; op=>, pair_vars=nothing)
```


**Examples**

```julia
c = concept(:ordered)

c([1, 2, 3, 4, 4]; op=≤)
c([1, 2, 3, 4, 5]; op=<)
!c([1, 2, 3, 4, 3]; op=≤)
!c([1, 2, 3, 4, 3]; op=<)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/ordered.jl#L21-L67)

</div>
<br>
