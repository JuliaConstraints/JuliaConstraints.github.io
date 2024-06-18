
# LocalSearchSolvers.jl

Documentation for `LocalSearchSolvers.jl`.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.AbstractSolver' href='#LocalSearchSolvers.AbstractSolver'>#</a>&nbsp;<b><u>LocalSearchSolvers.AbstractSolver</u></b> &mdash; <i>Type</i>.




```julia
AbstractSolver
```


Abstract type to encapsulate the different solver types such as `Solver` or `_SubSolver`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.Constraint' href='#LocalSearchSolvers.Constraint'>#</a>&nbsp;<b><u>LocalSearchSolvers.Constraint</u></b> &mdash; <i>Type</i>.




```julia
Constraint{F <: Function}
```


Structure to store an error function and the variables it constrains.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.LeadSolver' href='#LocalSearchSolvers.LeadSolver'>#</a>&nbsp;<b><u>LocalSearchSolvers.LeadSolver</u></b> &mdash; <i>Type</i>.




```julia
LeadSolver <: MetaSolver
```


Solver managed remotely by a MainSolver. Can manage its own set of local sub solvers.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solvers/lead.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.MainSolver' href='#LocalSearchSolvers.MainSolver'>#</a>&nbsp;<b><u>LocalSearchSolvers.MainSolver</u></b> &mdash; <i>Type</i>.




```julia
MainSolver <: AbstractSolver
```


Main solver. Handle the solving of a model, and optional multithreaded and/or distributed subsolvers.

**Arguments:**
- `model::Model`: A formal description of the targeted problem
  
- `state::_State`: An internal state to store the info necessary to a solving run
  
- `options::Options`: User options for this solver
  
- `subs::Vector{_SubSolver}`: Optional subsolvers
  


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solvers/main.jl#L1-L11)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.MetaSolver' href='#LocalSearchSolvers.MetaSolver'>#</a>&nbsp;<b><u>LocalSearchSolvers.MetaSolver</u></b> &mdash; <i>Type</i>.




Abstract type to encapsulate all solver types that manages other solvers.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solvers/meta.jl#L1-L3)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.Objective' href='#LocalSearchSolvers.Objective'>#</a>&nbsp;<b><u>LocalSearchSolvers.Objective</u></b> &mdash; <i>Type</i>.




```julia
Objective{F <: Function}
```


A structure to handle objectives in a solver. `struct Objective{F <: Function}     name::String     f::F end``


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/objective.jl#L1-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.Objective-Union{Tuple{F2}, Tuple{Any, LocalSearchSolvers.Objective{F2}}} where F2<:Function' href='#LocalSearchSolvers.Objective-Union{Tuple{F2}, Tuple{Any, LocalSearchSolvers.Objective{F2}}} where F2<:Function'>#</a>&nbsp;<b><u>LocalSearchSolvers.Objective</u></b> &mdash; <i>Method</i>.




```julia
Objective(F, o::Objective{F2}) where {F2 <: Function}
```


Constructor used in specializing a solver. Should never be called externally.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/objective.jl#L16-L19)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.Options' href='#LocalSearchSolvers.Options'>#</a>&nbsp;<b><u>LocalSearchSolvers.Options</u></b> &mdash; <i>Type</i>.




```julia
Options()
```


**Arguments:**
- `dynamic::Bool`: is the model dynamic?
  
- `iteration::Union{Int, Float64}`: limit on the number of iterations
  
- `print_level::Symbol`: verbosity to choose among `:silent`, `:minimal`, `:partial`, `:verbose`
  
- `solutions::Int`: number of solutions to return
  
- `specialize::Bool`: should the types of the model be specialized or not. Usually yes for static problems. For dynamic in depends if the user intend to introduce new types. The specialized model is about 10% faster.
  
- `tabu_time::Int`: DESCRIPTION
  
- `tabu_local::Int`: DESCRIPTION
  
- `tabu_delta::Float64`: DESCRIPTION
  
- `threads::Int`: Number of threads to use
  
- `time_limit::Float64`: time limit in seconds
  
- `function Options(; dynamic = false, iteration = 10000, print_level = :minimal, solutions = 1, specialize = !dynamic, tabu_time = 0, tabu_local = 0, tabu_delta = 0.0, threads = typemax(0), time_limit = Inf)
  

```julia
# Setting options in JuMP syntax: print_level, time_limit, iteration
model = Model(CBLS.Optimizer)
set_optimizer_attribute(model, "iteration", 100)
set_optimizer_attribute(model, "print_level", :verbose)
set_time_limit_sec(model, 5.0)
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L13-L35)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.Variable' href='#LocalSearchSolvers.Variable'>#</a>&nbsp;<b><u>LocalSearchSolvers.Variable</u></b> &mdash; <i>Type</i>.




```julia
Variable{D <: AbstractDomain}
```


A structure containing the necessary information for a solver&#39;s variables: `name`, `domain`, and `constraints` it belongs.

```
struct Variable{D <: AbstractDomain}
    domain::D
    constraints::Indices{Int}
end
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L1-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._Model' href='#LocalSearchSolvers._Model'>#</a>&nbsp;<b><u>LocalSearchSolvers._Model</u></b> &mdash; <i>Type</i>.




```julia
_Model{V <: Variable{<:AbstractDomain},C <: Constraint{<:Function},O <: Objective{<:Function}}
```


A struct to model a problem as a set of variables, domains, constraints, and objectives.

```
struct _Model{V <: Variable{<:AbstractDomain},C <: Constraint{<:Function},O <: Objective{<:Function}}
    variables::Dictionary{Int,V}
    constraints::Dictionary{Int,C}
    objectives::Dictionary{Int,O}

    # counter to add new variables: vars, cons, objs
    max_vars::Ref{Int}
    max_cons::Ref{Int}
    max_objs::Ref{Int}

    # Bool to indicate if the _Model instance has been specialized (relatively to types)
    specialized::Ref{Bool}

    # Symbol to indicate the kind of model for specialized methods such as pretty printing
    kind::Symbol
end
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L1-L22)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._State' href='#LocalSearchSolvers._State'>#</a>&nbsp;<b><u>LocalSearchSolvers._State</u></b> &mdash; <i>Type</i>.




```julia
GeneralState{T <: Number}
```


A mutable structure to store the general state of a solver. All methods applied to `GeneralState` are forwarded to `S <: AbstractSolver`.

```
mutable struct GeneralState{T <: Number} <: AbstractState
    configuration::Configuration{T}
    cons_costs::Dictionary{Int, Float64}
    last_improvement::Int
    tabu::Dictionary{Int, Int}
    vars_costs::Dictionary{Int, Float64}
