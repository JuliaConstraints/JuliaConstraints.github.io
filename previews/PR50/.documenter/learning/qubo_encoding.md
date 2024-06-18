
# Encoding for QUBO programs {#Encoding-for-QUBO-programs}


<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.is_valid-learning-qubo_encoding' href='#QUBOConstraints.is_valid-learning-qubo_encoding'>#</a>&nbsp;<b><u>QUBOConstraints.is_valid</u></b> &mdash; <i>Function</i>.




```julia
is_valid(x, encoding::Symbol = :none)
```


Check if `x` has a valid format for `encoding`.

For instance, if `encoding == :one_hot`, at most one bit of `x` can be set to 1.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L1-L7)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.binarize-learning-qubo_encoding' href='#QUBOConstraints.binarize-learning-qubo_encoding'>#</a>&nbsp;<b><u>QUBOConstraints.binarize</u></b> &mdash; <i>Function</i>.




```julia
binarize(x[, domain]; binarization = :one_hot)
```


Binarize `x` following the `binarization` encoding. If `x` is a vector (instead of a number per say), `domain` is optional.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L12-L16)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='QUBOConstraints.debinarize-learning-qubo_encoding' href='#QUBOConstraints.debinarize-learning-qubo_encoding'>#</a>&nbsp;<b><u>QUBOConstraints.debinarize</u></b> &mdash; <i>Function</i>.




```julia
debinarize(x[, domain]; binarization = :one_hot)
```


Transform a binary vector into a number or a set of number. If `domain` is not given, it will compute a default value based on `binarization` and `x`.


[source](https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.1/src/encoding/conversion.jl#L35-L39)

</div>
<br>
