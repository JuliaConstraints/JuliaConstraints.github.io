# Introduction to basics constraint-based modeling tools

Constraint programming (CP) is a high-level paradigm for solving combinatorial problems, and Julia Constraints provides an efficient and flexible framework for developing constraint-based models.

All along this documentation, we will present code example base on the syntaxes of *Julia Constraints* internals (`JC-API`), of *Julia for Mathematical Programming* (`JuMP` ), of *MathOptInterface* (`MOI`), and, when relevant, of other standards such as `XCSP`.

## Terminology

!!! warning
    Terminology in Optimization varies strongly between different methods and communities. In this doc we try to be consistent with the following principles (in bold).
    - **Constraint:** A general mathematical predicate involving variables.
    - **Constraint Instantiation:** The application of a constraint to specific variables.
    - **Configuration:** A specific assignment of values to the variables.
    - **Constraint Satisfaction/Violation:** Whether a configuration meets or fails a constraint.

### Constraint

**Definition:** A constraint is a formal mathematical statement that expresses a condition or a relation between a set of variables. It can be seen as a predicate that the variables must satisfy.

**Example:** Consider the constraint ``x + y \leq 10``. This constraint involves two variables, ``x`` and ``y``, and specifies that their sum must not exceed ``10``.

### Constraint Instantiation

**Definition:** A constraint instantiation refers to a specific application of a generic constraint to a particular subset of variables from a problem. It is essentially the constraint applied with the actual variables of the problem.

**Example:** Given the generic constraint ``x + y \leq 10``, if we have variables ``x_1`` and ``x_2`` in our problem, then the instantiated constraint would be ``x_1 + x_2 \leq 10``.

### Configuration

**Definition:** A configuration, also known as an assignment, is a specific set of values assigned to the variables in their respective domains. It represents a possible state of the variables.

**Example:** For variables ``x`` and ``y`` with domains ``[0, 10]``, a configuration could be ``x = 3`` and ``y = 2``.

### Constraint Satisfaction or Violation by a Configuration

**Definition:** This refers to whether a specific configuration (set of variable assignments) satisfies or violates a given constraint instantiation. A constraint is satisfied if the configuration makes the constraint `true`; otherwise, it is violated (`false`).

**Example:** Given the constraint instantiation ``x + y \leq 10`` and the configuration ``x = 3`` and ``y = 2``, the constraint is satisfied because ``3 + 2 = 5``, which is less than or equal to 10. However, for the configuration ``x = 6`` and ``y = 5``, the constraint is violated because ``6 + 5 = 11``, which exceeds ``10``.

## Domain-defined variables

In CP, variables are defined through their domain. `ConstraintDomains.jl` supports various types of domains such as discrete ones (sets, range, etc.), or continuous intervals, and custom domains.

## A versatile constraints' API

`Constraints.jl` implements a wide range of generic and core constraints, ensuring compatibility with XCSP3-core standards and providing a user-friendly interface. It includes features extracted from the learning blocks of Julia Constraints to leverage most of each constraint characteristics.

## A collection of models

The `ConstraintModels.jl` catalog offers a collection of predefined models and templates for constructing complex constraint satisfaction problems (CSPs) and optimization models. This resource provides reusable components to streamline the modeling process.

Contributions with new models are more than welcome!

## Internal Aspects

Several internal components are crucial for the efficient functioning of Julia Constraints. `ConstraintCommons.jl` provides shared functionalities and utilities used across different parts of the framework, contributing to its robust performance and extensibility. However, it is unlikely to be of direct use to most users.
