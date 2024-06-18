
# Full API {#Full-API}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS' href='#ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS'>#</a>&nbsp;<b><u>ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS</u></b> &mdash; <i>Constant</i>.




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
<a id='ConstraintCommons.AbstractAutomaton' href='#ConstraintCommons.AbstractAutomaton'>#</a>&nbsp;<b><u>ConstraintCommons.AbstractAutomaton</u></b> &mdash; <i>Type</i>.




```julia
AbstractAutomaton
```


An abstract interface for automata used in Julia Constraints packages. Requirements:
- `accept(a<:AbstractAutomaton, word)`: return `true` if `a` accepts `word`.
  


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L1-L6)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.AbstractMultivaluedDecisionDiagram' href='#ConstraintCommons.AbstractMultivaluedDecisionDiagram'>#</a>&nbsp;<b><u>ConstraintCommons.AbstractMultivaluedDecisionDiagram</u></b> &mdash; <i>Type</i>.




```julia
AbstractMultivaluedDecisionDiagram
```


An abstract interface for Multivalued Decision Diagrams (MDD) used in Julia Constraints packages. Requirements:
- `accept(a<:AbstractMultivaluedDecisionDiagram, word)`: return `true` if `a` accepts `word`.
  


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/diagrams.jl#L1-L6)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.Automaton' href='#ConstraintCommons.Automaton'>#</a>&nbsp;<b><u>ConstraintCommons.Automaton</u></b> &mdash; <i>Type</i>.




```julia
Automaton{S, T, F <: Union{S, Vector{S}, Set{S}}} <: AbstractAutomaton
```


A minimal implementation of a deterministic automaton structure.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L9-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.MDD' href='#ConstraintCommons.MDD'>#</a>&nbsp;<b><u>ConstraintCommons.MDD</u></b> &mdash; <i>Type</i>.




```julia
MDD{S,T} <: AbstractMultivaluedDecisionDiagram
```


A minimal implementation of a multivalued decision diagram structure.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/diagrams.jl#L9-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.accept-Tuple{Automaton, Any}' href='#ConstraintCommons.accept-Tuple{Automaton, Any}'>#</a>&nbsp;<b><u>ConstraintCommons.accept</u></b> &mdash; <i>Method</i>.




```julia
accept(a::Union{Automaton, MDD}, w)
```


Return `true` if `a` accepts the word `w` and `false` otherwise.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L29-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.at_end-Union{Tuple{T}, Tuple{S}, Tuple{Automaton{S, T, S}, Any}} where {S, T}' href='#ConstraintCommons.at_end-Union{Tuple{T}, Tuple{S}, Tuple{Automaton{S, T, S}, Any}} where {S, T}'>#</a>&nbsp;<b><u>ConstraintCommons.at_end</u></b> &mdash; <i>Method</i>.




```julia
at_end(a::Automaton, s)
```


Internal method used by `accept` with `Automaton`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L20-L24)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.consin-Tuple{Any, Nothing}' href='#ConstraintCommons.consin-Tuple{Any, Nothing}'>#</a>&nbsp;<b><u>ConstraintCommons.consin</u></b> &mdash; <i>Method</i>.




```julia
Base.in(::Any, ::Nothing)
```


Extends `Base.in` (or `∈`) when the set is `nothing`. Returns `false`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/nothing.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.extract_parameters-Tuple{Method}' href='#ConstraintCommons.extract_parameters-Tuple{Method}'>#</a>&nbsp;<b><u>ConstraintCommons.extract_parameters</u></b> &mdash; <i>Method</i>.




```julia
extract_parameters(m::Union{Method, Function}; parameters)
```


Extracts the intersection between the `kargs` of `m` and `parameters` (defaults to `USUAL_CONSTRAINT_PARAMETERS`).


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/parameters.jl#L21-L25)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.incsert!' href='#ConstraintCommons.incsert!'>#</a>&nbsp;<b><u>ConstraintCommons.incsert!</u></b> &mdash; <i>Function</i>.




```julia
incsert!(d::Union{AbstractDict, AbstractDictionary}, ind, val = 1)
```


Increase or insert a counter in a dictionary-based collection. The counter insertion defaults to `val = 1`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/dictionaries.jl#L2-L6)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.oversample-Tuple{Any, Any}' href='#ConstraintCommons.oversample-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintCommons.oversample</u></b> &mdash; <i>Method</i>.




```julia
oversample(X, f)
```


Oversample elements of `X` until the boolean function `f` has as many `true` and `false` configurations.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/sampling.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.symcon' href='#ConstraintCommons.symcon'>#</a>&nbsp;<b><u>ConstraintCommons.symcon</u></b> &mdash; <i>Function</i>.




```julia
Base.:*(s1::Symbol, s2::Symbol, connector::AbstractString="_")
```


Extends `*` to `Symbol`s multiplication by connecting the symbols by an `_`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/symbols.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.δ_extrema-Tuple{Any}' href='#ConstraintCommons.δ_extrema-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintCommons.δ_extrema</u></b> &mdash; <i>Method</i>.




```julia
δ_extrema(X...)
```


Compute both the difference between the maximum and the minimum of over all the collections of `X`.


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/extrema.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.AbstractDomain' href='#ConstraintDomains.AbstractDomain'>#</a>&nbsp;<b><u>ConstraintDomains.AbstractDomain</u></b> &mdash; <i>Type</i>.




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
<a id='ConstraintDomains.BoolParameterDomain' href='#ConstraintDomains.BoolParameterDomain'>#</a>&nbsp;<b><u>ConstraintDomains.BoolParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
BoolParameterDomain <: AbstractDomain
```


A domain to store boolean values. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ContinuousDomain' href='#ConstraintDomains.ContinuousDomain'>#</a>&nbsp;<b><u>ConstraintDomains.ContinuousDomain</u></b> &mdash; <i>Type</i>.




```julia
ContinuousDomain{T <: Real} <: AbstractDomain
```


An abstract supertype for all continuous domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.DimParameterDomain' href='#ConstraintDomains.DimParameterDomain'>#</a>&nbsp;<b><u>ConstraintDomains.DimParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
DimParameterDomain <: AbstractDomain
```


A domain to store dimensions. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L10-L14)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.DiscreteDomain' href='#ConstraintDomains.DiscreteDomain'>#</a>&nbsp;<b><u>ConstraintDomains.DiscreteDomain</u></b> &mdash; <i>Type</i>.




```julia
DiscreteDomain{T <: Number} <: AbstractDomain
```


An abstract supertype for discrete domains (set, range).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.EmptyDomain' href='#ConstraintDomains.EmptyDomain'>#</a>&nbsp;<b><u>ConstraintDomains.EmptyDomain</u></b> &mdash; <i>Type</i>.




```julia
EmptyDomain
```


A struct to handle yet to be defined domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L14-L17)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ExploreSettings-Tuple{Any}' href='#ConstraintDomains.ExploreSettings-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintDomains.ExploreSettings</u></b> &mdash; <i>Method</i>.




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
<a id='ConstraintDomains.FakeAutomaton' href='#ConstraintDomains.FakeAutomaton'>#</a>&nbsp;<b><u>ConstraintDomains.FakeAutomaton</u></b> &mdash; <i>Type</i>.




```julia
FakeAutomaton{T} <: ConstraintCommons.AbstractAutomaton
```


A structure to generate pseudo automaton enough for parameter exploration.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L32-L36)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.IdParameterDomain' href='#ConstraintDomains.IdParameterDomain'>#</a>&nbsp;<b><u>ConstraintDomains.IdParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
IdParameterDomain <: AbstractDomain
```


A domain to store ids. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L21-L25)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.Intervals' href='#ConstraintDomains.Intervals'>#</a>&nbsp;<b><u>ConstraintDomains.Intervals</u></b> &mdash; <i>Type</i>.




```julia
Intervals{T <: Real} <: ContinuousDomain{T}
```


An encapsuler to store a vector of `PatternFolds.Interval`. Dynamic changes to `Intervals` are not handled yet.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.LanguageParameterDomain' href='#ConstraintDomains.LanguageParameterDomain'>#</a>&nbsp;<b><u>ConstraintDomains.LanguageParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
LanguageParameterDomain <: AbstractDomain
```


A domain to store languages. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L62-L66)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.OpParameterDomain' href='#ConstraintDomains.OpParameterDomain'>#</a>&nbsp;<b><u>ConstraintDomains.OpParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
OpParameterDomain{T} <: AbstractDomain
```


A domain to store operators. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L75-L79)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.PairVarsParameterDomain' href='#ConstraintDomains.PairVarsParameterDomain'>#</a>&nbsp;<b><u>ConstraintDomains.PairVarsParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
PairVarsParameterDomain{T} <: AbstractDomain
```


A domain to store values paired with variables. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L86-L90)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.RangeDomain' href='#ConstraintDomains.RangeDomain'>#</a>&nbsp;<b><u>ConstraintDomains.RangeDomain</u></b> &mdash; <i>Type</i>.




```julia
RangeDomain
```


A discrete domain defined by a `range <: AbstractRange{Real}`. As ranges are immutable in Julia, changes in `RangeDomain` must use `set_domain!`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L16-L19)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.SetDomain' href='#ConstraintDomains.SetDomain'>#</a>&nbsp;<b><u>ConstraintDomains.SetDomain</u></b> &mdash; <i>Type</i>.




```julia
SetDomain{T <: Number} <: DiscreteDomain{T}
```


Domain that stores discrete values as a set of (unordered) points.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ValParameterDomain' href='#ConstraintDomains.ValParameterDomain'>#</a>&nbsp;<b><u>ConstraintDomains.ValParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
ValParameterDomain{T} <: AbstractDomain
```


A domain to store one value. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L99-L103)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ValsParameterDomain' href='#ConstraintDomains.ValsParameterDomain'>#</a>&nbsp;<b><u>ConstraintDomains.ValsParameterDomain</u></b> &mdash; <i>Type</i>.




```julia
ValsParameterDomain{T} <: AbstractDomain
```


A domain to store values. It is used to generate random parameters.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L110-L114)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.convert-Union{Tuple{T}, Tuple{Type{ConstraintDomains.Intervals}, RangeDomain{T, R} where R<:AbstractRange{T}}} where T<:Real' href='#Base.convert-Union{Tuple{T}, Tuple{Type{ConstraintDomains.Intervals}, RangeDomain{T, R} where R<:AbstractRange{T}}} where T<:Real'>#</a>&nbsp;<b><u>Base.convert</u></b> &mdash; <i>Method</i>.




```julia
Base.convert(::Type{Union{Intervals, RangeDomain}}, d::Union{Intervals, RangeDomain})
```


Extends `Base.convert` for domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/general.jl#L9-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.delete!-Tuple{ConstraintDomains.SetDomain, Any}' href='#Base.delete!-Tuple{ConstraintDomains.SetDomain, Any}'>#</a>&nbsp;<b><u>Base.delete!</u></b> &mdash; <i>Method</i>.




```julia
Base.delete!(d::SetDomain, value)(d::SetDomain, value)
```


Delete `value` from the list of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L76-L79)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.eltype-Union{Tuple{D}, Tuple{T}} where {T, D<:Union{ContinuousDomain{T}, DiscreteDomain{T}}}' href='#Base.eltype-Union{Tuple{D}, Tuple{T}} where {T, D<:Union{ContinuousDomain{T}, DiscreteDomain{T}}}'>#</a>&nbsp;<b><u>Base.eltype</u></b> &mdash; <i>Method</i>.




```julia
Base.eltype(::AbstractDomain)
```


Extend `eltype` for domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/general.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.in-Tuple{Any, ConstraintDomains.Intervals}' href='#Base.in-Tuple{Any, ConstraintDomains.Intervals}'>#</a>&nbsp;<b><u>Base.in</u></b> &mdash; <i>Method</i>.




```julia
Base.in(x, itv::Intervals)
```


Return `true` if `x ∈ I` for any &#39;I ∈ itv`, false otherwise.`x ∈ I` is equivalent to
- `a < x < b` if `I = (a, b)`
  
