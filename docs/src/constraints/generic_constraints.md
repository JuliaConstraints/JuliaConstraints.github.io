# Generic Constraints

```@meta
CurrentModule = Constraints
```

In the [XCSP³-core](https://arxiv.org/abs/2009.00514) standard, generic constraints are categorized into two main types: *intention* and *extension* constraints.

## Intention Constraints

These are constraints that are defined by a logical expression or a function. They are called intentional because they are defined by the property they satisfy. For example, a constraint that specifies that a variable ``x`` must be less than a variable ``y`` could be defined intentionally as ``x < y``.

Note that the *intention* constraint is not directly available through the JC-API in Constraints.jl. It is designed as such since defining a constraint through a *predicate* is the natural way.

We provide a straightforward example through the `:dist_different` constraint on how to define and add such a constraint in the `USUAL_CONSTRAINTS` collection.

Higher level modeling languages such as `JuMP` should provide a `Intention` interface.

### Defining an intention constraint in JC-API

We use the `dist_different` constraint to illustrate how to define an intention constraint in *Constraints.jl*. The `dist_different` constraint ensures that the distances between marks ``x`` on a ruler are unique.

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

Please check the section dedicated to the Golomb Ruler problem to see a use for this constraint.
<!-- TODO: Golomb Ruler -->

### APIs

Note that the *intension* constraint is not directly available through the JC-API in Constraints.jl. It is designed as such since defining a constraint through a *predicate* is the natural way.

We provide here a usage example for the `:dist_different` constraint, previously added to the `USUAL_CONSTRAINTS` collection.

Higher level modeling language such as `JuMP` should provide an `Intension` interface.

::: code-group

```julia [JC-API]
using Constraints

concept(:dist_different, x)
concept(:dist_different)(x)
```

```julia [XCSP]
# Defines the DistDifferent constraint
using Constraints

c = x -> xcsp_intension(
    list = x,
    predicate = y -> abs(y[1] - y[2]) ≠ abs(y[3] - y[4])
)

c([1, 2, 3, 3]) # true
c([1, 2, 3, 4]) # false
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 0 <= X[1:4] <= 10, Int)
@constraint(model, X in DistDifferent())
optimize!(model)

@info value.(X)

# Note that this example gives a solution for the constraint within the interval 0:10
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

### Specific documentation

```@docs; canonical=false
xcsp_intension
```

## Extension Constraints

These are constraints that are defined by explicitly listing all the tuples of values that satisfy the constraint. They are called extensional because they are defined by the set of values they allow. For example, a binary constraint that specifies that a variable X must be either 1 or 2 and a variable Y must be either 3 or 4 could be defined extensionally by the set of tuples `{(1,3), (1,4), (2,3), (2,4)}`.

These two types of constraints provide a flexible way to define complex relationships between variables in constraint programming.

### [XCSP](https://arxiv.org/abs/2009.00514) in Constraints.jl

```@docs; canonical=false
xcsp_extension
```
