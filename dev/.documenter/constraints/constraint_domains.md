
# ConstraintDomains.jl: Defining and Exploring Variable Domains within JuliaConstraints {#ConstraintDomains.jl:-Defining-and-Exploring-Variable-Domains-within-JuliaConstraints}



_ConstraintDomains.jl_ stands as a critical package within the _Julia Constraints_ ecosystem, focusing on the definition and manipulation of variable domains that underpin the search spaces of constraint programming problems. This package provides the infrastructure necessary for specifying both discrete and continuous domains, thereby enabling a broad range of constraint programming applications.

## Key Features and Functionalities {#Key-Features-and-Functionalities}
- **AbstractDomain Super Type**: At the foundation of ConstraintDomains.jl is the AbstractDomain type, an abstract supertype for all domain types. Implementations of AbstractDomain must provide methods for checking membership (∈), generating random elements (rand), and determining the domain&#39;s size or range (length). These functionalities are essential for defining the behavior and properties of variable domains within constraint models.
  
- **Domain Types**: The package distinguishes between various domain types to cater to different needs:
  - _ContinuousDomain_: A supertype for domains representing continuous ranges of real numbers.
    
  - _DiscreteDomain_: Serves as a supertype for domains defined by discrete sets or ranges of numbers.
    
  - _EmptyDomain_: Handles yet-to-be-defined domains, facilitating dynamic problem formulation.
    
  - _Intervals and RangeDomain_: Represent continuous intervals and discrete ranges, respectively, providing flexible domain specification options.
    
  
- **Dynamic Domain Manipulation**: ConstraintDomains.jl supports dynamic changes to domains, allowing for the addition (add!) and deletion (delete!) of elements, crucial for problems where domain definitions evolve based on the search process or external inputs.
  
- **Exploration Settings and Methods**: The package offers ExploreSettings to configure the exploration of search spaces, including parameters for complete searches, maximum samplings, and solution limits. This feature is pivotal for tailoring the search process to the problem&#39;s characteristics and the computational resources available.
  
- **Support for Advanced Modeling**: Beyond basic domain definition and manipulation, ConstraintDomains.jl integrates with learning and parameter exploration tools. For instance, FakeAutomaton facilitates the generation of pseudo-automata for parameter exploration, while the package also provides functions for generating random parameters (generate_parameters), accessing domain internals (get_domain), and merging or intersecting domains (merge_domains, intersect_domains).
  

## Empowering Constraint Programming in Julia {#Empowering-Constraint-Programming-in-Julia}

ConstraintDomains.jl embodies the versatility and power of the JuliaConstraints ecosystem, offering users a comprehensive toolkit for defining and exploring variable domains. By abstracting complex domain manipulations and providing a rich set of functionalities, ConstraintDomains.jl enhances the ease and efficiency of modeling constraint programming problems. Whether for educational purposes, research, or practical applications, this package lays the groundwork for advanced problem-solving strategies in the realm of constraint programming.

## Commons
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.AbstractDomain-constraints-constraint_domains' href='#ConstraintDomains.AbstractDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.AbstractDomain</u></b> &mdash; <i>Type</i>.




```julia
AbstractDomain
```


An abstract super type for any domain type. A domain type `D <: AbstractDomain` must implement the following methods to properly interface `AbstractDomain`.
- `Base.∈(val, ::D)`
  
- `Base.rand(::D)`
  
- `Base.length(::D)` that is the number of elements in a discrete domain, and the distance between bounds or similar for a continuous domain
  

Additionally, if the domain is used in a dynamic context, it can extend
- `add!(::D, args)`
  
- `delete!(::D, args)`
  

where `args` depends on `D`&#39;s structure


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L1-L11)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.EmptyDomain-constraints-constraint_domains' href='#ConstraintDomains.EmptyDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.EmptyDomain</u></b> &mdash; <i>Type</i>.




```julia
EmptyDomain
```


A struct to handle yet to be defined domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L14-L17)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain-constraints-constraint_domains' href='#ConstraintDomains.domain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Function</i>.




```julia
domain()
```


Construct an `EmptyDomain`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L20-L23)