- `a < x ≤ b` if `I = (a, b]`
  
- `a ≤ x < b` if `I = [a, b)`
  
- `a ≤ x ≤ b` if `I = [a, b]`
  


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L51-L58)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.in-Union{Tuple{D}, Tuple{Any, D}} where D<:AbstractDomain' href='#Base.in-Union{Tuple{D}, Tuple{Any, D}} where D<:AbstractDomain'>#</a>&nbsp;<b><u>Base.in</u></b> &mdash; <i>Method</i>.




```julia
Base.in(value, d <: AbstractDomain)
```


Fallback method for `value ∈ d` that returns `false`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L28-L31)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.in-Union{Tuple{D}, Tuple{Any, D}} where D<:DiscreteDomain' href='#Base.in-Union{Tuple{D}, Tuple{Any, D}} where D<:DiscreteDomain'>#</a>&nbsp;<b><u>Base.in</u></b> &mdash; <i>Method</i>.




```julia
Base.in(value, d::D) where D <: DiscreteDomain
```


Return `true` if `value` is a point of `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L58-L61)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.isempty-Tuple{D} where D<:AbstractDomain' href='#Base.isempty-Tuple{D} where D<:AbstractDomain'>#</a>&nbsp;<b><u>Base.isempty</u></b> &mdash; <i>Method</i>.




```julia
Base.isempty(d <: AbstractDomain)
```


Fallback method for `isempty(d)` that return `length(d) == 0` which default to `0`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L40-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.length-Tuple{ConstraintDomains.Intervals}' href='#Base.length-Tuple{ConstraintDomains.Intervals}'>#</a>&nbsp;<b><u>Base.length</u></b> &mdash; <i>Method</i>.




```julia
Base.length(itv::Intervals)
```


Return the sum of the length of each interval in `itv`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L26-L29)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.length-Tuple{D} where D<:AbstractDomain' href='#Base.length-Tuple{D} where D<:AbstractDomain'>#</a>&nbsp;<b><u>Base.length</u></b> &mdash; <i>Method</i>.




```julia
Base.rand(d <: AbstractDomain)
```


Fallback method for `length(d)` that return `0`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L34-L37)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.length-Tuple{D} where D<:DiscreteDomain' href='#Base.length-Tuple{D} where D<:DiscreteDomain'>#</a>&nbsp;<b><u>Base.length</u></b> &mdash; <i>Method</i>.




```julia
Base.length(d::D) where D <: DiscreteDomain
```


Return the number of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L46-L49)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-Tuple{AbstractDomain}' href='#Base.rand-Tuple{AbstractDomain}'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Method</i>.




```julia
Base.rand(d::Union{Vector{D},Set{D}, D}) where {D<:AbstractDomain}
```


Extends `Base.rand` to (a collection of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L72-L76)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-Tuple{ConstraintDomains.FakeAutomaton}' href='#Base.rand-Tuple{ConstraintDomains.FakeAutomaton}'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Method</i>.




```julia
Base.rand(fa::FakeAutomaton)
```


Extends `Base.rand`. Currently simply returns `fa`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L135-L139)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-Tuple{ConstraintDomains.Intervals, Int64}' href='#Base.rand-Tuple{ConstraintDomains.Intervals, Int64}'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Method</i>.




```julia
Base.rand(itv::Intervals)
Base.rand(itv::Intervals, i)
```


Return a random value from `itv`, specifically from the `i`th interval if `i` is specified.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L32-L36)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.rand-Tuple{D} where D<:DiscreteDomain' href='#Base.rand-Tuple{D} where D<:DiscreteDomain'>#</a>&nbsp;<b><u>Base.rand</u></b> &mdash; <i>Method</i>.




```julia
Base.rand(d::D) where D <: DiscreteDomain
```


Draw randomly a point in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L52-L55)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.string-Tuple{Vector{<:AbstractDomain}}' href='#Base.string-Tuple{Vector{<:AbstractDomain}}'>#</a>&nbsp;<b><u>Base.string</u></b> &mdash; <i>Method</i>.




```julia
Base.string(D::Vector{<:AbstractDomain})
Base.string(d<:AbstractDomain)
```


Extends the `string` method to (a vector of) domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L87-L92)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintCommons.accept-Tuple{ConstraintDomains.FakeAutomaton, Any}' href='#ConstraintCommons.accept-Tuple{ConstraintDomains.FakeAutomaton, Any}'>#</a>&nbsp;<b><u>ConstraintCommons.accept</u></b> &mdash; <i>Method</i>.




```julia
ConstraintCommons.accept(fa::FakeAutomaton, word)
```


Implement the `accept` methods for `FakeAutomaton`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L41-L45)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.ArbitraryDomain-Tuple{Any}' href='#ConstraintDomains.ArbitraryDomain-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintDomains.ArbitraryDomain</u></b> &mdash; <i>Method</i>.




```julia
ArbitraryDomain{T} <: DiscreteDomain{T}
```


A domain type that stores arbitrary values, possibly non numeric, of type `T`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L24-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains._explore-Tuple{Any, Any, Any, Val{:partial}}' href='#ConstraintDomains._explore-Tuple{Any, Any, Any, Val{:partial}}'>#</a>&nbsp;<b><u>ConstraintDomains._explore</u></b> &mdash; <i>Method</i>.




```julia
_explore(args...)
```


Internals of the `explore` function. Behavior is automatically adjusted on the kind of exploration: `:flexible`, `:complete`, `:partial`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/explore.jl#L29-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.add!-Tuple{ConstraintDomains.SetDomain, Any}' href='#ConstraintDomains.add!-Tuple{ConstraintDomains.SetDomain, Any}'>#</a>&nbsp;<b><u>ConstraintDomains.add!</u></b> &mdash; <i>Method</i>.




```julia
add!(d::SetDomain, value)
```


Add `value` to the list of points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L70-L73)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain-Tuple{Any}' href='#ConstraintDomains.domain-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Method</i>.




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
<a id='ConstraintDomains.domain-Tuple{}' href='#ConstraintDomains.domain-Tuple{}'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Method</i>.




```julia
domain()
```


Construct an `EmptyDomain`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L20-L23)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain-Union{Tuple{Array{Intervals.Interval{T, L, R}, 1}}, Tuple{R}, Tuple{L}, Tuple{T}} where {T<:Real, L, R}' href='#ConstraintDomains.domain-Union{Tuple{Array{Intervals.Interval{T, L, R}, 1}}, Tuple{R}, Tuple{L}, Tuple{T}} where {T<:Real, L, R}'>#</a>&nbsp;<b><u>ConstraintDomains.domain</u></b> &mdash; <i>Method</i>.




```julia
domain(a::Tuple{T, Bool}, b::Tuple{T, Bool}) where {T <: Real}
domain(intervals::Vector{Tuple{Tuple{T, Bool},Tuple{T, Bool}}}) where {T <: Real}
```


Construct a domain of continuous interval(s).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L15-L19)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-Tuple{ConstraintDomains.Intervals}' href='#ConstraintDomains.domain_size-Tuple{ConstraintDomains.Intervals}'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Method</i>.




```julia
domain_size(itv::Intervals)
```


Return the difference between the highest and lowest values in `itv`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L61-L64)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-Tuple{D} where D<:AbstractDomain' href='#ConstraintDomains.domain_size-Tuple{D} where D<:AbstractDomain'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Method</i>.




```julia
domain_size(d <: AbstractDomain)
```


Fallback method for `domain_size(d)` that return `length(d)`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L46-L49)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.domain_size-Tuple{D} where D<:DiscreteDomain' href='#ConstraintDomains.domain_size-Tuple{D} where D<:DiscreteDomain'>#</a>&nbsp;<b><u>ConstraintDomains.domain_size</u></b> &mdash; <i>Method</i>.




```julia
domain_size(d::D) where D <: DiscreteDomain
```


Return the maximum distance between two points in `d`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L64-L67)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.explore-Tuple{Any, Any}' href='#ConstraintDomains.explore-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintDomains.explore</u></b> &mdash; <i>Method</i>.




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
<a id='ConstraintDomains.fake_automaton-Tuple{Any}' href='#ConstraintDomains.fake_automaton-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintDomains.fake_automaton</u></b> &mdash; <i>Method</i>.




```julia
fake_automaton(d)
```


Construct a `FakeAutomaton`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L48-L52)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.generate_parameters-Tuple{AbstractDomain, Symbol}' href='#ConstraintDomains.generate_parameters-Tuple{AbstractDomain, Symbol}'>#</a>&nbsp;<b><u>ConstraintDomains.generate_parameters</u></b> &mdash; <i>Method</i>.




```julia
generate_parameters(d<:AbstractDomain, param)
```


Generates random parameters based on the domain `d` and the kind of parameters `param`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L128-L132)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.get_domain-Tuple{D} where D<:AbstractDomain' href='#ConstraintDomains.get_domain-Tuple{D} where D<:AbstractDomain'>#</a>&nbsp;<b><u>ConstraintDomains.get_domain</u></b> &mdash; <i>Method</i>.




```julia
get_domain(::AbstractDomain)
```


Access the internal structure of any domain type.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L52-L55)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.intersect_domains!-Union{Tuple{I}, Tuple{IS}, Tuple{IS, I, Any}} where {IS<:ConstraintDomains.Intervals, I<:Intervals.Interval}' href='#ConstraintDomains.intersect_domains!-Union{Tuple{I}, Tuple{IS}, Tuple{IS, I, Any}} where {IS<:ConstraintDomains.Intervals, I<:Intervals.Interval}'>#</a>&nbsp;<b><u>ConstraintDomains.intersect_domains!</u></b> &mdash; <i>Method</i>.




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
<a id='ConstraintDomains.intersect_domains-Union{Tuple{I2}, Tuple{I1}, Tuple{I1, I2}} where {I1<:Intervals.Interval, I2<:Intervals.Interval}' href='#ConstraintDomains.intersect_domains-Union{Tuple{I2}, Tuple{I1}, Tuple{I1, I2}} where {I1<:Intervals.Interval, I2<:Intervals.Interval}'>#</a>&nbsp;<b><u>ConstraintDomains.intersect_domains</u></b> &mdash; <i>Method</i>.




```julia
intersect_domains(d₁, d₂)
```


Compute the intersections of two domains.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L72-L76)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.merge_domains-Tuple{RangeDomain, RangeDomain}' href='#ConstraintDomains.merge_domains-Tuple{RangeDomain, RangeDomain}'>#</a>&nbsp;<b><u>ConstraintDomains.merge_domains</u></b> &mdash; <i>Method</i>.




```julia
merge_domains(d₁::AbstractDomain, d₂::AbstractDomain)
```


Merge two domains of same nature (discrete/contiuous).


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/discrete.jl#L83-L87)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.size-Tuple{I} where I<:Intervals.Interval' href='#ConstraintDomains.size-Tuple{I} where I<:Intervals.Interval'>#</a>&nbsp;<b><u>ConstraintDomains.size</u></b> &mdash; <i>Method</i>.




```julia
Base.size(i::I) where {I <: Interval}
```


Defines the size of an interval as its `span`.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/continuous.jl#L118-L122)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintDomains.to_domains-Tuple{Vector{Int64}}' href='#ConstraintDomains.to_domains-Tuple{Vector{Int64}}'>#</a>&nbsp;<b><u>ConstraintDomains.to_domains</u></b> &mdash; <i>Method</i>.




```julia
to_domains(args...)
```


Convert various arguments into valid domains format.


[source](https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/common.jl#L58-L62)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.USUAL_CONSTRAINTS' href='#Constraints.USUAL_CONSTRAINTS'>#</a>&nbsp;<b><u>Constraints.USUAL_CONSTRAINTS</u></b> &mdash; <i>Constant</i>.




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
<a id='Constraints.USUAL_SYMMETRIES' href='#Constraints.USUAL_SYMMETRIES'>#</a>&nbsp;<b><u>Constraints.USUAL_SYMMETRIES</u></b> &mdash; <i>Constant</i>.




```julia
USUAL_SYMMETRIES
```


A Dictionary that contains the function to apply for each symmetry to avoid searching a whole space.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.Constraint' href='#Constraints.Constraint'>#</a>&nbsp;<b><u>Constraints.Constraint</u></b> &mdash; <i>Type</i>.




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
<a id='ConstraintCommons.extract_parameters' href='#ConstraintCommons.extract_parameters'>#</a>&nbsp;<b><u>ConstraintCommons.extract_parameters</u></b> &mdash; <i>Function</i>.




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
<a id='Constraints.args-Tuple{Constraint}' href='#Constraints.args-Tuple{Constraint}'>#</a>&nbsp;<b><u>Constraints.args</u></b> &mdash; <i>Method</i>.




```julia
args(c::Constraint)
```


Return the expected length restriction of the arguments in a constraint `c`. The value `nothing` indicates that any strictly positive number of value is accepted.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L62-L65)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.concept-Tuple{Constraint}' href='#Constraints.concept-Tuple{Constraint}'>#</a>&nbsp;<b><u>Constraints.concept</u></b> &mdash; <i>Method</i>.




```julia
concept(c::Constraint)
```


Return the concept (function) of constraint `c`.     concept(c::Constraint, x...; param = nothing) Apply the concept of `c` to values `x` and optionally `param`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L40-L45)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.concept-Tuple{Symbol, Vararg{Any}}' href='#Constraints.concept-Tuple{Symbol, Vararg{Any}}'>#</a>&nbsp;<b><u>Constraints.concept</u></b> &mdash; <i>Method</i>.




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
<a id='Constraints.concept_vs_error-Tuple{Any, Any, Vararg{Any}}' href='#Constraints.concept_vs_error-Tuple{Any, Any, Vararg{Any}}'>#</a>&nbsp;<b><u>Constraints.concept_vs_error</u></b> &mdash; <i>Method</i>.




```julia
concept_vs_error(c, e, args...; kargs...)
```


Compare the results of a concept function and an error function for the same inputs. It is mainly used for testing purposes.

**Arguments**
- `c`: The concept function.
  
- `e`: The error function.
  
- `args...`: Positional arguments to be passed to both the concept and error functions.
  
- `kargs...`: Keyword arguments to be passed to both the concept and error functions.
  

**Returns**
- Boolean: Returns true if the result of the concept function is not equal to whether the result of the error function is greater than 0.0. Otherwise, it returns false.
  

**Examples**

```julia
concept_vs_error(all_different, make_error(:all_different), [1, 2, 3]) # Returns false
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L111-L129)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.constraints_descriptions' href='#Constraints.constraints_descriptions'>#</a>&nbsp;<b><u>Constraints.constraints_descriptions</u></b> &mdash; <i>Function</i>.




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
<a id='Constraints.constraints_parameters' href='#Constraints.constraints_parameters'>#</a>&nbsp;<b><u>Constraints.constraints_parameters</u></b> &mdash; <i>Function</i>.




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
<a id='Constraints.describe' href='#Constraints.describe'>#</a>&nbsp;<b><u>Constraints.describe</u></b> &mdash; <i>Function</i>.




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
<a id='Constraints.error_f-Tuple{Constraint}' href='#Constraints.error_f-Tuple{Constraint}'>#</a>&nbsp;<b><u>Constraints.error_f</u></b> &mdash; <i>Method</i>.




