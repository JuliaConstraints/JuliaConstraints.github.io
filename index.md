---
---

<div class="home-page-logo">
    <img width="100%" src="/assets/jc-logo_1024x1024.png">
</div>

## JuliaConstraints

JuliaConstraints is a part of the [JuMP ecosystem](https://jump.dev/). It
focuses on constraint programming in Julia.

The goal of packages in JuliaConstraints are two-fold: some of them provide a
generic interface, others are solvers for CP models (either purely in Julia
or wrapping). They make it easy to solve constraint-satisfaction problems 
(CSPs) and constraint-optimisation problems (COPs) in Julia using 
industry-standard solvers and mixed-integer solvers.

* [CBLS.jl](https://github.com/JuliaConstraints/CBLS.jl) is a high-level
  interface for CBLS solvers
* [ConstraintProgrammingExtensions.jl](https://github.com/JuliaConstraints/ConstraintProgrammingExtensions.jl/)
  is a common low-level interface for CP solvers.
* JuliaConstraints hosts several pure-Julia solvers: 
* JuliaConstraints provides wrappers for existing CP solvers:
  * [Chuffed](https://github.com/JuliaConstraints/Chuffed.jl)
  * [CPLEX CP Optimizer](https://github.com/JuliaConstraints/CPLEXCP.jl)
  * [JaCoP](https://github.com/JuliaConstraints/JaCoP.jl)
* JuliaConstraints makes available packages to help write new CP solvers: 
  * [Constraints.jl](https://github.com/JuliaConstraints/Constraints.jl)
    supplies metadata about constraints
  * [ConstraintDomains.jl](https://github.com/JuliaConstraints/ConstraintDomains.jl)
    helps with storing the domain of variables
  * [LocalSearchSolvers.jl](https://github.com/JuliaConstraints/LocalSearchSolvers.jl)
    is a framework to build CBLS solvers
* JuliaConstraints holds repositories of CP models:
  * [ConstraintModels.jl](https://github.com/JuliaConstraints/ConstraintModels.jl)
