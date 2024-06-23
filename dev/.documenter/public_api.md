
# Public API {#Public-API}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.Automaton-public_api' href='#ConstraintCommons.Automaton-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.Automaton</u></b> &mdash; <i>Type</i>.




```julia
Automaton{S, T, F <: Union{S, Vector{S}, Set{S}}} <: AbstractAutomaton
```


A minimal implementation of a deterministic automaton structure.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L9-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.MDD-public_api' href='#ConstraintCommons.MDD-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.MDD</u></b> &mdash; <i>Type</i>.




```julia
MDD{S,T} <: AbstractMultivaluedDecisionDiagram
```


A minimal implementation of a multivalued decision diagram structure.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/diagrams.jl#L9-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.accept-Tuple{Automaton, Any}-public_api' href='#ConstraintCommons.accept-Tuple{Automaton, Any}-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.accept</u></b> &mdash; <i>Method</i>.




```julia
accept(a::Union{Automaton, MDD}, w)
```


Return `true` if `a` accepts the word `w` and `false` otherwise.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L29-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.consin-Tuple{Any, Nothing}-public_api' href='#ConstraintCommons.consin-Tuple{Any, Nothing}-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.consin</u></b> &mdash; <i>Method</i>.




```julia
Base.in(::Any, ::Nothing)
```


Extends `Base.in` (or `∈`) when the set is `nothing`. Returns `false`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/nothing.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.extract_parameters-Tuple{Method}-public_api' href='#ConstraintCommons.extract_parameters-Tuple{Method}-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.extract_parameters</u></b> &mdash; <i>Method</i>.




```julia
extract_parameters(m::Union{Method, Function}; parameters)
```


Extracts the intersection between the `kargs` of `m` and `parameters` (defaults to `USUAL_CONSTRAINT_PARAMETERS`).


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/parameters.jl#L21-L25)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.incsert!-public_api' href='#ConstraintCommons.incsert!-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.incsert!</u></b> &mdash; <i>Function</i>.




```julia
incsert!(d::Union{AbstractDict, AbstractDictionary}, ind, val = 1)
```


Increase or insert a counter in a dictionary-based collection. The counter insertion defaults to `val = 1`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/dictionaries.jl#L2-L6)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.oversample-Tuple{Any, Any}-public_api' href='#ConstraintCommons.oversample-Tuple{Any, Any}-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.oversample</u></b> &mdash; <i>Method</i>.




```julia
oversample(X, f)
```


Oversample elements of `X` until the boolean function `f` has as many `true` and `false` configurations.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/sampling.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.symcon-public_api' href='#ConstraintCommons.symcon-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.symcon</u></b> &mdash; <i>Function</i>.




```julia
Base.:*(s1::Symbol, s2::Symbol, connector::AbstractString="_")
```


Extends `*` to `Symbol`s multiplication by connecting the symbols by an `_`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/symbols.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.δ_extrema-Tuple{Any}-public_api' href='#ConstraintCommons.δ_extrema-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.δ_extrema</u></b> &mdash; <i>Method</i>.




```julia
δ_extrema(X...)
```


Compute both the difference between the maximum and the minimum of over all the collections of `X`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/extrema.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.AbstractDomain-public_api' href='#ConstraintDomains.AbstractDomain-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.AbstractDomain</u></b> &mdash; <i>Type</i>.




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
<a id='ConstraintDomains.ContinuousDomain-public_api' href='#ConstraintDomains.ContinuousDomain-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.ContinuousDomain</u></b> &mdash; <i>Type</i>.




```julia
ContinuousDomain{T <: Real} <: AbstractDomain
```


An abstract supertype for all continuous domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.DiscreteDomain-public_api' href='#ConstraintDomains.DiscreteDomain-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.DiscreteDomain</u></b> &mdash; <i>Type</i>.




```julia
DiscreteDomain{T <: Number} <: AbstractDomain
```


An abstract supertype for discrete domains (set, range).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ExploreSettings-Tuple{Any}-public_api' href='#ConstraintDomains.ExploreSettings-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.ExploreSettings</u></b> &mdash; <i>Method</i>.




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
<a id='ConstraintDomains.RangeDomain-public_api' href='#ConstraintDomains.RangeDomain-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.RangeDomain</u></b> &mdash; <i>Type</i>.