```julia
error_f(c::Constraint)
```


Return the error function of constraint `c`.     error_f(c::Constraint, x; param = nothing) Apply the error function of `c` to values `x` and optionally `param`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L51-L56)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.make_error-Tuple{Symbol}' href='#Constraints.make_error-Tuple{Symbol}'>#</a>&nbsp;<b><u>Constraints.make_error</u></b> &mdash; <i>Method</i>.




```julia
make_error(symb::Symbol)
```


Create a function that returns an error based on the predicate of the constraint identified by the symbol provided.

**Arguments**
- `symb::Symbol`: The symbol used to determine the error function to be returned. The function first checks if a predicate with the prefix &quot;icn_&quot; exists in the Constraints module. If it does, it returns that function. If it doesn&#39;t, it checks for a predicate with the prefix &quot;error_&quot;. If that exists, it returns that function. If neither exists, it returns a function that evaluates the predicate with the prefix &quot;concept_&quot; and returns the negation of its result cast to Float64.
  

**Returns**
- Function: A function that takes in a variable `x` and an arbitrary number of parameters `params`. The function returns a Float64.
  

**Examples**

```julia
e = make_error(:all_different)
e([1, 2, 3]) # Returns 0.0
e([1, 1, 3]) # Returns 1.0
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L80-L97)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.params_length-Tuple{Constraint}' href='#Constraints.params_length-Tuple{Constraint}'>#</a>&nbsp;<b><u>Constraints.params_length</u></b> &mdash; <i>Method</i>.




```julia
params_length(c::Constraint)
```


Return the expected length restriction of the arguments in a constraint `c`. The value `nothing` indicates that any strictly positive number of parameters is accepted.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L68-L71)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.shrink_concept-Tuple{Any}' href='#Constraints.shrink_concept-Tuple{Any}'>#</a>&nbsp;<b><u>Constraints.shrink_concept</u></b> &mdash; <i>Method</i>.




```julia
shrink_concept(s)
```


Simply delete the `concept_` part of symbol or string starting with it. TODO: add a check with a warning if `s` starts with something different.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L104-L108)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.symmetries-Tuple{Constraint}' href='#Constraints.symmetries-Tuple{Constraint}'>#</a>&nbsp;<b><u>Constraints.symmetries</u></b> &mdash; <i>Method</i>.




```julia
symmetries(c::Constraint)
```


Return the list of symmetries of `c`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L74-L77)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_all_different-Tuple{Any, Nothing}' href='#Constraints.xcsp_all_different-Tuple{Any, Nothing}'>#</a>&nbsp;<b><u>Constraints.xcsp_all_different</u></b> &mdash; <i>Method</i>.




```julia
xcsp_all_different(list::Vector{Int})
```


Return `true` if all the values of `list` are different, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  

**Variants**
- `:all_different`:     Global constraint ensuring that all the values of `x` are all different.
  

```julia
concept(:all_different, x; vals)
concept(:all_different)(x; vals)
```


**Examples**

```julia
c = concept(:all_different)

c([1, 2, 3, 4])
c([1, 2, 3, 1])
c([1, 0, 0, 4]; vals=[0])
c([1, 0, 0, 1]; vals=[0])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/all_different.jl#L7-L31)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_all_equal-Tuple{}' href='#Constraints.xcsp_all_equal-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_all_equal</u></b> &mdash; <i>Method</i>.




```julia
xcsp_all_equal(list::Vector{Int}, val::Int)
```


Return `true` if all the values of `list` are equal to `val`, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `val::Int`: value to compare to.
  

**Variants**
- `:all_equal`:     Global constraint ensuring that all the values of `x` are all equal.
  

```julia
concept(:all_equal, x; val=nothing, pair_vars=zeros(x), op=+)
concept(:all_equal)(x; val=nothing, pair_vars=zeros(x), op=+)
```


**Examples**

```julia
c = concept(:all_equal)

c([0, 0, 0, 0])
c([1, 2, 3, 4])
c([3, 2, 1, 0]; pair_vars=[0, 1, 2, 3])
c([0, 1, 2, 3]; pair_vars=[0, 1, 2, 3])
c([1, 2, 3, 4]; op=/, val=1, pair_vars=[1, 2, 3, 4])
c([1, 2, 3, 4]; op=*, val=1, pair_vars=[1, 2, 3, 4])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/all_equal.jl#L9-L36)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_cardinality-Tuple{}' href='#Constraints.xcsp_cardinality-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_cardinality</u></b> &mdash; <i>Method</i>.




```julia
xcsp_cardinality(list, values, occurs, closed)
```


Return `true` if the number of occurrences of the values in `values` in `list` satisfies the given condition, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `values::Vector{Int}`: list of values to check.
  
- `occurs::Vector{Int}`: list of occurrences to check.
  
- `closed::Bool`: whether the constraint is closed or not.
  

**Variants**
- `:cardinality`: The cardinality constraint, also known as the global cardinality constraint (GCC), is a constraint in constraint programming that restricts the number of times a value can appear in a set of variables.
  

```julia
concept(:cardinality, x; bool=false, vals)
concept(:cardinality)(x; bool=false, vals)
```

- `:cardinality_closed`: The closed cardinality constraint, also known as the global cardinality constraint (GCC), is a constraint in constraint programming that restricts the number of times a value can appear in a set of variables. It is closed, meaning that all values in the domain of the variables must be considered.
  

```julia
concept(:cardinality_closed, x; vals)
concept(:cardinality_closed)(x; vals)
```

- `:cardinality_open`: The open cardinality constraint, also known as the global cardinality constraint (GCC), is a constraint in constraint programming that restricts the number of times a value can appear in a set of variables. It is open, meaning that only the values in the list of values must be considered.
  

```julia
concept(:cardinality_open, x; vals)
concept(:cardinality_open)(x; vals)
```


**Examples**

```julia
c = concept(:cardinality)