end
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L5-L17)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._SubSolver' href='#LocalSearchSolvers._SubSolver'>#</a>&nbsp;<b><u>LocalSearchSolvers._SubSolver</u></b> &mdash; <i>Type</i>.




```julia
_SubSolver <: AbstractSolver
```


An internal solver type called by MetaSolver when multithreading is enabled.

**Arguments:**
- `id::Int`: subsolver id for debugging
  
- `model::Model`: a ref to the model of the main solver
  
- `state::_State`: a `deepcopy` of the main solver that evolves independently
  
- `options::Options`: a ref to the options of the main solver
  


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solvers/sub.jl#L1-L11)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.empty!-Tuple{LocalSearchSolvers.MainSolver}' href='#Base.empty!-Tuple{LocalSearchSolvers.MainSolver}'>#</a>&nbsp;<b><u>Base.empty!</u></b> &mdash; <i>Method</i>.




```julia
empty!(s::Solver)
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solvers/main.jl#L49-L52)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.empty!-Tuple{LocalSearchSolvers._Model}' href='#Base.empty!-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>Base.empty!</u></b> &mdash; <i>Method</i>.




```julia
empty!(m::Model)
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L437-L441)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.in-Tuple{Int64, LocalSearchSolvers.Constraint}' href='#Base.in-Tuple{Int64, LocalSearchSolvers.Constraint}'>#</a>&nbsp;<b><u>Base.in</u></b> &mdash; <i>Method</i>.




```julia
var::Int ∈ c::Constraint
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L43-L45)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.in-Tuple{LocalSearchSolvers.Variable, Any}' href='#Base.in-Tuple{LocalSearchSolvers.Variable, Any}'>#</a>&nbsp;<b><u>Base.in</u></b> &mdash; <i>Method</i>.




```julia
x::Variable ∈ constraint
value ∈ x::Variable
```


Check if a variable `x` is restricted by a `constraint::Int`, or if a `value` belongs to the domain of `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L52-L56)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._add!-Tuple{LocalSearchSolvers.Constraint, Any}' href='#LocalSearchSolvers._add!-Tuple{LocalSearchSolvers.Constraint, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._add!</u></b> &mdash; <i>Method</i>.




```julia
_add!(c::Constraint, x)
```


Add the variable of indice `x` to `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L22-L26)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._add_to_constraint!-Tuple{LocalSearchSolvers.Variable, Any}' href='#LocalSearchSolvers._add_to_constraint!-Tuple{LocalSearchSolvers.Variable, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._add_to_constraint!</u></b> &mdash; <i>Method</i>.




```julia
_add_to_constraint!(x::Variable, id)
```


Add a constraint `id` to the list of constraints of `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L34-L37)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._check_restart-Tuple{Any}' href='#LocalSearchSolvers._check_restart-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._check_restart</u></b> &mdash; <i>Method</i>.




```julia
_check_restart(s)
```


Check if a restart of `s` is necessary. If `s` has subsolvers, this check is independent for all of them.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L265-L269)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._check_subs-Tuple{LocalSearchSolvers.AbstractSolver}' href='#LocalSearchSolvers._check_subs-Tuple{LocalSearchSolvers.AbstractSolver}'>#</a>&nbsp;<b><u>LocalSearchSolvers._check_subs</u></b> &mdash; <i>Method</i>.




```julia
_check_subs(s)
```


Check if any subsolver of a main solver `s`, for
- _Satisfaction_, has a solution, then return it, resume the run otherwise
  
- _Optimization_, has a better solution, then assign it to its internal state
  


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L390-L396)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._compute!-Tuple{Any}' href='#LocalSearchSolvers._compute!-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._compute!</u></b> &mdash; <i>Method</i>.




```julia
_compute!(s; o::Int = 1, cons_lst = Indices{Int}())
```


Compute the objective `o`&#39;s value if `s` is satisfied and return the current `error`.

**Arguments:**
- `s`: a solver
  
- `o`: targeted objective
  
- `cons_lst`: list of targeted constraints, if empty compute for the whole set
  


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L165-L174)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._compute_cost!-Tuple{Any, Any, Any}' href='#LocalSearchSolvers._compute_cost!-Tuple{Any, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._compute_cost!</u></b> &mdash; <i>Method</i>.




```julia
_compute_cost!(s, ind, c)
```


Compute the cost of constraint `c` with index `ind`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L121-L125)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._compute_costs!-Tuple{Any}' href='#LocalSearchSolvers._compute_costs!-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._compute_costs!</u></b> &mdash; <i>Method</i>.




```julia
_compute_costs!(s; cons_lst::Indices{Int} = Indices{Int}())
```


Compute the cost of constraints `c` in `cons_lst`. If `cons_lst` is empty, compute the cost for all the constraints in `s`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L133-L137)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._compute_objective!-Tuple{Any, LocalSearchSolvers.Objective}' href='#LocalSearchSolvers._compute_objective!-Tuple{Any, LocalSearchSolvers.Objective}'>#</a>&nbsp;<b><u>LocalSearchSolvers._compute_objective!</u></b> &mdash; <i>Method</i>.




```julia
_compute_objective!(s, o::Objective)
_compute_objective!(s, o = 1)
```


Compute the objective `o`&#39;s value.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L150-L155)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._cons_cost!-Tuple{LocalSearchSolvers._State, Any, Any}' href='#LocalSearchSolvers._cons_cost!-Tuple{LocalSearchSolvers._State, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._cons_cost!</u></b> &mdash; <i>Method</i>.




```julia
_cons_cost!(s::S, c, cost) where S <: Union{_State, AbstractSolver}
```


