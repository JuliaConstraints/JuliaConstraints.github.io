
# Tutorial

Taken from PerfChecker.jl examples, this is a guide for performance testing of PatterFolds.jl package using Chairmarks.jl

Using PerfChecker.jl requires an environment with the dependencies present in it.

The actual script looks like this:

```julia
using PerfChecker, Chairmarks, CairoMakie

d = Dict(:path => @__DIR__, :evals => 10, :samples => 1000,
    :seconds => 100, :tags => [:patterns, :intervals],
    :pkgs => (
        "PatternFolds", :custom, [v"0.2.0", v"0.2.1", v"0.2.2", v"0.2.3", v"0.2.4"], true),
    :devops => "PatternFolds")

x = @check :chairmark d begin
    using PatternFolds
end begin
    # Intervals
    itv = Interval{Open, Closed}(0.0, 1.0)
    i = IntervalsFold(itv, 2.0, 1000)

    unfold(i)
    collect(i)
    reverse(collect(i))

    # Vectors
    vf = make_vector_fold([0, 1], 2, 1000)

    unfold(vf)
    collect(vf)
    reverse(collect(vf))

    rand(vf, 1000)

    return nothing
end

mkpath(joinpath(@__DIR__, "visuals"))

c = checkres_to_scatterlines(x, Val(:chairmark))
save(joinpath(@__DIR__, "visuals", "chair_evolution.png"), c)

for kwarg in [:times, :gctimes, :bytes, :allocs]
    c2 = checkres_to_boxplots(x, Val(:chairmark); kwarg)
    save(joinpath(@__DIR__, "visuals", "chair_boxplots_$kwarg.png"), c2)
end
```


`d` here is the configuration dictionary. `x` stores the results from performance testing

The code below the macro call is for plotting and storing the plots. It creates the visuals folder and stores the following plots in the folder:

Boxplots from Chairmarks for allocations:

<img src="https://github.com/JuliaConstraints/PerfChecker.jl/blob/main/perf/PatternFolds/visuals/chair_boxplots_allocs.png?raw=true" alt="chair_boxplots">


Boxplots from Chairmarks for times:

<img src="https://github.com/JuliaConstraints/PerfChecker.jl/blob/main/perf/PatternFolds/visuals/chair_boxplots_times.png?raw=true" alt="chair_times">


Evolution of different metrics across versions according to Chairmarks:

<img src="https://github.com/JuliaConstraints/PerfChecker.jl/blob/main/perf/PatternFolds/visuals/chair_evolution.png?raw=true" alt="chair_evolution">

