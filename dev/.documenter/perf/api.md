
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
