
# Generic Constraints {#Generic-Constraints}



In the [XCSP³-core](https://arxiv.org/abs/2009.00514) standard, generic constraints are categorized into two main types: _intention_ and _extension_ constraints.

## Intention Constraints {#Intention-Constraints}

These are constraints that are defined by a logical expression or a function. They are called intentional because they are defined by the property they satisfy. For example, a constraint that specifies that a variable $x$ must be less than a variable $y$ could be defined intentionally as $x < y$.

Note that the _intention_ constraint is not directly available through the JC-API in Constraints.jl. It is designed as such since defining a constraint through a _predicate_ is the natural way.

We provide a straightforward example through the `:dist_different` constraint on how to define and add such a constraint in the `USUAL_CONSTRAINTS` collection.

Higher level modeling language such as `JuMP` should provide a `Intention` interface.

### Defining an intention constraint in JC-API {#Defining-an-intention-constraint-in-JC-API}

We use the `dist_different` constraint to illustrate how to define an intention constraint in _Constraints.jl_. The `dist_different` constraint ensures that the distances between marks $x$ on a ruler are unique.

$$|x[1] - x[2]| \ne |x[3] - x[4]|$$

The constraint is then added to the usual constraints collection.

```julia
const description_dist_different = """
Ensures that the distances between marks on the ruler are unique.
"""

# Define the predicate
predicate_dist_different(x) = abs(x[1] - x[2]) ≠ abs(x[3] - x[4])

# Add it to usual constraints
@usual concept_dist_different(x) = xcsp_intension(
    list = x,
    predicate = predicate_dist_different
)
```


Please check the section dedicated to the Golomb Ruler problem to see a use for this constraint. &lt;!– TODO: Golomb Ruler –&gt;

### APIs

Note that the _intension_ constraint is not directly available through the JC-API in Constraints.jl. It is designed as such since defining a constraint through a _predicate_ is the natural way.

We provide here a usage example for the `:dist_different` constraint, previously added to the `USUAL_CONSTRAINTS` collection.

Higher level modeling language such as `JuMP` should provide an `Intension` interface.

::: code-group

```julia [JC-API]
concept(:dist_different, x)
concept(:dist_different)(x)
```


```julia [XCSP]
# Defines the DistDifferent constraint
c = x -> xcsp_intension(
    list = x,
    predicate = y -> abs(y[1] - y[2]) ≠ abs(y[3] - y[4])
)

c([1, 2, 3, 3]) # true
c([1, 2, 3, 4]) # false
```


```julia [JuMP]
# TODO: How to handle intention in JuMP/MOI
```


```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```


:::

### Test for DocumenterVitePress Issue {#Test-for-DocumenterVitePress-Issue}

```julia
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
```


```
true
```


```julia
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
```


```
true
```


### Specific documentation {#Specific-documentation}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_intension-constraints-generic_constraints' href='#Constraints.xcsp_intension-constraints-generic_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_intension</u></b> &mdash; <i>Function</i>.




```julia
xcsp_intension(list, predicate)
```


An intensional constraint is usually defined from a `predicate` over `list`. As such it encompass any generic constraint.

**Arguments**
- `list::Vector{Int}`: A list of variables
  
- `predicate::Function`: A predicate over `list`
  

**Variants**
- `:dist_different`: A constraint ensuring that the distances between marks on the ruler are unique. Specifically, it checks that the distance between `x[1]` and `x[2]`, and the distance between `x[3]` and `x[4]`, are different. This constraint is fundamental in ensuring the validity of a Golomb ruler, where no two pairs of marks should have the same distance between them.
  

```julia
concept(:dist_different, x)
concept(:dist_different)(x)
```


**Examples**

```@example debug2
2 + 2
```


```@example debug1
2 + 2
```


```@example intention1
using Constraints # hide
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
```


```@example intention2
using Constraints # hide
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/intention.jl#L9-L47)

</div>
<br>

## Extension Constraints {#Extension-Constraints}

These are constraints that are defined by explicitly listing all the tuples of values that satisfy the constraint. They are called extensional because they are defined by the set of values they allow. For example, a binary constraint that specifies that a variable X must be either 1 or 2 and a variable Y must be either 3 or 4 could be defined extensionally by the set of tuples {(1,3), (1,4), (2,3), (2,4)}.

These two types of constraints provide a flexible way to define complex relationships between variables in constraint programming.

### [XCSP](https://arxiv.org/abs/2009.00514) in Constraints.jl {#[XCSP](https://arxiv.org/abs/2009.00514)-in-Constraints.jl}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_extension-constraints-generic_constraints' href='#Constraints.xcsp_extension-constraints-generic_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_extension</u></b> &mdash; <i>Function</i>.




```julia
xcsp_extension(; list, supports=nothing, conflicts=nothing)
```


Global constraint enforcing that the tuple `x` matches a configuration within the supports set `pair_vars[1]` or does not match any configuration within the conflicts set `pair_vars[2]`. It embodies the logic: `x ∈ pair_vars[1] || x ∉ pair_vars[2]`, providing a comprehensive way to define valid (supported) and invalid (conflicted) tuples for constraint satisfaction problems. This constraint is versatile, allowing for the explicit delineation of both acceptable and unacceptable configurations.

**Arguments**
- `list::Vector{Int}`: A list of variables
  
- `supports::Vector{Vector{Int}}`: A set of supported tuples. Default to nothing.
  
- `conflicts::Vector{Vector{Int}}`: A set of conflicted tuples. Default to nothing.
  

**Variants**
- `:extension`: Global constraint enforcing that the tuple `x` matches a configuration within the supports set `pair_vars[1]` or does not match any configuration within the conflicts set `pair_vars[2]`. It embodies the logic: `x ∈ pair_vars[1] || x ∉ pair_vars[2]`, providing a comprehensive way to define valid (supported) and invalid (conflicted) tuples for constraint satisfaction problems. This constraint is versatile, allowing for the explicit delineation of both acceptable and unacceptable configurations.
  

```julia
concept(:extension, x; pair_vars)
concept(:extension)(x; pair_vars)
```

- `:supports`: Global constraint ensuring that the tuple `x` matches a configuration listed within the support set `pair_vars`. This constraint is derived from the extension model, specifying that `x` must be one of the explicitly defined supported configurations: `x ∈ pair_vars`. It is utilized to directly declare the tuples that are valid and should be included in the solution space.
  

```julia
concept(:supports, x; pair_vars)
concept(:supports)(x; pair_vars)
```

- `:conflicts`: Global constraint ensuring that the tuple `x` does not match any configuration listed within the conflict set `pair_vars`. This constraint, originating from the extension model, stipulates that `x` must avoid all configurations defined as conflicts: `x ∉ pair_vars`. It is useful for specifying tuples that are explicitly forbidden and should be excluded from the solution space.
  

```julia
concept(:conflicts, x; pair_vars)
concept(:conflicts)(x; pair_vars)
```


**Examples**

```julia
c = concept(:extension)
c([1, 2, 3, 4, 5]; pair_vars=[[1, 2, 3, 4, 5]])
c([1, 2, 3, 4, 5]; pair_vars=([[1, 2, 3, 4, 5]], [[1, 2, 1, 4, 5], [1, 2, 3, 5, 5]]))
c([1, 2, 3, 4, 5]; pair_vars=[[1, 2, 1, 4, 5], [1, 2, 3, 5, 5]])

c = concept(:supports)
c([1, 2, 3, 4, 5]; pair_vars=[[1, 2, 3, 4, 5]])

c = concept(:conflicts)
c([1, 2, 3, 4, 5]; pair_vars=[[1, 2, 1, 4, 5], [1, 2, 3, 5, 5]])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/extension.jl#L20-L60)

</div>
<br>