```julia
RangeDomain
```


A discrete domain defined by a `range <: AbstractRange{Real}`. As ranges are immutable in Julia, changes in `RangeDomain` must use `set_domain!`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L16-L19)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.delete!-Tuple{ConstraintDomains.SetDomain, Any}-public_api' href='#Base.delete!-Tuple{ConstraintDomains.SetDomain, Any}-public_api'>#</a>&nbsp;<b><u>Base.delete!</u></b> &mdash; <i>Method</i>.




```julia
Base.delete!(d::SetDomain, value)(d::SetDomain, value)
```


Delete `value` from the list of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L76-L79)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.add!-Tuple{ConstraintDomains.SetDomain, Any}-public_api' href='#ConstraintDomains.add!-Tuple{ConstraintDomains.SetDomain, Any}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.add!</u></b> &mdash; <i>Method</i>.




```julia
add!(d::SetDomain, value)
```


Add `value` to the list of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L70-L73)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain-Tuple{Any}-public_api' href='#ConstraintDomains.domain-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Method</i>.




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
<a id='ConstraintDomains.domain-Tuple{}-public_api' href='#ConstraintDomains.domain-Tuple{}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Method</i>.




```julia
domain()
```


Construct an `EmptyDomain`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L20-L23)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain-Union{Tuple{Array{Intervals.Interval{T, L, R}, 1}}, Tuple{R}, Tuple{L}, Tuple{T}} where {T<:Real, L, R}-public_api' href='#ConstraintDomains.domain-Union{Tuple{Array{Intervals.Interval{T, L, R}, 1}}, Tuple{R}, Tuple{L}, Tuple{T}} where {T<:Real, L, R}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Method</i>.




```julia
domain(a::Tuple{T, Bool}, b::Tuple{T, Bool}) where {T <: Real}
domain(intervals::Vector{Tuple{Tuple{T, Bool},Tuple{T, Bool}}}) where {T <: Real}
```


Construct a domain of continuous interval(s).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L15-L19)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-Tuple{ConstraintDomains.Intervals}-public_api' href='#ConstraintDomains.domain_size-Tuple{ConstraintDomains.Intervals}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Method</i>.




```julia
domain_size(itv::Intervals)
```


Return the difference between the highest and lowest values in `itv`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L61-L64)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-Tuple{D} where D<:AbstractDomain-public_api' href='#ConstraintDomains.domain_size-Tuple{D} where D<:AbstractDomain-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Method</i>.




```julia
domain_size(d <: AbstractDomain)
```


Fallback method for `domain_size(d)` that return `length(d)`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L46-L49)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-Tuple{D} where D<:DiscreteDomain-public_api' href='#ConstraintDomains.domain_size-Tuple{D} where D<:DiscreteDomain-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Method</i>.




```julia
domain_size(d::D) where D <: DiscreteDomain
```


Return the maximum distance between two points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L64-L67)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.explore-Tuple{Any, Any}-public_api' href='#ConstraintDomains.explore-Tuple{Any, Any}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.explore</u></b> &mdash; <i>Method</i>.




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
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.generate_parameters-Tuple{AbstractDomain, Symbol}-public_api' href='#ConstraintDomains.generate_parameters-Tuple{AbstractDomain, Symbol}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.generate_parameters</u></b> &mdash; <i>Method</i>.




```julia
generate_parameters(d<:AbstractDomain, param)
```


Generates random parameters based on the domain `d` and the kind of parameters `param`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L128-L132)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.get_domain-Tuple{D} where D<:AbstractDomain-public_api' href='#ConstraintDomains.get_domain-Tuple{D} where D<:AbstractDomain-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.get_domain</u></b> &mdash; <i>Method</i>.




```julia
get_domain(::AbstractDomain)
```


