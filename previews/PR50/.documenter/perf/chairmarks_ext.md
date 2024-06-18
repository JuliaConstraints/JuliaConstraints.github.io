
# Chairmarks Extension {#Chairmarks-Extension}

A benchmarking extension, based on `Chairmarks.jl`, has been interfaced with `PerfChecker.jl`.  This section will provide some usage examples, documentation, and links to related notebooks.

## Usage

Like all other extensions, `BenchmarkTools` extension can be used in the following way:

```julia
julia> using Chairmarks, PerfChecker

julia> @check :chairmark Dict(:option1 => "value1", :option2 => "value2", :PATH => @__DIR__) begin
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
:evals => nothing
:seconds => 1,
:samples => nothing
:gc => true
```

