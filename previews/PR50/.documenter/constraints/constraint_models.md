
# ConstraintModels.jl

Documentation for `ConstraintModels.jl`.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.SudokuInstance' href='#ConstraintModels.SudokuInstance'>#</a>&nbsp;<b><u>ConstraintModels.SudokuInstance</u></b> &mdash; <i>Type</i>.




```julia
mutable struct SudokuInstance{T <: Integer} <: AbstractMatrix{T}
```


**A `struct` for SudokuInstances, which is a subtype of `AbstractMatrix`.**

```julia
SudokuInstance(A::AbstractMatrix{T})
SudokuInstance(::Type{T}, n::Int) # fill in blank sudoku of type T
SudokuInstance(n::Int) # fill in blank sudoku of type Int
SudokuInstance(::Type{T}) # fill in "standard" 9×9 sudoku of type T
SudokuInstance() # fill in "standard" 9×9 sudoku of type Int
SudokuInstance(n::Int, P::Pair{Tuple{Int, Int}, T}...) where {T <: Integer} # construct a sudoku given pairs of coordinates and values
SudokuInstance(P::Pair{Tuple{Int, Int}, T}...) # again, default to 9×9 sudoku, constructing given pairs
```


Constructor functions for the `SudokuInstance` `struct`.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L124-L140)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.SudokuInstance-Tuple{Dictionaries.Dictionary}' href='#ConstraintModels.SudokuInstance-Tuple{Dictionaries.Dictionary}'>#</a>&nbsp;<b><u>ConstraintModels.SudokuInstance</u></b> &mdash; <i>Method</i>.




```julia
SudokuInstance(X::Dictionary)
```


Construct a `SudokuInstance` with the values `X` of a solver as input.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L167-L171)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.Multimedia.display-Tuple{Any, ConstraintModels.SudokuInstance}' href='#Base.Multimedia.display-Tuple{Any, ConstraintModels.SudokuInstance}'>#</a>&nbsp;<b><u>Base.Multimedia.display</u></b> &mdash; <i>Method</i>.




```julia
display(io::IO, S::SudokuInstance)
display(S::SudokuInstance) # default to stdout
```


Displays an $n\times n$ SudokuInstance.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L314-L320)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.Multimedia.display-Tuple{Any, Val{:sudoku}}' href='#Base.Multimedia.display-Tuple{Any, Val{:sudoku}}'>#</a>&nbsp;<b><u>Base.Multimedia.display</u></b> &mdash; <i>Method</i>.




```julia
Base.display(X, Val(:sudoku))
```


Extends `Base.display` to a sudoku configuration.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L350-L354)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.Multimedia.display-Tuple{ConstraintModels.SudokuInstance}' href='#Base.Multimedia.display-Tuple{ConstraintModels.SudokuInstance}'>#</a>&nbsp;<b><u>Base.Multimedia.display</u></b> &mdash; <i>Method</i>.




```julia
Base.display(S::SudokuInstance)
```


Extends `Base.display` to `SudokuInstance`.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L336-L340)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.Multimedia.display-Tuple{Dictionaries.Dictionary}' href='#Base.Multimedia.display-Tuple{Dictionaries.Dictionary}'>#</a>&nbsp;<b><u>Base.Multimedia.display</u></b> &mdash; <i>Method</i>.




```julia
Base.display(X::Dictionary)
```


Extends `Base.display` to a sudoku configuration.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L343-L347)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.size-Tuple{ConstraintModels.SudokuInstance}' href='#Base.size-Tuple{ConstraintModels.SudokuInstance}'>#</a>&nbsp;<b><u>Base.size</u></b> &mdash; <i>Method</i>.




```julia
Base.size(S::SudokuInstance)
```


Extends `Base.size` for `SudokuInstance`.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L183-L187)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels._format_line-Tuple{Any, Any}' href='#ConstraintModels._format_line-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintModels._format_line</u></b> &mdash; <i>Method</i>.




```julia
_format_line(r, M)
```


Format line of a sudoku grid.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L251-L255)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels._format_line_segment-Tuple{Any, Any, Any}' href='#ConstraintModels._format_line_segment-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>ConstraintModels._format_line_segment</u></b> &mdash; <i>Method</i>.




```julia
_format_line_segment(r, col_pos, M)
```


Format line segment of a sudoku grid.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L230-L234)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels._format_val-Tuple{Any}' href='#ConstraintModels._format_val-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintModels._format_val</u></b> &mdash; <i>Method</i>.




```julia
_format_val(a)
```


Format an integer `a` into a string for SudokuInstance.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L223-L227)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels._get_sep_line-Tuple{Any, Any, Any}' href='#ConstraintModels._get_sep_line-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>ConstraintModels._get_sep_line</u></b> &mdash; <i>Method</i>.




```julia
_get_sep_line(s, pos_row, M)
```


Return a line separator.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L268-L272)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.chemical_equilibrium-Tuple{Any, Any, Any}' href='#ConstraintModels.chemical_equilibrium-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>ConstraintModels.chemical_equilibrium</u></b> &mdash; <i>Method</i>.




```julia
chemical_equilibrium(atoms_compounds, elements_weights, standard_free_energy; modeler = :JuMP)
```


::: warning Warning

Even the structure to model problems with continuous domains is available, the default solver is not yet equiped to solve such problems efficiently.

