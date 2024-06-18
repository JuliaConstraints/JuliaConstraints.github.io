
# Extending PerfChecker {#Extending-PerfChecker}

PerfChecker was build as an easy to extend interface. A good reference example for this is the Chairmarks extension.

Extending PerfChecker works via PkgExtensions feature in Julia. There are 6 essential functions that need to be extended inside the Pkg extension. Each extension has a keyword symbol for it, which users can input to use the extension.

## The Default Options {#The-Default-Options}

Method to be overloaded: `PerfChecker.default_options(::Val{:myperfextension})::Dict`

PerfChecker works via a config dictionary. Users can populate this dictionary with options and provide it to the main `check` macro to customize the performance testing to their liking.

For Chairmarks.jl, it looks like this:

```julia
function PerfChecker.default_options(::Val{:chairmark})
    return Dict(
        :threads => 1,
        :track => "none",
        :evals => nothing,
        :seconds => 1,
        :samples => nothing,
        :gc => true
    )
end
```


## Package initialization {#Package-initialization}

Method to be overloaded: `PerfChecker.initpkgs(::Val{:myperfextension})::Expr`

This method is plainly to load the main package(s) associated with the custom backend. In case of Chairmarks.jl, it looks like this:

```julia
PerfChecker.initpkgs(::Val{:chairmark}) = quote
    using Chairmarks
end
```


## Preparatory Code: {#Preparatory-Code:}

Method to be overloaded: `PerfChecker.prep(config_dict::Dict, block::Expr, ::Val{:myperfextension})::Expr`

This method exists to run arbitrary &quot;preparatory&quot; code (represented by `block` parameter here) before running the code to be performance tested for.

The output from here are stored inside the `:prep_result` key of the configuration dictionary.

Example for Chairmarks.jl:

```julia
PerfChecker.prep(::Dict, block::Expr, ::Val{:chairmark}) = quote
    $block
    nothing
end
```


This just runs the code in `block` provided by the user.

## Main Code to be Performance Tested {#Main-Code-to-be-Performance-Tested}

Method to be overloaded: `PerfChecker.check(config_dict::Dict, block::Expr, ::Val{:myperfextension})::Expr`.

Runs the appropriate code to run the performance testing on user&#39;s code. For Chairmarks.jl, it looks like this:

```julia
function PerfChecker.check(d::Dict, block::Expr, ::Val{:chairmark})
    quote
        d = $d
        return @be $block evals=d[:evals] seconds=d[:seconds] samples=d[:samples] gc=d[:gc]
    end
end
```


The output from here are stored inside the `:check_result` key of the configuration dictionary.

## Post Performance Testing Code {#Post-Performance-Testing-Code}

Method to be overloaded: `PerfChecker.post(config_dict::Dict, ::Val{:myperfextension})`

The code to be run after the performance testing is done. The output from here is converted into a table via the `to_table` method overloading.

In the case of Chairmarks.jl:

```julia
PerfChecker.post(d::Dict, ::Val{:chairmark}) = d[:check_result]
```


## Converting the result into a Table {#Converting-the-result-into-a-Table}

Method to be overloaded: `PerfChecker.to_table`

Convert the output from `post` function into an appropriate table.

In the case of Chairmarks.jl

```julia
function PerfChecker.to_table(chair::Chairmarks.Benchmark)
    l = length(chair.samples)
    times = [chair.samples[i].time for i in 1:l]
    gctimes = [chair.samples[i].gc_fraction for i in 1:l]
    bytes = [chair.samples[i].bytes for i in 1:l]
    allocs = [chair.samples[i].allocs for i in 1:l]
    return Table(times = times, gctimes = gctimes, bytes = bytes, allocs = allocs)
end
```



---


There are also other functions that can be overloaded, mostly related to plotting but these are the basic functions to extend PerfChecker for a custom backend.