c([2, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
c([8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3], bool=false)
c([8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3], bool=true)
c([2, 5, 10, 10]; vals=[2 1; 5 1; 10 2])
c([2, 5, 10, 10]; vals=[2 0 1 42; 5 1 3 7; 10 2 3 -4])
c([2, 5, 5, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
c([2, 5, 10, 8]; vals=[2 1; 5 1; 10 2])
c([5, 5, 5, 10]; vals=[2 0 1 42; 5 1 3 7; 10 2 3 -4])

cc = concept(:cardinality_closed)
cc([8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])

co = concept(:cardinality_open)
co([8, 5, 10, 10]; vals=[2 0 1; 5 1 3; 10 2 3])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/cardinality.jl#L14-L61)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_channel-Tuple{AbstractVector}' href='#Constraints.xcsp_channel-Tuple{AbstractVector}'>#</a>&nbsp;<b><u>Constraints.xcsp_channel</u></b> &mdash; <i>Method</i>.




```julia
xcsp_channel(; list)
```


Return `true` if the channel constraint is satisfied, `false` otherwise. The channel constraint establishes a bijective correspondence between two sets of variables. This means that each value in the first set of variables corresponds to a unique value in the second set, and vice versa.

**Arguments**
- `list::Union{AbstractVector, Tuple}`: list of values to check.
  

**Variants**
- `:channel`: The channel constraint establishes a bijective correspondence between two sets of variables. This means that each value in the first set of variables corresponds to a unique value in the second set, and vice versa.
  

```julia
concept(:channel, x; dim=1, id=nothing)
concept(:channel)(x; dim=1, id=nothing)
```


**Examples**

```julia
c = concept(:channel)

c([2, 1, 4, 3])
c([1, 2, 3, 4])
c([2, 3, 1, 4])
c([2, 1, 5, 3, 4, 2, 1, 4, 5, 3]; dim=2)
c([2, 1, 4, 3, 5, 2, 1, 4, 5, 3]; dim=2)
c([false, false, true, false]; id=3)
c([false, false, true, false]; id=1)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/channel.jl#L5-L32)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_circuit-Tuple{}' href='#Constraints.xcsp_circuit-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_circuit</u></b> &mdash; <i>Method</i>.




```julia
xcsp_circuit(; list, size)
```


Return `true` if the circuit constraint is satisfied, `false` otherwise. The circuit constraint is a global constraint used in constraint programming, often in routing problems. It ensures that the values of a list of variables form a circuit, i.e., a sequence where each value is the index of the next value in the sequence, and the sequence eventually loops back to the start.

**Arguments**
- `list::AbstractVector`: list of values to check.
  
- `size::Int`: size of the circuit.
  

**Variants**
- `:circuit`: The circuit constraint is a global constraint used in constraint programming, often in routing problems. It ensures that the values of a list of variables form a circuit, i.e., a sequence where each value is the index of the next value in the sequence, and the sequence eventually loops back to the start.
  

```julia
concept(:circuit, x; op, val)
concept(:circuit)(x; op, val)
```


**Examples**

```julia
c = concept(:circuit)

c([1, 2, 3, 4])
c([2, 3, 4, 1])
c([2, 3, 1, 4]; op = ==, val = 3)
c([4, 3, 1, 3]; op = >, val = 0)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/circuit.jl#L5-L30)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_count-Tuple{}' href='#Constraints.xcsp_count-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_count</u></b> &mdash; <i>Method</i>.




```julia
xcsp_count(list, values, condition)
```


Return `true` if the number of occurrences of the values in `values` in `list` satisfies the given condition, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `values::Vector{Int}`: list of values to check.
  
- `condition`: condition to satisfy.
  

**Variants**
- `:count`: Constraint ensuring that the number of occurrences of the values in `vals` in `x` satisfies the given condition.
  

```julia
concept(:count, x; vals, op, val)
concept(:count)(x; vals, op, val)
```

- `:at_least`: Constraint ensuring that the number of occurrences of the values in `vals` in `x` is at least `val`.
  

```julia
concept(:at_least, x; vals, val)
concept(:at_least)(x; vals, val)
```

- `:at_most`: Constraint ensuring that the number of occurrences of the values in `vals` in `x` is at most `val`.
  

```julia
concept(:at_most, x; vals, val)
concept(:at_most)(x; vals, val)
```

- `:exactly`: Constraint ensuring that the number of occurrences of the values in `vals` in `x` is exactly `val`.
  

```julia
concept(:exactly, x; vals, val)
concept(:exactly)(x; vals, val)
```


**Examples**

```julia
c = concept(:count)

c([2, 1, 4, 3]; vals=[1, 2, 3, 4], op=≥, val=2)
c([1, 2, 3, 4]; vals=[1, 2], op==, val=2)
c([2, 1, 4, 3]; vals=[1, 2], op=≤, val=1)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/count.jl#L17-L57)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_cumulative-Tuple{}' href='#Constraints.xcsp_cumulative-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_cumulative</u></b> &mdash; <i>Method</i>.




```julia
xcsp_cumulative(; origins, lengths, heights, condition)
```


Return `true` if the cumulative constraint is satisfied, `false` otherwise. The cumulative constraint is a global constraint used in constraint programming that is often used in scheduling problems. It ensures that for any point in time, the sum of the &quot;heights&quot; of tasks that are ongoing at that time does not exceed a certain limit.

**Arguments**
- `origins::AbstractVector`: list of origins of the tasks.
  
- `lengths::AbstractVector`: list of lengths of the tasks.
  
- `heights::AbstractVector`: list of heights of the tasks.
  
- `condition::Tuple`: condition to check.
  

**Variants**
- `:cumulative`: The cumulative constraint is a global constraint used in constraint programming that is often used in scheduling problems. It ensures that for any point in time, the sum of the &quot;heights&quot; of tasks that are ongoing at that time does not exceed a certain limit.
  

```julia
concept(:cumulative, x; pair_vars, op, val)
concept(:cumulative)(x; pair_vars, op, val)
```


**Examples**

```julia
c = concept(:cumulative)

c([1, 2, 3, 4, 5]; val = 1)
c([1, 2, 2, 4, 5]; val = 1)
c([1, 2, 3, 4, 5]; pair_vars = [3 2 5 4 2; 1 2 1 1 3], op = ≤, val = 5)
c([1, 2, 3, 4, 5]; pair_vars = [3 2 5 4 2; 1 2 1 1 3], op = <, val = 5)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/cumulative.jl#L5-L32)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_element-Tuple{Any, Any, Tuple}' href='#Constraints.xcsp_element-Tuple{Any, Any, Tuple}'>#</a>&nbsp;<b><u>Constraints.xcsp_element</u></b> &mdash; <i>Method</i>.




```julia
xcsp_element(; list, index, condition)
```


Return `true` if the element constraint is satisfied, `false` otherwise. The element constraint is a global constraint used in constraint programming that specifies that the value of a variable should be equal to the value of another variable indexed by a third variable.

**Arguments**
- `list::Union{AbstractVector, Tuple}`: list of values to check.
  
- `index::Int`: index of the value to check.
  
- `condition::Tuple`: condition to check.
  

**Variants**
- `:element`: The element constraint is a global constraint used in constraint programming that specifies that the value of a variable should be equal to the value of another variable indexed by a third variable.
  

```julia
concept(:element, x; id=nothing, op===, val=nothing)
concept(:element)(x; id=nothing, op===, val=nothing)
```


**Examples**

```julia
c = concept(:element)

c([1, 2, 3, 4, 5]; id=1, val=1)
c([1, 2, 3, 4, 5]; id=1, val=2)
c([1, 2, 3, 4, 2])
c([1, 2, 3, 4, 1])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/element.jl#L5-L31)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_extension-Tuple{}' href='#Constraints.xcsp_extension-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_extension</u></b> &mdash; <i>Method</i>.




```julia
xcsp_extension(; list, supports=nothing, conflicts=nothing)
```


Global constraint enforcing that the tuple `x` matches a configuration within the supports set `pair_vars[1]` or does not match any configuration within the conflicts set `pair_vars[2]`. It embodies the logic: `x ∈ pair_vars[1] || x ∉ pair_vars[2]`, providing a comprehensive way to define valid (supported) and invalid (conflicted) tuples for constraint satisfaction problems. This constraint is versatile, allowing for the explicit delineation of both acceptable and unacceptable configurations.

**Arguments**
- `list::Vector{Int}`: A list of variables
  
- `supports::Vector{Vector{Int}}`: A set of supported tuples. Default to nothing.
  
- `conflicts::Vector{Vector{Int}}`: A set of conflicted tuples. Default to nothing.
  

**Variants**
- `:extension`: Global constraint enforcing that the tuple `x` matches a configuration within the supports set `pair_vars[1]` or does not match any configuration within the conflicts set `pair_vars[2]`. It embodies the logic: `x ∈ pair_vars[1] || x ∉ pair_vars[2]`, providing a comprehensive way to define valid (supported) and invalid (conflicted) tuples for constraint satisfaction problems. This constraint is versatile, allowing for the explicit delineation of both acceptable and unacceptable configurations.
  

```julia
concept(:extension, x; pair_vars)
concept(:extension)(x; pair_vars)
```

- `:supports`: Global constraint ensuring that the tuple `x` matches a configuration listed within the support set `pair_vars`. This constraint is derived from the extension model, specifying that `x` must be one of the explicitly defined supported configurations: `x ∈ pair_vars`. It is utilized to directly declare the tuples that are valid and should be included in the solution space.
  

```julia
concept(:supports, x; pair_vars)
concept(:supports)(x; pair_vars)
```

- `:conflicts`: Global constraint ensuring that the tuple `x` does not match any configuration listed within the conflict set `pair_vars`. This constraint, originating from the extension model, stipulates that `x` must avoid all configurations defined as conflicts: `x ∉ pair_vars`. It is useful for specifying tuples that are explicitly forbidden and should be excluded from the solution space.
  

```julia
concept(:conflicts, x; pair_vars)
concept(:conflicts)(x; pair_vars)
```


**Examples**

```julia
c = concept(:extension)
c([1, 2, 3, 4, 5]; pair_vars=[[1, 2, 3, 4, 5]])
c([1, 2, 3, 4, 5]; pair_vars=([[1, 2, 3, 4, 5]], [[1, 2, 1, 4, 5], [1, 2, 3, 5, 5]]))
c([1, 2, 3, 4, 5]; pair_vars=[[1, 2, 1, 4, 5], [1, 2, 3, 5, 5]])

c = concept(:supports)
c([1, 2, 3, 4, 5]; pair_vars=[[1, 2, 3, 4, 5]])

c = concept(:conflicts)
c([1, 2, 3, 4, 5]; pair_vars=[[1, 2, 1, 4, 5], [1, 2, 3, 5, 5]])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/extension.jl#L20-L60)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_instantiation-Tuple{}' href='#Constraints.xcsp_instantiation-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_instantiation</u></b> &mdash; <i>Method</i>.




```julia
xcsp_instantiation(; list, values)
```


Return `true` if the instantiation constraint is satisfied, `false` otherwise. The instantiation constraint is a global constraint used in constraint programming that ensures that a list of variables takes on a specific set of values in a specific order.

**Arguments**
- `list::AbstractVector`: list of values to check.
  
- `values::AbstractVector`: list of values to check against.
  

**Variants**
- `:instantiation`: The instantiation constraint is a global constraint used in constraint programming that ensures that a list of variables takes on a specific set of values in a specific order.
  

```julia
concept(:instantiation, x; pair_vars)
concept(:instantiation)(x; pair_vars)
```


**Examples**

```julia
c = concept(:instantiation)

c([1, 2, 3, 4, 5]; pair_vars=[1, 2, 3, 4, 5])
c([1, 2, 3, 4, 5]; pair_vars=[1, 2, 3, 4, 6])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/instantiation.jl#L5-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_intension-Tuple{}' href='#Constraints.xcsp_intension-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_intension</u></b> &mdash; <i>Method</i>.




```julia
xcsp_intension(list, predicate)
```


An intensional constraint is usually defined from a `predicate` over `list`. As such it encompass any generic constraint.

**Arguments**
- `list::Vector{Int}`: A list of variables
  
- `predicate::Function`: A predicate over `list`
  

**Variants**
- `:dist_different`: A constraint ensuring that the distances between marks on the ruler are unique. Specifically, it checks that the distance between `x[1]` and `x[2]`, and the distance between `x[3]` and `x[4]`, are different. This constraint is fundamental in ensuring the validity of a Golomb ruler, where no two pairs of marks should have the same distance between them.
  

```julia
concept(:dist_different, x)
concept(:dist_different)(x)
```


**Examples**

```@example debug2
2 + 2
```


```@example debug1
2 + 2
```


```@example intention1
using Constraints # hide
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
```


```@example intention2
using Constraints # hide
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/intention.jl#L9-L47)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_maximum-Tuple{}' href='#Constraints.xcsp_maximum-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_maximum</u></b> &mdash; <i>Method</i>.




```julia
xcsp_maximum(; list, condition)
```


Return `true` if the maximum constraint is satisfied, `false` otherwise. The maximum constraint is a global constraint used in constraint programming that specifies that a certain condition should hold for the maximum value in a list of variables.

**Arguments**
- `list::Union{AbstractVector, Tuple}`: list of values to check.
  
- `condition::Tuple`: condition to check.
  

**Variants**
- `:maximum`: The maximum constraint is a global constraint used in constraint programming that specifies that a certain condition should hold for the maximum value in a list of variables.
  

```julia
concept(:maximum, x; op, val)
concept(:maximum)(x; op, val)
```


**Examples**

```julia
c = concept(:maximum)

c([1, 2, 3, 4, 5]; op = ==, val = 5)
c([1, 2, 3, 4, 5]; op = ==, val = 6)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/maximum.jl#L5-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_mdd-Tuple{}' href='#Constraints.xcsp_mdd-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_mdd</u></b> &mdash; <i>Method</i>.




```julia
xcsp_mdd(; list, diagram)
```


Return a function that checks if the list of values `list` satisfies the MDD `diagram`.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `diagram::MDD`: MDD to check.
  

**Variants**
- `:mdd`:     Multi-valued Decision Diagram (MDD) constraint.
  The MDD constraint is a constraint that can be used to model a wide range of problems. It is a directed graph where each node is labeled with a value and each edge is labeled with a value. The constraint is satisfied if there is a path from the first node to the last node such that the sequence of edge labels is a valid sequence of the value labels.
  

```julia
concept(:mdd, x; language)
concept(:mdd)(x; language)
```


**Examples**

```julia
c = concept(:mdd)

states = [
    Dict( # level x1
        (:r, 0) => :n1,
        (:r, 1) => :n2,
        (:r, 2) => :n3,
    ),
    Dict( # level x2
        (:n1, 2) => :n4,
        (:n2, 2) => :n4,
        (:n3, 0) => :n5,
    ),
    Dict( # level x3
        (:n4, 0) => :t,
        (:n5, 0) => :t,
    ),
]

a = MDD(states)

c([0,2,0]; language = a)
c([1,2,0]; language = a)
c([2,0,0]; language = a)
c([2,1,2]; language = a)
c([1,0,2]; language = a)
c([0,1,2]; language = a)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/mdd.jl#L9-L55)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_minimum-Tuple{}' href='#Constraints.xcsp_minimum-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_minimum</u></b> &mdash; <i>Method</i>.




```julia
xcsp_minimum(; list, condition)
```


Return `true` if the minimum constraint is satisfied, `false` otherwise. The minimum constraint is a global constraint used in constraint programming that specifies that a certain condition should hold for the minimum value in a list of variables.

**Arguments**
- `list::Union{AbstractVector, Tuple}`: list of values to check.
  
- `condition::Tuple`: condition to check.
  

**Variants**
- `:minimum`: The minimum constraint is a global constraint used in constraint programming that specifies that a certain condition should hold for the minimum value in a list of variables.
  

```julia
concept(:minimum, x; op, val)
concept(:minimum)(x; op, val)
```


**Examples**

```julia
c = concept(:minimum)

c([1, 2, 3, 4, 5]; op = ==, val = 1)
c([1, 2, 3, 4, 5]; op = ==, val = 0)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/minimum.jl#L5-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_no_overlap-Tuple{Any, Any, Any}' href='#Constraints.xcsp_no_overlap-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>Constraints.xcsp_no_overlap</u></b> &mdash; <i>Method</i>.




```julia
xcsp_no_overlap(; origins, lengths, zero_ignored)
```


Return `true` if the no_overlap constraint is satisfied, `false` otherwise. The no_overlap constraint is a global constraint used in constraint programming, often in scheduling problems. It ensures that tasks do not overlap in time, i.e., for any two tasks, either the first task finishes before the second task starts, or the second task finishes before the first task starts.

**Arguments**
- `origins::AbstractVector`: list of origins of the tasks.
  
- `lengths::AbstractVector`: list of lengths of the tasks.
  
- `zero_ignored::Bool`: whether to ignore zero-length tasks.
  

**Variants**
- `:no_overlap`: The no_overlap constraint is a global constraint used in constraint programming, often in scheduling problems. It ensures that tasks do not overlap in time, i.e., for any two tasks, either the first task finishes before the second task starts, or the second task finishes before the first task starts.
  

```julia
concept(:no_overlap, x; pair_vars, bool)
concept(:no_overlap)(x; pair_vars, bool)
```

- `:no_overlap_no_zero`: The no_overlap constraint is a global constraint used in constraint programming, often in scheduling problems. It ensures that tasks do not overlap in time, i.e., for any two tasks, either the first task finishes before the second task starts, or the second task finishes before the first task starts. This variant ignores zero-length tasks.
  

```julia
concept(:no_overlap_no_zero, x; pair_vars)
concept(:no_overlap_no_zero)(x; pair_vars)
```

- `:no_overlap_with_zero`: The no_overlap constraint is a global constraint used in constraint programming, often in scheduling problems. It ensures that tasks do not overlap in time, i.e., for any two tasks, either the first task finishes before the second task starts, or the second task finishes before the first task starts. This variant includes zero-length tasks.
  

```julia
concept(:no_overlap_with_zero, x; pair_vars)
concept(:no_overlap_with_zero)(x; pair_vars)
```


**Examples**

```julia
c = concept(:no_overlap)

c([1, 2, 3, 4, 5])
c([1, 2, 3, 4, 1])
c([1, 2, 4, 6, 3]; pair_vars = [1, 1, 1, 1, 1])
c([1, 2, 4, 6, 3]; pair_vars = [1, 1, 1, 3, 1])
c([1, 2, 4, 6, 3]; pair_vars = [1, 1, 3, 1, 1])
c([1, 1, 1, 3, 5, 2, 7, 7, 5, 12, 8, 7]; pair_vars = [2, 4, 1, 4 ,2 ,3, 5, 1, 2, 3, 3, 2], dim = 3)
c([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]; pair_vars = [2, 4, 1, 4 ,2 ,3, 5, 1, 2, 3, 3, 2], dim = 3)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/no_overlap.jl#L13-L52)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_nvalues-Tuple{Any, Any, Nothing}' href='#Constraints.xcsp_nvalues-Tuple{Any, Any, Nothing}'>#</a>&nbsp;<b><u>Constraints.xcsp_nvalues</u></b> &mdash; <i>Method</i>.




```julia
xcsp_nvalues(list, condition, except)
```


Return `true` if the number of distinct values in `list` satisfies the given condition, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `condition`: condition to satisfy.
  
- `except::Union{Nothing, Vector{Int}}`: list of values to exclude. Default is `nothing`.
  

**Variants**
- `:nvalues`: The nValues constraint specifies that the number of distinct values in the list of variables x is equal to a given value. The constraint is defined by the following expression: nValues(x, op, val) where x is a list of variables, op is a comparison operator, and val is an integer value.
  

```julia
concept(:nvalues, x; op, val)
concept(:nvalues)(x; op, val)
```


**Examples**

```julia
c = concept(:nvalues)

c([1, 2, 3, 4, 5]; op = ==, val = 5)
c([1, 2, 3, 4, 5]; op = ==, val = 2)
c([1, 2, 3, 4, 3]; op = <=, val = 5)
c([1, 2, 3, 4, 3]; op = <=, val = 3)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/n_values.jl#L7-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_ordered-Tuple{Any, Any, Nothing}' href='#Constraints.xcsp_ordered-Tuple{Any, Any, Nothing}'>#</a>&nbsp;<b><u>Constraints.xcsp_ordered</u></b> &mdash; <i>Method</i>.




```julia
xcsp_ordered(list::Vector{Int}, operator, lengths)
```


Return `true` if all the values of `list` are in an increasing order, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `operator`: comparison operator to use.
  
- `lengths`: list of lengths to use. Defaults to `nothing`.
  

**Variants**
- `:ordered`:     Global constraint ensuring that all the values of `x` are in an increasing order.
  

```julia
concept(:ordered, x; op=≤, pair_vars=nothing)
concept(:ordered)(x; op=≤, pair_vars=nothing)
```

- `:increasing`:     Global constraint ensuring that all the values of `x` are in an increasing order.
  

```julia
concept(:increasing, x; op=≤, pair_vars=nothing)
concept(:increasing)(x; op=≤, pair_vars=nothing)
```

- `:decreasing`:     Global constraint ensuring that all the values of `x` are in a decreasing order.
  

```julia
concept(:decreasing, x; op=≥, pair_vars=nothing)
concept(:decreasing)(x; op=≥, pair_vars=nothing)
```

- `:strictly_increasing`:     Global constraint ensuring that all the values of `x` are in a strictly increasing order.
  

```julia
concept(:strictly_increasing, x; op=<, pair_vars=nothing)
concept(:strictly_increasing)(x; op=<, pair_vars=nothing)
```

- `:strictly_decreasing`:     Global constraint ensuring that all the values of `x` are in a strictly decreasing order.
  

```julia
concept(:strictly_decreasing, x; op=>, pair_vars=nothing)
concept(:strictly_decreasing)(x; op=>, pair_vars=nothing)
```


**Examples**

```julia
c = concept(:ordered)

c([1, 2, 3, 4, 4]; op=≤)
c([1, 2, 3, 4, 5]; op=<)
!c([1, 2, 3, 4, 3]; op=≤)
!c([1, 2, 3, 4, 3]; op=<)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/ordered.jl#L21-L67)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_regular-Tuple{}' href='#Constraints.xcsp_regular-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_regular</u></b> &mdash; <i>Method</i>.




```julia
xcsp_regular(; list, automaton)

Ensures that a sequence `x` (interpreted as a word) is accepted by the regular language represented by a given automaton. This constraint verifies the compliance of `x` with the language rules encoded within the `automaton` parameter, which must be an instance of `<:AbstractAutomaton`.
```


**Arguments**
- `list::Vector{Int}`: A list of variables
  
- `automaton<:AbstractAutomaton`: An automaton representing the regular language
  

**Variants**
- `:regular`:     Ensures that a sequence `x` (interpreted as a word) is accepted by the regular language represented by a given automaton. This constraint verifies the compliance of `x` with the language rules encoded within the `automaton` parameter, which must be an instance of `<:AbstractAutomaton`.
  

```julia
concept(:regular, x; language)
concept(:regular)(x; language)
```


**Examples**

```julia
c = concept(:regular)

states = Dict(
    (:a, 0) => :a,
    (:a, 1) => :b,
    (:b, 1) => :c,
    (:c, 0) => :d,
    (:d, 0) => :d,
    (:d, 1) => :e,
    (:e, 0) => :e,
)
start = :a
finish = :e

a = Automaton(states, start, finish)

c([0,0,1,1,0,0,1,0,0]; language = a)
c([1,1,1,0,1]; language = a)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/regular.jl#L5-L42)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_sum-Tuple{}' href='#Constraints.xcsp_sum-Tuple{}'>#</a>&nbsp;<b><u>Constraints.xcsp_sum</u></b> &mdash; <i>Method</i>.




```julia
xcsp_sum(list, coeffs, condition)
```


Return `true` if the sum of the variables in `list` satisfies the given condition, `false` otherwise.

**Arguments**
- `list::Vector{Int}`: list of values to check.
  
- `coeffs::Vector{Int}`: list of coefficients to use.
  
- `condition`: condition to satisfy.
  

**Variants**
- `:sum`: Global constraint ensuring that the sum of the variables in `x` satisfies a given condition.
  

```julia
concept(:sum, x; op===, pair_vars=ones(x), val)
concept(:sum)(x; op===, pair_vars=ones(x), val)
```


**Examples**

```julia
c = concept(:sum)

c([1, 2, 3, 4, 5]; op===, val=15)
c([1, 2, 3, 4, 5]; op===, val=2)
c([1, 2, 3, 4, 3]; op=≤, val=15)
c([1, 2, 3, 4, 3]; op=≤, val=3)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraints/sum.jl#L5-L31)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.@usual-Tuple{Expr}' href='#Constraints.@usual-Tuple{Expr}'>#</a>&nbsp;<b><u>Constraints.@usual</u></b> &mdash; <i>Macro</i>.




```julia
usual(ex::Expr)
```


This macro is used to define a new constraint or update an existing one in the USUAL_CONSTRAINTS dictionary. It takes an expression ex as input, which represents the definition of a constraint.

Here&#39;s a step-by-step explanation of what the macro does:
1. It first extracts the symbol of the concept from the input expression. This symbol is expected to be the first argument of the first argument of the expression. For example, if the expression is @usual all_different(x; y=1), the symbol would be :all_different.
  
2. It then calls the shrink_concept function on the symbol to get a simplified version of the concept symbol.
  
3. It initializes a dictionary defaults to store whether each keyword argument of the concept has a default value or not.
  
4. It checks if the expression has more than two arguments. If it does, it means that there are keyword arguments present. It then loops over these keyword arguments. If a keyword argument is a symbol, it means it doesn&#39;t have a default value, so it adds an entry to the defaults dictionary with the keyword argument as the key and false as the value. If a keyword argument is not a symbol, it means it has a default value, so it adds an entry to the defaults dictionary with the keyword argument as the key and true as the value.
  
5. It calls the make_error function on the simplified concept symbol to generate an error function for the constraint.
  
6. It evaluates the input expression to get the concept function.
  
7. It checks if the USUAL_CONSTRAINTS dictionary already contains an entry for the simplified concept symbol. If it does, it adds the defaults dictionary to the parameters of the existing constraint. If it doesn&#39;t, it creates a new constraint with the concept function, a description, the error function, and the defaults dictionary as the parameters, and adds it to the USUAL_CONSTRAINTS dictionary.
  

This macro is used to make it easier to define and update constraints in a consistent and possibly automated way.

**Arguments**
- `ex::Expr`: expression to parse.
  

**Example**

```julia
@usual concept_all_different(x; vals=nothing) = xcsp_all_different(list=x, except=vals)
```



[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/usual_constraints.jl#L67-L90)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.Composition' href='#CompositionalNetworks.Composition'>#</a>&nbsp;<b><u>CompositionalNetworks.Composition</u></b> &mdash; <i>Type</i>.




```julia
struct Composition{F<:Function}
```


Store the all the information of a composition learned by an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/composition.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.Composition-Union{Tuple{F}, Tuple{F, Any}} where F<:Function' href='#CompositionalNetworks.Composition-Union{Tuple{F}, Tuple{F, Any}} where F<:Function'>#</a>&nbsp;<b><u>CompositionalNetworks.Composition</u></b> &mdash; <i>Method</i>.




```julia
Composition(f::F, symbols) where {F<:Function}
```


Construct a `Composition`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/composition.jl#L12-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ICN' href='#CompositionalNetworks.ICN'>#</a>&nbsp;<b><u>CompositionalNetworks.ICN</u></b> &mdash; <i>Type</i>.




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
  


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L1-L11)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.Layer' href='#CompositionalNetworks.Layer'>#</a>&nbsp;<b><u>CompositionalNetworks.Layer</u></b> &mdash; <i>Type</i>.




```julia
Layer
```


A structure to store a `LittleDict` of operations that can be selected during the learning phase of an ICN. If the layer is exclusive, only one operation can be selected at a time.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.length-Tuple{CompositionalNetworks.Layer}' href='#Base.length-Tuple{CompositionalNetworks.Layer}'>#</a>&nbsp;<b><u>Base.length</u></b> &mdash; <i>Method</i>.




```julia
length(layer)
```


Return the number of operations in a layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L17-L20)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.length-Tuple{ICN}' href='#Base.length-Tuple{ICN}'>#</a>&nbsp;<b><u>Base.length</u></b> &mdash; <i>Method</i>.




```julia
Base.length(icn)
```


Return the total number of operations of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L37-L40)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks._compose-Tuple{ICN}' href='#CompositionalNetworks._compose-Tuple{ICN}'>#</a>&nbsp;<b><u>CompositionalNetworks._compose</u></b> &mdash; <i>Method</i>.




```julia
_compose(icn)
```


Internal function called by `compose` and `show_composition`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L112-L115)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ag_count_positive-Tuple{Any}' href='#CompositionalNetworks.ag_count_positive-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.ag_count_positive</u></b> &mdash; <i>Method</i>.




```julia
ag_count_positive(x)
```


Count the number of strictly positive elements of `x`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/aggregation.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ag_sum-Tuple{Any}' href='#CompositionalNetworks.ag_sum-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.ag_sum</u></b> &mdash; <i>Method</i>.




```julia
ag_sum(x)
```


Aggregate through `+` a vector into a single scalar.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/aggregation.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.aggregation_layer-Tuple{}' href='#CompositionalNetworks.aggregation_layer-Tuple{}'>#</a>&nbsp;<b><u>CompositionalNetworks.aggregation_layer</u></b> &mdash; <i>Method</i>.




```julia
aggregation_layer()
```


Generate the layer of aggregations of the ICN. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/aggregation.jl#L13-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ar_prod-Tuple{Any}' href='#CompositionalNetworks.ar_prod-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.ar_prod</u></b> &mdash; <i>Method</i>.




```julia
ar_prod(x)
```


Reduce `k = length(x)` vectors through product to a single vector.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/arithmetic.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.ar_sum-Tuple{Any}' href='#CompositionalNetworks.ar_sum-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.ar_sum</u></b> &mdash; <i>Method</i>.




```julia
ar_sum(x)
```


Reduce `k = length(x)` vectors through sum to a single vector.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/arithmetic.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.arithmetic_layer-Tuple{}' href='#CompositionalNetworks.arithmetic_layer-Tuple{}'>#</a>&nbsp;<b><u>CompositionalNetworks.arithmetic_layer</u></b> &mdash; <i>Method</i>.




```julia
arithmetic_layer()
```


Generate the layer of arithmetic operations of the ICN. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/arithmetic.jl#L13-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.as_bitvector' href='#CompositionalNetworks.as_bitvector'>#</a>&nbsp;<b><u>CompositionalNetworks.as_bitvector</u></b> &mdash; <i>Function</i>.




```julia
as_bitvector(n::Int, max_n::Int = n)
```


Convert an Int to a BitVector of minimal size (relatively to `max_n`).


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L48-L51)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.as_int-Tuple{AbstractVector}' href='#CompositionalNetworks.as_int-Tuple{AbstractVector}'>#</a>&nbsp;<b><u>CompositionalNetworks.as_int</u></b> &mdash; <i>Method</i>.




