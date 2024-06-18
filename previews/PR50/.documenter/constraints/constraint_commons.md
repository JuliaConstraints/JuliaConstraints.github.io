
# ConstraintCommons.jl

_ConstraintCommons.jl_ is an essential package within the _Julia Constraints_ ecosystem designed to facilitate the development and interoperability of constraint programming solutions in Julia. It serves as a foundational layer that provides shared structures, abstract types, functions, and generic methods utilized by both basic feature packages and learning-oriented packages.



## Key Features and Functionalities {#Key-Features-and-Functionalities}
- **Shared Structures and Abstract Types**: ConstraintCommons.jl offers a collection of shared data structures and abstract types. This standardization is crucial for ensuring that packages such as ConstraintDomains, Constraints, ConstraintLearning, etc. can seamlessly interact and integrate, fostering a cohesive development environment.
  
- **Generic Functions and Methods**: The package includes a set of generic functions and methods that are common across the JuliaConstraints ecosystem. This approach minimizes duplication and facilitates the extension of functionalities across different packages without requiring redundant code.
  
- **Interface for Learning and Application Transition**: One of the pivotal roles of ConstraintCommons.jl is to provide a shared interface that bridges the gap between learning packages (e.g., CompositionalNetworks, QUBOConstraints, and ConstraintTranslator) and basic functionality packages. This interface ensures that once a learning process is complete, the resulting models or solutions can be directly utilized with the basic packages, eliminating the need for users to manage multiple package dependencies actively.
  
- **Simplifying the User Experience**: By ensuring that learning outcomes are compatible with the fundamental packages for constraint programming, ConstraintCommons.jl simplifies the workflow for end-users. Once the learning aspect of problem modeling is completed, users can proceed with their projects relying solely on the basic packages, streamlining the development process and enhancing usability.
  
- **Impact on the JuliaConstraints Ecosystem**: ConstraintCommons.jl plays a critical role in the JuliaConstraints ecosystem by providing the foundational elements that enable package interoperability and efficient development workflows. Its design emphasizes ease of use and seamless transition between the learning phase of constraint programming and practical application, thereby enhancing productivity and reducing the complexity of developing constraint-based solutions.
  

## Parameters

This section of the package list or extract parameters based on the _XCSP3-core_ specifications. Note that, for the forseeable future, the default constraints specification will follow the XCSP3 format.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS-constraints-constraint_commons' href='#ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS</u></b> &mdash; <i>Constant</i>.




```julia
const USUAL_CONSTRAINT_PARAMETERS
```


List of usual constraints parameters (based on XCSP3-core constraints).

```julia
const USUAL_CONSTRAINT_PARAMETERS = [
    :bool,
    :dim,
    :id,
    :language,
    :op,
    :pair_vars,
    :val,
    :vals,
]
```



