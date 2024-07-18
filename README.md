# Julia Constraints

[![SciML Code Style](https://img.shields.io/static/v1?label=code%20style&message=SciML&color=9558b2&labelColor=389826)](https://github.com/SciML/SciMLStyle)
[![Chat: Mattermost](https://img.shields.io/badge/chat-mattermost-blueviolet.svg)](https://nohost.iijlab.net/chat/signup_user_complete/?id=nnuc1g14gtrqtnas6thu193xmr)
[![Website: JuliaConstraints](https://img.shields.io/badge/website-JuliaConstraints-informational.svg)](https://juliaconstraints.github.io/)

*A Toolkit for Constraint Programming in Julia!*

The [Julia Constraints](https://github.com/JuliaConstraints) organization serves as a hub for resources to create, understand, and solve optimization through the lens of Constraint Programming.  Our goal is to make Constraint Programming accessible and efficient for users at all levels of expertise, by providing a comprehensive suite of tools.

Most tools integrate seamlessly with [JuMP](https://jump.dev/), a popular Julia package for mathematical optimization.

## Ecosystem overview

### Core packages

The foundation of common packages that provide essential features for constraint programming ensures that users possess the fundamental tools required for their projects.

- **[ConstraintCommons.jl](https://github.com/JuliaConstraints/ConstraintCommons.jl)** is designed to make constraint programming solutions in Julia interoperable. It provides shared structures, abstract types, functions, and generic methods used by both basic feature packages and learning-oriented packages.
- **[ConstraintDomains.jl](https://github.com/JuliaConstraints/ConstraintDomains.jl)** focuses on the definition and manipulation of variable domains, which are used to solve constraint programming problems. This package provides the infrastructure needed to specify both discrete and continuous domains, allowing a wide range of constraint programming applications.
- **[Constraints.jl](https://github.com/JuliaConstraints/Constraints.jl)** is a key component, specifically designed to facilitate the definition, manipulation, and application of constraints in constraint programming. This package is central to handling both standard and complex constraints, making it an indispensable tool for developers and researchers working in CP.
- **[ConstraintModels.jl](https://github.com/JuliaConstraints/Constraintmodels.jl)** is a package for Julia Constraints' solvers that stores Constraint Programming models.

### Learning and Translation Tools

A collection that bridges the gap between the ease of modeling and computational efficacy. These tools learn from constraints or convert natural language problems into constraint programming solutions, requiring minimal input from the user beyond the model itself.

- **[CompositionalNetworks.jl](https://github.com/JuliaConstraints/Compositionalnetworks.jl)** provides interpretable compositional networks (*ICN*), a combinatorial variant of neural networks that allows the user to obtain interpretable results, unlike regular artificial neural networks.
- **[QUBOConstraints.jl](https://github.com/JuliaConstraints/QUBOConstraints.jl)** is a package that can (automatically) learn QUBO matrices from optimization constraints.
- **ConstraintsTranslator.jl** (tentative name, WIP) is a tool for converting problems expressed in natural language into optimization models.
- **[ConstraintLearning.jl](https://github.com/JuliaConstraints/ConstraintLearning.jl)** is a common interface that integrates the various components outlined above.

### Solvers

We offer a variety of solvers, from native Julia solvers to interfaces with JuMP for external CP solvers, to cater to various problem-solving needs.

- **[LocalSearchSolvers.jl](https://github.com/JuliaConstraints/LocalSearchSolvers.jl)** is a Julia native framework to (semi-)automatically build Constraint-based Local Search solvers. It serves as a basic for the experimental design or core and learning oriented packages in Julia Constraints.
- **[CBLS.jl](https://github.com/JuliaConstraints/CBLS.jl)** a MOI/JuMP interface for the above framework!
- **[CPLEXCP.jl](https://github.com/JuliaConstraints/CPLEXCP.jl)** a Julia interface for CPLEX CP Optimizer.
- **[Chuffed.jl](https://github.com/JuliaConstraints/Chuffed.jl)** a wrapper for the constraint-programming solver Chuffed to Julia.
- **[JaCoP.jl](https://github.com/JuliaConstraints/JaCoP.jl)** a Julia interface for the JaCoP constraint-programming solver.

#### JuMP extras

Constraint Programming is slowly making steps into the main JuMP components. However, some extra resources are available as

- **[ConstraintProgrammingExtensions.jl](https://github.com/JuliaConstraints/ConstraintProgrammingExtensions.jl)** provides extensions to MathOptInterface to support constraint programming.
- **[JuCP.jl](https://github.com/JuliaConstraints/JuCP.jl)** similarly provides extensions to JuMP.

#### Meta-solving

**MetaStrategist.jl** is a meta-solving package in its formative stages, which aims to harness the strengths of CP and JuMP. Its goal is to formulate tailored strategies that take into consideration the unique hardware and software resources at hand, offering a new horizon in problem-solving efficiency and adaptability. Stay tuned!

### Performance related tools

We've made a tool for cross-version performance checking that ensures the high efficiency and reliability of our solutions. By facilitating clear and simple performance evaluations, **[PerfChecker.jl](https://github.com/JuliaConstraints/PerfChecker.jl)** enhances both development and maintenance, contributing to the overall health and progress of Julia (Constraints)'s growing library of resources.

## Contributors Page

### Acknowledgments

The Julia Constraints community would not be where it is today without the collective efforts of many talented individuals and organizations. We extend our heartfelt thanks to:

- **[IIJ Research Lab](https://www.iijlab.net/en/)**: The driving force behind more than half of this project!
- **[JuMP-dev Community](https://jump.dev/)**: For their extensive contributions to the development of our packages.
- **Individual Contributors**: Numerous developers and researchers who have dedicated their time and skills to enhance our tools.

