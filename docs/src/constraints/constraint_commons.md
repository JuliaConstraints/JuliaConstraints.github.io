# ConstraintCommons.jl

*ConstraintCommons.jl* is an essential package within the *Julia Constraints* ecosystem designed to facilitate the development and interoperability of constraint programming solutions in Julia. It serves as a foundational layer that provides shared structures, abstract types, functions, and generic methods utilized by both basic feature packages and learning-oriented packages.

```@meta
CurrentModule = ConstraintCommons
```

## Key Features and Functionality
- **Shared Structures and Abstract Types**: ConstraintCommons.jl offers a collection of shared data structures and abstract types. This standardization is crucial for ensuring that packages such as ConstraintDomains, Constraints, ConstraintLearning, etc. can seamlessly interact and integrate, fostering a cohesive development environment.
- **Generic Functions and Methods**: The package includes a set of generic functions and methods that are common across the JuliaConstraints ecosystem. This approach minimizes duplication and facilitates the extension of functionalities across different packages without requiring redundant code.
- **Interface for Learning and Application Transition**: One of the pivotal roles of ConstraintCommons.jl is to provide a shared interface that bridges the gap between learning packages (e.g., CompositionalNetworks, QUBOConstraints, and ConstraintTranslator) and basic functionality packages. This interface ensures that once a learning process is complete, the resulting models or solutions can be directly utilized with the basic packages, eliminating the need for users to manage multiple package dependencies actively.
- **Simplifying the User Experience**: By ensuring that learning outcomes are compatible with the fundamental packages for constraint programming, ConstraintCommons.jl simplifies the workflow for end-users. Once the learning aspect of problem modeling is completed, users can proceed with their projects relying solely on the basic packages, streamlining the development process and enhancing usability.
- **Impact on the JuliaConstraints Ecosystem**: ConstraintCommons.jl plays a critical role in the JuliaConstraints ecosystem by providing the foundational elements that enable package interoperability and efficient development workflows. Its design emphasizes ease of use and seamless transition between the learning phase of constraint programming and practical application, thereby enhancing productivity and reducing the complexity of developing constraint-based solutions.

## Parameters

This section of the package list or extract parameters based on the *XCSP3-core* specifications. Note that, for the forseeable future, the default constraints specification will follow the XCSP3 format.

```@docs; canonical=false
USUAL_CONSTRAINT_PARAMETERS
extract_parameters
```

#### Performances -- TODO

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

#### Performances -- TODO

## Extensions

We extended some operations for `Nothing` and `Symbol`. 

```@docs; canonical=false
Base.:*
Base.in(::Any, ::Nothing)
Base.isempty(::Nothing)
```

#### Performances -- TODO

## Sampling

During our constraint learning processes, we use sampling to efficiently make partial exploration of search spaces. Follows some sampling utilities.

```@docs; canonical=false
oversample
```

#### Performances -- TODO

## Extrema

We need to compute the difference between extrema of various kind of collections in several situations.

```@docs; canonical=false
δ_extrema
```

#### Performances -- TODO

## Dictionaries

We provide the everuseful `incsert!` function for dictionaries. 

```@docs; canonical=false
incsert!
```

#### Performances -- TODO