Set the `cost` of constraint `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L117-L120)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._cons_cost-Tuple{LocalSearchSolvers._State, Any}' href='#LocalSearchSolvers._cons_cost-Tuple{LocalSearchSolvers._State, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._cons_cost</u></b> &mdash; <i>Method</i>.




```julia
_cons_cost(s::S, c) where S <: Union{_State, AbstractSolver}
```


Return the cost of constraint `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L99-L102)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._cons_costs!-Tuple{LocalSearchSolvers._State, Any}' href='#LocalSearchSolvers._cons_costs!-Tuple{LocalSearchSolvers._State, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._cons_costs!</u></b> &mdash; <i>Method</i>.




```julia
_cons_costs!(s::S, costs) where S <: Union{_State, AbstractSolver}
```


Set the constraints costs.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L69-L72)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._cons_costs-Tuple{LocalSearchSolvers._State}' href='#LocalSearchSolvers._cons_costs-Tuple{LocalSearchSolvers._State}'>#</a>&nbsp;<b><u>LocalSearchSolvers._cons_costs</u></b> &mdash; <i>Method</i>.




```julia
_cons_costs(s::S) where S <: Union{_State, AbstractSolver}
```


Access the constraints costs.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L45-L48)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._constriction-Tuple{LocalSearchSolvers.Variable}' href='#LocalSearchSolvers._constriction-Tuple{LocalSearchSolvers.Variable}'>#</a>&nbsp;<b><u>LocalSearchSolvers._constriction</u></b> &mdash; <i>Method</i>.




```julia
_constriction(x::Variable)
```


Return the `cosntriction` of `x`, i.e. the number of constraints restricting `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L46-L49)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._delete!-Tuple{LocalSearchSolvers.Constraint, Any}' href='#LocalSearchSolvers._delete!-Tuple{LocalSearchSolvers.Constraint, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._delete!</u></b> &mdash; <i>Method</i>.




```julia
_delete!(c::Constraint, x::Int)
```


Delete `x` from `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L29-L33)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._delete_from_constraint!-Tuple{LocalSearchSolvers.Variable, Any}' href='#LocalSearchSolvers._delete_from_constraint!-Tuple{LocalSearchSolvers.Variable, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._delete_from_constraint!</u></b> &mdash; <i>Method</i>.




```julia
_delete_from_constraint!(x::Variable, id)
```


Delete a constraint `id` from the list of constraints of `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L40-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._draw!-Tuple{Any}' href='#LocalSearchSolvers._draw!-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._draw!</u></b> &mdash; <i>Method</i>.




```julia
_draw!(s)
```


Draw a random (re-)starting configuration.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L113-L116)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._dynamic!-Tuple{Any, Any}' href='#LocalSearchSolvers._dynamic!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._dynamic!</u></b> &mdash; <i>Method</i>.




```julia
_dynamic!(options, dynamic) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L106-L110)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._dynamic-Tuple{Any}' href='#LocalSearchSolvers._dynamic-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._dynamic</u></b> &mdash; <i>Method</i>.




```julia
_dynamic(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L99-L103)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._find_rand_argmax-Tuple{Dictionaries.DictionaryView}' href='#LocalSearchSolvers._find_rand_argmax-Tuple{Dictionaries.DictionaryView}'>#</a>&nbsp;<b><u>LocalSearchSolvers._find_rand_argmax</u></b> &mdash; <i>Method</i>.




```julia
_find_rand_argmax(d::DictionaryView)
```


Compute `argmax` of `d` and select one element randomly.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/utils.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._get_constraints-Tuple{LocalSearchSolvers.Variable}' href='#LocalSearchSolvers._get_constraints-Tuple{LocalSearchSolvers.Variable}'>#</a>&nbsp;<b><u>LocalSearchSolvers._get_constraints</u></b> &mdash; <i>Method</i>.




```julia
_get_constraints(x::Variable)
```


Access the list of `constraints` of `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L28-L31)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._get_vars-Tuple{LocalSearchSolvers.Constraint}' href='#LocalSearchSolvers._get_vars-Tuple{LocalSearchSolvers.Constraint}'>#</a>&nbsp;<b><u>LocalSearchSolvers._get_vars</u></b> &mdash; <i>Method</i>.




```julia
_get_vars(c::Constraint)
```


Returns the variables constrained by `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L15-L19)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._inc_cons!-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers._inc_cons!-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers._inc_cons!</u></b> &mdash; <i>Method</i>.




```julia
_inc_vars!(m::M) where M <: Union{Model, AbstractSolver}
```


Increment the maximum constraint id that has been attributed to `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L102-L105)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._inc_objs!-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers._inc_objs!-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers._inc_objs!</u></b> &mdash; <i>Method</i>.




```julia
_inc_vars!(m::M) where M <: Union{Model, AbstractSolver}
```


Increment the maximum objective id that has been attributed to `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L108-L111)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._inc_vars!-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers._inc_vars!-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers._inc_vars!</u></b> &mdash; <i>Method</i>.




```julia
_inc_vars!(m::M) where M <: Union{Model, AbstractSolver}
```


Increment the maximum variable id that has been attributed to `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L96-L99)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._info_path!-Tuple{Any, Any}' href='#LocalSearchSolvers._info_path!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._info_path!</u></b> &mdash; <i>Method</i>.




```julia
_info_path!(options, iterations) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L120-L124)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._info_path-Tuple{Any}' href='#LocalSearchSolvers._info_path-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._info_path</u></b> &mdash; <i>Method</i>.




```julia
_info_path(options, path)
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L113-L117)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._is_empty-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers._is_empty-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers._is_empty</u></b> &mdash; <i>Method</i>.




```julia
_is_empty(m::Model)
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L385-L389)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._iteration!-Tuple{Any, Any}' href='#LocalSearchSolvers._iteration!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._iteration!</u></b> &mdash; <i>Method</i>.




```julia
_iteration!(options, iterations) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L134-L138)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._iteration-Tuple{Any}' href='#LocalSearchSolvers._iteration-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._iteration</u></b> &mdash; <i>Method</i>.




```julia
_iteration(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L127-L131)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._length-Tuple{LocalSearchSolvers.Constraint}' href='#LocalSearchSolvers._length-Tuple{LocalSearchSolvers.Constraint}'>#</a>&nbsp;<b><u>LocalSearchSolvers._length</u></b> &mdash; <i>Method</i>.




```julia
_length(c::Constraint)
```


Return the number of constrained variables by `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L36-L40)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._max_cons-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers._max_cons-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers._max_cons</u></b> &mdash; <i>Method</i>.




