
# Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}



_Constraints.jl_ is a pivotal package within the JuliaConstraints ecosystem, designed to facilitate the definition, manipulation, and application of constraints in constraint programming (CP). This package is central to handling both standard and complex constraints, making it an indispensable tool for developers and researchers working in CP.

## Key Features and Functionalities {#Key-Features-and-Functionalities}
- **Integration of XCSP3-core Constraints**: One of the standout features of Constraints.jl is its incorporation of the XCSP3-core constraints as usual constraints within Julia. This integration ensures that users can define and work with a wide range of standard constraints, following the specifications outlined in the XCSP3-core, directly in Julia. The use of `USUAL_CONSTRAINTS` dictionary allows for straightforward addition and manipulation of these constraints, enhancing the package&#39;s utility and flexibility.
  
- **Learning Package Integration**: Constraints.jl goes beyond traditional constraint handling by offering the capability to include results from various learning packages within the JuliaConstraints organization. This feature allows for the enhancement of usual constraints and those from the Global Constraints Catalog with learned parameters and behaviors, significantly improving constraint applicability and performance in complex CP problems.
  
- **Constraint Definition and Symmetry Handling**: The package provides a simple yet powerful syntax for defining new constraints (`@usual`) and managing their symmetries through the `USUAL_SYMMETRIES` dictionary. This approach simplifies the creation of new constraints and the optimization of constraint search spaces by avoiding redundant explorations.
  
- **Advanced Constraint Functionalities**: At the core of Constraints.jl is the `Constraint` type, encapsulating the essential elements of a constraint, including its concept (a Boolean function determining satisfaction) and an error function (providing a preference measure over invalid assignments). These components are crucial for defining how constraints behave and are evaluated within a CP model.
  
- **Flexible Constraint Application**: The package supports a range of methods for interacting with constraints, such as `args`, `concept`, `error_f`, `params_length`, `symmetries`, and `xcsp_intension`. These methods offer users the ability to examine constraint properties, apply constraints to variable assignments, and work with intensional constraints defined by predicates. Such flexibility is vital for tailoring constraint behavior to specific problems and contexts.
  

## Enabling Advanced Modeling in Constraint Programming {#Enabling-Advanced-Modeling-in-Constraint-Programming}

Constraints.jl embodies the JuliaConstraints ecosystem&#39;s commitment to providing robust, flexible tools for constraint programming. By integrating standard constraints, facilitating the incorporation of learned behaviors, and offering comprehensive tools for constraint definition and application, Constraints.jl significantly enhances the modeling capabilities available to CP practitioners. Whether for educational purposes, research, or solving practical CP problems, Constraints.jl offers a sophisticated, user-friendly platform for working with constraints in Julia.

## Basic tools {#Basic-tools}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.USUAL_SYMMETRIES-constraints-constraints' href='#Constraints.USUAL_SYMMETRIES-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.USUAL_SYMMETRIES</u></b> &mdash; <i>Constant</i>.




```julia
USUAL_SYMMETRIES
```


A Dictionary that contains the function to apply for each symmetry to avoid searching a whole space.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L1-L4)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.Constraint-constraints-constraints' href='#Constraints.Constraint-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.Constraint</u></b> &mdash; <i>Type</i>.




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
<a id='Constraints.concept-constraints-constraints' href='#Constraints.concept-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.concept</u></b> &mdash; <i>Function</i>.




```julia
concept(c::Constraint)
```


Return the concept (function) of constraint `c`.     concept(c::Constraint, x...; param = nothing) Apply the concept of `c` to values `x` and optionally `param`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L40-L45)



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
<a id='Constraints.error_f-constraints-constraints' href='#Constraints.error_f-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.error_f</u></b> &mdash; <i>Function</i>.




```julia
error_f(c::Constraint)
```


Return the error function of constraint `c`.     error_f(c::Constraint, x; param = nothing) Apply the error function of `c` to values `x` and optionally `param`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L51-L56)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.args-constraints-constraints' href='#Constraints.args-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.args</u></b> &mdash; <i>Function</i>.




```julia
args(c::Constraint)
```


Return the expected length restriction of the arguments in a constraint `c`. The value `nothing` indicates that any strictly positive number of value is accepted.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L62-L65)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.params_length-constraints-constraints' href='#Constraints.params_length-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.params_length</u></b> &mdash; <i>Function</i>.




```julia
params_length(c::Constraint)
```


Return the expected length restriction of the arguments in a constraint `c`. The value `nothing` indicates that any strictly positive number of parameters is accepted.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L68-L71)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.symmetries-constraints-constraints' href='#Constraints.symmetries-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.symmetries</u></b> &mdash; <i>Function</i>.




```julia
symmetries(c::Constraint)
```


Return the list of symmetries of `c`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L74-L77)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.make_error-constraints-constraints' href='#Constraints.make_error-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.make_error</u></b> &mdash; <i>Function</i>.




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
<a id='Constraints.shrink_concept-constraints-constraints' href='#Constraints.shrink_concept-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.shrink_concept</u></b> &mdash; <i>Function</i>.




```julia
shrink_concept(s)
```


Simply delete the `concept_` part of symbol or string starting with it. TODO: add a check with a warning if `s` starts with something different.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L104-L108)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.concept_vs_error-constraints-constraints' href='#Constraints.concept_vs_error-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.concept_vs_error</u></b> &mdash; <i>Function</i>.




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

## Usual constraints (based on and including XCSP3-core categories) {#Usual-constraints-(based-on-and-including-XCSP3-core-categories)}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='Constraints.USUAL_CONSTRAINTS-constraints-constraints' href='#Constraints.USUAL_CONSTRAINTS-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.USUAL_CONSTRAINTS</u></b> &mdash; <i>Constant</i>.




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
<a id='Constraints.describe-constraints-constraints' href='#Constraints.describe-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.describe</u></b> &mdash; <i>Function</i>.




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
<a id='ConstraintCommons.extract_parameters-constraints-constraints' href='#ConstraintCommons.extract_parameters-constraints-constraints'>#</a>&nbsp;<b><u>ConstraintCommons.extract_parameters</u></b> &mdash; <i>Function</i>.




```julia
extract_parameters(m::Union{Method, Function}; parameters)
```


Extracts the intersection between the `kargs` of `m` and `parameters` (defaults to `USUAL_CONSTRAINT_PARAMETERS`).


[source](https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/parameters.jl#L21-L25)



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
<a id='Constraints.@usual-constraints-constraints' href='#Constraints.@usual-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.@usual</u></b> &mdash; <i>Macro</i>.




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
<a id='Constraints.constraints_parameters-constraints-constraints' href='#Constraints.constraints_parameters-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.constraints_parameters</u></b> &mdash; <i>Function</i>.




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
<a id='Constraints.constraints_descriptions-constraints-constraints' href='#Constraints.constraints_descriptions-constraints-constraints'>#</a>&nbsp;<b><u>Constraints.constraints_descriptions</u></b> &mdash; <i>Function</i>.




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
<a id='Constraints.concept-constraints-constraints-2' href='#Constraints.concept-constraints-constraints-2'>#</a>&nbsp;<b><u>Constraints.concept</u></b> &mdash; <i>Function</i>.




```julia
concept(c::Constraint)
```


Return the concept (function) of constraint `c`.     concept(c::Constraint, x...; param = nothing) Apply the concept of `c` to values `x` and optionally `param`.


[source](https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/constraint.jl#L40-L45)



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
