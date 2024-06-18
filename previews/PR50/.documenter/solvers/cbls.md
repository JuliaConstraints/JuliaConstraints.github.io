
# CBLS.jl

Documentation for `CBLS.jl`.
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.AllDifferent' href='#CBLS.AllDifferent'>#</a>&nbsp;<b><u>CBLS.AllDifferent</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that all the values of a given configuration are unique.

```julia
@constraint(model, X in AllDifferent())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L139-L145)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.AllEqual' href='#CBLS.AllEqual'>#</a>&nbsp;<b><u>CBLS.AllEqual</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that all the values of `X` are all equal.

```julia
@constraint(model, X in AllEqual())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L170-L176)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.AllEqualParam' href='#CBLS.AllEqualParam'>#</a>&nbsp;<b><u>CBLS.AllEqualParam</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that all the values of `X` are all equal to a given parameter `param`.

```julia
@constraint(model, X in AllEqualParam(param))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L338-L344)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.AlwaysTrue' href='#CBLS.AlwaysTrue'>#</a>&nbsp;<b><u>CBLS.AlwaysTrue</u></b> &mdash; <i>Type</i>.




Always return `true`. Mainly used for testing purpose.

```julia
@constraint(model, X in AlwaysTrue())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L231-L237)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.DiscreteSet' href='#CBLS.DiscreteSet'>#</a>&nbsp;<b><u>CBLS.DiscreteSet</u></b> &mdash; <i>Type</i>.




```julia
DiscreteSet(values)
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L98-L100)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.DistDifferent' href='#CBLS.DistDifferent'>#</a>&nbsp;<b><u>CBLS.DistDifferent</u></b> &mdash; <i>Type</i>.




Local constraint ensuring that, given a vector `X` of size 4, `|X[1] - X[2]| ≠ |X[3] - X[4]|)`.

```julia
@constraint(model, X in DistDifferent())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L293-L299)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Eq' href='#CBLS.Eq'>#</a>&nbsp;<b><u>CBLS.Eq</u></b> &mdash; <i>Type</i>.




Equality between two variables.

```julia
@constraint(model, X in Eq())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L201-L207)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Error' href='#CBLS.Error'>#</a>&nbsp;<b><u>CBLS.Error</u></b> &mdash; <i>Type</i>.




```julia
Error{F <: Function} <: JuMP.AbstractVectorSet
```


The solver will compute a straightforward error function based on the `concept`. To run the solver efficiently, it is possible to provide an _error function_ `err` instead of `concept`. `err` must return a nonnegative real number.

```julia
@constraint(model, X in Error(err))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L58-L66)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.LessThanParam' href='#CBLS.LessThanParam'>#</a>&nbsp;<b><u>CBLS.LessThanParam</u></b> &mdash; <i>Type</i>.




Constraint ensuring that the value of `x` is less than a given parameter `param`.

```julia
@constraint(model, x in LessThanParam(param))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L432-L438)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIAllDifferent' href='#CBLS.MOIAllDifferent'>#</a>&nbsp;<b><u>CBLS.MOIAllDifferent</u></b> &mdash; <i>Type</i>.




```julia
MOIAllDifferent <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L119-L123)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIAllEqual' href='#CBLS.MOIAllEqual'>#</a>&nbsp;<b><u>CBLS.MOIAllEqual</u></b> &mdash; <i>Type</i>.




```julia
MOIAllEqual <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L149-L153)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIAllEqualParam' href='#CBLS.MOIAllEqualParam'>#</a>&nbsp;<b><u>CBLS.MOIAllEqualParam</u></b> &mdash; <i>Type</i>.




```julia
MOIAllEqualParam{T <: Number} <: MOI.AbstractVectorSet
```


DOCSTRING

**Arguments:**
- `param::T`: DESCRIPTION
  
- `dimension::Int`: DESCRIPTION
  
- `MOIAllEqualParam(param, dim = 0) = begin       #= none:5 =#       new{typeof(param)}(param, dim)   end`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L303-L315)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIAlwaysTrue' href='#CBLS.MOIAlwaysTrue'>#</a>&nbsp;<b><u>CBLS.MOIAlwaysTrue</u></b> &mdash; <i>Type</i>.




```julia
MOIAlwaysTrue <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L211-L215)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIDistDifferent' href='#CBLS.MOIDistDifferent'>#</a>&nbsp;<b><u>CBLS.MOIDistDifferent</u></b> &mdash; <i>Type</i>.




```julia
MOIDistDifferent <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L273-L277)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIEq' href='#CBLS.MOIEq'>#</a>&nbsp;<b><u>CBLS.MOIEq</u></b> &mdash; <i>Type</i>.