```julia
_max_cons(m::M) where M <: Union{Model, AbstractSolver}
```


Access the maximum constraint id that has been attributed to `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L82-L85)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._max_objs-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers._max_objs-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers._max_objs</u></b> &mdash; <i>Method</i>.




```julia
_max_objs(m::M) where M <: Union{Model, AbstractSolver}
```


Access the maximum objective id that has been attributed to `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L88-L91)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._max_vars-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers._max_vars-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers._max_vars</u></b> &mdash; <i>Method</i>.




```julia
_max_vars(m::M) where M <: Union{Model, AbstractSolver}
```


Access the maximum variable id that has been attributed to `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L76-L79)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._move!' href='#LocalSearchSolvers._move!'>#</a>&nbsp;<b><u>LocalSearchSolvers._move!</u></b> &mdash; <i>Function</i>.




```julia
_move!(s, x::Int, dim::Int = 0)
```


Perform an improving move in `x` neighbourhood if possible.

**Arguments:**
- `s`: a solver of type S &lt;: AbstractSolver
  
- `x`: selected variable id
  
- `dim`: describe the dimension of the considered neighbourhood
  


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L285-L294)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._neighbours' href='#LocalSearchSolvers._neighbours'>#</a>&nbsp;<b><u>LocalSearchSolvers._neighbours</u></b> &mdash; <i>Function</i>.




```julia
_neighbours(s, x, dim = 0)
```


DOCSTRING

**Arguments:**
- `s`: DESCRIPTION
  
- `x`: DESCRIPTION
  
- `dim`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L185-L194)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._optimizing!-Tuple{LocalSearchSolvers._State}' href='#LocalSearchSolvers._optimizing!-Tuple{LocalSearchSolvers._State}'>#</a>&nbsp;<b><u>LocalSearchSolvers._optimizing!</u></b> &mdash; <i>Method</i>.




```julia
_optimizing!(s::S) where S <: Union{_State, AbstractSolver}
```


Set the solver `optimizing` status to `true`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L87-L90)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._optimizing-Tuple{LocalSearchSolvers._State}' href='#LocalSearchSolvers._optimizing-Tuple{LocalSearchSolvers._State}'>#</a>&nbsp;<b><u>LocalSearchSolvers._optimizing</u></b> &mdash; <i>Method</i>.




```julia
_optimizing(s::S) where S <: Union{_State, AbstractSolver}
```


Check if `s` is in an optimizing state.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L63-L66)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._print_level!-Tuple{Any, Any}' href='#LocalSearchSolvers._print_level!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._print_level!</u></b> &mdash; <i>Method</i>.




```julia
_print_level!(options, level) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L148-L152)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._print_level-Tuple{Any}' href='#LocalSearchSolvers._print_level-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._print_level</u></b> &mdash; <i>Method</i>.




```julia
_print_level(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L141-L145)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._restart!' href='#LocalSearchSolvers._restart!'>#</a>&nbsp;<b><u>LocalSearchSolvers._restart!</u></b> &mdash; <i>Function</i>.




```julia
_restart!(s, k = 10)
```


Restart a solver.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L251-L255)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._satisfying!-Tuple{LocalSearchSolvers._State}' href='#LocalSearchSolvers._satisfying!-Tuple{LocalSearchSolvers._State}'>#</a>&nbsp;<b><u>LocalSearchSolvers._satisfying!</u></b> &mdash; <i>Method</i>.




```julia
_satisfying!(s::S) where S <: Union{_State, AbstractSolver}
```


Set the solver `optimizing` status to `false`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L93-L96)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._select_worse-Tuple{Any}' href='#LocalSearchSolvers._select_worse-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._select_worse</u></b> &mdash; <i>Method</i>.




```julia
_select_worse(s::S) where S <: Union{_State, AbstractSolver}
```


Within the non-tabu variables, select the one with the worse error .


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L276-L279)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._set!-Tuple{LocalSearchSolvers._State, Any, Any}' href='#LocalSearchSolvers._set!-Tuple{LocalSearchSolvers._State, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._set!</u></b> &mdash; <i>Method</i>.




```julia
_set!(s::S, x, val) where S <: Union{_State, AbstractSolver}
```


Set the value of variable `x` to `val`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L135-L138)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._set_domain!-Tuple{LocalSearchSolvers._Model, Any, Any}' href='#LocalSearchSolvers._set_domain!-Tuple{LocalSearchSolvers._Model, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._set_domain!</u></b> &mdash; <i>Method</i>.




```julia
_set_domain!(m::Model, x, values)
```


DOCSTRING

**Arguments:**
- `m`: DESCRIPTION
  
- `x`: DESCRIPTION
  
- `values`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L394-L403)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._solutions!-Tuple{Any, Any}' href='#LocalSearchSolvers._solutions!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._solutions!</u></b> &mdash; <i>Method</i>.




```julia
_solutions!(options, solutions) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L162-L166)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._solutions-Tuple{Any}' href='#LocalSearchSolvers._solutions-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._solutions</u></b> &mdash; <i>Method</i>.




```julia
_solutions(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L155-L159)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._specialize!-Tuple{Any, Any}' href='#LocalSearchSolvers._specialize!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._specialize!</u></b> &mdash; <i>Method</i>.




```julia
_specialize!(options, specialize) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L176-L180)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._specialize-Tuple{Any}' href='#LocalSearchSolvers._specialize-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._specialize</u></b> &mdash; <i>Method</i>.




```julia
_specialize(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L169-L173)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._step!-Tuple{Any}' href='#LocalSearchSolvers._step!-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._step!</u></b> &mdash; <i>Method</i>.




```julia
_step!(s)
```


Iterate a step of the solver run.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L337-L341)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._swap_value!-Tuple{LocalSearchSolvers._State, Any, Any}' href='#LocalSearchSolvers._swap_value!-Tuple{LocalSearchSolvers._State, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._swap_value!</u></b> &mdash; <i>Method</i>.




```julia
_set!(s::S, x, y) where S <: Union{_State, AbstractSolver}
```


Swap the values of variables `x` and `y`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L141-L144)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._tabu_delta!-Tuple{Any, Any}' href='#LocalSearchSolvers._tabu_delta!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._tabu_delta!</u></b> &mdash; <i>Method</i>.




```julia
_tabu_delta!(options, time) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L218-L222)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._tabu_delta-Tuple{Any}' href='#LocalSearchSolvers._tabu_delta-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._tabu_delta</u></b> &mdash; <i>Method</i>.