```julia
domain(a::Tuple{T, Bool}, b::Tuple{T, Bool}) where {T <: Real}
domain(intervals::Vector{Tuple{Tuple{T, Bool},Tuple{T, Bool}}}) where {T <: Real}
```


Construct a domain of continuous interval(s).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L15-L19)



```julia
domain(values)
domain(range::R) where {T <: Real, R <: AbstractRange{T}}
```


Construct either a `SetDomain` or a `RangeDomain``.

```julia
d1 = domain(1:5)
d2 = domain([53.69, 89.2, 0.12])
d3 = domain([2//3, 89//123])
d4 = domain(4.3)
d5 = domain(1,42,86.9)
```



[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L31-L42)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-constraints-constraint_domains' href='#ConstraintDomains.domain_size-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Function</i>.




```julia
domain_size(d <: AbstractDomain)
```


Fallback method for `domain_size(d)` that return `length(d)`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L46-L49)



```julia
domain_size(itv::Intervals)
```


Return the difference between the highest and lowest values in `itv`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L61-L64)



```julia
domain_size(d::D) where D <: DiscreteDomain
```


Return the maximum distance between two points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L64-L67)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.get_domain-constraints-constraint_domains' href='#ConstraintDomains.get_domain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.get_domain</u></b> &mdash; <i>Function</i>.




```julia
get_domain(::AbstractDomain)
```


Access the internal structure of any domain type.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L52-L55)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.to_domains-constraints-constraint_domains' href='#ConstraintDomains.to_domains-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.to_domains</u></b> &mdash; <i>Function</i>.




```julia
to_domains(args...)
```


Convert various arguments into valid domains format.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L58-L62)

</div>
<br>

### Extension to Base module {#Extension-to-Base-module}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.in-constraints-constraint_domains' href='#Base.in-constraints-constraint_domains'>#</a>&nbsp;<b><u>Base.in</u></b> &mdash; <i>Function</i>.




```julia
x::Variable ∈ constraint
value ∈ x::Variable
```


Check if a variable `x` is restricted by a `constraint::Int`, or if a `value` belongs to the domain of `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L52-L56)



```julia
var::Int ∈ c::Constraint
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L43-L45)



```julia
Base.in(value, d <: AbstractDomain)
```


Fallback method for `value ∈ d` that returns `false`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L28-L31)



```julia
Base.in(x, itv::Intervals)
```


Return `true` if `x ∈ I` for any &#39;I ∈ itv`, false otherwise.`x ∈ I` is equivalent to
- `a < x < b` if `I = (a, b)`
  
- `a < x ≤ b` if `I = (a, b]`
  
- `a ≤ x < b` if `I = [a, b)`
  
- `a ≤ x ≤ b` if `I = [a, b]`
  


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L51-L58)



```julia
Base.in(value, d::D) where D <: DiscreteDomain
```


