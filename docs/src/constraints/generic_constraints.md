# Generic Constraints

```@meta
CurrentModule = Constraints
```

In the [XCSP³-core](https://arxiv.org/abs/2009.00514) standard, generic constraints are categorized into two main types: *intention* and *extension* constraints.

## Intention Constraints

These are constraints that are defined by a logical expression or a function. They are called intentional because they are defined by the property they satisfy. For example, a constraint that specifies that a variable ``x`` must be less than a variable ``y`` could be defined intentionally as ``x < y``.

Note that the *intention* constraint is not directly available through the JC-API in Constraints.jl. It is designed as such since defining a constraint through a *predicate* is the natural way.

We provide a straightforward example through the `:dist_different` constraint on how to define and add such a constraint in the `USUAL_CONSTRAINTS` collection.

Higher level modeling language such as `JuMP` should provide a `Intention` interface.

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

::: code-group

```julia [JC-API]
using Constraints

concept(:all_equal, [1,1,1,2]) #false
concept(:all_equal, [1,1,1,1]) #true
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_all_equal(
    list = x
)

@info c([1, 1, 1, 1]) # false
@info c([1, 2, 3, 4]) # true
```

```julia [JuMP]
using JuMP, CBLS

model = Model(CBLS.Optimizer)
@variable(model, 0≤X[1:4]≤4, Int)
@constraint(model, X in AllEqual())
JuMP.optimize!(model)
@info "All Equal" value.(X)

# Note that this example gives a solution for the all_equal constraint.
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

concept(:minimum, [1,1,1,2], val = 1, op = ==) # true
concept(:minimum, [1,2,4,4], val = 2, op = ==) # false
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_minimum(
    list = x,
    condition = (==, 1)
)

@info c([1, 1, 4, 1])
@info c([0, 2, 3, 8])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:5]≤5, Int)
@constraint(model, X in Minimum(; op = ==, val = 3))
JuMP.optimize!(model)
@info "Minimum" value.(X)

# Note that this example gives a solution for the minimum constraint.
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

concept(:maximum, [1,1,1,2], val = 2, op = ==) # true
concept(:maximum, [1,2,4,4], val = 2, op = ==) # false
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_maximum(
    list = x,
		condition = (==, 4)
)

@info c([1, 1, 4, 1]) # true
@info c([1, 2, 3, 8]) # false
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:5]≤5, Int)
@constraint(model, X in Maximum(; op = ==, val = 5))
optimize!(model)
@info "Maximum" value.(X)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

concept(:all_different, [1,1,1,2]) # false
concept(:all_different, [1,9,3,2]) # true
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_all_different(
    list = x
)
@info c([1, 2, 3, 3]) # false
@info c([1, 2, 3, 4]) # true
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:4]≤4, Int)
@variable(model, 0≤Y[1:4]≤2, Int)
@constraint(model, X in AllDifferent())
@constraint(model, Y in AllDifferent(; vals = [0]))
JuMP.optimize!(model)
@info "All Different" value.(X) value.(Y)

# Note that this example gives a solution for the all_different constraint.
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

concept(:count, [1,1,1,2], vals = [1, 1, 1, 2], op = ==, val = 4) # true
concept(:count, [1,1,1,2], vals = [1, 1, 1, 2], op = ==, val = 5) # false
concept(:count, [2, 1, 4, 3]; vals=[1, 2, 3, 4], op=≥, val=2) # true
concept(:at_least, [1,1,1,2], vals = [1, 1, 1, 2], val = 4) # true
concept(:at_least, [1,1,1,2], vals = [1, 2], val = 4) # true
concept(:at_least, [1,1,1,2], vals = [1, 3], val = 4) # false
concept(:at_most, [1,1,1,2], vals = [1, 1, 1, 2], val = 4) # true
concept(:at_most, [1,1,1,2], vals = [2, 5, 3], val = 2) #true
concept(:at_most, [1,1,1,2], vals = [1, 1, 1, 3], val = 3) # true
concept(:exactly, [1,1,1,2], vals = [1, 3, 4, 2], val = 4) # true
concept(:exactly, [1,1,1,2], vals = [1, 1, 2, 3], val = 4) # true
concept(:exactly, [1,1,1,2], vals = [1, 1, 1, 3], val = 4) # false
```

```julia [XCSP]
using Constraints

c_count = x -> Constraints.xcsp_count(
    list = x,
		condition = (≥, 4),
		values = [1, 2, 3]
)
	
@info c_count([1, 1, 1, 1, 5]) # true
@info c_count([0, 2, 3, 8]) # false
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:4]≤4, Int)
@variable(model, 1≤X_at_least[1:4]≤4, Int)
@variable(model, 1≤X_at_most[1:4]≤4, Int)
@variable(model, 1≤X_exactly[1:4]≤4, Int)
@constraint(model, X in Count(vals = [1, 2, 3, 4], op = ≥, val = 2))
@constraint(model, X_at_least in AtLeast(vals = [1, 2, 3, 4], val = 2))
@constraint(model, X_at_most in AtMost(vals = [1, 2], val = 1))
@constraint(model, X_exactly in Exactly(vals = [1, 2], val = 2))
JuMP.optimize!(model)
@info "Count" value.(X) value.(X_at_least) value.(X_at_most) value.(X_exactly)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints


```

```julia [XCSP]
using Constraints


```

```julia [JuMP]
using CBLS, JuMP


```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

### Test for DocumenterVitePress Issue

```@example test1
using Constraints # hide
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
```

````@example test2
using Constraints # hide
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
````

### Specific documentation

```@docs; canonical=false
xcsp_intension
```

## Extension Constraints

These are constraints that are defined by explicitly listing all the tuples of values that satisfy the constraint. They are called extensional because they are defined by the set of values they allow. For example, a binary constraint that specifies that a variable X must be either 1 or 2 and a variable Y must be either 3 or 4 could be defined extensionally by the set of tuples {(1,3), (1,4), (2,3), (2,4)}.

These two types of constraints provide a flexible way to define complex relationships between variables in constraint programming.

### [XCSP](https://arxiv.org/abs/2009.00514) in Constraints.jl

```@docs; canonical=false
xcsp_extension
```
