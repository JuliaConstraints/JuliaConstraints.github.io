# Constraints.jl: Streamlining Constraint Definition and Integration in Julia

```@meta
CurrentModule = Constraints
```

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

### Comparison-based Constraints

```@docs; canonical=false
xcsp_all_different
xcsp_all_equal
xcsp_ordered
```
