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

@info concept(:sum, [1, 2, 3, 4, 5]; op = ==, val=15)
@info concept(:sum, [1, 2, 3, 4, 5]; op = ==, val=2)
@info concept(:sum, [1, 2, 3, 4, 3]; op = ≤, val=15)
@info concept(:sum, [1, 2, 3, 4, 3]; op = ≤, val=3)

```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_sum(
    list = x,
    condition = (>, 4),
    coeffs = [1,2,3,4]
)
	
@info c([1, 1, 1, 1])
@info c([0, 1, 0, 0])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:5]≤5, Int)
@variable(model, 1≤Y[1:5]≤5, Int)
@constraint(model, X in Sum(; op = ==, val = 15))
@constraint(model, Y in Sum(; op = <=, val = 10))
JuMP.optimize!(model)
@info "Sum" value.(X) value.(Y)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

@info concept(:nvalues, [1, 2, 3, 4, 5]; op = ==, val = 5)
@info concept(:nvalues, [1, 2, 3, 4, 5]; op = ==, val = 2)
@info concept(:nvalues, [1, 2, 3, 4, 3]; op = <=, val = 5)
@info concept(:nvalues, [1, 2, 3, 4, 3]; op = <=, val = 3)
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_nvalues(
   	list = x,
		condition = (≥, 3),
		except = [1,2,3,4]
)
	
@info c([1, 1, 1, 1])
@info c([9, 3, 6, 8])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:5]≤5, Int)
@variable(model, 1≤Y[1:5]≤5, Int)
@variable(model, 1≤Z[1:5]≤5, Int)
@constraint(model, X in NValues(; op = ==, val = 5))
@constraint(model, Y in NValues(; op = ==, val = 2))
@constraint(model, Z in NValues(; op = <=, val = 5, vals = [1, 2]))
JuMP.optimize!(model)
@info "NValues" value.(X) value.(Y) value.(Z)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

# [v1, v2, v3], [v1, a1, a2; v2, b1, b2; v3, c1, c2] means v1 occurs between a1 and a2 times in the first array, similar for v2 and v3. 
	
@info concept(:cardinality, [2, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
@info concept(:cardinality, [8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3], bool=false)
@info concept(:cardinality, [8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3], bool=true)
@info concept(:cardinality, [2, 5, 10, 10]; vals=[2 1; 5 1; 10 2])
@info concept(:cardinality_closed, [8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
@info concept(:cardinality_open, [8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_cardinality(
   	list = x,
		values = [1, 2],
		occurs = [2 3; 1 5]
)

@info c([1, 2, 1, 2])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:4]≤10, Int)
@variable(model, 1≤Y[1:4]≤10, Int)
@variable(model, 1≤Z[1:4]≤10, Int)
@constraint(model, X in Cardinality(; vals = [2 0 1; 5 1 3; 10 2 3]))
@constraint(model, Y in CardinalityOpen(; vals = [2 0 1; 5 1 3; 10 2 3]))
@constraint(model, Z in CardinalityClosed(; vals = [2 0 1; 5 1 3; 10 2 3]))
JuMP.optimize!(model)
@info "Cardinality" value.(X) value.(Y) value.(Z)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

@info concept(:ordered, [1, 2, 3, 4, 4]; op=≤)
@info concept(:ordered, [1, 2, 3, 3, 5]; op=<)
@info concept(:increasing, [1,2,2,3])
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_ordered(
   	list = x,
		operator = ≥
)
	
@info c([1, 1, 1, 1])
@info c([9, 3, 6, 8])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:5]≤5, Int)
@variable(model, 1≤Y[1:5]≤5, Int)
@constraint(model, X in Ordered())
@constraint(model, Y in Ordered(; op = <))
JuMP.optimize!(model)
@info "Ordered" value.(X) value.(Y)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

@info concept(:cumulative, [1, 2, 3, 4, 5]; val = 1)
@info concept(:cumulative, [1, 2, 2, 4, 5]; val = 1)
@info concept(:cumulative, [1, 2, 3, 4, 5]; pair_vars = [3 2 5 4 2; 1 2 1 1 3], op = ≤, val = 5)
@info concept(:cumulative, [1, 2, 3, 4, 5]; pair_vars = [3 2 5 4 2; 1 2 1 1 3], op = <, val = 5)
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_cumulative(
	origins = x,
	lengths = [3, 2, 5, 4, 2],
	heights = [1, 2, 1, 1, 3],
	condition = (≤, 5)
)

@info c([1, 2, 3, 4, 5])
@info c([1, 1, 1, 2, 2])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:5]≤5, Int)
@variable(model, 1≤Y[1:5]≤5, Int)
@variable(model, 1≤Z[1:5]≤5, Int)
@constraint(model, X in Cumulative(; val = 1))
@constraint(model,
    Y in Cumulative(; pair_vars = [3 2 5 4 2; 1 2 1 1 3], op = ≤, val = 5))
@constraint(model,
    Z in Cumulative(; pair_vars = [3 2 5 4 2; 1 2 1 1 3], op = <, val = 5))
JuMP.optimize!(model)
@info "Cumulative" value.(X) value.(Y) value.(Z)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

@info concept(:channel, [2, 1, 4, 3])
@info concept(:channel, [1, 2, 3, 4])
@info concept(:channel, [2, 3, 1, 4])
@info concept(:channel, [2, 1, 5, 3, 4, 2, 1, 4, 5, 3]; dim=2)
@info concept(:channel, [2, 1, 4, 3, 5, 2, 1, 4, 5, 3]; dim=2)
@info concept(:channel, [false, false, true, false]; id=3)
@info concept(:channel, [false, false, true, false]; id=1)
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_channel(
	list = x
)

@info c([2, 1, 4, 3])
@info c([2, 3, 1, 4])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:4]≤4, Int)
@variable(model, 1≤Y[1:10]≤5, Int)
@variable(model, 0≤Z[1:4]≤1, Int)
@constraint(model, X in CBLS.Channel())
@constraint(model, Y in CBLS.Channel(; dim = 2))
@constraint(model, Z in CBLS.Channel(; id = 3))
JuMP.optimize!(model)
@info "Channel" value.(X) value.(Y) value.(Z)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

@info concept(:no_overlap, [1, 2, 3, 4, 5])
@info concept(:no_overlap, [1, 2, 3, 4, 1])
@info concept(:no_overlap, [1, 2, 4, 6, 3]; pair_vars = [1, 1, 1, 1, 1])
@info concept(:no_overlap, [1, 2, 4, 6, 3]; pair_vars = [1, 1, 1, 3, 1])
@info concept(:no_overlap, [1, 2, 4, 6, 3]; pair_vars = [1, 1, 3, 1, 1])
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_no_overlap(
	origins = x,
	lengths = [1, 4, 10],
	zero_ignored = true
)

@info c([1, 3, 10])
@info c([2, 1, 4, 3])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:5]≤5, Int)
@variable(model, 1≤Y[1:5]≤6, Int)
@variable(model, 1≤Z[1:12]≤12, Int)
@constraint(model, X in NoOverlap())
@constraint(model, Y in NoOverlap(; pair_vars = [1, 1, 1, 1, 1]))
@constraint(model,
    Z in NoOverlap(; pair_vars = [2, 4, 1, 4, 2, 3, 5, 1, 2, 3, 3, 2], dim = 3))
JuMP.optimize!(model)
@info "NoOverlap" value.(X) value.(Y) value.(Z)
```

```julia [MOI]
# TODO: How to handle intention in JuMP/MOI
```

:::

::: code-group

```julia [JC-API]
using Constraints

@info concept(:element, [1, 2, 3, 4, 5]; id=1, val=1)
@info concept(:element, [1, 2, 3, 4, 5]; id=1, val=2)
@info concept(:element, [1, 2, 3, 4, 2])
@info concept(:element, [1, 2, 3, 4, 1])
```

```julia [XCSP]
using Constraints

c = x -> Constraints.xcsp_element(
	list = x,
	index = 1,
	condition = (==, 3)
)

@info c([3, 3, 10])
@info c([1, 1, 4, 3])
```

```julia [JuMP]
using CBLS, JuMP

model = Model(CBLS.Optimizer)
@variable(model, 1≤X[1:5]≤5, Int)
@variable(model, 1≤Y[1:5]≤5, Int)
@variable(model, 0≤Z[1:5]≤5, Int)
@constraint(model, X in Element())
@constraint(model, Y in Element(; id = 1, val = 1))
@constraint(model, Z in Element(; id = 2, val = 2))
JuMP.optimize!(model)
@info "Element" value.(X) value.(Y) value.(Z)
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
