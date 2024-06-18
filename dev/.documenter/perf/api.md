
# API

Here&#39;s the API for PerfChecker.jl
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.arrange_breaking-Tuple{VersionNumber, Vector{VersionNumber}, Bool}' href='#PerfChecker.arrange_breaking-Tuple{VersionNumber, Vector{VersionNumber}, Bool}'>#</a>&nbsp;<b><u>PerfChecker.arrange_breaking</u></b> &mdash; <i>Method</i>.




Outputs the last breaking or next breaking version.


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/versions.jl#L56-L58)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.arrange_major-Tuple{VersionNumber, Vector{VersionNumber}, Bool}' href='#PerfChecker.arrange_major-Tuple{VersionNumber, Vector{VersionNumber}, Bool}'>#</a>&nbsp;<b><u>PerfChecker.arrange_major</u></b> &mdash; <i>Method</i>.




Outputs the earlier or next major version.


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/versions.jl#L67-L69)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.arrange_patches-Tuple{VersionNumber, Vector{VersionNumber}, Bool}' href='#PerfChecker.arrange_patches-Tuple{VersionNumber, Vector{VersionNumber}, Bool}'>#</a>&nbsp;<b><u>PerfChecker.arrange_patches</u></b> &mdash; <i>Method</i>.




Outputs the last patch or first patch of a version.


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/versions.jl#L35-L37)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.checkres_to_boxplots' href='#PerfChecker.checkres_to_boxplots'>#</a>&nbsp;<b><u>PerfChecker.checkres_to_boxplots</u></b> &mdash; <i>Function</i>.




General Usage: Takes the output of a check macro, and creates a boxplot. 


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/check.jl#L192-L195)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.checkres_to_pie' href='#PerfChecker.checkres_to_pie'>#</a>&nbsp;<b><u>PerfChecker.checkres_to_pie</u></b> &mdash; <i>Function</i>.




General Usage: Takes the output of a check macro as input, and creates a pie plot. Uses `table_to_pie` internally. 


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/check.jl#L184-L187)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.checkres_to_scatterlines' href='#PerfChecker.checkres_to_scatterlines'>#</a>&nbsp;<b><u>PerfChecker.checkres_to_scatterlines</u></b> &mdash; <i>Function</i>.




General Usage: Takes the output of a check macro as input, and creates a scatterlines plot. 


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/check.jl#L178-L181)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.find_by_tags-Tuple{Vector{Symbol}, PerfChecker.CheckerResult}' href='#PerfChecker.find_by_tags-Tuple{Vector{Symbol}, PerfChecker.CheckerResult}'>#</a>&nbsp;<b><u>PerfChecker.find_by_tags</u></b> &mdash; <i>Method</i>.




Usage: (Assuming you ran the &#39;Basic Example&#39;)

```
julia> find_by_tags([:example, :nice, :great], res)
```



[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/checker_results.jl#L28-L34)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.get_pkg_versions' href='#PerfChecker.get_pkg_versions'>#</a>&nbsp;<b><u>PerfChecker.get_pkg_versions</u></b> &mdash; <i>Function</i>.




Finds all versions of a package in all the installed registries and returns it as a vector.

Example:

```julia
julia> get_pkg_versions("ConstraintLearning")
7-element Vector{VersionNumber}:
 v"0.1.4"
 v"0.1.5"
 v"0.1.0"
 v"0.1.6"
 v"0.1.1"
 v"0.1.3"
 v"0.1.2"
```



[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/versions.jl#L1-L17)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.table_to_pie' href='#PerfChecker.table_to_pie'>#</a>&nbsp;<b><u>PerfChecker.table_to_pie</u></b> &mdash; <i>Function</i>.




General Usage: Takes a table generated via the check macro as input, and creates a pie plot. 


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/check.jl#L172-L175)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.to_table' href='#PerfChecker.to_table'>#</a>&nbsp;<b><u>PerfChecker.to_table</u></b> &mdash; <i>Function</i>.




General Usage: Returns a table from the output of the results of respective backends 


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/check.jl#L198-L201)

</div>
<br>
<div style='border-width:1px; border-style:solid; border-color:black; padding: 1em; border-radius: 25px;'>
<a id='PerfChecker.@check-NTuple{4, Any}' href='#PerfChecker.@check-NTuple{4, Any}'>#</a>&nbsp;<b><u>PerfChecker.@check</u></b> &mdash; <i>Macro</i>.




General usage:

```julia
@check :name_of_backend config_dictionary begin
    # the prelimnary code
end begin
    # the actual code you want to do perf testing for
end
```


Outputs a `CheckerResult` which can be used with other functions.  


[source](https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.1/src/check.jl#L148-L158)

</div>
<br>
