
# BenchmarkTools Extension {#BenchmarkTools-Extension}

A benchmarking extension, based on `BenchmarkTools.jl`, has been interfaced with `PerfChecker.jl`.  This section will provide some usage examples, documentation, and links to related notebooks.

## Usage

Like all other extensions, `BenchmarkTools` extension can be used in the following way:

```julia
julia> using BenchmarkTools, PerfChecker

julia> @check :benchmark Dict(:option1 => "value1", :option2 => "value2", :PATH => @__DIR__) begin
  # the prelimnary code goes here
  using Example
end begin
  # the code you want to be benchmarked
  Example.domath(10) # returns x + 5, 15 in this case.
end
```


## Options

Options specific to this backend with their default values are defined as:

```julia
:threads => 1
:track => "none"
:samples => BenchmarkTools.DEFAULT_PARAMETERS.samples
:seconds => BenchmarkTools.DEFAULT_PARAMETERS.seconds
:evals => BenchmarkTools.DEFAULT_PARAMETERS.evals
:overhead => BenchmarkTools.DEFAULT_PARAMETERS.overhead
:gctrial => BenchmarkTools.DEFAULT_PARAMETERS.gctrial
:gcsample => BenchmarkTools.DEFAULT_PARAMETERS.gcsample
:time_tolerance => BenchmarkTools.DEFAULT_PARAMETERS.time_tolerance
:memory_tolerance => BenchmarkTools.DEFAULT_PARAMETERS.memory_tolerance 
```