```julia
MOIEq <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L180-L184)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIError' href='#CBLS.MOIError'>#</a>&nbsp;<b><u>CBLS.MOIError</u></b> &mdash; <i>Type</i>.




```julia
MOIError{F <: Function} <: MOI.AbstractVectorSet
```


DOCSTRING

**Arguments:**
- `f::F`: DESCRIPTION
  
- `dimension::Int`: DESCRIPTION
  
- `MOIError(f, dim = 0) = begin       #= none:5 =#       new{typeof(f)}(f, dim)   end`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L1-L13)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOILessThanParam' href='#CBLS.MOILessThanParam'>#</a>&nbsp;<b><u>CBLS.MOILessThanParam</u></b> &mdash; <i>Type</i>.




```julia
MOILessThanParam{T <: Number} <: MOI.AbstractVectorSet
```


DOCSTRING

**Arguments:**
- `param::T`: DESCRIPTION
  
- `dimension::Int`: DESCRIPTION
  
- `MOILessThanParam(param, dim = 0) = begin       #= none:5 =#       new{typeof(param)}(param, dim)   end`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L397-L409)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIMinusEqualParam' href='#CBLS.MOIMinusEqualParam'>#</a>&nbsp;<b><u>CBLS.MOIMinusEqualParam</u></b> &mdash; <i>Type</i>.




```julia
MOIMinusEqualParam{T <: Number} <: MOI.AbstractVectorSet
```


DOCSTRING

**Arguments:**
- `param::T`: DESCRIPTION
  
- `dimension::Int`: DESCRIPTION
  
- `MOIMinusEqualParam(param, dim = 0) = begin       #= none:5 =#       new{typeof(param)}(param, dim)   end`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L444-L456)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIOrdered' href='#CBLS.MOIOrdered'>#</a>&nbsp;<b><u>CBLS.MOIOrdered</u></b> &mdash; <i>Type</i>.




```julia
MOIOrdered <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L241-L245)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOIPredicate' href='#CBLS.MOIPredicate'>#</a>&nbsp;<b><u>CBLS.MOIPredicate</u></b> &mdash; <i>Type</i>.




```julia
MOIPredicate{F <: Function} <: MOI.AbstractVectorSet
```


DOCSTRING

**Arguments:**
- `f::F`: DESCRIPTION
  
- `dimension::Int`: DESCRIPTION
  
- `MOIPredicate(f, dim = 0) = begin       #= none:5 =#       new{typeof(f)}(f, dim)   end`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L74-L86)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOISequentialTasks' href='#CBLS.MOISequentialTasks'>#</a>&nbsp;<b><u>CBLS.MOISequentialTasks</u></b> &mdash; <i>Type</i>.




```julia
MOISequentialTasks <: MOI.AbstractVectorSet
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L492-L496)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MOISumEqualParam' href='#CBLS.MOISumEqualParam'>#</a>&nbsp;<b><u>CBLS.MOISumEqualParam</u></b> &mdash; <i>Type</i>.




```julia
MOISumEqualParam{T <: Number} <: MOI.AbstractVectorSet
```


DOCSTRING

**Arguments:**
- `param::T`: DESCRIPTION
  
- `dimension::Int`: DESCRIPTION
  
- `MOISumEqualParam(param, dim = 0) = begin       #= none:5 =#       new{typeof(param)}(param, dim)   end`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L350-L362)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.MinusEqualParam' href='#CBLS.MinusEqualParam'>#</a>&nbsp;<b><u>CBLS.MinusEqualParam</u></b> &mdash; <i>Type</i>.




Constraint ensuring that the value of `x` is less than a given parameter `param`.

```julia
@constraint(model, x in MinusEqualParam(param))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L479-L485)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Optimizer' href='#CBLS.Optimizer'>#</a>&nbsp;<b><u>CBLS.Optimizer</u></b> &mdash; <i>Type</i>.




```julia
Optimizer(model = Model(); options = Options())
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L35-L39)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Optimizer-2' href='#CBLS.Optimizer-2'>#</a>&nbsp;<b><u>CBLS.Optimizer</u></b> &mdash; <i>Type</i>.




```julia
Optimizer <: MOI.AbstractOptimizer
```


DOCSTRING

**Arguments:**
- `solver::Solver`: DESCRIPTION
  
- `status::MOI.TerminationStatusCode`: DESCRIPTION
  
- `options::Options`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L19-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Ordered' href='#CBLS.Ordered'>#</a>&nbsp;<b><u>CBLS.Ordered</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that all the values of `x` are ordered.

