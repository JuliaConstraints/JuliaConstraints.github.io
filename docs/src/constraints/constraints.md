# Constraints.jl: Streamlining Constraint Definition and Integration in Julia

```@meta
CurrentModule = Constraints
```

*Constraints.jl* is a pivotal package within the JuliaConstraints ecosystem, designed to facilitate the definition, manipulation, and application of constraints in constraint programming (CP). This package is central to handling both standard and complex constraints, making it an indispensable tool for developers and researchers working in CP.

## Key Features and Functionalities

- **Integration of XCSP3-core Constraints**: One of the standout features of Constraints.jl is its incorporation of the XCSP3-core constraints as usual constraints within Julia. This integration ensures that users can define and work with a wide range of standard constraints, following the specifications outlined in the XCSP3-core, directly in Julia. The use of `USUAL_CONSTRAINTS` dictionary allows for straightforward addition and manipulation of these constraints, enhancing the package's utility and flexibility.

- **Learning Package Integration**: Constraints.jl goes beyond traditional constraint handling by offering the capability to include results from various learning packages within the JuliaConstraints organization. This feature allows for the enhancement of usual constraints and those from the Global Constraints Catalog with learned parameters and behaviors, significantly improving constraint applicability and performance in complex CP problems.

- **Constraint Definition and Symmetry Handling**: The package provides a simple yet powerful syntax for defining new constraints (`@usual`) and managing their symmetries through the `USUAL_SYMMETRIES` dictionary. This approach simplifies the creation of new constraints and the optimization of constraint search spaces by avoiding redundant explorations.

- **Advanced Constraint Functionalities**: At the core of Constraints.jl is the `Constraint` type, encapsulating the essential elements of a constraint, including its concept (a Boolean function determining satisfaction) and an error function (providing a preference measure over invalid assignments). These components are crucial for defining how constraints behave and are evaluated within a CP model.

- **Flexible Constraint Application**: The package supports a range of methods for interacting with constraints, such as `args`, `concept`, `error_f`, `params_length`, `symmetries`, and `xcsp_intension`. These methods offer users the ability to examine constraint properties, apply constraints to variable assignments, and work with intensional constraints defined by predicates. Such flexibility is vital for tailoring constraint behavior to specific problems and contexts.

## Enabling Advanced Modeling in Constraint Programming

Constraints.jl embodies the JuliaConstraints ecosystem's commitment to providing robust, flexible tools for constraint programming. By integrating standard constraints, facilitating the incorporation of learned behaviors, and offering comprehensive tools for constraint definition and application, Constraints.jl significantly enhances the modeling capabilities available to CP practitioners. Whether for educational purposes, research, or solving practical CP problems, Constraints.jl offers a sophisticated, user-friendly platform for working with constraints in Julia.

## Basic tools

```@docs; canonical=false
USUAL_SYMMETRIES
Constraint
concept
error_f
args
params_length
symmetries
make_error
shrink_concept
concept_vs_error
```

## Usual constraints (based on and including XCSP3-core categories)

```@docs; canonical=false
USUAL_CONSTRAINTS
describe
ConstraintCommons.extract_parameters
usual
constraints_parameters
constraints_descriptions
```

### Generic Constraints

```@docs; canonical=false
xcsp_intension
xcsp_extension
```

### Constraints defined from Languages

```@docs; canonical=false
xcsp_regular
xcsp_mdd
```

### Comparison-based Constraints

```@docs; canonical=false
xcsp_all_different
xcsp_all_equal
xcsp_ordered
```

### Counting and Summing Constraints

```@docs; canonical=false
xcsp_sum
xcsp_count
xcsp_nvalues
xcsp_cardinality
```

# SECTION - Connection Constraints

```@docs; canonical=false
xcsp_maximum
xcsp_minimum
xcsp_element
xcsp_channel
```

# SECTION - Packing and Scheduling Constraints

```@docs; canonical=false
xcsp_cumulative
xcsp_no_overlap
```

# SECTION - Constraints on Graphs

```@docs; canonical=false
xcsp_circuit
```

# SECTION - Elementary Constraints
```@docs; canonical=false
xcsp_instantiation
```
