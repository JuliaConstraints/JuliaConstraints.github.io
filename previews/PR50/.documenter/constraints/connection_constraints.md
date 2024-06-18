
# Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}



### Connection Constraints {#Connection-Constraints}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_maximum-constraints-connection_constraints' href='#Constraints.xcsp_maximum-constraints-connection_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_maximum</u></b> &mdash; <i>Function</i>.




```julia
xcsp_maximum(; list, condition)
```


Return `true` if the maximum constraint is satisfied, `false` otherwise. The maximum constraint is a global constraint used in constraint programming that specifies that a certain condition should hold for the maximum value in a list of variables.

**Arguments**
- `list::Union{AbstractVector, Tuple}`: list of values to check.
  
- `condition::Tuple`: condition to check.
  

**Variants**
- `:maximum`: The maximum constraint is a global constraint used in constraint programming that specifies that a certain condition should hold for the maximum value in a list of variables.
  

```julia
concept(:maximum, x; op, val)
concept(:maximum)(x; op, val)
```


**Examples**

```julia
c = concept(:maximum)

c([1, 2, 3, 4, 5]; op = ==, val = 5)
c([1, 2, 3, 4, 5]; op = ==, val = 6)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/maximum.jl#L5-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_minimum-constraints-connection_constraints' href='#Constraints.xcsp_minimum-constraints-connection_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_minimum</u></b> &mdash; <i>Function</i>.




```julia
xcsp_minimum(; list, condition)
```


Return `true` if the minimum constraint is satisfied, `false` otherwise. The minimum constraint is a global constraint used in constraint programming that specifies that a certain condition should hold for the minimum value in a list of variables.

**Arguments**
- `list::Union{AbstractVector, Tuple}`: list of values to check.
  
- `condition::Tuple`: condition to check.
  

**Variants**
- `:minimum`: The minimum constraint is a global constraint used in constraint programming that specifies that a certain condition should hold for the minimum value in a list of variables.
  

```julia
concept(:minimum, x; op, val)
concept(:minimum)(x; op, val)
```


**Examples**

```julia
c = concept(:minimum)

c([1, 2, 3, 4, 5]; op = ==, val = 1)
c([1, 2, 3, 4, 5]; op = ==, val = 0)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/minimum.jl#L5-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_element-constraints-connection_constraints' href='#Constraints.xcsp_element-constraints-connection_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_element</u></b> &mdash; <i>Function</i>.




```julia
xcsp_element(; list, index, condition)
```


Return `true` if the element constraint is satisfied, `false` otherwise. The element constraint is a global constraint used in constraint programming that specifies that the value of a variable should be equal to the value of another variable indexed by a third variable.

**Arguments**
- `list::Union{AbstractVector, Tuple}`: list of values to check.
  
- `index::Int`: index of the value to check.
  
- `condition::Tuple`: condition to check.
  

**Variants**
- `:element`: The element constraint is a global constraint used in constraint programming that specifies that the value of a variable should be equal to the value of another variable indexed by a third variable.
  

```julia
concept(:element, x; id=nothing, op===, val=nothing)
concept(:element)(x; id=nothing, op===, val=nothing)
```


**Examples**

```julia
c = concept(:element)

c([1, 2, 3, 4, 5]; id=1, val=1)
c([1, 2, 3, 4, 5]; id=1, val=2)
c([1, 2, 3, 4, 2])
c([1, 2, 3, 4, 1])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/element.jl#L5-L31)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_channel-constraints-connection_constraints' href='#Constraints.xcsp_channel-constraints-connection_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_channel</u></b> &mdash; <i>Function</i>.




```julia
xcsp_channel(; list)
```


Return `true` if the channel constraint is satisfied, `false` otherwise. The channel constraint establishes a bijective correspondence between two sets of variables. This means that each value in the first set of variables corresponds to a unique value in the second set, and vice versa.

**Arguments**
- `list::Union{AbstractVector, Tuple}`: list of values to check.
  

**Variants**
- `:channel`: The channel constraint establishes a bijective correspondence between two sets of variables. This means that each value in the first set of variables corresponds to a unique value in the second set, and vice versa.
  

```julia
concept(:channel, x; dim=1, id=nothing)
concept(:channel)(x; dim=1, id=nothing)
```


**Examples**

```julia
c = concept(:channel)

c([2, 1, 4, 3])
c([1, 2, 3, 4])
c([2, 3, 1, 4])
c([2, 1, 5, 3, 4, 2, 1, 4, 5, 3]; dim=2)
c([2, 1, 4, 3, 5, 2, 1, 4, 5, 3]; dim=2)
c([false, false, true, false]; id=3)
c([false, false, true, false]; id=1)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/channel.jl#L5-L32)

</div>
<br>