Return `true` if `value` is a point of `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L58-L61)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-constraints-constraint_domains' href='#Base.rand-constraints-constraint_domains'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Function</i>.




```julia
Base.rand(d::Union{Vector{D},Set{D}, D}) where {D<:AbstractDomain}
```


Extends `Base.rand` to (a collection of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L72-L76)



```julia
Base.rand(itv::Intervals)
Base.rand(itv::Intervals, i)
```


Return a random value from `itv`, specifically from the `i`th interval if `i` is specified.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L32-L36)



```julia
Base.rand(d::D) where D <: DiscreteDomain
```


Draw randomly a point in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L52-L55)



```julia
Base.rand(fa::FakeAutomaton)
```


Extends `Base.rand`. Currently simply returns `fa`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L135-L139)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.isempty-constraints-constraint_domains' href='#Base.isempty-constraints-constraint_domains'>#</a>&nbsp;<b><u>Base.isempty</u></b> &mdash; <i>Function</i>.




```julia
Base.isempty(d <: AbstractDomain)
```


Fallback method for `isempty(d)` that return `length(d) == 0` which default to `0`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L40-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-constraints-constraint_domains-2' href='#Base.rand-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Function</i>.




```julia
Base.rand(d::Union{Vector{D},Set{D}, D}) where {D<:AbstractDomain}
```


Extends `Base.rand` to (a collection of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L72-L76)



```julia
Base.rand(itv::Intervals)
Base.rand(itv::Intervals, i)
```


Return a random value from `itv`, specifically from the `i`th interval if `i` is specified.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L32-L36)



```julia
Base.rand(d::D) where D <: DiscreteDomain
```


Draw randomly a point in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L52-L55)



```julia
Base.rand(fa::FakeAutomaton)
```


Extends `Base.rand`. Currently simply returns `fa`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L135-L139)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.string-constraints-constraint_domains' href='#Base.string-constraints-constraint_domains'>#</a>&nbsp;<b><u>Base.string</u></b> &mdash; <i>Function</i>.




```julia
Base.string(D::Vector{<:AbstractDomain})
Base.string(d<:AbstractDomain)
```


Extends the `string` method to (a vector of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L87-L92)

</div>
<br>

### Performances

## Continuous
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ContinuousDomain-constraints-constraint_domains' href='#ConstraintDomains.ContinuousDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.ContinuousDomain</u></b> &mdash; <i>Type</i>.




```julia
ContinuousDomain{T <: Real} <: AbstractDomain
```


An abstract supertype for all continuous domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.Intervals-constraints-constraint_domains' href='#ConstraintDomains.Intervals-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.Intervals</u></b> &mdash; <i>Type</i>.




```julia
Intervals{T <: Real} <: ContinuousDomain{T}
```


An encapsuler to store a vector of `PatternFolds.Interval`. Dynamic changes to `Intervals` are not handled yet.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain-constraints-constraint_domains-2' href='#ConstraintDomains.domain-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Function</i>.




```julia
domain()
```


Construct an `EmptyDomain`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L20-L23)



```julia
domain(a::Tuple{T, Bool}, b::Tuple{T, Bool}) where {T <: Real}
domain(intervals::Vector{Tuple{Tuple{T, Bool},Tuple{T, Bool}}}) where {T <: Real}
```


Construct a domain of continuous interval(s).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L15-L19)



```julia
domain(values)
domain(range::R) where {T <: Real, R <: AbstractRange{T}}
```


Construct either a `SetDomain` or a `RangeDomain``.

```julia
d1 = domain(1:5)
d2 = domain([53.69, 89.2, 0.12])
d3 = domain([2//3, 89//123])
d4 = domain(4.3)
d5 = domain(1,42,86.9)
```



[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L31-L42)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-constraints-constraint_domains-2' href='#ConstraintDomains.domain_size-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Function</i>.




```julia
domain_size(d <: AbstractDomain)
```


Fallback method for `domain_size(d)` that return `length(d)`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L46-L49)



```julia
domain_size(itv::Intervals)
```


Return the difference between the highest and lowest values in `itv`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L61-L64)



```julia
domain_size(d::D) where D <: DiscreteDomain
```


Return the maximum distance between two points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L64-L67)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.merge_domains-constraints-constraint_domains' href='#ConstraintDomains.merge_domains-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.merge_domains</u></b> &mdash; <i>Function</i>.




```julia
merge_domains(d₁::AbstractDomain, d₂::AbstractDomain)
```


Merge two domains of same nature (discrete/contiuous).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L83-L87)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.intersect_domains-constraints-constraint_domains' href='#ConstraintDomains.intersect_domains-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.intersect_domains</u></b> &mdash; <i>Function</i>.




```julia
intersect_domains(d₁, d₂)
```


Compute the intersections of two domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L72-L76)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.intersect_domains!-constraints-constraint_domains' href='#ConstraintDomains.intersect_domains!-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.intersect_domains!</u></b> &mdash; <i>Function</i>.




```julia
intersect_domains!(is, i, new_itvls)
```


Compute the intersections of a domain with an interval and store the results in `new_itvls`.

**Arguments**
- `is::IS`: a collection of intervals.
  
- `i::I`: an interval.
  
- `new_itvls::Vector{I}`: a vector to store the results.
  


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L89-L98)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.size-constraints-constraint_domains' href='#ConstraintDomains.size-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.size</u></b> &mdash; <i>Function</i>.




