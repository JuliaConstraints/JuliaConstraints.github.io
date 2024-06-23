
# CBLS.jl

Documentation for `CBLS.jl`.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.AllDifferent' href='#CBLS.AllDifferent'>#</a>&nbsp;<b><u>CBLS.AllDifferent</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that all the values of a given configuration are unique.

```julia
@constraint(model, X in AllDifferent())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/all_different.jl#L31-L37)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.AllEqual' href='#CBLS.AllEqual'>#</a>&nbsp;<b><u>CBLS.AllEqual</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that all the values of `X` are all equal.

```julia
@constraint(model, X in AllEqual())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/all_equal.jl#L41-L47)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.AtLeast' href='#CBLS.AtLeast'>#</a>&nbsp;<b><u>CBLS.AtLeast</u></b> &mdash; <i>Type</i>.




Constraint ensuring that the number of occurrences of the values in `vals` in `x` is at least `val`.

```julia
@constraint(model, X in AtLeast(val, vals))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/count.jl#L77-L83)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.AtMost' href='#CBLS.AtMost'>#</a>&nbsp;<b><u>CBLS.AtMost</u></b> &mdash; <i>Type</i>.




Constraint ensuring that the number of occurrences of the values in `vals` in `x` is at most `val`.

```julia
@constraint(model, X in AtMost(val, vals))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/count.jl#L102-L108)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Conflicts' href='#CBLS.Conflicts'>#</a>&nbsp;<b><u>CBLS.Conflicts</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the tuple `x` does not match any configuration listed within the conflict set `pair_vars`. This constraint, originating from the extension model, stipulates that `x` must avoid all configurations defined as conflicts: `x ∉ pair_vars`. It is useful for specifying tuples that are explicitly forbidden and should be excluded from the solution space.

```julia
@constraint(model, X in Conflicts(; pair_vars))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/extension.jl#L159-L165)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Count' href='#CBLS.Count'>#</a>&nbsp;<b><u>CBLS.Count</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the number of occurrences of `val` in `X` is equal to `count`.

```julia
@constraint(model, X in Count(count, val, vals))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/count.jl#L50-L56)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Cumulative' href='#CBLS.Cumulative'>#</a>&nbsp;<b><u>CBLS.Cumulative</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the cumulative sum of the heights of the tasks is less than or equal to `val`.

```julia
@constraint(model, X in Cumulative(; pair_vars, op, val))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/cumulative.jl#L45-L51)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.DiscreteSet' href='#CBLS.DiscreteSet'>#</a>&nbsp;<b><u>CBLS.DiscreteSet</u></b> &mdash; <i>Type</i>.




```julia
DiscreteSet(values)
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L98-L100)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.DistDifferent' href='#CBLS.DistDifferent'>#</a>&nbsp;<b><u>CBLS.DistDifferent</u></b> &mdash; <i>Type</i>.




A constraint ensuring that the distances between marks on the ruler are unique. Specifically, it checks that the distance between `x[1]` and `x[2]`, and the distance between `x[3]` and `x[4]`, are different. This constraint is fundamental in ensuring the validity of a Golomb ruler, where no two pairs of marks should have the same distance between them.


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/intention.jl#L35-L37)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Element' href='#CBLS.Element'>#</a>&nbsp;<b><u>CBLS.Element</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the value of `X` at index `id` is equal to `val`.

```julia
@constraint(model, X in Element(; id = nothing, op = ==, val = 0))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/element.jl#L40-L46)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Error' href='#CBLS.Error'>#</a>&nbsp;<b><u>CBLS.Error</u></b> &mdash; <i>Type</i>.




```julia
Error{F <: Function} <: JuMP.AbstractVectorSet
```


The solver will compute a straightforward error function based on the `concept`. To run the solver efficiently, it is possible to provide an _error function_ `err` instead of `concept`. `err` must return a nonnegative real number.

```julia
@constraint(model, X in Error(err))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints.jl#L59-L67)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Exactly' href='#CBLS.Exactly'>#</a>&nbsp;<b><u>CBLS.Exactly</u></b> &mdash; <i>Type</i>.