```julia
as_int(v::AbstractVector)
```


Convert a `BitVector` into an `Int`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L65-L68)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_abs_diff_val_param-Tuple{Any}' href='#CompositionalNetworks.co_abs_diff_val_param-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_abs_diff_val_param</u></b> &mdash; <i>Method</i>.




```julia
co_abs_diff_val_param(x; param)
```


Return the absolute difference between `x` and `param`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_abs_diff_val_vars-Tuple{Any}' href='#CompositionalNetworks.co_abs_diff_val_vars-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_abs_diff_val_vars</u></b> &mdash; <i>Method</i>.




```julia
co_abs_diff_val_vars(x; nvars)
```


Return the absolute difference between `x` and the number of variables `nvars`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L41-L44)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_euclidean-Tuple{Any}' href='#CompositionalNetworks.co_euclidean-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_euclidean</u></b> &mdash; <i>Method</i>.




```julia
co_euclidean(x; dom_size)
```


Compute an euclidean norm with domain size `dom_size` of a scalar.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L33-L36)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_euclidean_param-Tuple{Any}' href='#CompositionalNetworks.co_euclidean_param-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_euclidean_param</u></b> &mdash; <i>Method</i>.




```julia
co_euclidean_param(x; param, dom_size)
```


Compute an euclidean norm with domain size `dom_size`, weighted by `param`, of a scalar.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L25-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_identity-Tuple{Any}' href='#CompositionalNetworks.co_identity-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_identity</u></b> &mdash; <i>Method</i>.