```julia
_tabu_delta(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L211-L215)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._tabu_local!-Tuple{Any, Any}' href='#LocalSearchSolvers._tabu_local!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._tabu_local!</u></b> &mdash; <i>Method</i>.




```julia
_tabu_local!(options, time) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L204-L208)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._tabu_local-Tuple{Any}' href='#LocalSearchSolvers._tabu_local-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._tabu_local</u></b> &mdash; <i>Method</i>.




```julia
_tabu_local(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L197-L201)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._tabu_time!-Tuple{Any, Any}' href='#LocalSearchSolvers._tabu_time!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._tabu_time!</u></b> &mdash; <i>Method</i>.




```julia
_tabu_time!(options, time) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L190-L194)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._tabu_time-Tuple{Any}' href='#LocalSearchSolvers._tabu_time-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._tabu_time</u></b> &mdash; <i>Method</i>.




```julia
_tabu_time(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L183-L187)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._threads!-Tuple{Any, Any}' href='#LocalSearchSolvers._threads!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._threads!</u></b> &mdash; <i>Method</i>.




```julia
_threads!(options, threads) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L232-L236)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._threads-Tuple{Any}' href='#LocalSearchSolvers._threads-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._threads</u></b> &mdash; <i>Method</i>.




```julia
_threads(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L225-L229)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._time_limit!-Tuple{Any, Any}' href='#LocalSearchSolvers._time_limit!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._time_limit!</u></b> &mdash; <i>Method</i>.




```julia
_time_limit!(options, time::Time) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L246-L250)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._time_limit-Tuple{Any}' href='#LocalSearchSolvers._time_limit-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._time_limit</u></b> &mdash; <i>Method</i>.




```julia
_time_limit(options) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L239-L243)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._to_union-Tuple{Any}' href='#LocalSearchSolvers._to_union-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._to_union</u></b> &mdash; <i>Method</i>.




```julia
_to_union(datatype)
```


Make a minimal `Union` type from a collection of data types.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/utils.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._value!-Tuple{LocalSearchSolvers._State, Any, Any}' href='#LocalSearchSolvers._value!-Tuple{LocalSearchSolvers._State, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._value!</u></b> &mdash; <i>Method</i>.




```julia
_value!(s::S, x, val) where S <: Union{_State, AbstractSolver}
```


Set the value of variable `x` to `val`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L129-L132)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._value-Tuple{LocalSearchSolvers._State, Any}' href='#LocalSearchSolvers._value-Tuple{LocalSearchSolvers._State, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._value</u></b> &mdash; <i>Method</i>.




```julia
_value(s::S, x) where S <: Union{_State, AbstractSolver}
```


Return the value of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L111-L114)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._values!-Union{Tuple{T}, Tuple{LocalSearchSolvers._State{T}, Any}} where T<:Number' href='#LocalSearchSolvers._values!-Union{Tuple{T}, Tuple{LocalSearchSolvers._State{T}, Any}} where T<:Number'>#</a>&nbsp;<b><u>LocalSearchSolvers._values!</u></b> &mdash; <i>Method</i>.




```julia
_values!(s::S, values) where S <: Union{_State, AbstractSolver}
```


Set the variables values.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L81-L84)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._values-Tuple{LocalSearchSolvers._State}' href='#LocalSearchSolvers._values-Tuple{LocalSearchSolvers._State}'>#</a>&nbsp;<b><u>LocalSearchSolvers._values</u></b> &mdash; <i>Method</i>.




```julia
_vars_costs(s::S) where S <: Union{_State, AbstractSolver}
```


Access the variables costs.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L57-L60)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._var_cost!-Tuple{LocalSearchSolvers._State, Any, Any}' href='#LocalSearchSolvers._var_cost!-Tuple{LocalSearchSolvers._State, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._var_cost!</u></b> &mdash; <i>Method</i>.




```julia
_var_cost!(s::S, x, cost) where S <: Union{_State, AbstractSolver}
```


Set the `cost` of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L123-L126)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._var_cost-Tuple{LocalSearchSolvers._State, Any}' href='#LocalSearchSolvers._var_cost-Tuple{LocalSearchSolvers._State, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._var_cost</u></b> &mdash; <i>Method</i>.




```julia
_var_cost(s::S, x) where S <: Union{_State, AbstractSolver}
```


Return the cost of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L105-L108)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._vars_costs!-Tuple{LocalSearchSolvers._State, Any}' href='#LocalSearchSolvers._vars_costs!-Tuple{LocalSearchSolvers._State, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._vars_costs!</u></b> &mdash; <i>Method</i>.




```julia
_vars_costs!(s::S, costs) where S <: Union{_State, AbstractSolver}
```


Set the variables costs.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L75-L78)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._vars_costs-Tuple{LocalSearchSolvers._State}' href='#LocalSearchSolvers._vars_costs-Tuple{LocalSearchSolvers._State}'>#</a>&nbsp;<b><u>LocalSearchSolvers._vars_costs</u></b> &mdash; <i>Method</i>.




```julia
_vars_costs(s::S) where S <: Union{_State, AbstractSolver}
```


Access the variables costs.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/state.jl#L51-L54)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers._verbose-Tuple{Any, Any}' href='#LocalSearchSolvers._verbose-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers._verbose</u></b> &mdash; <i>Method</i>.




```julia
_verbose(settings, str)
```


Temporary logging function. #TODO: use better log instead (LoggingExtra.jl)


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/options.jl#L90-L93)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.add!-Tuple{LocalSearchSolvers._Model, LocalSearchSolvers.Variable}' href='#LocalSearchSolvers.add!-Tuple{LocalSearchSolvers._Model, LocalSearchSolvers.Variable}'>#</a>&nbsp;<b><u>LocalSearchSolvers.add!</u></b> &mdash; <i>Method</i>.




```julia
mts = - get_time_stamp(model)
```


return TimeStamps(mts, mts, mts, mts, mts, mts, mts) end

```
add!(m::M, x) where M <: Union{Model, AbstractSolver}
add!(m::M, c) where M <: Union{Model, AbstractSolver}
add!(m::M, o) where M <: Union{Model, AbstractSolver}
```


Add a variable `x`, a constraint `c`, or an objective `o` to `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L253-L262)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.add_value!-Tuple{LocalSearchSolvers._Model, Any, Any}' href='#LocalSearchSolvers.add_value!-Tuple{LocalSearchSolvers._Model, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.add_value!</u></b> &mdash; <i>Method</i>.




