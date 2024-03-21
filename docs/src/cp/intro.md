# Welcome to Julia Constraints

An introductory post/chapter that provides an overview of the JuliaConstraint organization, its mission, and what readers can expect to learn from the content. Highlight the importance of Constraint Programming (CP) and optimization in solving real-world problems.

Follows a test of some of DocumenterVitePress.jl features.

````@example simple_sum
2 + 2
````


### Julia code example -- from the DOcumenterVitePress website

The `Julia` code used here is done using the following packages versions:

````@example version
using Pkg
Pkg.status()
````

And a simple task:

````@example simple_sum
2 + 2
````

````@example intention1
using Random
Random.seed!(1)
A = rand(3, 3)
b = [1, 2, 3]
A \ b
````

````@example intention2
using Constraints # hide
c = concept(:dist_different)
c([1, 2, 3, 3]) && !c([1, 2, 3, 4])
````


## ANSI example

````@ansi
printstyled("this is my color"; color = :red)
````

A more colorful example for [documenter](https://documenter.juliadocs.org/stable/showcase/#Raw-ANSI-code-output):

````@ansi
for color in 0:15
    print("\e[38;5;$color;48;5;$(color)m  ")
    print("\e[49m", lpad(color, 3), " ")
    color % 8 == 7 && println()
end
````

## Font

This package uses the JuliaMono font by default, but you can override this in CSS.  

This is what some common symbols look like:

```julia
] [ = $ ; ( @ { " ) ? . } ⊽ ⊼ ⊻ ⊋ ⊊ ⊉ ⊈ ⊇ ⊆ ≥ ≤ ≢ ≡ ≠ ≉ ≈ ∪ ∩ ∜ ∛ √ ∘ ∌
|> /> ^ % ` ∈ 
```