```julia
Base.size(i::I) where {I <: Interval}
```


Defines the size of an interval as its `span`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L118-L122)

</div>
<br>

### Extension to Base module {#Extension-to-Base-module-2}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.length-constraints-constraint_domains' href='#Base.length-constraints-constraint_domains'>#</a>&nbsp;<b><u>Base.length</u></b> &mdash; <i>Function</i>.




```julia
length(layer)
```


Return the number of operations in a layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L17-L20)



```julia
Base.length(icn)
```


Return the total number of operations of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L37-L40)



```julia
Base.rand(d <: AbstractDomain)
```


Fallback method for `length(d)` that return `0`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L34-L37)



```julia
Base.length(itv::Intervals)
```


Return the sum of the length of each interval in `itv`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L26-L29)



```julia
Base.length(d::D) where D <: DiscreteDomain
```


Return the number of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L46-L49)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-constraints-constraint_domains-3' href='#Base.rand-constraints-constraint_domains-3'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Function</i>.




```julia
Base.rand(d::Union{Vector{D},Set{D}, D}) where {D<:AbstractDomain}
```


Extends `Base.rand` to (a collection of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L72-L76)



```julia
Base.rand(itv::Intervals)
Base.rand(itv::Intervals, i)
```


Return a random value from `itv`, specifically from the `i`th interval if `i` is specified.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L32-L36)



```julia
Base.rand(d::D) where D <: DiscreteDomain
```


Draw randomly a point in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L52-L55)



```julia
Base.rand(fa::FakeAutomaton)
```


Extends `Base.rand`. Currently simply returns `fa`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L135-L139)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.in-constraints-constraint_domains-2' href='#Base.in-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>Base.in</u></b> &mdash; <i>Function</i>.




```julia
x::Variable ∈ constraint
value ∈ x::Variable
```


Check if a variable `x` is restricted by a `constraint::Int`, or if a `value` belongs to the domain of `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L52-L56)



```julia
var::Int ∈ c::Constraint
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L43-L45)



```julia
Base.in(value, d <: AbstractDomain)
```


Fallback method for `value ∈ d` that returns `false`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L28-L31)



```julia
Base.in(x, itv::Intervals)
```


Return `true` if `x ∈ I` for any &#39;I ∈ itv`, false otherwise.`x ∈ I` is equivalent to
- `a < x < b` if `I = (a, b)`
  
- `a < x ≤ b` if `I = (a, b]`
  
- `a ≤ x < b` if `I = [a, b)`
  
- `a ≤ x ≤ b` if `I = [a, b]`
  


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L51-L58)



```julia
Base.in(value, d::D) where D <: DiscreteDomain
```


Return `true` if `value` is a point of `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L58-L61)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.string-constraints-constraint_domains-2' href='#Base.string-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>Base.string</u></b> &mdash; <i>Function</i>.




```julia
Base.string(D::Vector{<:AbstractDomain})
Base.string(d<:AbstractDomain)
```


Extends the `string` method to (a vector of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L87-L92)

</div>
<br>

## Discrete
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.DiscreteDomain-constraints-constraint_domains' href='#ConstraintDomains.DiscreteDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.DiscreteDomain</u></b> &mdash; <i>Type</i>.




```julia
DiscreteDomain{T <: Number} <: AbstractDomain
```


An abstract supertype for discrete domains (set, range).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.SetDomain-constraints-constraint_domains' href='#ConstraintDomains.SetDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.SetDomain</u></b> &mdash; <i>Type</i>.




```julia
SetDomain{T <: Number} <: DiscreteDomain{T}
```


Domain that stores discrete values as a set of (unordered) points.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.RangeDomain-constraints-constraint_domains' href='#ConstraintDomains.RangeDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.RangeDomain</u></b> &mdash; <i>Type</i>.




```julia
RangeDomain
```


A discrete domain defined by a `range <: AbstractRange{Real}`. As ranges are immutable in Julia, changes in `RangeDomain` must use `set_domain!`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L16-L19)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ArbitraryDomain-constraints-constraint_domains' href='#ConstraintDomains.ArbitraryDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.ArbitraryDomain</u></b> &mdash; <i>Function</i>.




```julia
ArbitraryDomain{T} <: DiscreteDomain{T}
```


A domain type that stores arbitrary values, possibly non numeric, of type `T`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L24-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain-constraints-constraint_domains-3' href='#ConstraintDomains.domain-constraints-constraint_domains-3'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Function</i>.




```julia
domain()
```


Construct an `EmptyDomain`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L20-L23)



```julia
domain(a::Tuple{T, Bool}, b::Tuple{T, Bool}) where {T <: Real}
domain(intervals::Vector{Tuple{Tuple{T, Bool},Tuple{T, Bool}}}) where {T <: Real}
```


Construct a domain of continuous interval(s).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L15-L19)



```julia
domain(values)
domain(range::R) where {T <: Real, R <: AbstractRange{T}}
```


Construct either a `SetDomain` or a `RangeDomain``.