Access the internal structure of any domain type.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L52-L55)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.intersect_domains-Union{Tuple{I2}, Tuple{I1}, Tuple{I1, I2}} where {I1<:Intervals.Interval, I2<:Intervals.Interval}-public_api' href='#ConstraintDomains.intersect_domains-Union{Tuple{I2}, Tuple{I1}, Tuple{I1, I2}} where {I1<:Intervals.Interval, I2<:Intervals.Interval}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.intersect_domains</u></b> &mdash; <i>Method</i>.




```julia
intersect_domains(d₁, d₂)
```


Compute the intersections of two domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L72-L76)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.merge_domains-Tuple{RangeDomain, RangeDomain}-public_api' href='#ConstraintDomains.merge_domains-Tuple{RangeDomain, RangeDomain}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.merge_domains</u></b> &mdash; <i>Method</i>.




```julia
merge_domains(d₁::AbstractDomain, d₂::AbstractDomain)
```


Merge two domains of same nature (discrete/contiuous).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L83-L87)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.to_domains-Tuple{Vector{Int64}}-public_api' href='#ConstraintDomains.to_domains-Tuple{Vector{Int64}}-public_api'>#</a>&nbsp;<b><u>ConstraintDomains.to_domains</u></b> &mdash; <i>Method</i>.




```julia
to_domains(args...)
```


Convert various arguments into valid domains format.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L58-L62)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.USUAL_CONSTRAINTS-public_api' href='#Constraints.USUAL_CONSTRAINTS-public_api'>#</a>&nbsp;<b><u>Constraints.USUAL_CONSTRAINTS</u></b> &mdash; <i>Constant</i>.




```julia
USUAL_CONSTRAINTS::Dict
```


Dictionary that contains all the usual constraints defined in Constraint.jl. It is based on XCSP3-core specifications available at https://arxiv.org/abs/2009.00514

Adding a new constraint is as simple as defining a new function with the same name as the constraint and using the `@usual` macro to define it. The macro will take care of adding the new constraint to the `USUAL_CONSTRAINTS` dictionary.

**Example**

```julia
@usual concept_all_different(x; vals=nothing) = xcsp_all_different(list=x, except=vals)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/usual_constraints.jl#L1-L11)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.USUAL_SYMMETRIES-public_api' href='#Constraints.USUAL_SYMMETRIES-public_api'>#</a>&nbsp;<b><u>Constraints.USUAL_SYMMETRIES</u></b> &mdash; <i>Constant</i>.




```julia
USUAL_SYMMETRIES
```


A Dictionary that contains the function to apply for each symmetry to avoid searching a whole space.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.Constraint-public_api' href='#Constraints.Constraint-public_api'>#</a>&nbsp;<b><u>Constraints.Constraint</u></b> &mdash; <i>Type</i>.




```julia
Constraint
```


Parametric structure with the following fields.
- `concept`: a Boolean function that, given an assignment `x`, outputs `true` if `x` satisfies the constraint, and `false` otherwise.
  
- `error`: a positive function that works as preferences over invalid assignments. Return `0.0` if the constraint is satisfied, and a strictly positive real otherwise.
  


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L7-L12)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.extract_parameters-public_api' href='#ConstraintCommons.extract_parameters-public_api'>#</a>&nbsp;<b><u>ConstraintCommons.extract_parameters</u></b> &mdash; <i>Function</i>.




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
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.args-Tuple{Constraint}-public_api' href='#Constraints.args-Tuple{Constraint}-public_api'>#</a>&nbsp;<b><u>Constraints.args</u></b> &mdash; <i>Method</i>.




```julia
args(c::Constraint)
```


Return the expected length restriction of the arguments in a constraint `c`. The value `nothing` indicates that any strictly positive number of value is accepted.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L62-L65)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.concept-Tuple{Constraint}-public_api' href='#Constraints.concept-Tuple{Constraint}-public_api'>#</a>&nbsp;<b><u>Constraints.concept</u></b> &mdash; <i>Method</i>.




```julia
concept(c::Constraint)
```


Return the concept (function) of constraint `c`.     concept(c::Constraint, x...; param = nothing) Apply the concept of `c` to values `x` and optionally `param`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L40-L45)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.concept-Tuple{Symbol, Vararg{Any}}-public_api' href='#Constraints.concept-Tuple{Symbol, Vararg{Any}}-public_api'>#</a>&nbsp;<b><u>Constraints.concept</u></b> &mdash; <i>Method</i>.




```julia
concept(s::Symbol, args...; kargs...)
```


Return the concept of the constraint `s` applied to `args` and `kargs`. This is a shortcut for `concept(USUAL_CONSTRAINTS[s])(args...; kargs...)`.

**Arguments**
- `s::Symbol`: the constraint name.
  
- `args...`: the arguments to apply the concept to.
  
- `kargs...`: the keyword arguments to apply the concept to.
  

**Example**

```julia
concept(:all_different, [1, 2, 3])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/usual_constraints.jl#L221-L235)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.constraints_descriptions-public_api' href='#Constraints.constraints_descriptions-public_api'>#</a>&nbsp;<b><u>Constraints.constraints_descriptions</u></b> &mdash; <i>Function</i>.




