# Constraints.jl: Streamlining Constraint Definition and Integration in Julia

```@meta
CurrentModule = Constraints
```

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

### Counting and Summing Constraints

```@docs; canonical=false
xcsp_sum
xcsp_count
xcsp_nvalues
xcsp_cardinality
```
