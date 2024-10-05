# ConstraintDomains.jl: Defining Variables and Exploring Domains

```@meta
CurrentModule = ConstraintDomains
```

*ConstraintDomains.jl* is the standard way to define variables and explore domains in the *Julia Constraints* ecosystem. This package can be used to specify both discrete and continuous domains. Explorations features are primarily related to learning about constraints, aka constraint learning.

Most users should use it through JuMP/MOI interfaces.

## Commons

```@docs; canonical=false
AbstractDomain
EmptyDomain
domain
domain_size
get_domain
to_domains
```

### Extension to Base module

```@docs; canonical=false
Base.in
Base.rand
Base.isempty
Base.rand
Base.string
```

### Performances

```@raw html
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintDomains/visuals/bench_evolution_common.png?raw=true" alt="Bench Evolution Common" style="width:48%;"/>
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintDomains/visuals/chair_evolution_common.png?raw=true" alt="Chair Evolution Common" style="width:48%;"/>
</div>
```

## Continuous

```@docs; canonical=false
ContinuousDomain
Intervals
domain
domain_size
merge_domains
intersect_domains
intersect_domains!
size
```

### Extension to Base module

```@docs; canonical=false
Base.length
Base.rand
Base.in
Base.string
```

### Performances

```@raw html
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintDomains/visuals/bench_evolution_continuous.png?raw=true" alt="Bench Evolution Continuous" style="width:48%;"/>
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintDomains/visuals/chair_evolution_continuous.png?raw=true" alt="Chair Evolution Continuous" style="width:48%;"/>
</div>
```

## Discrete

```@docs; canonical=false
DiscreteDomain
SetDomain
RangeDomain
ArbitraryDomain
domain
domain_size
add!
merge_domains
intersect_domains
size
```

### Extension to Base module


```@docs; canonical=false
Base.delete!
Base.length
Base.rand
Base.in
Base.string
```

### Performances

```@raw html
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintDomains/visuals/bench_evolution_discrete.png?raw=true" alt="Bench Evolution Discrete" style="width:48%;"/>
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintDomains/visuals/chair_evolution_discrete.png?raw=true" alt="Chair Evolution Discrete" style="width:48%;"/>
</div>
```

## General

```@docs; canonical=false
Base.eltype
Base.convert
```

## Exploration

```@docs; canonical=false
Explorer
ExploreSettings
explore!
explore
```

### Performances

```@raw html
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintDomains/visuals/bench_evolution_explore.png?raw=true" alt="Bench Evolution Exploration" style="width:48%;"/>
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintDomains/visuals/chair_evolution_explore.png?raw=true" alt="Chair Evolution Exploration" style="width:48%;"/>
</div>
```

## Parameters

```@docs; canonical=false
BoolParameterDomain
DimParameterDomain
IdParameterDomain
FakeAutomaton
ConstraintCommons.accept
fake_automaton
LanguageParameterDomain
OpParameterDomain
PairVarsParameterDomain
ValParameterDomain
ValsParameterDomain
Base.rand
generate_parameters
```