Constraint ensuring that the number of occurrences of the values in `vals` in `x` is exactly `val`.

```julia
@constraint(model, X in Exactly(val, vals))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/count.jl#L127-L133)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Extension' href='#CBLS.Extension'>#</a>&nbsp;<b><u>CBLS.Extension</u></b> &mdash; <i>Type</i>.




Global constraint enforcing that the tuple `x` matches a configuration within the supports set `pair_vars[1]` or does not match any configuration within the conflicts set `pair_vars[2]`. It embodies the logic: `x ∈ pair_vars[1] || x ∉ pair_vars[2]`, providing a comprehensive way to define valid (supported) and invalid (conflicted) tuples for constraint satisfaction problems. This constraint is versatile, allowing for the explicit delineation of both acceptable and unacceptable configurations.


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/extension.jl#L41-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Instantiation' href='#CBLS.Instantiation'>#</a>&nbsp;<b><u>CBLS.Instantiation</u></b> &mdash; <i>Type</i>.




The instantiation constraint is a global constraint used in constraint programming that ensures that a list of variables takes on a specific set of values in a specific order.


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/instantiation.jl#L37-L39)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MDDConstraint' href='#CBLS.MDDConstraint'>#</a>&nbsp;<b><u>CBLS.MDDConstraint</u></b> &mdash; <i>Type</i>.




Multi-valued Decision Diagram (MDD) constraint.

The MDD constraint is a constraint that can be used to model a wide range of problems. It is a directed graph where each node is labeled with a value and each edge is labeled with a value. The constraint is satisfied if there is a path from the first node to the last node such that the sequence of edge labels is a valid sequence of the value labels.

```julia
@constraint(model, X in MDDConstraint(; language))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/mdd.jl#L38-L46)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIAllDifferent' href='#CBLS.MOIAllDifferent'>#</a>&nbsp;<b><u>CBLS.MOIAllDifferent</u></b> &mdash; <i>Type</i>.




```julia
MOIAllDifferent <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/all_different.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIAllEqual' href='#CBLS.MOIAllEqual'>#</a>&nbsp;<b><u>CBLS.MOIAllEqual</u></b> &mdash; <i>Type</i>.




```julia
MOIAllEqual <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/all_equal.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIConflicts' href='#CBLS.MOIConflicts'>#</a>&nbsp;<b><u>CBLS.MOIConflicts</u></b> &mdash; <i>Type</i>.




```julia
MOIConflicts{T <: Number, V <: Vector{Vector{T}}} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/extension.jl#L121-L125)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOICumulative' href='#CBLS.MOICumulative'>#</a>&nbsp;<b><u>CBLS.MOICumulative</u></b> &mdash; <i>Type</i>.




```julia
MOICumulative{F <: Function, T1 <: Number, T2 <: Number} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/cumulative.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIDistDifferent' href='#CBLS.MOIDistDifferent'>#</a>&nbsp;<b><u>CBLS.MOIDistDifferent</u></b> &mdash; <i>Type</i>.




```julia
MOIDistDifferent <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/intention.jl#L3-L7)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIElement' href='#CBLS.MOIElement'>#</a>&nbsp;<b><u>CBLS.MOIElement</u></b> &mdash; <i>Type</i>.




```julia
MOIElement{I <: Integer, F <: Function, T <: Union{Nothing, Number}} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/element.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIError' href='#CBLS.MOIError'>#</a>&nbsp;<b><u>CBLS.MOIError</u></b> &mdash; <i>Type</i>.




```julia
MOIError{F <: Function} <: MOI.AbstractVectorSet
```


DOCSTRING

**Arguments:**
- `f::F`: DESCRIPTION
  
- `dimension::Int`: DESCRIPTION
  
- `MOIError(f, dim = 0) = begin       #= none:5 =#       new{typeof(f)}(f, dim)   end`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints.jl#L1-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIExtension' href='#CBLS.MOIExtension'>#</a>&nbsp;<b><u>CBLS.MOIExtension</u></b> &mdash; <i>Type</i>.