```julia
constraints_descriptions(C=USUAL_CONSTRAINTS)
```


Return a pretty table with the descriptions of the constraints in `C`.

**Arguments**
- `C::Dict{Symbol,Constraint}`: dictionary of constraints. Default is `USUAL_CONSTRAINTS`.
  

**Example**

```julia
constraints_descriptions()
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/usual_constraints.jl#L180-L192)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.constraints_parameters-public_api' href='#Constraints.constraints_parameters-public_api'>#</a>&nbsp;<b><u>Constraints.constraints_parameters</u></b> &mdash; <i>Function</i>.




```julia
constraints_parameters(C=USUAL_CONSTRAINTS)
```


Return a pretty table with the parameters of the constraints in `C`.

**Arguments**
- `C::Dict{Symbol,Constraint}`: dictionary of constraints. Default is `USUAL_CONSTRAINTS`.
  

**Example**

```julia
constraints_parameters()
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/usual_constraints.jl#L127-L139)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.describe-public_api' href='#Constraints.describe-public_api'>#</a>&nbsp;<b><u>Constraints.describe</u></b> &mdash; <i>Function</i>.




```julia
describe(constraints::Dict{Symbol,Constraint}=USUAL_CONSTRAINTS; width=150)
```


Return a pretty table with the description of the constraints in `constraints`.

**Arguments**
- `constraints::Dict{Symbol,Constraint}`: dictionary of constraints to describe. Default is `USUAL_CONSTRAINTS`.
  
- `width::Int`: width of the table.
  

**Example**