```julia
add_value!(m::M, x, val) where M <: Union{Model, AbstractSolver}
```


Add `val` to `x` domain.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L241-L244)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.add_var_to_cons!-Tuple{LocalSearchSolvers._Model, Any, Any}' href='#LocalSearchSolvers.add_var_to_cons!-Tuple{LocalSearchSolvers._Model, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.add_var_to_cons!</u></b> &mdash; <i>Method</i>.




```julia
add_var_to_cons!(m::M, c, x) where M <: Union{Model, AbstractSolver}
```


Add `x` to the constraint `c` list of restricted variables.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L247-L250)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.constraint!-Union{Tuple{V}, Tuple{LocalSearchSolvers._Model, Any, V}} where V<:(AbstractVector{<:Number})' href='#LocalSearchSolvers.constraint!-Union{Tuple{V}, Tuple{LocalSearchSolvers._Model, Any, V}} where V<:(AbstractVector{<:Number})'>#</a>&nbsp;<b><u>LocalSearchSolvers.constraint!</u></b> &mdash; <i>Method</i>.




```julia
constraint!(m::M, func, vars) where M <: Union{Model, AbstractSolver}
```


Add a constraint with an error function `func` defined over variables `vars`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L287-L290)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.constraint-Tuple{Any, Any}' href='#LocalSearchSolvers.constraint-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.constraint</u></b> &mdash; <i>Method</i>.




```julia
constraint(f, vars)
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/constraint.jl#L48-L52)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.constriction-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.constriction-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.constriction</u></b> &mdash; <i>Method</i>.




```julia
constriction(m::M, x) where M <: Union{Model, AbstractSolver}
```


Return the constriction of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L223-L226)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.decay_tabu!-Tuple{Any}' href='#LocalSearchSolvers.decay_tabu!-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.decay_tabu!</u></b> &mdash; <i>Method</i>.




```julia
_decay_tabu!(s::S) where S <: Union{_State, AbstractSolver}
```


Decay the tabu list.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/strategies/tabu.jl#L77-L80)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.decrease_tabu!-Tuple{Any, Any}' href='#LocalSearchSolvers.decrease_tabu!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.decrease_tabu!</u></b> &mdash; <i>Method</i>.




```julia
_decrease_tabu!(s::S, x) where S <: Union{_State, AbstractSolver}
```


Decrement the tabu value of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/strategies/tabu.jl#L44-L47)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.delete_tabu!-Tuple{Any, Any}' href='#LocalSearchSolvers.delete_tabu!-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.delete_tabu!</u></b> &mdash; <i>Method</i>.




```julia
_delete_tabu!(s::S, x) where S <: Union{_State, AbstractSolver}
```


Delete the tabu entry of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/strategies/tabu.jl#L50-L53)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.delete_value!-Tuple{LocalSearchSolvers._Model, Any, Any}' href='#LocalSearchSolvers.delete_value!-Tuple{LocalSearchSolvers._Model, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.delete_value!</u></b> &mdash; <i>Method</i>.




```julia
delete_value(m::M, x, val) where M <: Union{Model, AbstractSolver}
```


Delete `val` from `x` domain.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L229-L232)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.delete_var_from_cons!-Tuple{LocalSearchSolvers._Model, Any, Any}' href='#LocalSearchSolvers.delete_var_from_cons!-Tuple{LocalSearchSolvers._Model, Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.delete_var_from_cons!</u></b> &mdash; <i>Method</i>.




```julia
delete_var_from_cons(m::M, c, x) where M <: Union{Model, AbstractSolver}
```


Delete `x` from the constraint `c` list of restricted variables.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L235-L238)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.describe-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.describe-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.describe</u></b> &mdash; <i>Method</i>.




```julia
describe(m::M) where M <: Union{Model, AbstractSolver}
```


Describe the model.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L304-L307)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.domain_size-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.domain_size-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.domain_size</u></b> &mdash; <i>Method</i>.




```julia
domain_size(m::Model, x) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L423-L427)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.draw-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.draw-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.draw</u></b> &mdash; <i>Method</i>.




```julia
draw(m::M, x) where M <: Union{Model, AbstractSolver}
```


Draw a random value of `x` domain.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L216-L219)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.empty_tabu!-Tuple{Any}' href='#LocalSearchSolvers.empty_tabu!-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.empty_tabu!</u></b> &mdash; <i>Method</i>.




```julia
_empty_tabu!(s::S) where S <: Union{_State, AbstractSolver}
```


Empty the tabu list.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/strategies/tabu.jl#L56-L59)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_cons_from_var-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.get_cons_from_var-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_cons_from_var</u></b> &mdash; <i>Method</i>.




```julia
get_cons_from_var(m::M, x) where M <: Union{Model, AbstractSolver}
```


Access the constraints restricting variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L168-L171)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_constraint-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.get_constraint-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_constraint</u></b> &mdash; <i>Method</i>.




```julia
get_constraint(m::M, c) where M <: Union{Model, AbstractSolver}
```


Access the constraint `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L144-L147)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_constraints-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.get_constraints-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_constraints</u></b> &mdash; <i>Method</i>.




```julia
get_constraints(m::M) where M <: Union{Model, AbstractSolver}
```


Access the constraints of `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L120-L123)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_domain-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.get_domain-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_domain</u></b> &mdash; <i>Method</i>.




```julia
get_domain(m::M, x) where M <: Union{Model, AbstractSolver}
```


Access the domain of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L156-L159)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_kind-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.get_kind-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_kind</u></b> &mdash; <i>Method</i>.