```julia
MOIExtension{T <: Number, V <: Union{Vector{Vector{T}}, Tuple{Vector{T}, Vector{T}}}} <: MOI.AbstractVectorSet

DOCSTRING
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/extension.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIInstantiation' href='#CBLS.MOIInstantiation'>#</a>&nbsp;<b><u>CBLS.MOIInstantiation</u></b> &mdash; <i>Type</i>.




```julia
MOIInstantiation{T <: Number, V <: Vector{T}} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/instantiation.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIMaximum' href='#CBLS.MOIMaximum'>#</a>&nbsp;<b><u>CBLS.MOIMaximum</u></b> &mdash; <i>Type</i>.




```julia
MOIMaximum {F <: Function, T <: Number} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/maximum.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIMinimum' href='#CBLS.MOIMinimum'>#</a>&nbsp;<b><u>CBLS.MOIMinimum</u></b> &mdash; <i>Type</i>.




```julia
MOIMinimum {F <: Function, T <: Number} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/minimum.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIMultivaluedDecisionDiagram' href='#CBLS.MOIMultivaluedDecisionDiagram'>#</a>&nbsp;<b><u>CBLS.MOIMultivaluedDecisionDiagram</u></b> &mdash; <i>Type</i>.




```julia
MOIMultivaluedDecisionDiagram{L <: ConstraintCommons.AbstractMultivaluedDecisionDiagram} <: AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/mdd.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOINValues' href='#CBLS.MOINValues'>#</a>&nbsp;<b><u>CBLS.MOINValues</u></b> &mdash; <i>Type</i>.




```julia
MOINValues{F <: Function, T1 <: Number, T2 <: Number, V <: Vector{T2}} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/n_values.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOINoOverlap' href='#CBLS.MOINoOverlap'>#</a>&nbsp;<b><u>CBLS.MOINoOverlap</u></b> &mdash; <i>Type</i>.




```julia
MOINoOverlap{I <: Integer, T <: Number, V <: Vector{T}} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/no_overlap.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIOrdered' href='#CBLS.MOIOrdered'>#</a>&nbsp;<b><u>CBLS.MOIOrdered</u></b> &mdash; <i>Type</i>.




```julia
MOIOrdered{F <: Function, T <: Number, V <: Vector{T}} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/ordered.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIPredicate' href='#CBLS.MOIPredicate'>#</a>&nbsp;<b><u>CBLS.MOIPredicate</u></b> &mdash; <i>Type</i>.




```julia
MOIPredicate{F <: Function} <: MOI.AbstractVectorSet
```


DOCSTRING

**Arguments:**
- `f::F`: DESCRIPTION
  
- `dimension::Int`: DESCRIPTION
  
- `MOIPredicate(f, dim = 0) = begin       #= none:5 =#       new{typeof(f)}(f, dim)   end`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints.jl#L75-L87)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIRegular' href='#CBLS.MOIRegular'>#</a>&nbsp;<b><u>CBLS.MOIRegular</u></b> &mdash; <i>Type</i>.




```julia
MOIRegular{L <: ConstraintCommons.AbstractAutomaton} <: AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/regular.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOISum' href='#CBLS.MOISum'>#</a>&nbsp;<b><u>CBLS.MOISum</u></b> &mdash; <i>Type</i>.




```julia
MOISum{F <: Function, T1 <: Number, T2 <: Number, V <: Number} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/sum.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOISupports' href='#CBLS.MOISupports'>#</a>&nbsp;<b><u>CBLS.MOISupports</u></b> &mdash; <i>Type</i>.




```julia
MOISupports{T <: Number, V <: Vector{Vector{T}}} <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/extension.jl#L64-L68)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Maximum' href='#CBLS.Maximum'>#</a>&nbsp;<b><u>CBLS.Maximum</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the maximum value in the tuple `x` satisfies the condition `op(x) val`. This constraint is useful for specifying that the maximum value in the tuple must satisfy a certain condition.

```julia
@constraint(model, X in Maximum(; op = ==, val))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/maximum.jl#L37-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Minimum' href='#CBLS.Minimum'>#</a>&nbsp;<b><u>CBLS.Minimum</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the minimum value in the tuple `x` satisfies the condition `op(x) val`. This constraint is useful for specifying that the minimum value in the tuple must satisfy a certain condition.