:::

**From Wikipedia**

In a chemical reaction, chemical equilibrium is the state in which both the reactants and products are present in concentrations which have no further tendency to change with time, so that there is no observable change in the properties of the system. This state results when the forward reaction proceeds at the same rate as the reverse reaction. The reaction rates of the forward and backward reactions are generally not zero, but they are equal. Thus, there are no net changes in the concentrations of the reactants and products. Such a state is known as dynamic equilibrium.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/chemical_equilibrium.jl#L30-L40)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.golomb' href='#ConstraintModels.golomb'>#</a>&nbsp;<b><u>ConstraintModels.golomb</u></b> &mdash; <i>Function</i>.




```julia
golomb(n, L=n²)
```


Model the Golomb problem of `n` marks on the ruler `0:L`. The `modeler` argument accepts :raw, and :JuMP (default), which refer respectively to the solver internal model, the MathOptInterface model, and the JuMP model.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/golomb.jl#L53-L57)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.magic_square-Tuple{Any}' href='#ConstraintModels.magic_square-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintModels.magic_square</u></b> &mdash; <i>Method</i>.




```julia
magic_square(n; modeler = :JuMP)
```


Create a model for the magic square problem of order `n`. The `modeler` argument accepts :JuMP (default), which refer to the solver the JuMP model.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/magic_square.jl#L19-L23)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.mincut-Tuple{Any}' href='#ConstraintModels.mincut-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintModels.mincut</u></b> &mdash; <i>Method</i>.




```julia
mincut(graph; source, sink, interdiction =0, modeler = :JuMP)
```


Compute the minimum cut of a graph.

**Arguments:**
- `graph`: Any matrix &lt;: AbstractMatrix that describes the capacities of the graph
  
- `source`: Id of the source node; must be set
  
- `sink`: Id of the sink node; must be set
  
- `interdiction`: indicates the number of forbidden links
  
- `modeler`: Default to `:JuMP`.
  


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/cut.jl#L47-L58)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.n_queens-Tuple{Any}' href='#ConstraintModels.n_queens-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintModels.n_queens</u></b> &mdash; <i>Method</i>.




```julia
n_queens(n; modeler = :JuMP)
```


Create a model for the n-queens problem with `n` queens. The `modeler` argument accepts :JuMP (default), which refer to the JuMP model.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/n_queens.jl#L16-L20)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.qap-Tuple{Any, Any, Any}' href='#ConstraintModels.qap-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>ConstraintModels.qap</u></b> &mdash; <i>Method</i>.




```julia
qap(n, weigths, distances; modeler = :JuMP)
```


Modelize an instance of the Quadractic Assignment Problem with
- `n`: number of both facilities and locations
  
- `weights`: `Matrix` of the weights of each pair of facilities
  
- `distances`: `Matrix` of distances between locations
  
- `modeler`: Default to `:JuMP`. No other modeler available for now.
  

**From Wikipedia**

There are a set of `n` facilities and a set of `n` locations. For each pair of locations, a distance is specified and for each pair of facilities a `weight` or flow is specified (e.g., the amount of supplies transported between the two facilities). The problem is to assign all facilities to different locations with the goal of minimizing the sum of the `distances` multiplied by the corresponding flows.


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/assignment.jl#L14-L25)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.scheduling-Tuple{Any, Any}' href='#ConstraintModels.scheduling-Tuple{Any, Any}'>#</a>&nbsp;<b><u>ConstraintModels.scheduling</u></b> &mdash; <i>Method</i>.




```julia
scheduling(processing_time, due_date; modeler=:JuMP)
```


Create a model for the n-queens problem with `n` queens. The `modeler` argument accepts :JuMP (default), which refer to the JuMP model.

::: warning Warning

The model seems to have a flaw. Needs to be investigated.

:::


[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/scheduling.jl#L46-L55)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='ConstraintModels.sudoku-Tuple{Any}' href='#ConstraintModels.sudoku-Tuple{Any}'>#</a>&nbsp;<b><u>ConstraintModels.sudoku</u></b> &mdash; <i>Method</i>.




```julia
sudoku(n; start= Dictionary{Int, Int}(), modeler = :JuMP)
```


Create a model for the sudoku problem of domain `1:n²` with optional starting values. The `modeler` argument accepts :raw, :MOI, and :JuMP (default), which refer respectively to the solver internal model, the MathOptInterface model, and the JuMP model.

```julia
# Construct a JuMP model `m` and its associated matrix `grid` for sudoku 9×9
m, grid = sudoku(3)

# Same with a starting instance
instance = [
    9  3  0  0  0  0  0  4  0
    0  0  0  0  4  2  0  9  0
    8  0  0  1  9  6  7  0  0
    0  0  0  4  7  0  0  0  0
    0  2  0  0  0  0  0  6  0
    0  0  0  0  2  3  0  0  0
    0  0  8  5  3  1  0  0  2
    0  9  0  2  8  0  0  0  0
    0  7  0  0  0  0  0  5  3
]
m, grid = sudoku(3, start = instance)

# Run the solver
optimize!(m)

# Retrieve and display the values
solution = value.(grid)
display(solution, Val(:sudoku))
```



[source](https://github.com/JuliaConstraints/ConstraintModels.jl/blob/v0.1.9/src/sudoku.jl#L92-L121)

</div>
<br>
