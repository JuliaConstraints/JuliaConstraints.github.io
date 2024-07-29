import{_ as s,c as i,o as a,a7 as t}from"./chunks/framework.CBLuZwrP.js";const g=JSON.parse('{"title":"Transformations Layer","description":"","frontmatter":{},"headers":[],"relativePath":"learning/transformation.md","filePath":"learning/transformation.md","lastUpdated":null}'),e={name:"learning/transformation.md"},n=t(`<h1 id="Transformations-Layer" tabindex="-1">Transformations Layer <a class="header-anchor" href="#Transformations-Layer" aria-label="Permalink to &quot;Transformations Layer {#Transformations-Layer}&quot;">​</a></h1><p>Some text to describe the transformation layer within usual ICNs.</p><p>The implementation of the transformation relies heavily on the use of the lazy function (make a ref, open an issue to make <code>@lazy</code> macro in front of each transformation).</p><h2 id="List-of-transformations" tabindex="-1">List of transformations <a class="header-anchor" href="#List-of-transformations" aria-label="Permalink to &quot;List of transformations {#List-of-transformations}&quot;">​</a></h2><p>List the possible parameters and how it affects the transformations.</p><h3 id="non-parametric" tabindex="-1">Non-parametric <a class="header-anchor" href="#non-parametric" aria-label="Permalink to &quot;Non-parametric&quot;">​</a></h3><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_identity-learning-transformation" href="#CompositionalNetworks.tr_identity-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_identity</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Identity function. Already defined in Julia as <code>identity</code>, specialized for vectors. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L3-L10" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_count_eq-learning-transformation" href="#CompositionalNetworks.tr_count_eq-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_count_eq</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements equal to <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L16-L23" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_count_eq_right-learning-transformation" href="#CompositionalNetworks.tr_count_eq_right-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_count_eq_right</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the right of and equal to <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L26-L33" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_count_eq_left-learning-transformation" href="#CompositionalNetworks.tr_count_eq_left-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_count_eq_left</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the left of and equal to <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L36-L43" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_count_greater-learning-transformation" href="#CompositionalNetworks.tr_count_greater-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_count_greater</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_greater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_greater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_greater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements greater than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L51-L58" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_count_lesser-learning-transformation" href="#CompositionalNetworks.tr_count_lesser-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_count_lesser</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_lesser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_lesser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_lesser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements lesser than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L61-L68" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_count_g_left-learning-transformation" href="#CompositionalNetworks.tr_count_g_left-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_count_g_left</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the left of and greater than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L71-L78" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_count_g_right-learning-transformation" href="#CompositionalNetworks.tr_count_g_right-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_count_g_right</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the right of and greater than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L91-L97" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.tr_count_l_right-learning-transformation" href="#CompositionalNetworks.tr_count_l_right-learning-transformation">#</a> <b><u>CompositionalNetworks.tr_count_l_right</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_l_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_l_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_l_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the right of and lesser than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L100-L107" target="_blank" rel="noreferrer">source</a></p></div><br><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_contiguous_vals_minus</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_contiguous_vals_minus_rev</code>. Check Documenter&#39;s build log for details.</p></div><h3 id="Param:-:val" tabindex="-1">Param: <code>:val</code> <a class="header-anchor" href="#Param:-:val" aria-label="Permalink to &quot;Param: \`:val\` {#Param:-:val}&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_count_eq_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_count_l_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_count_g_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_count_bounding_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_val_minus_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_param_minus_val</code>. Check Documenter&#39;s build log for details.</p></div><h3 id="Layer-generation" tabindex="-1">Layer generation <a class="header-anchor" href="#Layer-generation" aria-label="Permalink to &quot;Layer generation {#Layer-generation}&quot;">​</a></h3><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.make_transformations-learning-transformation" href="#CompositionalNetworks.make_transformations-learning-transformation">#</a> <b><u>CompositionalNetworks.make_transformations</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">make_transformations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(param</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Generates a dictionary of transformation functions based on the specified parameterization. This function facilitates the creation of parametric layers for constraint transformations, allowing for flexible and dynamic constraint manipulation according to the needs of different constraint programming models.</p><p><strong>Parameters</strong></p><ul><li><code>param::Symbol</code>: Specifies the type of transformations to generate. It can be <code>:none</code> for basic transformations that do not depend on external parameters, or <code>:val</code> for transformations that operate with respect to a specific value parameter.</li></ul><p><strong>Returns</strong></p><ul><li><code>LittleDict{Symbol, Function}</code>: A dictionary mapping transformation names (<code>Symbol</code>) to their corresponding functions (<code>Function</code>). The functions encapsulate various types of transformations, such as counting, comparison, and contiguous value processing.</li></ul><p><strong>Transformation Types</strong></p><ul><li><p>When <code>param</code> is <code>:none</code>, the following transformations are available:</p><ul><li><p><code>:identity</code>: No transformation is applied.</p></li><li><p><code>:count_eq</code>, <code>:count_eq_left</code>, <code>:count_eq_right</code>: Count equalities under different conditions.</p></li><li><p><code>:count_greater</code>, <code>:count_lesser</code>: Count values greater or lesser than a threshold.</p></li><li><p><code>:count_g_left</code>, <code>:count_l_left</code>, <code>:count_g_right</code>, <code>:count_l_right</code>: Count values with greater or lesser comparisons from different directions.</p></li><li><p><code>:contiguous_vals_minus</code>, <code>:contiguous_vals_minus_rev</code>: Process contiguous values with subtraction in normal and reverse order.</p></li></ul></li><li><p>When <code>param</code> is <code>:val</code>, the transformations relate to operations involving a parameter value:</p><ul><li><p><code>:count_eq_param</code>, <code>:count_l_param</code>, <code>:count_g_param</code>: Count equalities or comparisons against a parameter value.</p></li><li><p><code>:count_bounding_param</code>: Count values bounding a parameter value.</p></li><li><p><code>:val_minus_param</code>, <code>:param_minus_val</code>: Subtract a parameter value from values or vice versa.</p></li></ul></li></ul><p>The function delegates to a version that uses <code>Val(param)</code> for dispatch, ensuring compile-time selection of the appropriate transformation set.</p><p><strong>Examples</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Get basic transformations</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basic_transforms </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> make_transformations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Apply an identity transformation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">identity_result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basic_transforms[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](data)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Get value-based transformations</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">val_transforms </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> make_transformations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Apply a count equal to parameter transformation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">count_eq_param_result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val_transforms[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:count_eq_param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](data, param)</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L216-L262" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.transformation_layer-learning-transformation" href="#CompositionalNetworks.transformation_layer-learning-transformation">#</a> <b><u>CompositionalNetworks.transformation_layer</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">transformation_layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(param </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Vector{Symbol}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><p>Generate the layer of transformations functions of the ICN. Iff <code>param</code> value is non empty, also includes all the related parametric transformations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.8/src/layers/transformation.jl#L298-L301" target="_blank" rel="noreferrer">source</a></p></div><br>`,38),o=[n];function r(l,p,d,h,c,k){return a(),i("div",null,o)}const m=s(e,[["render",r]]);export{g as __pageData,m as default};