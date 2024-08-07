# Interacting with Constraints in Julia

```@meta
CurrentModule = Constraints
```

*Constraints.jl* is a pivotal package within Julia Constraints, designed to facilitate the definition, manipulation, and application of constraints in constraint programming (CP).

It also acts as a catalog of various information and features learned about constraints by the learning part of the ecosystem. Per design, we only store the practical information extracted by those tools and not the heavy machinery.

## Usual Parameters

The usual constraints of Julia Constraints are heavily inspired by the core constraints of the *XCSP3-core* standard. The main difference lies in the name chosen to describe the different parameters those core constraints can have.

In *XCSP3*, the parameters are described based on their roles, which the user can find as keyword argument in the `xcsp_` prefixed collection of constraints (for instance `xcsp_all_different`). In our the Julia Constraints API (`JC-API`), the keyword arguments correspond to the nature of each parameter.

```@docs; canonical=false
USUAL_CONSTRAINT_PARAMETERS
```

## Concepts, Error Functions, and QUBO matrices

One major use of this collection of usual constraint is to extract the `concept` or the error function (`error_f`) of a given constraint.

```@docs; canonical=false
concept
```

Note that the error function is a finer estimation of how much a constraint is violated or not. By default, the `error_f` method simply return ``0.`` if the constraint is satisfied or ``1.`` otherwise.

Efficient versions of `error_r` are either hand-coded or generated through `CompositionalNetworks.jl`.

```@docs; canonical=false
error_f
```

Finally, another use is to provide `QUBO` matrices of those usual constraints through `QUBOConstraints.jl`. The syntax and interface for this feature are still a work in progress.

## Usual Constraints

We provide a couple of methods to navigate the usual constraints extracted from *XCSP3-Core*.

```@docs; canonical=false
USUAL_CONSTRAINTS
describe
constraints_parameters
constraints_descriptions
```