```julia
get_kind(m::M) where M <: Union{Model, AbstractSolver}
```


Access the kind of `m`, such as `:sudoku` or `:generic` (default).


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L132-L135)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_name-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.get_name-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_name</u></b> &mdash; <i>Method</i>.




```julia
get_name(m::M, x) where M <: Union{Model, AbstractSolver}
```


Access the name of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L162-L165)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_objective-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.get_objective-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_objective</u></b> &mdash; <i>Method</i>.




```julia
get_objective(m::M, o) where M <: Union{Model, AbstractSolver}
```


Access the objective `o`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L150-L153)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_objectives-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.get_objectives-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_objectives</u></b> &mdash; <i>Method</i>.




```julia
get_objectives(m::M) where M <: Union{Model, AbstractSolver}
```


Access the objectives of `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L126-L129)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_time_stamp-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.get_time_stamp-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_time_stamp</u></b> &mdash; <i>Method</i>.




```julia
get_time_stamp(m::M) where M <: Union{Model, AbstractSolver}
```


Access the time (since epoch) when the model was created. This time stamp is for internal performance measurement.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L180-L183)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_variable-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.get_variable-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_variable</u></b> &mdash; <i>Method</i>.




```julia
get_variable(m::M, x) where M <: Union{Model, AbstractSolver}
```


Access the variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L138-L141)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_variables-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.get_variables-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_variables</u></b> &mdash; <i>Method</i>.




```julia
get_variables(m::M) where M <: Union{Model, AbstractSolver}
```


Access the variables of `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L114-L117)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.get_vars_from_cons-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.get_vars_from_cons-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.get_vars_from_cons</u></b> &mdash; <i>Method</i>.




```julia
get_vars_from_cons(m::M, c) where M <: Union{Model, AbstractSolver}
```


Access the variables restricted by constraint `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L174-L177)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.insert_tabu!-Tuple{Any, Any, Val{:tabu}}' href='#LocalSearchSolvers.insert_tabu!-Tuple{Any, Any, Val{:tabu}}'>#</a>&nbsp;<b><u>LocalSearchSolvers.insert_tabu!</u></b> &mdash; <i>Method</i>.




```julia
_insert_tabu!(s::S, x, tabu_time) where S <: Union{_State, AbstractSolver}
```


Insert the bariable `x` as tabu for `tabu_time`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/strategies/tabu.jl#L68-L71)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.is_sat-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.is_sat-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.is_sat</u></b> &mdash; <i>Method</i>.




```julia
is_sat(m::M) where M <: Union{Model, AbstractSolver}
```


Return `true` if `m` is a satisfaction model.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L336-L339)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.is_specialized-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.is_specialized-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.is_specialized</u></b> &mdash; <i>Method</i>.




```julia
is_specialized(m::M) where M <: Union{Model, AbstractSolver}
```


Return `true` if the model is already specialized.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L342-L345)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.length_cons-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.length_cons-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.length_cons</u></b> &mdash; <i>Method</i>.




```julia
length_cons(m::M, c) where M <: Union{Model, AbstractSolver}
```


Return the length of constraint `c`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L192-L195)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.length_cons-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.length_cons-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.length_cons</u></b> &mdash; <i>Method</i>.




```julia
length_cons(m::M) where M <: Union{Model, AbstractSolver}
```


Return the number of constraints in `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L210-L213)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.length_objs-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.length_objs-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.length_objs</u></b> &mdash; <i>Method</i>.




```julia
length_objs(m::M) where M <: Union{Model, AbstractSolver}
```


Return the number of objectives in `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L198-L201)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.length_tabu-Tuple{Any}' href='#LocalSearchSolvers.length_tabu-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.length_tabu</u></b> &mdash; <i>Method</i>.




```julia
_length_tabu!(s::S) where S <: Union{_State, AbstractSolver}
```


Return the length of the tabu list.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/strategies/tabu.jl#L62-L65)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.length_var-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.length_var-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.length_var</u></b> &mdash; <i>Method</i>.




```julia
length_var(m::M, x) where M <: Union{Model, AbstractSolver}
```


Return the domain length of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L186-L189)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.length_vars-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.length_vars-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.length_vars</u></b> &mdash; <i>Method</i>.




```julia
length_vars(m::M) where M <: Union{Model, AbstractSolver}
```


Return the number of variables in `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L204-L207)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.max_domains_size-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.max_domains_size-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.max_domains_size</u></b> &mdash; <i>Method</i>.




