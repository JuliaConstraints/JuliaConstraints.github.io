import{_ as i,c as s,o,a7 as a}from"./chunks/framework.RTxADYK2.js";const m=JSON.parse('{"title":"CompositionalNetworks.jl","description":"","frontmatter":{},"headers":[],"relativePath":"learning/compositional_networks.md","filePath":"learning/compositional_networks.md","lastUpdated":null}'),t={name:"learning/compositional_networks.md"},e=a('<h1 id="CompositionalNetworks.jl" tabindex="-1">CompositionalNetworks.jl <a class="header-anchor" href="#CompositionalNetworks.jl" aria-label="Permalink to &quot;CompositionalNetworks.jl {#CompositionalNetworks.jl}&quot;">​</a></h1><p>Documentation for <code>CompositionalNetworks.jl</code>.</p><h2 id="Utilities" tabindex="-1">Utilities <a class="header-anchor" href="#Utilities" aria-label="Permalink to &quot;Utilities {#Utilities}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.map_tr!-learning-compositional_networks" href="#CompositionalNetworks.map_tr!-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.map_tr!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">map_tr!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f, x, X, param)</span></span></code></pre></div><p>Return an anonymous function that applies <code>f</code> to all elements of <code>x</code> and store the result in <code>X</code>, with a parameter <code>param</code> (which is set to <code>nothing</code> for function with no parameter).</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/utils.jl#L1-L4" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.lazy-learning-compositional_networks" href="#CompositionalNetworks.lazy-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.lazy</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lazy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(funcs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Function...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Generate methods extended to a vector instead of one of its components. A function <code>f</code> should have the following signature: <code>f(i::Int, x::V)</code>.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/utils.jl#L12-L15" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.lazy_param-learning-compositional_networks" href="#CompositionalNetworks.lazy_param-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.lazy_param</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lazy_param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(funcs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Function...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Generate methods extended to a vector instead of one of its components. A function <code>f</code> should have the following signature: <code>f(i::Int, x::V; param)</code>.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/utils.jl#L30-L33" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.as_bitvector-learning-compositional_networks" href="#CompositionalNetworks.as_bitvector-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.as_bitvector</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">as_bitvector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, max_n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n)</span></span></code></pre></div><p>Convert an Int to a BitVector of minimal size (relatively to <code>max_n</code>).</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/utils.jl#L42-L45" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.as_int-learning-compositional_networks" href="#CompositionalNetworks.as_int-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.as_int</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">as_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Convert a <code>BitVector</code> into an <code>Int</code>.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/utils.jl#L59-L62" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.reduce_symbols-learning-compositional_networks" href="#CompositionalNetworks.reduce_symbols-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.reduce_symbols</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">reduce_symbols</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(symbols, sep)</span></span></code></pre></div><p>Produce a formatted string that separates the symbols by <code>sep</code>. Used internally for <code>show_composition</code>.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/utils.jl#L71-L74" target="_blank" rel="noreferrer">source</a></p></div><br><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>CompositionalNeworks.tr_in</code>. Check Documenter&#39;s build log for details.</p></div><h2 id="Metrics" tabindex="-1">Metrics <a class="header-anchor" href="#Metrics" aria-label="Permalink to &quot;Metrics {#Metrics}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.hamming-learning-compositional_networks" href="#CompositionalNetworks.hamming-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.hamming</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hamming</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X)</span></span></code></pre></div><p>Compute the hamming distance of <code>x</code> over a collection of solutions <code>X</code>, i.e. the minimal number of variables to switch in <code>x</code>to reach a solution.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/metrics.jl#L1-L4" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.minkowski-learning-compositional_networks" href="#CompositionalNetworks.minkowski-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.minkowski</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minkowski</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X, p)</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/metrics.jl#L7-L9" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.manhattan-learning-compositional_networks" href="#CompositionalNetworks.manhattan-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.manhattan</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">manhattan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X)</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/metrics.jl#L12-L14" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.weigths_bias-learning-compositional_networks" href="#CompositionalNetworks.weigths_bias-learning-compositional_networks">#</a> <b><u>CompositionalNetworks.weigths_bias</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">weigths_bias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span></code></pre></div><p>A metric that bias <code>x</code> towards operations with a lower bit. Do not affect the main metric.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.5/src/metrics.jl#L17-L20" target="_blank" rel="noreferrer">source</a></p></div><br>',25),n=[e];function r(l,p,d,c,h,k){return o(),s("div",null,n)}const u=i(t,[["render",r]]);export{m as __pageData,u as default};