```julia
@constraint(model, X in Ordered())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L262-L268)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.Predicate' href='#CBLS.Predicate'>#</a>&nbsp;<b><u>CBLS.Predicate</u></b> &mdash; <i>Type</i>.




```julia
Predicate{F <: Function} <: JuMP.AbstractVectorSet
```


Assuming `X` is a (collection of) variables, `concept` a boolean function over `X`, and that a `model` is defined. In `JuMP` syntax we can create a constraint based on `concept` as follows.

```julia
@constraint(model, X in Predicate(concept))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L105-L113)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.ScalarFunction' href='#CBLS.ScalarFunction'>#</a>&nbsp;<b><u>CBLS.ScalarFunction</u></b> &mdash; <i>Type</i>.




```julia
ScalarFunction{F <: Function, V <: Union{Nothing, VOV}} <: MOI.AbstractScalarFunction
```


A container to express any function with real value in JuMP syntax. Used with the `@objective` macro.

**Arguments:**
- `f::F`: function to be applied to `X`
  
- `X::V`: a subset of the variables of the model.
  

Given a `model`, and some (collection of) variables `X` to optimize. an objective function `f` can be added as follows. Note that only `Min` for minimization us currently defined. `Max` will come soon.

```julia
# Applies to all variables in order of insertion.
# Recommended only when the function argument order does not matter.
@objective(model, ScalarFunction(f))

# Generic use
@objective(model, ScalarFunction(f, X))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/objectives.jl#L9-L28)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.SequentialTasks' href='#CBLS.SequentialTasks'>#</a>&nbsp;<b><u>CBLS.SequentialTasks</u></b> &mdash; <i>Type</i>.




Local constraint ensuring that, given a vector `X` of size 4, `|X[1] - X[2]| ≠ |X[3] - X[4]|)`.

```julia
@constraint(model, X in SequentialTasks())
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L512-L518)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='CBLS.SumEqualParam' href='#CBLS.SumEqualParam'>#</a>&nbsp;<b><u>CBLS.SumEqualParam</u></b> &mdash; <i>Type</i>.




Global constraint ensuring that the sum of the values of `X` is equal to a given parameter `param`.

```julia
@constraint(model, X in SumEqualParam(param))
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L385-L391)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.copy-Tuple{CBLS.MOIError}' href='#Base.copy-Tuple{CBLS.MOIError}'>#</a>&nbsp;<b><u>Base.copy</u></b> &mdash; <i>Method</i>.




```julia
Base.copy(set::MOIError) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L51-L55)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Base.copy-Tuple{DiscreteSet}' href='#Base.copy-Tuple{DiscreteSet}'>#</a>&nbsp;<b><u>Base.copy</u></b> &mdash; <i>Method</i>.




```julia
Base.copy(set::DiscreteSet) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L107-L111)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='JuMP.build_variable-Union{Tuple{T}, Tuple{Function, JuMP.VariableInfo, T}} where T<:MathOptInterface.AbstractScalarSet' href='#JuMP.build_variable-Union{Tuple{T}, Tuple{Function, JuMP.VariableInfo, T}} where T<:MathOptInterface.AbstractScalarSet'>#</a>&nbsp;<b><u>JuMP.build_variable</u></b> &mdash; <i>Method</i>.




```julia
JuMP.build_variable(::Function, info::JuMP.VariableInfo, set::T) where T <: MOI.AbstractScalarSet
```


DOCSTRING

**Arguments:**
- ``: DESCRIPTION
  
- `info`: DESCRIPTION
  
- `set`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L1-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.add_constraint-Union{Tuple{F}, Tuple{CBLS.Optimizer, MathOptInterface.VectorOfVariables, CBLS.MOIError{F}}} where F<:Function' href='#MathOptInterface.add_constraint-Union{Tuple{F}, Tuple{CBLS.Optimizer, MathOptInterface.VectorOfVariables, CBLS.MOIError{F}}} where F<:Function'>#</a>&nbsp;<b><u>MathOptInterface.add_constraint</u></b> &mdash; <i>Method</i>.




```julia
MOI.add_constraint(optimizer::Optimizer, vars::MOI.VectorOfVariables, set::MOIError)
```


DOCSTRING

**Arguments:**
- `optimizer`: DESCRIPTION
  
- `vars`: DESCRIPTION
  
- `set`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L36-L45)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.add_constraint-Union{Tuple{T}, Tuple{CBLS.Optimizer, MathOptInterface.VariableIndex, DiscreteSet{T}}} where T<:Number' href='#MathOptInterface.add_constraint-Union{Tuple{T}, Tuple{CBLS.Optimizer, MathOptInterface.VariableIndex, DiscreteSet{T}}} where T<:Number'>#</a>&nbsp;<b><u>MathOptInterface.add_constraint</u></b> &mdash; <i>Method</i>.




```julia
MOI.add_constraint(optimizer::Optimizer, v::VI, set::DiscreteSet{T}) where T <: Number
```


DOCSTRING

**Arguments:**
- `optimizer`: DESCRIPTION
  
- `v`: DESCRIPTION
  
- `set`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/variables.jl#L34-L43)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.add_variable-Tuple{CBLS.Optimizer}' href='#MathOptInterface.add_variable-Tuple{CBLS.Optimizer}'>#</a>&nbsp;<b><u>MathOptInterface.add_variable</u></b> &mdash; <i>Method</i>.




```julia
MOI.add_variable(model::Optimizer) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/variables.jl#L2-L6)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.empty!-Tuple{Any}' href='#MathOptInterface.empty!-Tuple{Any}'>#</a>&nbsp;<b><u>MathOptInterface.empty!</u></b> &mdash; <i>Method</i>.




