# Constraints.jl: Streamlining Constraint Definition and Integration in Julia

```@meta
CurrentModule = Constraints
```

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

### Connection Constraints

```@docs; canonical=false
xcsp_maximum
xcsp_minimum
xcsp_element
xcsp_channel
```