```julia
d1 = domain(1:5)
d2 = domain([53.69, 89.2, 0.12])
d3 = domain([2//3, 89//123])
d4 = domain(4.3)
d5 = domain(1,42,86.9)
```



[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L31-L42)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-constraints-constraint_domains-3' href='#ConstraintDomains.domain_size-constraints-constraint_domains-3'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Function</i>.




```julia
domain_size(d <: AbstractDomain)
```


Fallback method for `domain_size(d)` that return `length(d)`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L46-L49)



```julia
domain_size(itv::Intervals)
```


Return the difference between the highest and lowest values in `itv`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L61-L64)



```julia
domain_size(d::D) where D <: DiscreteDomain
```


Return the maximum distance between two points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L64-L67)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.add!-constraints-constraint_domains' href='#ConstraintDomains.add!-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.add!</u></b> &mdash; <i>Function</i>.




```julia
add!(d::SetDomain, value)
```


Add `value` to the list of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L70-L73)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.merge_domains-constraints-constraint_domains-2' href='#ConstraintDomains.merge_domains-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>ConstraintDomains.merge_domains</u></b> &mdash; <i>Function</i>.




```julia
merge_domains(d₁::AbstractDomain, d₂::AbstractDomain)
```


Merge two domains of same nature (discrete/contiuous).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L83-L87)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.intersect_domains-constraints-constraint_domains-2' href='#ConstraintDomains.intersect_domains-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>ConstraintDomains.intersect_domains</u></b> &mdash; <i>Function</i>.




```julia
intersect_domains(d₁, d₂)
```


Compute the intersections of two domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L72-L76)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.size-constraints-constraint_domains-2' href='#ConstraintDomains.size-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>ConstraintDomains.size</u></b> &mdash; <i>Function</i>.




```julia
Base.size(i::I) where {I <: Interval}
```


Defines the size of an interval as its `span`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L118-L122)

</div>
<br>

### Extension to Base module {#Extension-to-Base-module-3}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.delete!-constraints-constraint_domains' href='#Base.delete!-constraints-constraint_domains'>#</a>&nbsp;<b><u>Base.delete!</u></b> &mdash; <i>Function</i>.




```julia
Base.delete!(d::SetDomain, value)(d::SetDomain, value)
```


Delete `value` from the list of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L76-L79)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.length-constraints-constraint_domains-2' href='#Base.length-constraints-constraint_domains-2'>#</a>&nbsp;<b><u>Base.length</u></b> &mdash; <i>Function</i>.




```julia
length(layer)
```


Return the number of operations in a layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L17-L20)



```julia
Base.length(icn)
```


Return the total number of operations of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L37-L40)



```julia
Base.rand(d <: AbstractDomain)
```


Fallback method for `length(d)` that return `0`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L34-L37)



```julia
Base.length(itv::Intervals)
```


Return the sum of the length of each interval in `itv`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L26-L29)



```julia
Base.length(d::D) where D <: DiscreteDomain
```


Return the number of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L46-L49)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-constraints-constraint_domains-4' href='#Base.rand-constraints-constraint_domains-4'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Function</i>.




```julia
Base.rand(d::Union{Vector{D},Set{D}, D}) where {D<:AbstractDomain}
```


