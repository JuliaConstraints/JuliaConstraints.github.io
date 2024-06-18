
# Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}



### Constraints on Graphs {#Constraints-on-Graphs}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.xcsp_circuit-constraints-graph_constraints' href='#Constraints.xcsp_circuit-constraints-graph_constraints'>#</a>&nbsp;<b><u>Constraints.xcsp_circuit</u></b> &mdash; <i>Function</i>.




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
