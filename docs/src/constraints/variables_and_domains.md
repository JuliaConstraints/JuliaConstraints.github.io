# Defining Variables and Exploring Domains

```@meta
CurrentModule = ConstraintDomains
```

*ConstraintDomains.jl* stands as the standard way to define variables and explore domains within the *Julia Constraints* ecosystem. This package provides the infrastructure necessary for specifying both discrete and continuous domains. Explorations features are mainly related to the *learning about constraints* aspect and will be detailed in that chapter.

Variables and their domains can also be defined through `MOI` and `JuMP` syntaxes in their respective models.

## Implementing the `AbstractDomain` Interface

At the foundation of *ConstraintDomains.jl* is the `AbstractDomain` type, an abstract supertype for all domain types. Implementations of `AbstractDomain` must provide methods for checking membership (``\in``), generating random elements (`rand`), and determining the domain's size or range (`length`). These functionalities are essential for defining the behavior and properties of variable domains within constraint models.

```@docs; canonical=false
AbstractDomain
```

## Discrete Domains

Optimization in discrete spaces has been the core of Constraint Programming since its inception. We provide three kinds of discrete domains.

### `SetDomain`

A `SetDomain` is simply a `Set` of unordered numerical values.

::: code-group

```julia [JC-API]
using ConstraintDomains

d1 = domain([53.69, 89.2, 0.12])
d2 = domain([2//3, 89//123])
d3 = domain(4.3)
d4 = domain(1, 42, 3.14)
```

```julia [CBLS-JuMP]
using CBLS, JuMP

m = JuMP.Model(CBLS.Optimizer)

@variable(m, x1 in DiscreteSet([53.69, 89.2, 0.12]))
@variable(m, x2 in DiscreteSet([2//3, 89//123]))
@variable(m, x3 in DiscreteSet(4.3))
@variable(m, x4 in DiscreteSet([1, 42, 3.14]))
```

```julia [CBLS-MOI]
using CBLS
import MathOptInterface as MOI

optimizer = CBLS.Optimizer()

v1 = MOI.add_variable(optimizer)
MOI.add_constraint(optimizer, v1, CBLS.DiscreteSet([53.69, 89.2, 0.12]))

v2 = MOI.add_variable(optimizer)
MOI.add_constraint(optimizer, v2, CBLS.DiscreteSet([2//3, 89//123]))

v3 = MOI.add_variable(optimizer)
MOI.add_constraint(optimizer, v3, CBLS.DiscreteSet(4.3))

v4 = MOI.add_variable(optimizer)
MOI.add_constraint(optimizer, v4, CBLS.DiscreteSet([1, 42, 3.14]))
```

:::

### `RangeDomain`

A range domain allows for minimal storage and more efficient operation on discrete sets defined as `Range` in Julia. It is not recommended for dynamic domains (it will be replaced with `SetDomain` as soon non-extremal element is removed).

::: code-group

```julia [JC-API]
using ConstraintDomains

d1 = domain(1:5)
d2 = domain(0.4:0.1:1.3)
```

```julia [CBLS-JuMP]
## To be implemented
# using CBLS, JuMP

# m = JuMP.Model(CBLS.Optimizer)

# @variable(m, 1 ≤ x1 ≤ 5, Int) # Consecutive integers are interpreted as range
# @variable(m, x2 in RangeSet(0.4:0.1:1.3))
```

```julia [CBLS-MOI]
## To be implemented
# using CBLS
# import MathOptInterface as MOI

# optimizer = CBLS.Optimizer()

# v1 = MOI.add_variable(optimizer)
# MOI.add_constraint(optimizer, v1, MOI.RangeSet(1:5))

# v2 = MOI.add_variable(optimizer)

# MOI.add_constraint(optimizer, v1, MOI.RangeSet(0.4:0.1:1.3))
```

:::

### Arbitrary Domains

As odd as it may sound, we provide a constructor for sets of elements making up arbitrary, possibly non-numerical, domains.

Until some practical examples are implemented, this structure will mainly be a placeholder with default behavior.

## Continuous Domains

Numerous problems cannot be challenged without expressing at least part of their domains as continuous variables. In *Julia Constraints* we provide such domains as (set of) intervals.

::: code-group

```julia [JC-API]
using ConstraintDomains, Intervals

d1 = domain(Interval{Open,Closed}(3.2, true), (42, false))
d2 = domain(3.2..42)
d3 = domain([3.2..42, 63.2..324.1])
```

```julia [CBLS-JuMP]
## see MOI.Interval
```

```julia [CBLS-MOI]
## see MOI.Interval
```

:::