```julia
co_identity(x)
```


Identity function. Already defined in Julia as `identity`, specialized for scalars in the `comparison` layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_param_minus_val-Tuple{Any}' href='#CompositionalNetworks.co_param_minus_val-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_param_minus_val</u></b> &mdash; <i>Method</i>.




```julia
co_param_minus_val(x; param)
```


Return the difference `param - x` if positive, `0.0` otherwise.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L19-L22)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_val_minus_param-Tuple{Any}' href='#CompositionalNetworks.co_val_minus_param-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_val_minus_param</u></b> &mdash; <i>Method</i>.




```julia
co_val_minus_param(x; param)
```


Return the difference `x - param` if positive, `0.0` otherwise.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L13-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_val_minus_vars-Tuple{Any}' href='#CompositionalNetworks.co_val_minus_vars-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_val_minus_vars</u></b> &mdash; <i>Method</i>.




```julia
co_val_minus_vars(x; nvars)
```


Return the difference `x - nvars` if positive, `0.0` otherwise, where `nvars` denotes the numbers of variables.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L47-L50)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.co_vars_minus_val-Tuple{Any}' href='#CompositionalNetworks.co_vars_minus_val-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.co_vars_minus_val</u></b> &mdash; <i>Method</i>.




```julia
co_vars_minus_val(x; nvars)
```


Return the difference `nvars - x` if positive, `0.0` otherwise, where `nvars` denotes the numbers of variables.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L54-L57)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.code' href='#CompositionalNetworks.code'>#</a>&nbsp;<b><u>CompositionalNetworks.code</u></b> &mdash; <i>Function</i>.




```julia
code(c::Composition, lang=:maths; name="composition")
```


