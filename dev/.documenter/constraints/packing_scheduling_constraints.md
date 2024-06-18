
# Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}



### Packing and Scheduling Constraints {#Packing-and-Scheduling-Constraints}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_cumulative-constraints-packing_scheduling_constraints' href='#Constraints.xcsp_cumulative-constraints-packing_scheduling_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_cumulative</u></b> &mdash; <i>Function</i>.




```julia
xcsp_cumulative(; origins, lengths, heights, condition)
```


Return `true` if the cumulative constraint is satisfied, `false` otherwise. The cumulative constraint is a global constraint used in constraint programming that is often used in scheduling problems. It ensures that for any point in time, the sum of the &quot;heights&quot; of tasks that are ongoing at that time does not exceed a certain limit.

**Arguments**
- `origins::AbstractVector`: list of origins of the tasks.
  
- `lengths::AbstractVector`: list of lengths of the tasks.
  
- `heights::AbstractVector`: list of heights of the tasks.
  
- `condition::Tuple`: condition to check.
  

**Variants**
- `:cumulative`: The cumulative constraint is a global constraint used in constraint programming that is often used in scheduling problems. It ensures that for any point in time, the sum of the &quot;heights&quot; of tasks that are ongoing at that time does not exceed a certain limit.
  

```julia
concept(:cumulative, x; pair_vars, op, val)
concept(:cumulative)(x; pair_vars, op, val)
```


**Examples**

```julia
c = concept(:cumulative)

c([1, 2, 3, 4, 5]; val = 1)
c([1, 2, 2, 4, 5]; val = 1)
c([1, 2, 3, 4, 5]; pair_vars = [3 2 5 4 2; 1 2 1 1 3], op = ≤, val = 5)
c([1, 2, 3, 4, 5]; pair_vars = [3 2 5 4 2; 1 2 1 1 3], op = <, val = 5)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/cumulative.jl#L5-L32)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_no_overlap-constraints-packing_scheduling_constraints' href='#Constraints.xcsp_no_overlap-constraints-packing_scheduling_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_no_overlap</u></b> &mdash; <i>Function</i>.




```julia
xcsp_no_overlap(; origins, lengths, zero_ignored)
```


Return `true` if the no_overlap constraint is satisfied, `false` otherwise. The no_overlap constraint is a global constraint used in constraint programming, often in scheduling problems. It ensures that tasks do not overlap in time, i.e., for any two tasks, either the first task finishes before the second task starts, or the second task finishes before the first task starts.

**Arguments**
- `origins::AbstractVector`: list of origins of the tasks.
  
- `lengths::AbstractVector`: list of lengths of the tasks.
  
- `zero_ignored::Bool`: whether to ignore zero-length tasks.
  

**Variants**
- `:no_overlap`: The no_overlap constraint is a global constraint used in constraint programming, often in scheduling problems. It ensures that tasks do not overlap in time, i.e., for any two tasks, either the first task finishes before the second task starts, or the second task finishes before the first task starts.
  

```julia
concept(:no_overlap, x; pair_vars, bool)
concept(:no_overlap)(x; pair_vars, bool)
```

- `:no_overlap_no_zero`: The no_overlap constraint is a global constraint used in constraint programming, often in scheduling problems. It ensures that tasks do not overlap in time, i.e., for any two tasks, either the first task finishes before the second task starts, or the second task finishes before the first task starts. This variant ignores zero-length tasks.
  

```julia
concept(:no_overlap_no_zero, x; pair_vars)
concept(:no_overlap_no_zero)(x; pair_vars)
```

- `:no_overlap_with_zero`: The no_overlap constraint is a global constraint used in constraint programming, often in scheduling problems. It ensures that tasks do not overlap in time, i.e., for any two tasks, either the first task finishes before the second task starts, or the second task finishes before the first task starts. This variant includes zero-length tasks.
  

```julia
concept(:no_overlap_with_zero, x; pair_vars)
concept(:no_overlap_with_zero)(x; pair_vars)
```


**Examples**

```julia
c = concept(:no_overlap)

c([1, 2, 3, 4, 5])
c([1, 2, 3, 4, 1])
c([1, 2, 4, 6, 3]; pair_vars = [1, 1, 1, 1, 1])
c([1, 2, 4, 6, 3]; pair_vars = [1, 1, 1, 3, 1])
c([1, 2, 4, 6, 3]; pair_vars = [1, 1, 3, 1, 1])
c([1, 1, 1, 3, 5, 2, 7, 7, 5, 12, 8, 7]; pair_vars = [2, 4, 1, 4 ,2 ,3, 5, 1, 2, 3, 3, 2], dim = 3)
c([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]; pair_vars = [2, 4, 1, 4 ,2 ,3, 5, 1, 2, 3, 3, 2], dim = 3)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/no_overlap.jl#L13-L52)

</div>
<br>
