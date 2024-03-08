## JuliaConstraints

JuliaConstraints is a collection of packages that help you solve constraint programming problems in Julia. Constraint programming involves modeling problems with constraints, such as "x > 5" or "x + y = 10", and finding solutions that satisfy all of the constraints. It is a part of the [JuMP ecosystem](https://jump.dev/) that focuses on constraint programming in Julia.

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

Other packages for CP in Julia include: 

* [ConstraintSolver.jl](https://github.com/Wikunia/ConstraintSolver.jl/), 
  another pure-Julia CP solvers
* [SeaPerl.jl](https://github.com/corail-research/SeaPearl.jl), a research CP
  solver implemented with reinforcement learning, in pure Julia

### Operational Research vs Constraint Programming

Operational research (OR) is a problem-solving approach that uses mathematical models, statistical analysis, and optimization techniques to help organizations make better decisions. OR is concerned with understanding and optimizing complex systems, such as supply chains, transportation networks, and manufacturing processes, to improve efficiency and reduce costs.

On the other hand, constraint programming (CP) is a programming paradigm that focuses on solving problems with constraints. Constraints are conditions that must be satisfied for a solution to be valid. CP is often used to solve combinatorial problems, such as scheduling, routing, and allocation, where the search space of possible solutions is very large.

So, while both OR and CP are concerned with solving complex problems, they approach the problem-solving process from different angles. OR typically uses mathematical models and optimization techniques to analyze and optimize existing systems, while CP focuses on finding valid solutions that satisfy a set of constraints.

### Constraint-Based Local Search

Constraint-based local search (CBLS) is a type of constraint programming solver that uses a heuristic search algorithm to find solutions to problems. It starts with an initial solution and tries to improve it by making small changes that satisfy the constraints. CBLS is especially useful for large and complex problems where finding an exact solution may take too much time or be impossible.

In contrast, other constraint programming solvers use a variety of algorithms and techniques to find exact solutions to problems. These solvers try to find a solution that satisfies all of the constraints in the problem. They can be useful for smaller problems where finding an exact solution is feasible, or for problems that have a clear mathematical structure.

In summary, CBLS is a type of constraint programming solver that uses a heuristic search algorithm to find good solutions, while other constraint programming solvers use various techniques to find exact solutions to problems.
