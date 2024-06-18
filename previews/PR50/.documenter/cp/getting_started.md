
# Getting Started with Julia for CP and Optimization {#Getting-Started-with-Julia-for-CP-and-Optimization}

## Why Julia? {#Why-Julia?}
- Discuss the advantages of Julia for computational science and optimization, highlighting its performance and ease of use.
  

## Setting Up Your Julia Environment {#Setting-Up-Your-Julia-Environment}

We encourage users to install Julia through `juliaup`, a version manager for the Julia language. Please look at the official Julia language download page for further information. Once installed, Julia can be used through various editors (`Visual Studio Code`), notebooks (`Pluto.jl`), or command-line (`REPL`).

Although a part of the CP solvers available within the Julia ecosystem have their own interface, we encourage users to use the JuMP modeling language if possible.

Julia Constraints host several solvers(&#39; interfaces). Due to its flexibility in modeling and solving, we will use LocalSearchSolvers.jl through its JuMP interface CBLS.jl as the basic example. Note that depending on the targeted instances, available hardware, and expectations, it is not necessarily the best choice.

All along the documentation, we will try to provide syntax examples for different setup.

::: code-group

```julia [LocalSearchSolvers]
using LocalSearchSolvers
```


```julia [CBLS]
using JuMP, CBLS
```


```julia [TODO]
# TODO: Add other solvers
```


:::

## Your First Julia CP Model {#Your-First-Julia-CP-Model}

We will start with a classic puzzle game and some of its not that simple variants: the Sudoku.

(From Wikipedia) In classic Sudoku, the objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid (also called &quot;boxes&quot;, &quot;blocks&quot;, or &quot;regions&quot;) contains all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a well-posed puzzle has a single solution.

Constraint Programming follows the _model-and-solve_ approach. We first need to model our Sudoku problem.

::: code-group

```julia [CBLS]
m = JuMP.Model(CBLS.Optimizer)
```


```julia [TODO]
# TODO: Add other solvers
```


:::

But what are the basis of CP models? It is quite simple:
1. A collection $X = X_1, \cdots, X_n$ of variables with each an associated domain.
  

::: code-group

```julia [CBLS]
@variable(m, 1 ≤ X[1:9, 1:9] ≤ 9, Int)
```


```julia [TODO]
# TODO: Add other solvers
```


:::
1. A collection of predicates (called constraints) $C = C_1, \cdots, C_n$ over (subsets of) $X$.
  

When modeling problems as CP, one might define and use their own predicates. However, a large collection of already defined constraints exists. One, if not the most, iconic global constraint is called AllDifferent. It ensures that all variables take distinct values.

Sudoku puzzles can be defined using only this one constraint applied to different subsets of variables.

::: code-group

```julia [CBLS]
for i in 1:9
        @constraint(m, X[i,:] in AllDifferent()) # rows
        @constraint(m, X[:,i] in AllDifferent()) # columns
end
```


```julia [TODO]
# TODO: Add other solvers
```


:::

The last series of AllDifferent constraint is less straight forward. We need to ensure that each 3 × 3 subgrid (block) is filled with distinct values.

::: code-group

```julia [CBLS]
for i in 0:2, j in 0:2 # blocks
    @constraint(
        m,
        vec(X[(3i+1):(3(i+1)), (3j+1):(3(j+1))]) in AllDifferent(),
    )
end
```


```julia [TODO]
# TODO: Add other solvers
```


:::

We can now simply run our solver to look for a feasible solution.

::: code-group

```julia [CBLS]
optimize!(m)
```


:::

Note that this is heuristic solver, we might not get a feasible solution! Let&#39;s check it out. The value function print the value of a JuMP variable. We can cast it over a collection with the `value.` syntax.

::: code-group

```julia [CBLS]
value.(X)
```


:::
