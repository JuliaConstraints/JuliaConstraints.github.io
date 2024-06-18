
# PerfChecker.jl

PerfChecker.jl is a package designed for package authors to easily performance test their packages. To achieve that, it provides the follwing features:
- The main macro `@check`, which provides an easy-to-use interface over various interfaces, configurable for various backends via a dictionary.
  
- (WIP) A CI for reproducible performance testing.
  
- Visualization of different metrics from `@check` using Makie.jl
  

## Usage

The primary usage of PerfChecker.jl looks like this:

```julia
  using PerfChecker
  # optional using custom backend like BenchmarkTools, Chairmark etc 
  config = Dict(:option1 => "value1", :option2 => :value2)
  
  results = @check :name_of_backend config begin
    # preparatory code goes here
  end begin
    # the code block to be performance tested goes here
  end

  # Visualization of the results
  using Makie
  checkres_to_scatterlines(results)
```


The config dictionary can take many options, depending on the backend.

Some of the commonly used options are:
- `:PATH` =&gt; The path where to the default environment of julia when creating a new process.
  
- `:pkgs` =&gt; A list of versions to test performance for. Its defined as the `Tuple`, `(name::String, option::Symbol, versions::Vector{VersionNumber}, last_or_first::Bool)` Can be given as follows:
  - `name` is the name of the package.
    
  - `option` is one of the 5 symbols:
    - `:patches`: last patch or first patch of a version
      
    - `:breaking`: last breaking or next breaking version
      
    - `:major`: previous or next major version
      
    - `:minor`: previous or next minor version
      
    - `:custom`: custom version numbers (provide any boolean value for `last_or_first` in this case as it doesn&#39;t matter)
      
    
  - `versions`: The input for the provided `option`
    
  - `last_or_first`: Input for the provided `option`
    
  
- `:tags` =&gt; A list of tags (a vector of symbols) to easily tag performance tests.
  
- `:devops` =&gt; Giving a custom input to `Pkg.develop`. Intended to be used to test performance of a local development branch of a pacakge with previous versions. Often can be used as simply as `:devops => "MyPackageName"`
  
- `:threads` =&gt; An integer to select the number of threads to start Julia with.
  

Checkout the documentation of the other backends for more default options and the default values.
