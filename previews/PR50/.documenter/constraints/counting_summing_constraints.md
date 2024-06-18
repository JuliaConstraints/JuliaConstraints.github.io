
# Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}



### Counting and Summing Constraints {#Counting-and-Summing-Constraints}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_sum-constraints-counting_summing_constraints' href='#Constraints.xcsp_sum-constraints-counting_summing_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_sum</u></b> &mdash; <i>Function</i>.




```julia
xcsp_sum(list, coeffs, condition)
```


Return `true` if the sum of the variables in `list` satisfies the given condition, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `coeffs::Vector{Int}`: list of coefficients to use.
  
- `condition`: condition to satisfy.
  

**Variants**
- `:sum`: Global constraint ensuring that the sum of the variables in `x` satisfies a given condition.
  

```julia
concept(:sum, x; op===, pair_vars=ones(x), val)
concept(:sum)(x; op===, pair_vars=ones(x), val)
```


**Examples**

```julia
c = concept(:sum)

c([1, 2, 3, 4, 5]; op===, val=15)
c([1, 2, 3, 4, 5]; op===, val=2)
c([1, 2, 3, 4, 3]; op=≤, val=15)
c([1, 2, 3, 4, 3]; op=≤, val=3)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/sum.jl#L5-L31)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_count-constraints-counting_summing_constraints' href='#Constraints.xcsp_count-constraints-counting_summing_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_count</u></b> &mdash; <i>Function</i>.




```julia
xcsp_count(list, values, condition)
```


Return `true` if the number of occurrences of the values in `values` in `list` satisfies the given condition, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `values::Vector{Int}`: list of values to check.
  
- `condition`: condition to satisfy.
  

**Variants**
- `:count`: Constraint ensuring that the number of occurrences of the values in `vals` in `x` satisfies the given condition.
  

```julia
concept(:count, x; vals, op, val)
concept(:count)(x; vals, op, val)
```

- `:at_least`: Constraint ensuring that the number of occurrences of the values in `vals` in `x` is at least `val`.
  

```julia
concept(:at_least, x; vals, val)
concept(:at_least)(x; vals, val)
```

- `:at_most`: Constraint ensuring that the number of occurrences of the values in `vals` in `x` is at most `val`.
  

```julia
concept(:at_most, x; vals, val)
concept(:at_most)(x; vals, val)
```

- `:exactly`: Constraint ensuring that the number of occurrences of the values in `vals` in `x` is exactly `val`.
  

```julia
concept(:exactly, x; vals, val)
concept(:exactly)(x; vals, val)
```


**Examples**

```julia
c = concept(:count)

c([2, 1, 4, 3]; vals=[1, 2, 3, 4], op=≥, val=2)
c([1, 2, 3, 4]; vals=[1, 2], op==, val=2)
c([2, 1, 4, 3]; vals=[1, 2], op=≤, val=1)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/count.jl#L17-L57)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_nvalues-constraints-counting_summing_constraints' href='#Constraints.xcsp_nvalues-constraints-counting_summing_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_nvalues</u></b> &mdash; <i>Function</i>.




```julia
xcsp_nvalues(list, condition, except)
```


Return `true` if the number of distinct values in `list` satisfies the given condition, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `condition`: condition to satisfy.
  
- `except::Union{Nothing, Vector{Int}}`: list of values to exclude. Default is `nothing`.
  

**Variants**
- `:nvalues`: The nValues constraint specifies that the number of distinct values in the list of variables x is equal to a given value. The constraint is defined by the following expression: nValues(x, op, val) where x is a list of variables, op is a comparison operator, and val is an integer value.
  

```julia
concept(:nvalues, x; op, val)
concept(:nvalues)(x; op, val)
```


**Examples**

```julia
c = concept(:nvalues)

c([1, 2, 3, 4, 5]; op = ==, val = 5)
c([1, 2, 3, 4, 5]; op = ==, val = 2)
c([1, 2, 3, 4, 3]; op = <=, val = 5)
c([1, 2, 3, 4, 3]; op = <=, val = 3)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/n_values.jl#L7-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_cardinality-constraints-counting_summing_constraints' href='#Constraints.xcsp_cardinality-constraints-counting_summing_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_cardinality</u></b> &mdash; <i>Function</i>.




```julia
xcsp_cardinality(list, values, occurs, closed)
```


Return `true` if the number of occurrences of the values in `values` in `list` satisfies the given condition, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `values::Vector{Int}`: list of values to check.
  
- `occurs::Vector{Int}`: list of occurrences to check.
  
- `closed::Bool`: whether the constraint is closed or not.
  

**Variants**
- `:cardinality`: The cardinality constraint, also known as the global cardinality constraint (GCC), is a constraint in constraint programming that restricts the number of times a value can appear in a set of variables.
  

```julia
concept(:cardinality, x; bool=false, vals)
concept(:cardinality)(x; bool=false, vals)
```

- `:cardinality_closed`: The closed cardinality constraint, also known as the global cardinality constraint (GCC), is a constraint in constraint programming that restricts the number of times a value can appear in a set of variables. It is closed, meaning that all values in the domain of the variables must be considered.
  

```julia
concept(:cardinality_closed, x; vals)
concept(:cardinality_closed)(x; vals)
```

- `:cardinality_open`: The open cardinality constraint, also known as the global cardinality constraint (GCC), is a constraint in constraint programming that restricts the number of times a value can appear in a set of variables. It is open, meaning that only the values in the list of values must be considered.
  

```julia
concept(:cardinality_open, x; vals)
concept(:cardinality_open)(x; vals)
```


**Examples**

```julia
c = concept(:cardinality)

c([2, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
c([8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3], bool=false)
c([8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3], bool=true)
c([2, 5, 10, 10]; vals=[2 1; 5 1; 10 2])
c([2, 5, 10, 10]; vals=[2 0 1 42; 5 1 3 7; 10 2 3 -4])
c([2, 5, 5, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
c([2, 5, 10, 8]; vals=[2 1; 5 1; 10 2])
c([5, 5, 5, 10]; vals=[2 0 1 42; 5 1 3 7; 10 2 3 -4])

cc = concept(:cardinality_closed)
cc([8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])

co = concept(:cardinality_open)
co([8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/cardinality.jl#L14-L61)

</div>
<br>