```julia
MOI.empty!(opt) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L114-L118)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.get-Tuple{CBLS.Optimizer, MathOptInterface.SolverName}' href='#MathOptInterface.get-Tuple{CBLS.Optimizer, MathOptInterface.SolverName}'>#</a>&nbsp;<b><u>MathOptInterface.get</u></b> &mdash; <i>Method</i>.




```julia
MOI.get(::Optimizer, ::MOI.SolverName) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L59-L63)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.is_empty-Tuple{CBLS.Optimizer}' href='#MathOptInterface.is_empty-Tuple{CBLS.Optimizer}'>#</a>&nbsp;<b><u>MathOptInterface.is_empty</u></b> &mdash; <i>Method</i>.




```julia
MOI.is_empty(model::Optimizer) = begin
```


DOCSTRING


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L78-L82)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.optimize!-Tuple{CBLS.Optimizer}' href='#MathOptInterface.optimize!-Tuple{CBLS.Optimizer}'>#</a>&nbsp;<b><u>MathOptInterface.optimize!</u></b> &mdash; <i>Method</i>.




```julia
MOI.optimize!(model::Optimizer)
```



[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L93-L95)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.set' href='#MathOptInterface.set'>#</a>&nbsp;<b><u>MathOptInterface.set</u></b> &mdash; <i>Function</i>.




```julia
MOI.set(::Optimizer, ::MOI.Silent, bool = true) = begin
```


DOCSTRING

**Arguments:**
- ``: DESCRIPTION
  
- ``: DESCRIPTION
  
- `bool`: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L66-L75)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.set-Tuple{CBLS.Optimizer, MathOptInterface.RawOptimizerAttribute, Any}' href='#MathOptInterface.set-Tuple{CBLS.Optimizer, MathOptInterface.RawOptimizerAttribute, Any}'>#</a>&nbsp;<b><u>MathOptInterface.set</u></b> &mdash; <i>Method</i>.




```julia
MOI.set(model::Optimizer, p::MOI.RawOptimizerAttribute, value)
```


Set a RawOptimizerAttribute to `value`


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/attributes.jl#L19-L22)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.set-Tuple{CBLS.Optimizer, MathOptInterface.TimeLimitSec, Union{Nothing, Float64}}' href='#MathOptInterface.set-Tuple{CBLS.Optimizer, MathOptInterface.TimeLimitSec, Union{Nothing, Float64}}'>#</a>&nbsp;<b><u>MathOptInterface.set</u></b> &mdash; <i>Method</i>.




```julia
MOI.set(model::Optimizer, ::MOI.TimeLimitSec, value::Union{Nothing,Float64})
```


Set the time limit


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/attributes.jl#L7-L10)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.supports_constraint-Union{Tuple{F}, Tuple{CBLS.Optimizer, Type{MathOptInterface.VectorOfVariables}, Type{CBLS.MOIError{F}}}} where F<:Function' href='#MathOptInterface.supports_constraint-Union{Tuple{F}, Tuple{CBLS.Optimizer, Type{MathOptInterface.VectorOfVariables}, Type{CBLS.MOIError{F}}}} where F<:Function'>#</a>&nbsp;<b><u>MathOptInterface.supports_constraint</u></b> &mdash; <i>Method</i>.




```julia
MOI.supports_constraint(::Optimizer, ::Type{VOV}, ::Type{MOIError}) = begin
```


DOCSTRING

**Arguments:**
- ``: DESCRIPTION
  
- ``: DESCRIPTION
  
- ``: DESCRIPTION
  


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/constraints.jl#L21-L30)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='MathOptInterface.supports_incremental_interface-Tuple{CBLS.Optimizer}' href='#MathOptInterface.supports_incremental_interface-Tuple{CBLS.Optimizer}'>#</a>&nbsp;<b><u>MathOptInterface.supports_incremental_interface</u></b> &mdash; <i>Method</i>.




Copy constructor for the optimizer


[source](https://github.com/JuliaConstraints/CBLS.jl/blob/v0.1.13/src/MOI_wrapper.jl#L85-L87)

</div>
<br>