Access the code of a composition `c` in a given language `lang`. The name of the generated method is optional.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/composition.jl#L22-L26)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.comparison_layer' href='#CompositionalNetworks.comparison_layer'>#</a>&nbsp;<b><u>CompositionalNetworks.comparison_layer</u></b> &mdash; <i>Function</i>.




```julia
comparison_layer(param = false)
```


Generate the layer of transformations functions of the ICN. Iff `param` value is set, also includes all the parametric comparison with that value. The operations are mutually exclusive, that is only one will be selected.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/comparison.jl#L85-L88)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.compose' href='#CompositionalNetworks.compose'>#</a>&nbsp;<b><u>CompositionalNetworks.compose</u></b> &mdash; <i>Function</i>.




```julia
compose(icn, weights=nothing)
```


Return a function composed by some of the operations of a given ICN. Can be applied to any vector of variables. If `weights` are given, will assign to `icn`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/composition.jl#L45-L48)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.compose_to_file!-Tuple{Any, Any, Any}' href='#CompositionalNetworks.compose_to_file!-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.compose_to_file!</u></b> &mdash; <i>Method</i>.




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
  


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/learn.jl#L77-L95)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.composition-Tuple{Composition}' href='#CompositionalNetworks.composition-Tuple{Composition}'>#</a>&nbsp;<b><u>CompositionalNetworks.composition</u></b> &mdash; <i>Method</i>.




```julia
composition(c::Composition)
```


Access the actual method of an ICN composition `c`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/composition.jl#L31-L35)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.composition_to_file!' href='#CompositionalNetworks.composition_to_file!'>#</a>&nbsp;<b><u>CompositionalNetworks.composition_to_file!</u></b> &mdash; <i>Function</i>.




```julia
composition_to_file!(c::Composition, path, name, language=:Julia)
```


Write the composition code in a given `language` into a file at `path`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/composition.jl#L97-L101)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.exclu-Tuple{Any}' href='#CompositionalNetworks.exclu-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.exclu</u></b> &mdash; <i>Method</i>.




```julia
exclu(layer)
```


Return `true` if the layer has mutually exclusive operations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L23-L26)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.explore_learn_compose-Tuple{Any, Any}' href='#CompositionalNetworks.explore_learn_compose-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.explore_learn_compose</u></b> &mdash; <i>Method</i>.




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
  


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/learn.jl#L35-L50)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.functions-Tuple{Any}' href='#CompositionalNetworks.functions-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.functions</u></b> &mdash; <i>Method</i>.




```julia
functions(layer)
```


Access the operations of a layer. The container is ordered.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L11-L14)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.generate-Tuple{Composition, Any, Val{:maths}}' href='#CompositionalNetworks.generate-Tuple{Composition, Any, Val{:maths}}'>#</a>&nbsp;<b><u>CompositionalNetworks.generate</u></b> &mdash; <i>Method</i>.




```julia
generate(c::Composition, name, lang)
```


Generates the code of `c` in a specific language `lang`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/composition.jl#L55-L59)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.generate_exclusive_operation-Tuple{Any}' href='#CompositionalNetworks.generate_exclusive_operation-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.generate_exclusive_operation</u></b> &mdash; <i>Method</i>.




```julia
generate_exclusive_operation(max_op_number)
```


Generates the operations (weigths) of a layer with exclusive operations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L75-L78)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.generate_inclusive_operations-Tuple{Any, Any}' href='#CompositionalNetworks.generate_inclusive_operations-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.generate_inclusive_operations</u></b> &mdash; <i>Method</i>.




```julia
generate_inclusive_operations(predicate, bits)
generate_exclusive_operation(max_op_number)
```


Generates the operations (weights) of a layer with inclusive/exclusive operations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L61-L65)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.generate_weights-Tuple{Any}' href='#CompositionalNetworks.generate_weights-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.generate_weights</u></b> &mdash; <i>Method</i>.




```julia
generate_weights(layers)
generate_weights(icn)
```


Generate the weights of a collection of layers or of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L84-L88)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.hamming-Tuple{Any, Any}' href='#CompositionalNetworks.hamming-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.hamming</u></b> &mdash; <i>Method</i>.




```julia
hamming(x, X)
```


Compute the hamming distance of `x` over a collection of solutions `X`, i.e. the minimal number of variables to switch in `x`to reach a solution.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/metrics.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.is_viable-Tuple{CompositionalNetworks.Layer, Any}' href='#CompositionalNetworks.is_viable-Tuple{CompositionalNetworks.Layer, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.is_viable</u></b> &mdash; <i>Method</i>.




```julia
is_viable(layer, w)
is_viable(icn)
is_viable(icn, w)
```


Assert if a pair of layer/icn and weights compose a viable pattern. If no weights are given with an icn, it will check the current internal value.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L53-L58)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.layers-Tuple{Any}' href='#CompositionalNetworks.layers-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.layers</u></b> &mdash; <i>Method</i>.




```julia
layers(icn)
```


Return the ordered layers of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L31-L34)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.lazy-Tuple{Vararg{Function}}' href='#CompositionalNetworks.lazy-Tuple{Vararg{Function}}'>#</a>&nbsp;<b><u>CompositionalNetworks.lazy</u></b> &mdash; <i>Method</i>.




```julia
lazy(funcs::Function...)
```


Generate methods extended to a vector instead of one of its components. A function `f` should have the following signature: `f(i::Int, x::V)`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L22-L25)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.lazy_param-Tuple{Vararg{Function}}' href='#CompositionalNetworks.lazy_param-Tuple{Vararg{Function}}'>#</a>&nbsp;<b><u>CompositionalNetworks.lazy_param</u></b> &mdash; <i>Method</i>.




```julia
lazy_param(funcs::Function...)
```


Generate methods extended to a vector instead of one of its components. A function `f` should have the following signature: `f(i::Int, x::V; param)`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L36-L39)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.learn_compose-Tuple{Any, Any, Any}' href='#CompositionalNetworks.learn_compose-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.learn_compose</u></b> &mdash; <i>Method</i>.




```julia
learn_compose(;
    nvars, dom_size, param=nothing, icn=ICN(nvars, dom_size, param),
    X, X_sols, global_iter=100, local_iter=100, metric=hamming, popSize=200
)
```


Create an ICN, optimize it, and return its composition.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/learn.jl#L7-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.make_transformations-Tuple{Symbol}' href='#CompositionalNetworks.make_transformations-Tuple{Symbol}'>#</a>&nbsp;<b><u>CompositionalNetworks.make_transformations</u></b> &mdash; <i>Method</i>.




```julia
make_transformations(param::Symbol)
```


Generates a dictionary of transformation functions based on the specified parameterization. This function facilitates the creation of parametric layers for constraint transformations, allowing for flexible and dynamic constraint manipulation according to the needs of different constraint programming models.

**Parameters**
- `param::Symbol`: Specifies the type of transformations to generate. It can be `:none` for basic transformations that do not depend on external parameters, or `:val` for transformations that operate with respect to a specific value parameter.
  

**Returns**
- `LittleDict{Symbol, Function}`: A dictionary mapping transformation names (`Symbol`) to their corresponding functions (`Function`). The functions encapsulate various types of transformations, such as counting, comparison, and contiguous value processing.
  

**Transformation Types**
- When `param` is `:none`, the following transformations are available:
  - `:identity`: No transformation is applied.
    
  - `:count_eq`, `:count_eq_left`, `:count_eq_right`: Count equalities under different conditions.
    
  - `:count_greater`, `:count_lesser`: Count values greater or lesser than a threshold.
    
  - `:count_g_left`, `:count_l_left`, `:count_g_right`, `:count_l_right`: Count values with greater or lesser comparisons from different directions.
    
  - `:contiguous_vals_minus`, `:contiguous_vals_minus_rev`: Process contiguous values with subtraction in normal and reverse order.
    
  
- When `param` is `:val`, the transformations relate to operations involving a parameter value:
  - `:count_eq_param`, `:count_l_param`, `:count_g_param`: Count equalities or comparisons against a parameter value.
    
  - `:count_bounding_param`: Count values bounding a parameter value.
    
  - `:val_minus_param`, `:param_minus_val`: Subtract a parameter value from values or vice versa.
    
  

The function delegates to a version that uses `Val(param)` for dispatch, ensuring compile-time selection of the appropriate transformation set.

**Examples**

```julia
# Get basic transformations
basic_transforms = make_transformations(:none)

# Apply an identity transformation
identity_result = basic_transforms[:identity](data)

# Get value-based transformations
val_transforms = make_transformations(:val)

# Apply a count equal to parameter transformation
count_eq_param_result = val_transforms[:count_eq_param](data, param)
```



[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L216-L262)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.manhattan-Tuple{Any, Any}' href='#CompositionalNetworks.manhattan-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.manhattan</u></b> &mdash; <i>Method</i>.




```julia
manhattan(x, X)
```



[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/metrics.jl#L12-L14)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.map_tr!-NTuple{4, Any}' href='#CompositionalNetworks.map_tr!-NTuple{4, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.map_tr!</u></b> &mdash; <i>Method</i>.




```julia
map_tr!(f, x, X, param)
```


Return an anonymous function that applies `f` to all elements of `x` and store the result in `X`, with a parameter `param` (which is set to `nothing` for function with no parameter).


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.minkowski-Tuple{Any, Any, Any}' href='#CompositionalNetworks.minkowski-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.minkowski</u></b> &mdash; <i>Method</i>.




```julia
minkowski(x, X, p)
```



[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/metrics.jl#L7-L9)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.nbits-Tuple{Any}' href='#CompositionalNetworks.nbits-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.nbits</u></b> &mdash; <i>Method</i>.




```julia
nbits(icn)
```


Return the expected number of bits of a viable weight of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L43-L46)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.nbits_exclu-Tuple{Any}' href='#CompositionalNetworks.nbits_exclu-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.nbits_exclu</u></b> &mdash; <i>Method</i>.




```julia
nbits_exclu(layer)
```


Convert the length of an exclusive layer into a number of bits.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L35-L38)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.reduce_symbols' href='#CompositionalNetworks.reduce_symbols'>#</a>&nbsp;<b><u>CompositionalNetworks.reduce_symbols</u></b> &mdash; <i>Function</i>.




```julia
reduce_symbols(symbols, sep)
```


Produce a formatted string that separates the symbols by `sep`. Used internally for `show_composition`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L77-L80)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.regularization-Tuple{Any}' href='#CompositionalNetworks.regularization-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.regularization</u></b> &mdash; <i>Method</i>.




```julia
regularization(icn)
```


Return the regularization value of an ICN weights, which is proportional to the normalized number of operations selected in the icn layers.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L89-L92)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.selected_size-Tuple{Any, Any}' href='#CompositionalNetworks.selected_size-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.selected_size</u></b> &mdash; <i>Method</i>.




```julia
selected_size(layer, layer_weights)
```


Return the number of operations selected by `layer_weights` in `layer`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L47-L50)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.show_layer-Tuple{Any}' href='#CompositionalNetworks.show_layer-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.show_layer</u></b> &mdash; <i>Method</i>.




```julia
show_layer(layer)
```


Return a string that contains the elements in a layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L41-L44)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.show_layers-Tuple{Any}' href='#CompositionalNetworks.show_layers-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.show_layers</u></b> &mdash; <i>Method</i>.




```julia
show_layers(icn)
```


Return a formatted string with each layers in the icn.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L81-L84)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.symbol-Tuple{Any, Any}' href='#CompositionalNetworks.symbol-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.symbol</u></b> &mdash; <i>Method</i>.