```julia
@constraint(model, X in Minimum(; op = ==, val))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/minimum.jl#L37-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.NValues' href='#CBLS.NValues'>#</a>&nbsp;<b><u>CBLS.NValues</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the number of distinct values in `X` satisfies the given condition.


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/n_values.jl#L43-L45)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.NoOverlap' href='#CBLS.NoOverlap'>#</a>&nbsp;<b><u>CBLS.NoOverlap</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the tuple `x` does not overlap with any configuration listed within the pair set `pair_vars`. This constraint, originating from the extension model, stipulates that `x` must avoid all configurations defined as pairs: `x ∩ pair_vars = ∅`. It is useful for specifying tuples that are explicitly forbidden and should be excluded from the solution space.

```julia
@constraint(model, X in NoOverlap(; bool = true, dim = 1, pair_vars = nothing))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/no_overlap.jl#L48-L54)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Optimizer' href='#CBLS.Optimizer'>#</a>&nbsp;<b><u>CBLS.Optimizer</u></b> &mdash; <i>Type</i>.




```julia
Optimizer(model = Model(); options = Options())
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L35-L39)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Optimizer-2' href='#CBLS.Optimizer-2'>#</a>&nbsp;<b><u>CBLS.Optimizer</u></b> &mdash; <i>Type</i>.




```julia
Optimizer <: MOI.AbstractOptimizer
```


DOCSTRING

**Arguments:**
- `solver::Solver`: DESCRIPTION
  
- `status::MOI.TerminationStatusCode`: DESCRIPTION
  
- `options::Options`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L19-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Ordered' href='#CBLS.Ordered'>#</a>&nbsp;<b><u>CBLS.Ordered</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the variables are ordered according to `op`.


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/ordered.jl#L45-L47)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Predicate' href='#CBLS.Predicate'>#</a>&nbsp;<b><u>CBLS.Predicate</u></b> &mdash; <i>Type</i>.




```julia
Predicate{F <: Function} <: JuMP.AbstractVectorSet
```


Assuming `X` is a (collection of) variables, `concept` a boolean function over `X`, and that a `model` is defined. In `JuMP` syntax we can create a constraint based on `concept` as follows.

```julia
@constraint(model, X in Predicate(concept))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints.jl#L107-L115)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Regular' href='#CBLS.Regular'>#</a>&nbsp;<b><u>CBLS.Regular</u></b> &mdash; <i>Type</i>.




Ensures that a sequence `x` (interpreted as a word) is accepted by the regular language represented by a given automaton. This constraint verifies the compliance of `x` with the language rules encoded within the `automaton` parameter, which must be an instance of `<:AbstractAutomaton`.

```julia
@constraint(model, X in RegularConstraint(; language))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/regular.jl#L35-L41)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.ScalarFunction' href='#CBLS.ScalarFunction'>#</a>&nbsp;<b><u>CBLS.ScalarFunction</u></b> &mdash; <i>Type</i>.




```julia
ScalarFunction{F <: Function, V <: Union{Nothing, VOV}} <: MOI.AbstractScalarFunction
```


A container to express any function with real value in JuMP syntax. Used with the `@objective` macro.

**Arguments:**
- `f::F`: function to be applied to `X`
  
- `X::V`: a subset of the variables of the model.
  

Given a `model`, and some (collection of) variables `X` to optimize. an objective function `f` can be added as follows. Note that only `Min` for minimization us currently defined. `Max` will come soon.

```julia
# Applies to all variables in order of insertion.
# Recommended only when the function argument order does not matter.
@objective(model, ScalarFunction(f))

