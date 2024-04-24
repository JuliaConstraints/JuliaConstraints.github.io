import{_ as e,c as r,o as s,a7 as i}from"./chunks/framework.aA95Gx5L.js";const b=JSON.parse('{"title":"PerfChecker.jl","description":"","frontmatter":{},"headers":[],"relativePath":"perf/perf_checker.md","filePath":"perf/perf_checker.md","lastUpdated":null}'),a={name:"perf/perf_checker.md"},t=i(`<h1 id="PerfChecker.jl" tabindex="-1">PerfChecker.jl <a class="header-anchor" href="#PerfChecker.jl" aria-label="Permalink to &quot;PerfChecker.jl {#PerfChecker.jl}&quot;">​</a></h1><p>Documentation for <code>PerfChecker.jl</code>.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="PerfChecker.arrange_breaking-Tuple{VersionNumber, Vector{VersionNumber}, Bool}" href="#PerfChecker.arrange_breaking-Tuple{VersionNumber, Vector{VersionNumber}, Bool}">#</a> <b><u>PerfChecker.arrange_breaking</u></b> — <i>Method</i>. <p>Outputs the last breaking or next breaking version.</p><p><a href="https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.0/src/versions.jl#L52-L54" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="PerfChecker.arrange_major-Tuple{VersionNumber, Vector{VersionNumber}, Bool}" href="#PerfChecker.arrange_major-Tuple{VersionNumber, Vector{VersionNumber}, Bool}">#</a> <b><u>PerfChecker.arrange_major</u></b> — <i>Method</i>. <p>Outputs the earlier or next major version.</p><p><a href="https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.0/src/versions.jl#L63-L65" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="PerfChecker.arrange_patches-Tuple{VersionNumber, Vector{VersionNumber}, Bool}" href="#PerfChecker.arrange_patches-Tuple{VersionNumber, Vector{VersionNumber}, Bool}">#</a> <b><u>PerfChecker.arrange_patches</u></b> — <i>Method</i>. <p>Outputs the last patch or first patch of a version.</p><p><a href="https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.0/src/versions.jl#L31-L33" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="PerfChecker.get_pkg_versions" href="#PerfChecker.get_pkg_versions">#</a> <b><u>PerfChecker.get_pkg_versions</u></b> — <i>Function</i>. <p>Finds all versions of a package in all the installed registries and returns it as a vector.</p><p>Example:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_pkg_versions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ConstraintLearning&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element Vector{VersionNumber}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.4&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.5&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.6&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.3&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.2&quot;</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/PerfChecker.jl/blob/v0.2.0/src/versions.jl#L1-L17" target="_blank" rel="noreferrer">source</a></p></div><br>`,10),n=[t];function l(o,p,h,k,c,d){return s(),r("div",null,n)}const g=e(a,[["render",l]]);export{b as __pageData,g as default};
