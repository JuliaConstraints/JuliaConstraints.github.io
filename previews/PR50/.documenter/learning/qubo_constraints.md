
# Introduction to QUBOConstraints.jl {#Introduction-to-QUBOConstraints.jl}

Introduction to `QUBOConstraints.jl`.



## Basic features {#Basic-features}
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.QUBO_base-learning-qubo_constraints' href='#QUBOConstraints.QUBO_base-learning-qubo_constraints'>#</a>&nbsp;<b><u>QUBOConstraints.QUBO_base</u></b> &mdash; <i>Function</i>.




```julia
QUBO_base(n, weight = 1)
```


A basic QUBO matrix to ensure that binarized variables keep a valid encoding.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/base.jl#L1-L5)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.QUBO_linear_sum-learning-qubo_constraints' href='#QUBOConstraints.QUBO_linear_sum-learning-qubo_constraints'>#</a>&nbsp;<b><u>QUBOConstraints.QUBO_linear_sum</u></b> &mdash; <i>Function</i>.




```julia
QUBO_linear_sum(n, σ)
```


One valid QUBO matrix given `n` variables and parameter `σ` for the linear sum constraint.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/handmade/linear_sum.jl#L1-L5)

</div>
<br>