```julia
describe()
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/usual_constraints.jl#L14-L27)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.error_f-Tuple{Constraint}-public_api' href='#Constraints.error_f-Tuple{Constraint}-public_api'>#</a>&nbsp;<b><u>Constraints.error_f</u></b> &mdash; <i>Method</i>.




```julia
error_f(c::Constraint)
```


Return the error function of constraint `c`.     error_f(c::Constraint, x; param = nothing) Apply the error function of `c` to values `x` and optionally `param`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L51-L56)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.params_length-Tuple{Constraint}-public_api' href='#Constraints.params_length-Tuple{Constraint}-public_api'>#</a>&nbsp;<b><u>Constraints.params_length</u></b> &mdash; <i>Method</i>.




```julia
params_length(c::Constraint)
```


Return the expected length restriction of the arguments in a constraint `c`. The value `nothing` indicates that any strictly positive number of parameters is accepted.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L68-L71)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.symmetries-Tuple{Constraint}-public_api' href='#Constraints.symmetries-Tuple{Constraint}-public_api'>#</a>&nbsp;<b><u>Constraints.symmetries</u></b> &mdash; <i>Method</i>.




```julia
symmetries(c::Constraint)
```


Return the list of symmetries of `c`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L74-L77)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.Composition-Union{Tuple{F}, Tuple{F, Any}} where F<:Function-public_api' href='#CompositionalNetworks.Composition-Union{Tuple{F}, Tuple{F, Any}} where F<:Function-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.Composition</u></b> &mdash; <i>Method</i>.




```julia
Composition(f::F, symbols) where {F<:Function}
```


Construct a `Composition`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/composition.jl#L12-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.Composition-public_api' href='#CompositionalNetworks.Composition-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.Composition</u></b> &mdash; <i>Type</i>.




```julia
struct Composition{F<:Function}
```


Store the all the information of a composition learned by an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/composition.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ICN-public_api' href='#CompositionalNetworks.ICN-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.ICN</u></b> &mdash; <i>Type</i>.




```julia
ICN(; nvars, dom_size, param, transformation, arithmetic, aggregation, comparison)
```


Construct an Interpretable Compositional Network, with the following arguments:
- `nvars`: number of variable in the constraint
  
- `dom_size: maximum domain size of any variable in the constraint`
  
- `param`: optional parameter (default to `nothing`)
  
- `transformation`: a transformation layer (optional)
  
- `arithmetic`: a arithmetic layer (optional)
  
- `aggregation`: a aggregation layer (optional)
  
- `comparison`: a comparison layer (optional)
  


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/icn.jl#L1-L11)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.aggregation_layer-Tuple{}-public_api' href='#CompositionalNetworks.aggregation_layer-Tuple{}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.aggregation_layer</u></b> &mdash; <i>Method</i>.




```julia
aggregation_layer()
```


Generate the layer of aggregations of the ICN. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/layers/aggregation.jl#L13-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.arithmetic_layer-Tuple{}-public_api' href='#CompositionalNetworks.arithmetic_layer-Tuple{}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.arithmetic_layer</u></b> &mdash; <i>Method</i>.




```julia
arithmetic_layer()
```


Generate the layer of arithmetic operations of the ICN. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/layers/arithmetic.jl#L13-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.code-public_api' href='#CompositionalNetworks.code-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.code</u></b> &mdash; <i>Function</i>.




```julia
code(c::Composition, lang=:maths; name="composition")
```


Access the code of a composition `c` in a given language `lang`. The name of the generated method is optional.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/composition.jl#L22-L26)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.comparison_layer-public_api' href='#CompositionalNetworks.comparison_layer-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.comparison_layer</u></b> &mdash; <i>Function</i>.




```julia
comparison_layer(param = false)
```


Generate the layer of transformations functions of the ICN. Iff `param` value is set, also includes all the parametric comparison with that value. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/layers/comparison.jl#L83-L86)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.compose-public_api' href='#CompositionalNetworks.compose-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.compose</u></b> &mdash; <i>Function</i>.




```julia
compose(icn, weights=nothing)
```


Return a function composed by some of the operations of a given ICN. Can be applied to any vector of variables. If `weights` are given, will assign to `icn`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/composition.jl#L45-L48)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.compose_to_file!-Tuple{Any, Any, Any}-public_api' href='#CompositionalNetworks.compose_to_file!-Tuple{Any, Any, Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.compose_to_file!</u></b> &mdash; <i>Method</i>.




```julia
compose_to_file!(concept, name, path; domains, param = nothing, language = :Julia, search = :complete, global_iter = 10, local_iter = 100, metric = hamming, popSize = 200)
```


Explore, learn and compose a function and write it to a file.

**Arguments:**
- `concept`: the concept to learn
  
- `name`: the name to give to the constraint
  
- `path`: path of the output file
  

**Keywords arguments:**
- `domains`: domains that defines the search space
  
- `param`: an optional parameter of the constraint
  
- `language`: the language to export to, default to `:julia`
  
- `search`: either `:partial` or `:complete` search
  
- `global_iter`: number of learning iteration
  
- `local_iter`: number of generation in the genetic algorithm
  
- `metric`: the metric to measure the distance between a configuration and known solutions
  
- `popSize`: size of the population in the genetic algorithm
  


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/learn.jl#L77-L95)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.composition-Tuple{Composition}-public_api' href='#CompositionalNetworks.composition-Tuple{Composition}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.composition</u></b> &mdash; <i>Method</i>.




```julia
composition(c::Composition)
```


Access the actual method of an ICN composition `c`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/composition.jl#L31-L35)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.composition_to_file!-public_api' href='#CompositionalNetworks.composition_to_file!-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.composition_to_file!</u></b> &mdash; <i>Function</i>.




```julia
composition_to_file!(c::Composition, path, name, language=:Julia)
```


Write the composition code in a given `language` into a file at `path`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/composition.jl#L97-L101)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.explore_learn_compose-Tuple{Any, Any}-public_api' href='#CompositionalNetworks.explore_learn_compose-Tuple{Any, Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.explore_learn_compose</u></b> &mdash; <i>Method</i>.




```julia
explore_learn_compose(concept; domains, param = nothing, search = :complete, global_iter = 10, local_iter = 100, metric = hamming, popSize = 200, action = :composition)
```


Explore a search space, learn a composition from an ICN, and compose an error function.

**Arguments:**
- `concept`: the concept of the targeted constraint
  
- `domains`: domains of the variables that define the training space
  
- `param`: an optional parameter of the constraint
  
- `search`: either `flexible`,`:partial` or `:complete` search. Flexible search will use `search_limit` and `solutions_limit` to determine if the search space needs to be partially or completely explored
  
- `global_iter`: number of learning iteration
  
- `local_iter`: number of generation in the genetic algorithm
  
- `metric`: the metric to measure the distance between a configuration and known solutions
  
- `popSize`: size of the population in the genetic algorithm
  
- `action`: either `:symbols` to have a description of the composition or `:composition` to have the composed function itself
  


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/learn.jl#L35-L50)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.hamming-Tuple{Any, Any}-public_api' href='#CompositionalNetworks.hamming-Tuple{Any, Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.hamming</u></b> &mdash; <i>Method</i>.




```julia
hamming(x, X)
```


Compute the hamming distance of `x` over a collection of solutions `X`, i.e. the minimal number of variables to switch in `x`to reach a solution.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/metrics.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.lazy-Tuple{Vararg{Function}}-public_api' href='#CompositionalNetworks.lazy-Tuple{Vararg{Function}}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.lazy</u></b> &mdash; <i>Method</i>.




```julia
lazy(funcs::Function...)
```


Generate methods extended to a vector instead of one of its components. A function `f` should have the following signature: `f(i::Int, x::V)`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/utils.jl#L22-L25)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.lazy_param-Tuple{Vararg{Function}}-public_api' href='#CompositionalNetworks.lazy_param-Tuple{Vararg{Function}}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.lazy_param</u></b> &mdash; <i>Method</i>.




```julia
lazy_param(funcs::Function...)
```


Generate methods extended to a vector instead of one of its components. A function `f` should have the following signature: `f(i::Int, x::V; param)`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/utils.jl#L39-L42)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.learn_compose-Tuple{Any, Any, Any}-public_api' href='#CompositionalNetworks.learn_compose-Tuple{Any, Any, Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.learn_compose</u></b> &mdash; <i>Method</i>.




```julia
learn_compose(;
    nvars, dom_size, param=nothing, icn=ICN(nvars, dom_size, param),
    X, X_sols, global_iter=100, local_iter=100, metric=hamming, popSize=200
)
```


Create an ICN, optimize it, and return its composition.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/learn.jl#L7-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.manhattan-Tuple{Any, Any}-public_api' href='#CompositionalNetworks.manhattan-Tuple{Any, Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.manhattan</u></b> &mdash; <i>Method</i>.




```julia
manhattan(x, X)
```



[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/metrics.jl#L12-L14)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.minkowski-Tuple{Any, Any, Any}-public_api' href='#CompositionalNetworks.minkowski-Tuple{Any, Any, Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.minkowski</u></b> &mdash; <i>Method</i>.




```julia
minkowski(x, X, p)
```



[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/metrics.jl#L7-L9)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.nbits-Tuple{Any}-public_api' href='#CompositionalNetworks.nbits-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.nbits</u></b> &mdash; <i>Method</i>.




```julia
nbits(icn)
```


Return the expected number of bits of a viable weight of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/icn.jl#L43-L46)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.regularization-Tuple{Any}-public_api' href='#CompositionalNetworks.regularization-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.regularization</u></b> &mdash; <i>Method</i>.




```julia
regularization(icn)
```


Return the regularization value of an ICN weights, which is proportional to the normalized number of operations selected in the icn layers.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/icn.jl#L89-L92)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.show_layers-Tuple{Any}-public_api' href='#CompositionalNetworks.show_layers-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.show_layers</u></b> &mdash; <i>Method</i>.




```julia
show_layers(icn)
```


Return a formatted string with each layers in the icn.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/icn.jl#L81-L84)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.symbols-Tuple{Composition}-public_api' href='#CompositionalNetworks.symbols-Tuple{Composition}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.symbols</u></b> &mdash; <i>Method</i>.




```julia
symbols(c::Composition)
```


Output the composition as a layered collection of `Symbol`s.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/composition.jl#L38-L42)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.transformation_layer-public_api' href='#CompositionalNetworks.transformation_layer-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.transformation_layer</u></b> &mdash; <i>Function</i>.




```julia
transformation_layer(param = Vector{Symbol}())
```


Generate the layer of transformations functions of the ICN. Iff `param` value is non empty, also includes all the related parametric transformations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/layers/transformation.jl#L298-L301)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.weights!-Tuple{Any, Any}-public_api' href='#CompositionalNetworks.weights!-Tuple{Any, Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.weights!</u></b> &mdash; <i>Method</i>.




```julia
weights!(icn, weights)
```


Set the weights of an ICN with a `BitVector`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/icn.jl#L71-L74)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.weights-Tuple{Any}-public_api' href='#CompositionalNetworks.weights-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.weights</u></b> &mdash; <i>Method</i>.




```julia
weights(icn)
```


Access the current set of weights of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/icn.jl#L49-L52)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.weights_bias-Tuple{Any}-public_api' href='#CompositionalNetworks.weights_bias-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>CompositionalNetworks.weights_bias</u></b> &mdash; <i>Method</i>.




```julia
weights_bias(x)
```


A metric that bias `x` towards operations with a lower bit. Do not affect the main metric.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.7/src/metrics.jl#L17-L20)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.QUBO_linear_sum-Tuple{Any, Any}-public_api' href='#QUBOConstraints.QUBO_linear_sum-Tuple{Any, Any}-public_api'>#</a>&nbsp;<b><u>QUBOConstraints.QUBO_linear_sum</u></b> &mdash; <i>Method</i>.




```julia
QUBO_linear_sum(n, σ)
```


One valid QUBO matrix given `n` variables and parameter `σ` for the linear sum constraint.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/handmade/linear_sum.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.binarize-Union{Tuple{Vector{T}}, Tuple{T}, Tuple{Vector{T}, Any}} where T<:Number-public_api' href='#QUBOConstraints.binarize-Union{Tuple{Vector{T}}, Tuple{T}, Tuple{Vector{T}, Any}} where T<:Number-public_api'>#</a>&nbsp;<b><u>QUBOConstraints.binarize</u></b> &mdash; <i>Method</i>.




```julia
binarize(x[, domain]; binarization = :one_hot)
```


Binarize `x` following the `binarization` encoding. If `x` is a vector (instead of a number per say), `domain` is optional.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L12-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.debinarize-Tuple{Any}-public_api' href='#QUBOConstraints.debinarize-Tuple{Any}-public_api'>#</a>&nbsp;<b><u>QUBOConstraints.debinarize</u></b> &mdash; <i>Method</i>.




```julia
debinarize(x[, domain]; binarization = :one_hot)
```


Transform a binary vector into a number or a set of number. If `domain` is not given, it will compute a default value based on `binarization` and `x`.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L35-L39)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.is_valid-public_api' href='#QUBOConstraints.is_valid-public_api'>#</a>&nbsp;<b><u>QUBOConstraints.is_valid</u></b> &mdash; <i>Function</i>.




```julia
is_valid(x, encoding::Symbol = :none)
```


Check if `x` has a valid format for `encoding`.

For instance, if `encoding == :one_hot`, at most one bit of `x` can be set to 1.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L1-L7)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.train-Tuple-public_api' href='#QUBOConstraints.train-Tuple-public_api'>#</a>&nbsp;<b><u>QUBOConstraints.train</u></b> &mdash; <i>Method</i>.




```julia
train(args...)
```


Default `train` method for any AbstractOptimizer.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/learn.jl#L8-L12)

</div>
<br>