[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/parameters.jl#L1-L17)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.extract_parameters-constraints-constraint_commons' href='#ConstraintCommons.extract_parameters-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.extract_parameters</u></b> &mdash; <i>Function</i>.




```julia
extract_parameters(m::Union{Method, Function}; parameters)
```


Extracts the intersection between the `kargs` of `m` and `parameters` (defaults to `USUAL_CONSTRAINT_PARAMETERS`).


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/parameters.jl#L21-L25)



```julia
extract_parameters(s::Symbol, constraints_dict=USUAL_CONSTRAINTS; parameters=ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS)
```


Return the parameters of the constraint `s` in `constraints_dict`.

**Arguments**
- `s::Symbol`: the constraint name.
  
- `constraints_dict::Dict{Symbol,Constraint}`: dictionary of constraints. Default is `USUAL_CONSTRAINTS`.
  
- `parameters::Vector{Symbol}`: vector of parameters. Default is `ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS`.
  

**Example**

```julia
extract_parameters(:all_different)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/usual_constraints.jl#L44-L58)

</div>
<br>

### Performances – TODO {#Performances-–-TODO}

## Languages

_XCSP3_ considers two kinds of structure to recognize languages as core constraints: Automata, Multivalued Decision Diagrams (MMDs).
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.AbstractMultivaluedDecisionDiagram-constraints-constraint_commons' href='#ConstraintCommons.AbstractMultivaluedDecisionDiagram-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.AbstractMultivaluedDecisionDiagram</u></b> &mdash; <i>Type</i>.




```julia
AbstractMultivaluedDecisionDiagram
```


An abstract interface for Multivalued Decision Diagrams (MDD) used in Julia Constraints packages. Requirements:
- `accept(a<:AbstractMultivaluedDecisionDiagram, word)`: return `true` if `a` accepts `word`.
  


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/diagrams.jl#L1-L6)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.MDD-constraints-constraint_commons' href='#ConstraintCommons.MDD-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.MDD</u></b> &mdash; <i>Type</i>.




```julia
MDD{S,T} <: AbstractMultivaluedDecisionDiagram
```


A minimal implementation of a multivalued decision diagram structure.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/diagrams.jl#L9-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.AbstractAutomaton-constraints-constraint_commons' href='#ConstraintCommons.AbstractAutomaton-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.AbstractAutomaton</u></b> &mdash; <i>Type</i>.




```julia
AbstractAutomaton
```


An abstract interface for automata used in Julia Constraints packages. Requirements:
- `accept(a<:AbstractAutomaton, word)`: return `true` if `a` accepts `word`.
  


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L1-L6)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.Automaton-constraints-constraint_commons' href='#ConstraintCommons.Automaton-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.Automaton</u></b> &mdash; <i>Type</i>.




```julia
Automaton{S, T, F <: Union{S, Vector{S}, Set{S}}} <: AbstractAutomaton
```


A minimal implementation of a deterministic automaton structure.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L9-L13)

</div>
<br>

::: warning Missing docstring.

Missing docstring for `Automaton(a::MDD)`. Check Documenter&#39;s build log for details.

:::
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.accept-constraints-constraint_commons' href='#ConstraintCommons.accept-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.accept</u></b> &mdash; <i>Function</i>.




```julia
accept(a::Union{Automaton, MDD}, w)
```


Return `true` if `a` accepts the word `w` and `false` otherwise.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L29-L33)



```julia
ConstraintCommons.accept(fa::FakeAutomaton, word)
```


Implement the `accept` methods for `FakeAutomaton`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L41-L45)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.at_end-constraints-constraint_commons' href='#ConstraintCommons.at_end-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.at_end</u></b> &mdash; <i>Function</i>.




```julia
at_end(a::Automaton, s)
```


Internal method used by `accept` with `Automaton`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L20-L24)

</div>
<br>

### Performances – TODO {#Performances-–-TODO-2}

## Extensions

We extended some operations for `Nothing` and `Symbol`.

::: warning Missing docstring.

Missing docstring for `Base.:*`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `Base.in(::Any, ::Nothing)`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `Base.isempty(::Nothing)`. Check Documenter&#39;s build log for details.

:::

### Performances – TODO {#Performances-–-TODO-3}

## Sampling

During our constraint learning processes, we use sampling to efficiently make partial exploration of search spaces. Follows some sampling utilities.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.oversample-constraints-constraint_commons' href='#ConstraintCommons.oversample-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.oversample</u></b> &mdash; <i>Function</i>.




```julia
oversample(X, f)
```


Oversample elements of `X` until the boolean function `f` has as many `true` and `false` configurations.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/sampling.jl#L1-L5)

</div>
<br>

### Performances – TODO {#Performances-–-TODO-4}

## Extrema

We need to compute the difference between extrema of various kind of collections in several situations.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.δ_extrema-constraints-constraint_commons' href='#ConstraintCommons.δ_extrema-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.δ_extrema</u></b> &mdash; <i>Function</i>.




```julia
δ_extrema(X...)
```


Compute both the difference between the maximum and the minimum of over all the collections of `X`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/extrema.jl#L1-L4)

</div>
<br>

### Performances – TODO {#Performances-–-TODO-5}

## Dictionaries

We provide the everuseful `incsert!` function for dictionaries.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.incsert!-constraints-constraint_commons' href='#ConstraintCommons.incsert!-constraints-constraint_commons'>#</a>&nbsp;<b><u>ConstraintCommons.incsert!</u></b> &mdash; <i>Function</i>.




```julia
incsert!(d::Union{AbstractDict, AbstractDictionary}, ind, val = 1)
```


Increase or insert a counter in a dictionary-based collection. The counter insertion defaults to `val = 1`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/dictionaries.jl#L2-L6)

</div>
<br>

### Performances – TODO {#Performances-–-TODO-6}