# Generic use
@objective(model, ScalarFunction(f, X))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/objectives.jl#L9-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Sum' href='#CBLS.Sum'>#</a>&nbsp;<b><u>CBLS.Sum</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the sum of the variables in `x` satisfies a given condition.


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/sum.jl#L46-L48)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Supports' href='#CBLS.Supports'>#</a>&nbsp;<b><u>CBLS.Supports</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the tuple `x` matches a configuration listed within the support set `pair_vars`. This constraint is derived from the extension model, specifying that `x` must be one of the explicitly defined supported configurations: `x ∈ pair_vars`. It is utilized to directly declare the tuples that are valid and should be included in the solution space.

```julia
@constraint(model, X in Supports(; pair_vars))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints/extension.jl#L101-L107)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.copy-Tuple{CBLS.MOIError}' href='#Base.copy-Tuple{CBLS.MOIError}'>#</a>&nbsp;<b><u>Base.copy</u></b> &mdash; <i>Method</i>.




```julia
Base.copy(set::MOIError) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints.jl#L52-L56)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.copy-Tuple{DiscreteSet}' href='#Base.copy-Tuple{DiscreteSet}'>#</a>&nbsp;<b><u>Base.copy</u></b> &mdash; <i>Method</i>.




```julia
Base.copy(set::DiscreteSet) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L107-L111)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='JuMP.build_variable-Union{Tuple{T}, Tuple{Function, JuMP.VariableInfo, T}} where T<:MathOptInterface.AbstractScalarSet' href='#JuMP.build_variable-Union{Tuple{T}, Tuple{Function, JuMP.VariableInfo, T}} where T<:MathOptInterface.AbstractScalarSet'>#</a>&nbsp;<b><u>JuMP.build_variable</u></b> &mdash; <i>Method</i>.




```julia
JuMP.build_variable(::Function, info::JuMP.VariableInfo, set::T) where T <: MOI.AbstractScalarSet
```


DOCSTRING

**Arguments:**
- ``: DESCRIPTION
  
- `info`: DESCRIPTION
  
- `set`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L1-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.add_constraint-Union{Tuple{F}, Tuple{CBLS.Optimizer, MathOptInterface.VectorOfVariables, CBLS.MOIError{F}}} where F<:Function' href='#MathOptInterface.add_constraint-Union{Tuple{F}, Tuple{CBLS.Optimizer, MathOptInterface.VectorOfVariables, CBLS.MOIError{F}}} where F<:Function'>#</a>&nbsp;<b><u>MathOptInterface.add_constraint</u></b> &mdash; <i>Method</i>.




```julia
MOI.add_constraint(optimizer::Optimizer, vars::MOI.VectorOfVariables, set::MOIError)
```


DOCSTRING

**Arguments:**
- `optimizer`: DESCRIPTION
  
- `vars`: DESCRIPTION
  
- `set`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints.jl#L36-L45)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.add_constraint-Union{Tuple{T}, Tuple{CBLS.Optimizer, MathOptInterface.VariableIndex, DiscreteSet{T}}} where T<:Number' href='#MathOptInterface.add_constraint-Union{Tuple{T}, Tuple{CBLS.Optimizer, MathOptInterface.VariableIndex, DiscreteSet{T}}} where T<:Number'>#</a>&nbsp;<b><u>MathOptInterface.add_constraint</u></b> &mdash; <i>Method</i>.




```julia
MOI.add_constraint(optimizer::Optimizer, v::VI, set::DiscreteSet{T}) where T <: Number
```


DOCSTRING

**Arguments:**
- `optimizer`: DESCRIPTION
  
- `v`: DESCRIPTION
  
- `set`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/variables.jl#L37-L46)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.add_variable-Tuple{CBLS.Optimizer}' href='#MathOptInterface.add_variable-Tuple{CBLS.Optimizer}'>#</a>&nbsp;<b><u>MathOptInterface.add_variable</u></b> &mdash; <i>Method</i>.




```julia
MOI.add_variable(model::Optimizer) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/variables.jl#L2-L6)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.empty!-Tuple{Any}' href='#MathOptInterface.empty!-Tuple{Any}'>#</a>&nbsp;<b><u>MathOptInterface.empty!</u></b> &mdash; <i>Method</i>.




