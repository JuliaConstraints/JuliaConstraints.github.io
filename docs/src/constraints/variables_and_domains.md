# Defining Variables and Exploring Domains

```@meta
CurrentModule = ConstraintDomains
```

*ConstraintDomains.jl* stands as a critical package within the *Julia Constraints* ecosystem, focusing on the definition and manipulation of variable domains that underpin the search spaces of constraint programming problems. This package provides the infrastructure necessary for specifying both discrete and continuous domains, thereby enabling a broad range of constraint programming applications.

## Key Features and Functionalities

- **AbstractDomain Super Type**: At the foundation of ConstraintDomains.jl is the AbstractDomain type, an abstract supertype for all domain types. Implementations of AbstractDomain must provide methods for checking membership (∈), generating random elements (rand), and determining the domain's size or range (length). These functionalities are essential for defining the behavior and properties of variable domains within constraint models.

- **Domain Types**: The package distinguishes between various domain types to cater to different needs:

  - *ContinuousDomain*: A supertype for domains representing continuous ranges of real numbers.
  - *DiscreteDomain*: Serves as a supertype for domains defined by discrete sets or ranges of numbers.
  - *EmptyDomain*: Handles yet-to-be-defined domains, facilitating dynamic problem formulation.
  - *Intervals and RangeDomain*: Represent continuous intervals and discrete ranges, respectively, providing flexible domain specification options.
- **Dynamic Domain Manipulation**: ConstraintDomains.jl supports dynamic changes to domains, allowing for the addition (add!) and deletion (delete!) of elements, crucial for problems where domain definitions evolve based on the search process or external inputs.

- **Exploration Settings and Methods**: The package offers ExploreSettings to configure the exploration of search spaces, including parameters for complete searches, maximum samplings, and solution limits. This feature is pivotal for tailoring the search process to the problem's characteristics and the computational resources available.

- **Support for Advanced Modeling**: Beyond basic domain definition and manipulation, ConstraintDomains.jl integrates with learning and parameter exploration tools. For instance, FakeAutomaton facilitates the generation of pseudo-automata for parameter exploration, while the package also provides functions for generating random parameters (generate_parameters), accessing domain internals (get_domain), and merging or intersecting domains (merge_domains, intersect_domains).

## Empowering Constraint Programming in Julia

ConstraintDomains.jl embodies the versatility and power of the JuliaConstraints ecosystem, offering users a comprehensive toolkit for defining and exploring variable domains. By abstracting complex domain manipulations and providing a rich set of functionalities, ConstraintDomains.jl enhances the ease and efficiency of modeling constraint programming problems. Whether for educational purposes, research, or practical applications, this package lays the groundwork for advanced problem-solving strategies in the realm of constraint programming.

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

## General

```@docs; canonical=false
Base.eltype
Base.convert
```

## Exploration

```@docs; canonical=false
ExploreSettings
_explore
explore
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
