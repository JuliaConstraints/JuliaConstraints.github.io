# Introduction to basics constraint-based modeling tools

Constraint programming (CP) is a powerful paradigm for solving combinatorial problems, and Julia Constraints provides an efficient and flexible framework for developing constraint-based models.

## Domain-defined variables

In CP, variables are defined through their domain. `ConstraintDomains.jl` supports various types of domains such as discrete ones (sets, range, etc.), or continuous intervals, and custom domains.

## `Constraints.jl`: A versatile API

It implements a wide range of generic and core constraints, ensuring compatibility with XCSP3-core standards and providing a user-friendly interface. It includes features extracted from the learning blocks of Julia Constraints to leverage most of each constraint characteristics.

## Models Through `ConstraintModels.jl`

The `ConstraintModels.jl` catalog offers a collection of predefined models and templates for constructing complex constraint satisfaction problems (CSPs) and optimization models. This resource provides reusable components to streamline the modeling process.

Contributions with new models are more than welcome!

## Internal Aspects

Several internal components are crucial for the efficient functioning of Julia Constraints. `ConstraintCommons.jl` provides shared functionalities and utilities used across different parts of the framework, contributing to its robust performance and extensibility. However, it is unlikely to be of direct use to most users.
