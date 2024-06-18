
# Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}



### Constraints defined from Languages {#Constraints-defined-from-Languages}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_regular-constraints-language_constraints' href='#Constraints.xcsp_regular-constraints-language_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_regular</u></b> &mdash; <i>Function</i>.




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
<a id='Constraints.xcsp_mdd-constraints-language_constraints' href='#Constraints.xcsp_mdd-constraints-language_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_mdd</u></b> &mdash; <i>Function</i>.




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