Extends `Base.rand` to (a collection of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L72-L76)



```julia
Base.rand(itv::Intervals)
Base.rand(itv::Intervals, i)
```


Return a random value from `itv`, specifically from the `i`th interval if `i` is specified.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L32-L36)



```julia
Base.rand(d::D) where D <: DiscreteDomain
```


Draw randomly a point in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L52-L55)



```julia
Base.rand(fa::FakeAutomaton)
```


Extends `Base.rand`. Currently simply returns `fa`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L135-L139)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.in-constraints-constraint_domains-3' href='#Base.in-constraints-constraint_domains-3'>#</a>&nbsp;<b><u>Base.in</u></b> &mdash; <i>Function</i>.




```julia
x::Variable ∈ constraint
value ∈ x::Variable
```


Check if a variable `x` is restricted by a `constraint::Int`, or if a `value` belongs to the domain of `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L52-L56)



```julia
var::Int ∈ c::Constraint
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L43-L45)



```julia
Base.in(value, d <: AbstractDomain)
```


Fallback method for `value ∈ d` that returns `false`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L28-L31)



```julia
Base.in(x, itv::Intervals)
```


Return `true` if `x ∈ I` for any &#39;I ∈ itv`, false otherwise.`x ∈ I` is equivalent to
- `a < x < b` if `I = (a, b)`
  
- `a < x ≤ b` if `I = (a, b]`
  
- `a ≤ x < b` if `I = [a, b)`
  
- `a ≤ x ≤ b` if `I = [a, b]`
  


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L51-L58)



```julia
Base.in(value, d::D) where D <: DiscreteDomain
```


Return `true` if `value` is a point of `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L58-L61)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.string-constraints-constraint_domains-3' href='#Base.string-constraints-constraint_domains-3'>#</a>&nbsp;<b><u>Base.string</u></b> &mdash; <i>Function</i>.




```julia
Base.string(D::Vector{<:AbstractDomain})
Base.string(d<:AbstractDomain)
```


Extends the `string` method to (a vector of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L87-L92)

</div>
<br>

## General
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.eltype-constraints-constraint_domains' href='#Base.eltype-constraints-constraint_domains'>#</a>&nbsp;<b><u>Base.eltype</u></b> &mdash; <i>Function</i>.




```julia
Base.eltype(::AbstractDomain)
```


Extend `eltype` for domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/general.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.convert-constraints-constraint_domains' href='#Base.convert-constraints-constraint_domains'>#</a>&nbsp;<b><u>Base.convert</u></b> &mdash; <i>Function</i>.




```julia
Base.convert(::Type{Union{Intervals, RangeDomain}}, d::Union{Intervals, RangeDomain})
```


Extends `Base.convert` for domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/general.jl#L9-L13)

</div>
<br>

## Exploration
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ExploreSettings-constraints-constraint_domains' href='#ConstraintDomains.ExploreSettings-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.ExploreSettings</u></b> &mdash; <i>Type</i>.




```julia
ExploreSettings(
    domains;
    complete_search_limit = 10^6,
    max_samplings = sum(domain_size, domains),
    search = :flexible,
    solutions_limit = floor(Int, sqrt(max_samplings)),
)
```


Settings for the exploration of a search space composed by a collection of domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/explore.jl#L8-L18)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains._explore-constraints-constraint_domains' href='#ConstraintDomains._explore-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains._explore</u></b> &mdash; <i>Function</i>.




```julia
_explore(args...)
```


Internals of the `explore` function. Behavior is automatically adjusted on the kind of exploration: `:flexible`, `:complete`, `:partial`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/explore.jl#L29-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.explore-constraints-constraint_domains' href='#ConstraintDomains.explore-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.explore</u></b> &mdash; <i>Function</i>.




```julia
explore(domains, concept, param = nothing; search_limit = 1000, solutions_limit = 100)
```


Search (a part of) a search space and returns a pair of vector of configurations: `(solutions, non_solutions)`. If the search space size is over `search_limit`, then both `solutions` and `non_solutions` are limited to `solutions_limit`.

Beware that if the density of the solutions in the search space is low, `solutions_limit` needs to be reduced. This process will be automatic in the future (simple reinforcement learning).

**Arguments:**
- `domains`: a collection of domains
  
- `concept`: the concept of the targeted constraint
  
- `param`: an optional parameter of the constraint
  
- `sol_number`: the required number of solutions (half of the number of configurations), default to `100`
  


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/explore.jl#L66-L78)

</div>
<br>

## Parameters
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.BoolParameterDomain-constraints-constraint_domains' href='#ConstraintDomains.BoolParameterDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.BoolParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
BoolParameterDomain <: AbstractDomain
```


