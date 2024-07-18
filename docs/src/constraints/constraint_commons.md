# ConstraintCommons.jl

[ConstraintCommons.jl](https://github.com/JuliaConstraints/ConstraintCommons.jl) is an essential package within the *Julia Constraints* ecosystem designed to facilitate the development and interoperability of constraint programming solutions in Julia. It serves as a foundational layer that provides shared structures, abstract types, functions, and generic methods utilized by both basic feature packages and learning-oriented packages.

Only advanced users or package developers are likely to use it. The package covers *parameters*, (regular) *languages*, `Core` or `Base` methods *extensions*, *sampling*, *extrema*, and *dictionaries*.

```@meta
CurrentModule = ConstraintCommons
```

## Parameters

This section of the package list or extract parameters based on the *XCSP3-core* specifications. Note that, for the foreseeable future, the default constraints specification will follow the XCSP3 format.

```@docs; canonical=false
USUAL_CONSTRAINT_PARAMETERS
extract_parameters
```

### Performances

![bench_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/bench_evolution_parameters.png?raw=true)
![chair_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/chair_evolution_parameters.png?raw=true)

## Languages

*XCSP3* considers two kinds of structure to recognize languages as core constraints: Automata, Multivalued Decision Diagrams (MMDs).

```@docs; canonical=false
AbstractMultivaluedDecisionDiagram
MDD
AbstractAutomaton
Automaton
Automaton(a::MDD)
accept
at_end
```

### Performances

![bench_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/bench_evolution_automata.png?raw=true)
![chair_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/chair_evolution_automata.png?raw=true)
![bench_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/bench_evolution_diagrams.png?raw=true)
![chair_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/chair_evolution_diagrams.png?raw=true)

## Extensions

We extended some operations for `Nothing` and `Symbol`.

```@docs; canonical=false
Base.:*
Base.in(::Any, ::Nothing)
Base.isempty(::Nothing)
```

### Performances

![bench_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/bench_evolution_nothing.png?raw=true)
![chair_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/chair_evolution_nothing.png?raw=true)
![bench_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/bench_evolution_symbols.png?raw=true)
![chair_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/chair_evolution_symbols.png?raw=true)

## Sampling

During our constraint learning processes, we use sampling to efficiently make partial exploration of search spaces. Follows some sampling utilities.

```@docs; canonical=false
oversample
```

### Performances

![bench_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/bench_evolution_samplings.png?raw=true)
![chair_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/chair_evolution_samplings.png?raw=true)

## Extrema

We need to compute the difference between extrema of various kind of collections in several situations.

```@docs; canonical=false
δ_extrema
```

![bench_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/bench_evolution_extrema.png?raw=true)
![chair_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/chair_evolution_extrema.png?raw=true)

### Performances

## Dictionaries

We provide the everuseful `incsert!` function for dictionaries.

```@docs; canonical=false
incsert!
```

### Performances

![bench_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/bench_evolution_dictionaries.png?raw=true)
![chair_evolution](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/main/perf/visuals/chair_evolution_dictionaries.png?raw=true)