```julia
max_domains_size(m::Model, vars) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L430-L434)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.model-Tuple{}' href='#LocalSearchSolvers.model-Tuple{}'>#</a>&nbsp;<b><u>LocalSearchSolvers.model</u></b> &mdash; <i>Method</i>.




```julia
model()
```


Construct a _Model, empty by default. It is recommended to add the constraints, variables, and objectives from an empty _Model. The following keyword arguments are available,
- `vars=Dictionary{Int,Variable}()`: collection of variables
  
- `cons=Dictionary{Int,Constraint}()`: collection of constraints
  
- `objs=Dictionary{Int,Objective}()`: collection of objectives
  
- `kind=:generic`: the kind of problem modeled (useful for specialized methods such as pretty printing)
  


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L50-L57)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.o_dist_extrema-Tuple{Any}' href='#LocalSearchSolvers.o_dist_extrema-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.o_dist_extrema</u></b> &mdash; <i>Method</i>.




```julia
dist_extrema(values::T...) where {T <: Number}
```


Computes the distance between extrema in an ordered set.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/objectives/extrema.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.o_mincut-Tuple{Any, Any}' href='#LocalSearchSolvers.o_mincut-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.o_mincut</u></b> &mdash; <i>Method</i>.




```julia
o_mincut(graph, values; interdiction = 0)
```


Compute the capacity of a cut (determined by the state of the solver) with a possible `interdiction` on the highest capacited links.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/objectives/cut.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.objective!-Tuple{LocalSearchSolvers._Model, Any}' href='#LocalSearchSolvers.objective!-Tuple{LocalSearchSolvers._Model, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.objective!</u></b> &mdash; <i>Method</i>.




```julia
objective!(m::M, func) where M <: Union{Model, AbstractSolver}
```


Add an objective evaluated by `func`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L296-L299)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.objective-Tuple{Any, Any}' href='#LocalSearchSolvers.objective-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.objective</u></b> &mdash; <i>Method</i>.




```julia
objective(func, name)
```


Construct an objective with a function `func` that should be applied to a collection of variables.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/objective.jl#L24-L27)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.post_process-Tuple{LocalSearchSolvers.AbstractSolver}' href='#LocalSearchSolvers.post_process-Tuple{LocalSearchSolvers.AbstractSolver}'>#</a>&nbsp;<b><u>LocalSearchSolvers.post_process</u></b> &mdash; <i>Method</i>.




```julia
post_process(s::MainSolver)
```


Launch a series of tasks to round-up a solving run, for instance, export a run&#39;s info.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L450-L453)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.remote_dispatch!-Tuple{LocalSearchSolvers.AbstractSolver}' href='#LocalSearchSolvers.remote_dispatch!-Tuple{LocalSearchSolvers.AbstractSolver}'>#</a>&nbsp;<b><u>LocalSearchSolvers.remote_dispatch!</u></b> &mdash; <i>Method</i>.




```julia
remote_dispatch!(solver)
```


Starts the `LeadSolver`s attached to the `MainSolver`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L425-L428)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.remote_stop!-Tuple{LocalSearchSolvers.AbstractSolver}' href='#LocalSearchSolvers.remote_stop!-Tuple{LocalSearchSolvers.AbstractSolver}'>#</a>&nbsp;<b><u>LocalSearchSolvers.remote_stop!</u></b> &mdash; <i>Method</i>.




```julia
remote_stop!!(solver)
```


Fetch the pool of solutions from `LeadSolvers` and merge it into the `MainSolver`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L444-L447)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.solution-Tuple{Any}' href='#LocalSearchSolvers.solution-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.solution</u></b> &mdash; <i>Method</i>.




```julia
solution(s)
```


Return the only/best known solution of a satisfaction/optimization model.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L470-L473)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.solve_for_loop!-NTuple{5, Any}' href='#LocalSearchSolvers.solve_for_loop!-NTuple{5, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.solve_for_loop!</u></b> &mdash; <i>Method</i>.




```julia
solve_for_loop!(solver, stop, sat, iter)
```


First loop in the solving process that starts `LeadSolver`s from the `MainSolver`, and `_SubSolver`s from each `MetaSolver`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L431-L434)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.solve_while_loop!-NTuple{5, Any}' href='#LocalSearchSolvers.solve_while_loop!-NTuple{5, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.solve_while_loop!</u></b> &mdash; <i>Method</i>.




```julia
solve_while_loop!(s, )
```


Search the space of configurations.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L405-L408)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.specialize!-Tuple{Any}' href='#LocalSearchSolvers.specialize!-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.specialize!</u></b> &mdash; <i>Method</i>.




```julia
specialize!(solver)
```


Replace the model of `solver` by one with specialized types (variables, constraints, objectives).


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L107-L110)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.specialize-Tuple{LocalSearchSolvers._Model}' href='#LocalSearchSolvers.specialize-Tuple{LocalSearchSolvers._Model}'>#</a>&nbsp;<b><u>LocalSearchSolvers.specialize</u></b> &mdash; <i>Method</i>.




```julia
specialize(m::M) where M <: Union{Model, AbstractSolver}
```


Specialize the structure of a model to avoid dynamic type attribution at runtime.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L350-L353)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.status-Tuple{LocalSearchSolvers.MainSolver}' href='#LocalSearchSolvers.status-Tuple{LocalSearchSolvers.MainSolver}'>#</a>&nbsp;<b><u>LocalSearchSolvers.status</u></b> &mdash; <i>Method</i>.




```julia
status(solver)
```


Return the status of a MainSolver.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solvers/main.jl#L60-L63)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.stop_while_loop-Tuple{LocalSearchSolvers.AbstractSolver}' href='#LocalSearchSolvers.stop_while_loop-Tuple{LocalSearchSolvers.AbstractSolver}'>#</a>&nbsp;<b><u>LocalSearchSolvers.stop_while_loop</u></b> &mdash; <i>Method</i>.




```julia
stop_while_loop()
```


Check the stop conditions of the `solve!` while inner loop.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/solver.jl#L399-L402)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.tabu_list-Tuple{Any}' href='#LocalSearchSolvers.tabu_list-Tuple{Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.tabu_list</u></b> &mdash; <i>Method</i>.




```julia
_tabu(s::S) where S <: Union{_State, AbstractSolver}
```


Access the list of tabu variables.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/strategies/tabu.jl#L32-L35)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.tabu_value-Tuple{Any, Any}' href='#LocalSearchSolvers.tabu_value-Tuple{Any, Any}'>#</a>&nbsp;<b><u>LocalSearchSolvers.tabu_value</u></b> &mdash; <i>Method</i>.




```julia
_tabu(s::S, x) where S <: Union{_State, AbstractSolver}
```


Return the tabu value of variable `x`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/strategies/tabu.jl#L38-L41)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.variable!' href='#LocalSearchSolvers.variable!'>#</a>&nbsp;<b><u>LocalSearchSolvers.variable!</u></b> &mdash; <i>Function</i>.




```julia
variable!(m::M, d) where M <: Union{Model, AbstractSolver}
```


Add a variable with domain `d` to `m`.


[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/model.jl#L278-L281)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='LocalSearchSolvers.variable-Tuple{}' href='#LocalSearchSolvers.variable-Tuple{}'>#</a>&nbsp;<b><u>LocalSearchSolvers.variable</u></b> &mdash; <i>Method</i>.




```julia
variable(values::AbstractVector{T}, name::AbstractString; domain = :set) where T <: Number
variable(domain::AbstractDomain, name::AbstractString) where D <: AbstractDomain
```


Construct a variable with discrete domain. See the `domain` method for other options.

```julia
d = domain([1,2,3,4], types = :indices)
x1 = variable(d, "x1")
x2 = variable([-89,56,28], "x2", domain = :indices)
```



[source](https://github.com/JuliaConstraints/LocalSearchSolvers.jl/blob/v0.4.5/src/variable.jl#L60-L70)

</div>
<br>
