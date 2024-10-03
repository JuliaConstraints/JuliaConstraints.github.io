import{_ as s,c as i,a5 as a,o as t}from"./chunks/framework.CJakPlgM.js";const k=JSON.parse('{"title":"PerfChecker.jl","description":"","frontmatter":{},"headers":[],"relativePath":"perf/00_perf_checker.md","filePath":"perf/00_perf_checker.md","lastUpdated":null}'),n={name:"perf/00_perf_checker.md"};function o(l,e,p,r,h,c){return t(),i("div",null,e[0]||(e[0]=[a(`<h1 id="perfchecker-jl" tabindex="-1">PerfChecker.jl <a class="header-anchor" href="#perfchecker-jl" aria-label="Permalink to &quot;PerfChecker.jl&quot;">​</a></h1><p>PerfChecker.jl is a package designed for package authors to easily performance test their packages. To achieve that, it provides the follwing features:</p><ul><li><p>The main macro <code>@check</code>, which provides an easy-to-use interface over various interfaces, configurable for various backends via a dictionary.</p></li><li><p>(WIP) A CI for reproducible performance testing.</p></li><li><p>Visualization of different metrics from <code>@check</code> using Makie.jl</p></li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The primary usage of PerfChecker.jl looks like this:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PerfChecker</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # optional using custom backend like BenchmarkTools, Chairmark etc </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:option1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;value1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:option2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :value2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  results </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @check</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :name_of_backend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # preparatory code goes here</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> begin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # the code block to be performance tested goes here</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Visualization of the results</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  checkres_to_scatterlines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(results)</span></span></code></pre></div><p>The config dictionary can take many options, depending on the backend.</p><p>Some of the commonly used options are:</p><ul><li><p><code>:PATH</code> =&gt; The path where to the default environment of julia when creating a new process.</p></li><li><p><code>:pkgs</code> =&gt; A list of versions to test performance for. Its defined as the <code>Tuple</code>, <code>(name::String, option::Symbol, versions::Vector{VersionNumber}, last_or_first::Bool)</code> Can be given as follows:</p><ul><li><p><code>name</code> is the name of the package.</p></li><li><p><code>option</code> is one of the 5 symbols:</p><ul><li><p><code>:patches</code>: last patch or first patch of a version</p></li><li><p><code>:breaking</code>: last breaking or next breaking version</p></li><li><p><code>:major</code>: previous or next major version</p></li><li><p><code>:minor</code>: previous or next minor version</p></li><li><p><code>:custom</code>: custom version numbers (provide any boolean value for <code>last_or_first</code> in this case as it doesn&#39;t matter)</p></li></ul></li><li><p><code>versions</code>: The input for the provided <code>option</code></p></li><li><p><code>last_or_first</code>: Input for the provided <code>option</code></p></li></ul></li><li><p><code>:tags</code> =&gt; A list of tags (a vector of symbols) to easily tag performance tests.</p></li><li><p><code>:devops</code> =&gt; Giving a custom input to <code>Pkg.develop</code>. Intended to be used to test performance of a local development branch of a pacakge with previous versions. Often can be used as simply as <code>:devops =&gt; &quot;MyPackageName&quot;</code></p></li><li><p><code>:threads</code> =&gt; An integer to select the number of threads to start Julia with.</p></li></ul><p>Checkout the documentation of the other backends for more default options and the default values.</p>`,10)]))}const g=s(n,[["render",o]]);export{k as __pageData,g as default};