A domain to store boolean values. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.DimParameterDomain-constraints-constraint_domains' href='#ConstraintDomains.DimParameterDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.DimParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
DimParameterDomain <: AbstractDomain
```


A domain to store dimensions. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L10-L14)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.IdParameterDomain-constraints-constraint_domains' href='#ConstraintDomains.IdParameterDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.IdParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
IdParameterDomain <: AbstractDomain
```


A domain to store ids. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L21-L25)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.FakeAutomaton-constraints-constraint_domains' href='#ConstraintDomains.FakeAutomaton-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.FakeAutomaton</u></b> &mdash; <i>Type</i>.




```julia
FakeAutomaton{T} <: ConstraintCommons.AbstractAutomaton
```


A structure to generate pseudo automaton enough for parameter exploration.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L32-L36)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.accept-constraints-constraint_domains' href='#ConstraintCommons.accept-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintCommons.accept</u></b> &mdash; <i>Function</i>.




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
<a id='ConstraintDomains.fake_automaton-constraints-constraint_domains' href='#ConstraintDomains.fake_automaton-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.fake_automaton</u></b> &mdash; <i>Function</i>.




```julia
fake_automaton(d)
```


Construct a `FakeAutomaton`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L48-L52)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.LanguageParameterDomain-constraints-constraint_domains' href='#ConstraintDomains.LanguageParameterDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.LanguageParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
LanguageParameterDomain <: AbstractDomain
```


A domain to store languages. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L62-L66)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.OpParameterDomain-constraints-constraint_domains' href='#ConstraintDomains.OpParameterDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.OpParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
OpParameterDomain{T} <: AbstractDomain
```


A domain to store operators. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L75-L79)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.PairVarsParameterDomain-constraints-constraint_domains' href='#ConstraintDomains.PairVarsParameterDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.PairVarsParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
PairVarsParameterDomain{T} <: AbstractDomain
```


A domain to store values paired with variables. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L86-L90)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ValParameterDomain-constraints-constraint_domains' href='#ConstraintDomains.ValParameterDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.ValParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
ValParameterDomain{T} <: AbstractDomain
```


A domain to store one value. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L99-L103)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ValsParameterDomain-constraints-constraint_domains' href='#ConstraintDomains.ValsParameterDomain-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.ValsParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
ValsParameterDomain{T} <: AbstractDomain
```


A domain to store values. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L110-L114)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-constraints-constraint_domains-5' href='#Base.rand-constraints-constraint_domains-5'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Function</i>.




```julia
Base.rand(d::Union{Vector{D},Set{D}, D}) where {D<:AbstractDomain}
```


Extends `Base.rand` to (a collection of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L72-L76)



```julia
Base.rand(itv::Intervals)
Base.rand(itv::Intervals, i)
```


Return a random value from `itv`, specifically from the `i`th interval if `i` is specified.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L32-L36)



```julia
Base.rand(d::D) where D <: DiscreteDomain
```


Draw randomly a point in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L52-L55)



```julia
Base.rand(fa::FakeAutomaton)
```


Extends `Base.rand`. Currently simply returns `fa`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L135-L139)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.generate_parameters-constraints-constraint_domains' href='#ConstraintDomains.generate_parameters-constraints-constraint_domains'>#</a>&nbsp;<b><u>ConstraintDomains.generate_parameters</u></b> &mdash; <i>Function</i>.




```julia
generate_parameters(d<:AbstractDomain, param)
```


Generates random parameters based on the domain `d` and the kind of parameters `param`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L128-L132)

</div>
<br>
