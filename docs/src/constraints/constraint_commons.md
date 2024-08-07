# ConstraintCommons.jl

[ConstraintCommons.jl](https://github.com/JuliaConstraints/ConstraintCommons.jl) is an essential package within the *Julia Constraints* ecosystem designed to facilitate the development and interoperability of constraint programming solutions in Julia. It serves as a foundational layer that provides shared structures, abstract types, functions, and generic methods utilized by both basic feature packages and learning-oriented packages.

Only advanced users or package developers are likely to use it. The package covers *parameters*, (regular) *languages*, `Core` or `Base` methods *extensions*, *sampling*, *extrema*, and *dictionaries*.

```@meta
CurrentModule = ConstraintCommons
```

## Parameters

This section of the package list or extract parameters based on the *XCSP3-core* specifications. Note that, for the foreseeable future, the default constraints specification will follow these specifications.

```@docs; canonical=false
USUAL_CONSTRAINT_PARAMETERS
extract_parameters
```

### Performances

```@raw html
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_parameters.png?raw=true" alt="Bench Evolution Parameters" style="width:48%;"/>
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_parameters.png?raw=true" alt="Chair Evolution Parameters" style="width:48%;"/>
</div>
```

## Languages

*XCSP3* considers two kinds of structure to recognize languages as core constraints: Automata, Multivalued Decision Diagrams (MMDs).

```@docs; canonical=false
AbstractMultivaluedDecisionDiagram
MDD
AbstractAutomaton
Automaton
accept
at_end
```

### Performances

```@raw html
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="flex: 1 1 48%; margin: 1%;">
    <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_automata.png?raw=true" alt="Bench Evolution Automata" style="width:100%;"/>
  </div>
  <div style="flex: 1 1 48%; margin: 1%;">
    <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_automata.png?raw=true" alt="Chair Evolution Automata" style="width:100%;"/>
  </div>
  <div style="flex: 1 1 48%; margin: 1%;">
    <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_diagrams.png?raw=true" alt="Bench Evolution Diagrams" style="width:100%;"/>
  </div>
  <div style="flex: 1 1 48%; margin: 1%;">
    <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_diagrams.png?raw=true" alt="Chair Evolution Diagrams" style="width:100%;"/>
  </div>
</div>
```

## Extensions

We extend some operations for `Nothing` and `Symbol`.

```@docs; canonical=false
symcon
consin
consisempty
```

### Performances

```@raw html
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="flex: 1 1 48%; margin: 1%;">
    <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_nothing.png?raw=true" alt="Bench Evolution Nothing" style="width:100%;"/>
  </div>
  <div style="flex: 1 1 48%; margin: 1%;">
    <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_nothing.png?raw=true" alt="Chair Evolution Nothing" style="width:100%;"/>
  </div>
  <div style="flex: 1 1 48%; margin: 1%;">
    <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_symbols.png?raw=true" alt="Bench Evolution Symbols" style="width:100%;"/>
  </div>
  <div style="flex: 1 1 48%; margin: 1%;">
    <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_symbols.png?raw=true" alt="Chair Evolution Symbols" style="width:100%;"/>
  </div>
</div>
```

## Sampling

During our constraint learning processes, we use sampling to efficiently make partial exploration of search spaces. The following are some examples of sampling utilities.

```@docs; canonical=false
oversample
```

### Performances

```@raw html
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_samplings.png?raw=true" alt="Bench Evolution" style="width:48%;"/>
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_samplings.png?raw=true" alt="Chair Evolution" style="width:48%;"/>
</div>
```

## Extrema

We need to compute the difference between extrema of various kind of collections in several situations.

```@docs; canonical=false
δ_extrema
```

### Performances

```@raw html
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_extrema.png?raw=true" alt="Bench Evolution" style="width:48%;"/>
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_extrema.png?raw=true" alt="Chair Evolution" style="width:48%;"/>
</div>
```

## Dictionaries

We provide the ever-useful `incsert!` function for dictionaries.

```@docs; canonical=false
incsert!
```

### Performances

```@raw html
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_dictionaries.png?raw=true" alt="Bench Evolution" style="width:48%;"/>
  <img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_dictionaries.png?raw=true" alt="Chair Evolution" style="width:48%;"/>
</div>
```
