# Constraints.jl: Streamlining Constraint Definition and Integration in Julia

```@meta
CurrentModule = Constraints
```

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

### Packing and Scheduling Constraints

```@docs; canonical=false
xcsp_cumulative
xcsp_no_overlap
```