```julia
MOI.empty!(opt) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L114-L118)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.get-Tuple{CBLS.Optimizer, MathOptInterface.SolverName}' href='#MathOptInterface.get-Tuple{CBLS.Optimizer, MathOptInterface.SolverName}'>#</a>&nbsp;<b><u>MathOptInterface.get</u></b> &mdash; <i>Method</i>.




```julia
MOI.get(::Optimizer, ::MOI.SolverName) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L59-L63)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.is_empty-Tuple{CBLS.Optimizer}' href='#MathOptInterface.is_empty-Tuple{CBLS.Optimizer}'>#</a>&nbsp;<b><u>MathOptInterface.is_empty</u></b> &mdash; <i>Method</i>.




```julia
MOI.is_empty(model::Optimizer) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L78-L82)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.optimize!-Tuple{CBLS.Optimizer}' href='#MathOptInterface.optimize!-Tuple{CBLS.Optimizer}'>#</a>&nbsp;<b><u>MathOptInterface.optimize!</u></b> &mdash; <i>Method</i>.




```julia
MOI.optimize!(model::Optimizer)
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L93-L95)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.set' href='#MathOptInterface.set'>#</a>&nbsp;<b><u>MathOptInterface.set</u></b> &mdash; <i>Function</i>.




```julia
MOI.set(::Optimizer, ::MOI.Silent, bool = true) = begin
```


DOCSTRING

**Arguments:**
- ``: DESCRIPTION
  
- ``: DESCRIPTION
  
- `bool`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L66-L75)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.set-Tuple{CBLS.Optimizer, MathOptInterface.RawOptimizerAttribute, Any}' href='#MathOptInterface.set-Tuple{CBLS.Optimizer, MathOptInterface.RawOptimizerAttribute, Any}'>#</a>&nbsp;<b><u>MathOptInterface.set</u></b> &mdash; <i>Method</i>.




```julia
MOI.set(model::Optimizer, p::MOI.RawOptimizerAttribute, value)
```


Set a RawOptimizerAttribute to `value`


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/attributes.jl#L19-L22)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.set-Tuple{CBLS.Optimizer, MathOptInterface.TimeLimitSec, Union{Nothing, Float64}}' href='#MathOptInterface.set-Tuple{CBLS.Optimizer, MathOptInterface.TimeLimitSec, Union{Nothing, Float64}}'>#</a>&nbsp;<b><u>MathOptInterface.set</u></b> &mdash; <i>Method</i>.




```julia
MOI.set(model::Optimizer, ::MOI.TimeLimitSec, value::Union{Nothing,Float64})
```


Set the time limit


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/attributes.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.supports_constraint-Union{Tuple{F}, Tuple{CBLS.Optimizer, Type{MathOptInterface.VectorOfVariables}, Type{CBLS.MOIError{F}}}} where F<:Function' href='#MathOptInterface.supports_constraint-Union{Tuple{F}, Tuple{CBLS.Optimizer, Type{MathOptInterface.VectorOfVariables}, Type{CBLS.MOIError{F}}}} where F<:Function'>#</a>&nbsp;<b><u>MathOptInterface.supports_constraint</u></b> &mdash; <i>Method</i>.




```julia
MOI.supports_constraint(::Optimizer, ::Type{VOV}, ::Type{MOIError}) = begin
```


DOCSTRING

**Arguments:**
- ``: DESCRIPTION
  
- ``: DESCRIPTION
  
- ``: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/constraints.jl#L21-L30)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.supports_incremental_interface-Tuple{CBLS.Optimizer}' href='#MathOptInterface.supports_incremental_interface-Tuple{CBLS.Optimizer}'>#</a>&nbsp;<b><u>MathOptInterface.supports_incremental_interface</u></b> &mdash; <i>Method</i>.




Copy constructor for the optimizer


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.2.0/src/MOI_wrapper.jl#L85-L87)

</div>
<br>