```julia
symbol(layer, i)
```


Return the i-th symbols of the operations in a given layer.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layer.jl#L29-L32)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.symbols-Tuple{Composition}' href='#CompositionalNetworks.symbols-Tuple{Composition}'>#</a>&nbsp;<b><u>CompositionalNetworks.symbols</u></b> &mdash; <i>Method</i>.




```julia
symbols(c::Composition)
```


Output the composition as a layered collection of `Symbol`s.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/composition.jl#L38-L42)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_contiguous_vals_minus-Tuple{Any, Any}' href='#CompositionalNetworks.tr_contiguous_vals_minus-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_contiguous_vals_minus</u></b> &mdash; <i>Method</i>.




```julia
tr_contiguous_vals_minus(i, x)
tr_contiguous_vals_minus(x)
tr_contiguous_vals_minus(x, X::AbstractVector)
```


Return the difference `x[i] - x[i + 1]` if positive, `0.0` otherwise. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L190-L197)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_contiguous_vals_minus_rev-Tuple{Any, Any}' href='#CompositionalNetworks.tr_contiguous_vals_minus_rev-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_contiguous_vals_minus_rev</u></b> &mdash; <i>Method</i>.




```julia
tr_contiguous_vals_minus_rev(i, x)
tr_contiguous_vals_minus_rev(x)
tr_contiguous_vals_minus_rev(x, X::AbstractVector)
```


Return the difference `x[i + 1] - x[i]` if positive, `0.0` otherwise. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L201-L208)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_bounding_param-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_bounding_param-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_bounding_param</u></b> &mdash; <i>Method</i>.




```julia
tr_count_bounding_param(i, x; param)
tr_count_bounding_param(x; param)
tr_count_bounding_param(x, X::AbstractVector; param)
```


Count the number of elements bounded (not strictly) by `x[i]` and `x[i] + param`. An extended method to vector with sig `(x, param)` is generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L151-L158)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_eq-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_eq-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_eq</u></b> &mdash; <i>Method</i>.




```julia
tr_count_eq(i, x)
tr_count_eq(x)
tr_count_eq(x, X::AbstractVector)
```


Count the number of elements equal to `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L16-L23)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_eq_left-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_eq_left-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_eq_left</u></b> &mdash; <i>Method</i>.




```julia
tr_count_eq_left(i, x)
tr_count_eq_left(x)
tr_count_eq_left(x, X::AbstractVector)
```


Count the number of elements to the left of and equal to `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L36-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_eq_param-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_eq_param-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_eq_param</u></b> &mdash; <i>Method</i>.




```julia
tr_count_eq_param(i, x; param)
tr_count_eq_param(x; param)
tr_count_eq_param(x, X::AbstractVector; param)
```


Count the number of elements equal to `x[i] + param`. Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L116-L123)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_eq_right-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_eq_right-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_eq_right</u></b> &mdash; <i>Method</i>.




```julia
tr_count_eq_right(i, x)
tr_count_eq_right(x)
tr_count_eq_right(x, X::AbstractVector)
```


Count the number of elements to the right of and equal to `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L26-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_g_left-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_g_left-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_g_left</u></b> &mdash; <i>Method</i>.




```julia
tr_count_g_left(i, x)
tr_count_g_left(x)
tr_count_g_left(x, X::AbstractVector)
```


Count the number of elements to the left of and greater than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L71-L78)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_g_param-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_g_param-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_g_param</u></b> &mdash; <i>Method</i>.




```julia
tr_count_g_param(i, x; param)
tr_count_g_param(x; param)
tr_count_g_param(x, X::AbstractVector; param)
```


Count the number of elements greater than `x[i] + param`. Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L136-L143)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_g_right-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_g_right-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_g_right</u></b> &mdash; <i>Method</i>.




```julia
tr_count_g_right(i, x)
tr_count_g_right(x)
tr_count_g_right(x, X::AbstractVector)
```


Count the number of elements to the right of and greater than `x[i]`. Extended method to vector with sig `(x)` are generated.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L91-L97)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_greater-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_greater-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_greater</u></b> &mdash; <i>Method</i>.




```julia
tr_count_greater(i, x)
tr_count_greater(x)
tr_count_greater(x, X::AbstractVector)
```


Count the number of elements greater than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L51-L58)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_l_left-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_l_left-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_l_left</u></b> &mdash; <i>Method</i>.




```julia
tr_count_l_left(i, x)
tr_count_l_left(x)
tr_count_l_left(x, X::AbstractVector)
```


Count the number of elements to the left of and lesser than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L81-L88)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_l_param-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_l_param-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_l_param</u></b> &mdash; <i>Method</i>.




```julia
tr_count_l_param(i, x; param)
tr_count_l_param(x; param)
tr_count_l_param(x, X::AbstractVector; param)
```


Count the number of elements lesser than `x[i] + param`. Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L126-L133)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_l_right-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_l_right-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_l_right</u></b> &mdash; <i>Method</i>.




```julia
tr_count_l_right(i, x)
tr_count_l_right(x)
tr_count_l_right(x, X::AbstractVector)
```


Count the number of elements to the right of and lesser than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L100-L107)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_count_lesser-Tuple{Any, Any}' href='#CompositionalNetworks.tr_count_lesser-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_count_lesser</u></b> &mdash; <i>Method</i>.




```julia
tr_count_lesser(i, x)
tr_count_lesser(x)
tr_count_lesser(x, X::AbstractVector)
```


Count the number of elements lesser than `x[i]`. Extended method to vector with sig `(x)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L61-L68)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_identity-Tuple{Any, Any}' href='#CompositionalNetworks.tr_identity-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_identity</u></b> &mdash; <i>Method</i>.




```julia
tr_identity(i, x)
tr_identity(x)
tr_identity(x, X::AbstractVector)
```


Identity function. Already defined in Julia as `identity`, specialized for vectors. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L3-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_in_unrolled_expansion_##225-NTuple{4, Any}' href='#CompositionalNetworks.tr_in_unrolled_expansion_##225-NTuple{4, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_in_unrolled_expansion_##225</u></b> &mdash; <i>Method</i>.




```julia
tr_in(tr, X, x, param)
```


Application of an operation from the transformation layer. Used to generate more efficient code for all compositions.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/utils.jl#L86-L90)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_param_minus_val-Tuple{Any, Any}' href='#CompositionalNetworks.tr_param_minus_val-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_param_minus_val</u></b> &mdash; <i>Method</i>.




```julia
tr_param_minus_val(i, x; param)
tr_param_minus_val(x; param)
tr_param_minus_val(x, X::AbstractVector; param)
```


Return the difference `param - x[i]` if positive, `0.0` otherwise.  Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L176-L183)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.tr_val_minus_param-Tuple{Any, Any}' href='#CompositionalNetworks.tr_val_minus_param-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.tr_val_minus_param</u></b> &mdash; <i>Method</i>.




```julia
tr_val_minus_param(i, x; param)
tr_val_minus_param(x; param)
tr_val_minus_param(x, X::AbstractVector; param)
```


Return the difference `x[i] - param` if positive, `0.0` otherwise.  Extended method to vector with sig `(x, param)` are generated. When `X` is provided, the result is computed without allocations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L166-L173)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.transformation_layer' href='#CompositionalNetworks.transformation_layer'>#</a>&nbsp;<b><u>CompositionalNetworks.transformation_layer</u></b> &mdash; <i>Function</i>.




```julia
transformation_layer(param = false)
```


Generate the layer of transformations functions of the ICN. Iff `param` value is true, also includes all the parametric transformations.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/layers/transformation.jl#L298-L301)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.weights!-Tuple{Any, Any}' href='#CompositionalNetworks.weights!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.weights!</u></b> &mdash; <i>Method</i>.




```julia
weights!(icn, weights)
```


Set the weights of an ICN with a `BitVector`.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L71-L74)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.weights-Tuple{Any}' href='#CompositionalNetworks.weights-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.weights</u></b> &mdash; <i>Method</i>.




```julia
weights(icn)
```


Access the current set of weights of an ICN.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/icn.jl#L49-L52)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CompositionalNetworks.weights_bias-Tuple{Any}' href='#CompositionalNetworks.weights_bias-Tuple{Any}'>#</a>&nbsp;<b><u>CompositionalNetworks.weights_bias</u></b> &mdash; <i>Method</i>.




```julia
weights_bias(x)
```


A metric that bias `x` towards operations with a lower bit. Do not affect the main metric.


[source](https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.6/src/metrics.jl#L17-L20)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.AbstractOptimizer' href='#QUBOConstraints.AbstractOptimizer'>#</a>&nbsp;<b><u>QUBOConstraints.AbstractOptimizer</u></b> &mdash; <i>Type</i>.




```julia
AbstractOptimizer
```


An abstract type (interface) used to learn QUBO matrices from constraints. Only a `train` method is required.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/learn.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.QUBO_base' href='#QUBOConstraints.QUBO_base'>#</a>&nbsp;<b><u>QUBOConstraints.QUBO_base</u></b> &mdash; <i>Function</i>.




```julia
QUBO_base(n, weight = 1)
```


A basic QUBO matrix to ensure that binarized variables keep a valid encoding.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/base.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.QUBO_linear_sum-Tuple{Any, Any}' href='#QUBOConstraints.QUBO_linear_sum-Tuple{Any, Any}'>#</a>&nbsp;<b><u>QUBOConstraints.QUBO_linear_sum</u></b> &mdash; <i>Method</i>.




```julia
QUBO_linear_sum(n, σ)
```


One valid QUBO matrix given `n` variables and parameter `σ` for the linear sum constraint.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/handmade/linear_sum.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.binarize-Union{Tuple{Vector{T}}, Tuple{T}, Tuple{Vector{T}, Any}} where T<:Number' href='#QUBOConstraints.binarize-Union{Tuple{Vector{T}}, Tuple{T}, Tuple{Vector{T}, Any}} where T<:Number'>#</a>&nbsp;<b><u>QUBOConstraints.binarize</u></b> &mdash; <i>Method</i>.




```julia
binarize(x[, domain]; binarization = :one_hot)
```


Binarize `x` following the `binarization` encoding. If `x` is a vector (instead of a number per say), `domain` is optional.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L12-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.debinarize-Tuple{Any}' href='#QUBOConstraints.debinarize-Tuple{Any}'>#</a>&nbsp;<b><u>QUBOConstraints.debinarize</u></b> &mdash; <i>Method</i>.




```julia
debinarize(x[, domain]; binarization = :one_hot)
```


Transform a binary vector into a number or a set of number. If `domain` is not given, it will compute a default value based on `binarization` and `x`.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L35-L39)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.is_valid' href='#QUBOConstraints.is_valid'>#</a>&nbsp;<b><u>QUBOConstraints.is_valid</u></b> &mdash; <i>Function</i>.




```julia
is_valid(x, encoding::Symbol = :none)
```


Check if `x` has a valid format for `encoding`.

For instance, if `encoding == :one_hot`, at most one bit of `x` can be set to 1.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L1-L7)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.train-Tuple' href='#QUBOConstraints.train-Tuple'>#</a>&nbsp;<b><u>QUBOConstraints.train</u></b> &mdash; <i>Method</i>.




```julia
train(args...)
```


Default `train` method for any AbstractOptimizer.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/learn.jl#L8-L12)

</div>
<br>
