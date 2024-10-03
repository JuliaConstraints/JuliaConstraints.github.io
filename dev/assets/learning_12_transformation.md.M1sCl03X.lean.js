import{_ as o,c as l,a5 as t,j as i,a as n,G as e,B as r,o as p}from"./chunks/framework.CJakPlgM.js";const B=JSON.parse('{"title":"Transformations Layer","description":"","frontmatter":{},"headers":[],"relativePath":"learning/12_transformation.md","filePath":"learning/12_transformation.md","lastUpdated":null}'),d={name:"learning/12_transformation.md"},h={class:"jldocstring custom-block",open:""},c={class:"jldocstring custom-block",open:""},k={class:"jldocstring custom-block",open:""},u={class:"jldocstring custom-block",open:""},g={class:"jldocstring custom-block",open:""},m={class:"jldocstring custom-block",open:""},f={class:"jldocstring custom-block",open:""},y={class:"jldocstring custom-block",open:""},E={class:"jldocstring custom-block",open:""},_={class:"jldocstring custom-block",open:""},b={class:"jldocstring custom-block",open:""};function C(v,s,F,j,x,w){const a=r("Badge");return p(),l("div",null,[s[33]||(s[33]=t('<h1 id="Transformations-Layer" tabindex="-1">Transformations Layer <a class="header-anchor" href="#Transformations-Layer" aria-label="Permalink to &quot;Transformations Layer {#Transformations-Layer}&quot;">​</a></h1><p>Some text to describe the transformation layer within usual ICNs.</p><p>The implementation of the transformation relies heavily on the use of the lazy function (make a ref, open an issue to make <code>@lazy</code> macro in front of each transformation).</p><h2 id="List-of-transformations" tabindex="-1">List of transformations <a class="header-anchor" href="#List-of-transformations" aria-label="Permalink to &quot;List of transformations {#List-of-transformations}&quot;">​</a></h2><p>List the possible parameters and how it affects the transformations.</p><h3 id="non-parametric" tabindex="-1">Non-parametric <a class="header-anchor" href="#non-parametric" aria-label="Permalink to &quot;Non-parametric&quot;">​</a></h3>',6)),i("details",h,[i("summary",null,[s[0]||(s[0]=i("a",{id:"CompositionalNetworks.tr_identity-learning-12_transformation",href:"#CompositionalNetworks.tr_identity-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_identity")],-1)),s[1]||(s[1]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[2]||(s[2]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Identity function. Already defined in Julia as <code>identity</code>, specialized for vectors. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L3-L10" target="_blank" rel="noreferrer">source</a></p>`,3))]),i("details",c,[i("summary",null,[s[3]||(s[3]=i("a",{id:"CompositionalNetworks.tr_count_eq-learning-12_transformation",href:"#CompositionalNetworks.tr_count_eq-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_count_eq")],-1)),s[4]||(s[4]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[5]||(s[5]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements equal to <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L16-L23" target="_blank" rel="noreferrer">source</a></p>`,3))]),i("details",k,[i("summary",null,[s[6]||(s[6]=i("a",{id:"CompositionalNetworks.tr_count_eq_right-learning-12_transformation",href:"#CompositionalNetworks.tr_count_eq_right-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_count_eq_right")],-1)),s[7]||(s[7]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[8]||(s[8]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the right of and equal to <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L26-L33" target="_blank" rel="noreferrer">source</a></p>`,3))]),i("details",u,[i("summary",null,[s[9]||(s[9]=i("a",{id:"CompositionalNetworks.tr_count_eq_left-learning-12_transformation",href:"#CompositionalNetworks.tr_count_eq_left-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_count_eq_left")],-1)),s[10]||(s[10]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[11]||(s[11]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_eq_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the left of and equal to <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L36-L43" target="_blank" rel="noreferrer">source</a></p>`,3))]),i("details",g,[i("summary",null,[s[12]||(s[12]=i("a",{id:"CompositionalNetworks.tr_count_greater-learning-12_transformation",href:"#CompositionalNetworks.tr_count_greater-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_count_greater")],-1)),s[13]||(s[13]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[14]||(s[14]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_greater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_greater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_greater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements greater than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L51-L58" target="_blank" rel="noreferrer">source</a></p>`,3))]),i("details",m,[i("summary",null,[s[15]||(s[15]=i("a",{id:"CompositionalNetworks.tr_count_lesser-learning-12_transformation",href:"#CompositionalNetworks.tr_count_lesser-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_count_lesser")],-1)),s[16]||(s[16]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[17]||(s[17]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_lesser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_lesser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_lesser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements lesser than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L61-L68" target="_blank" rel="noreferrer">source</a></p>`,3))]),i("details",f,[i("summary",null,[s[18]||(s[18]=i("a",{id:"CompositionalNetworks.tr_count_g_left-learning-12_transformation",href:"#CompositionalNetworks.tr_count_g_left-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_count_g_left")],-1)),s[19]||(s[19]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[20]||(s[20]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the left of and greater than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L71-L78" target="_blank" rel="noreferrer">source</a></p>`,3))]),i("details",y,[i("summary",null,[s[21]||(s[21]=i("a",{id:"CompositionalNetworks.tr_count_g_right-learning-12_transformation",href:"#CompositionalNetworks.tr_count_g_right-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_count_g_right")],-1)),s[22]||(s[22]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[23]||(s[23]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_g_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the right of and greater than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L91-L97" target="_blank" rel="noreferrer">source</a></p>`,3))]),i("details",E,[i("summary",null,[s[24]||(s[24]=i("a",{id:"CompositionalNetworks.tr_count_l_right-learning-12_transformation",href:"#CompositionalNetworks.tr_count_l_right-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.tr_count_l_right")],-1)),s[25]||(s[25]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[26]||(s[26]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_l_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_l_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tr_count_l_right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Count the number of elements to the right of and lesser than <code>x[i]</code>. Extended method to vector with sig <code>(x)</code> are generated. When <code>X</code> is provided, the result is computed without allocations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L100-L107" target="_blank" rel="noreferrer">source</a></p>`,3))]),s[34]||(s[34]=t('<div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_contiguous_vals_minus</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_contiguous_vals_minus_rev</code>. Check Documenter&#39;s build log for details.</p></div><h3 id="Param:-:val" tabindex="-1">Param: <code>:val</code> <a class="header-anchor" href="#Param:-:val" aria-label="Permalink to &quot;Param: `:val` {#Param:-:val}&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_count_eq_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_count_l_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_count_g_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_count_bounding_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_val_minus_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>tr_param_minus_val</code>. Check Documenter&#39;s build log for details.</p></div><h3 id="Layer-generation" tabindex="-1">Layer generation <a class="header-anchor" href="#Layer-generation" aria-label="Permalink to &quot;Layer generation {#Layer-generation}&quot;">​</a></h3>',10)),i("details",_,[i("summary",null,[s[27]||(s[27]=i("a",{id:"CompositionalNetworks.make_transformations-learning-12_transformation",href:"#CompositionalNetworks.make_transformations-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.make_transformations")],-1)),s[28]||(s[28]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[29]||(s[29]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">make_transformations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(param</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Generates a dictionary of transformation functions based on the specified parameterization. This function facilitates the creation of parametric layers for constraint transformations, allowing for flexible and dynamic constraint manipulation according to the needs of different constraint programming models.</p><p><strong>Parameters</strong></p><ul><li><code>param::Symbol</code>: Specifies the type of transformations to generate. It can be <code>:none</code> for basic transformations that do not depend on external parameters, or <code>:val</code> for transformations that operate with respect to a specific value parameter.</li></ul><p><strong>Returns</strong></p><ul><li><code>LittleDict{Symbol, Function}</code>: A dictionary mapping transformation names (<code>Symbol</code>) to their corresponding functions (<code>Function</code>). The functions encapsulate various types of transformations, such as counting, comparison, and contiguous value processing.</li></ul><p><strong>Transformation Types</strong></p><ul><li><p>When <code>param</code> is <code>:none</code>, the following transformations are available:</p><ul><li><p><code>:identity</code>: No transformation is applied.</p></li><li><p><code>:count_eq</code>, <code>:count_eq_left</code>, <code>:count_eq_right</code>: Count equalities under different conditions.</p></li><li><p><code>:count_greater</code>, <code>:count_lesser</code>: Count values greater or lesser than a threshold.</p></li><li><p><code>:count_g_left</code>, <code>:count_l_left</code>, <code>:count_g_right</code>, <code>:count_l_right</code>: Count values with greater or lesser comparisons from different directions.</p></li><li><p><code>:contiguous_vals_minus</code>, <code>:contiguous_vals_minus_rev</code>: Process contiguous values with subtraction in normal and reverse order.</p></li></ul></li><li><p>When <code>param</code> is <code>:val</code>, the transformations relate to operations involving a parameter value:</p><ul><li><p><code>:count_eq_param</code>, <code>:count_l_param</code>, <code>:count_g_param</code>: Count equalities or comparisons against a parameter value.</p></li><li><p><code>:count_bounding_param</code>: Count values bounding a parameter value.</p></li><li><p><code>:val_minus_param</code>, <code>:param_minus_val</code>: Subtract a parameter value from values or vice versa.</p></li></ul></li></ul><p>The function delegates to a version that uses <code>Val(param)</code> for dispatch, ensuring compile-time selection of the appropriate transformation set.</p><p><strong>Examples</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Get basic transformations</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basic_transforms </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> make_transformations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Apply an identity transformation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">identity_result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basic_transforms[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](data)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Get value-based transformations</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">val_transforms </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> make_transformations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Apply a count equal to parameter transformation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">count_eq_param_result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val_transforms[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:count_eq_param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](data, param)</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L216-L262" target="_blank" rel="noreferrer">source</a></p>`,12))]),i("details",b,[i("summary",null,[s[30]||(s[30]=i("a",{id:"CompositionalNetworks.transformation_layer-learning-12_transformation",href:"#CompositionalNetworks.transformation_layer-learning-12_transformation"},[i("span",{class:"jlbinding"},"CompositionalNetworks.transformation_layer")],-1)),s[31]||(s[31]=n()),e(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[32]||(s[32]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">transformation_layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(param </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Vector{Symbol}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><p>Generate the layer of transformations functions of the ICN. Iff <code>param</code> value is non empty, also includes all the related parametric transformations.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/transformation.jl#L298-L301" target="_blank" rel="noreferrer">source</a></p>',3))])])}const q=o(d,[["render",C]]);export{B as __pageData,q as default};
