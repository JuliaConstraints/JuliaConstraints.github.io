import{_ as n,c as r,a5 as i,j as o,a as e,G as t,B as l,o as c}from"./chunks/framework.CJakPlgM.js";const y=JSON.parse('{"title":"Comparison Layer","description":"","frontmatter":{},"headers":[],"relativePath":"learning/15_comparison.md","filePath":"learning/15_comparison.md","lastUpdated":null}'),d={name:"learning/15_comparison.md"},p={class:"jldocstring custom-block",open:""},m={class:"jldocstring custom-block",open:""};function u(g,s,h,k,b,f){const a=l("Badge");return c(),r("div",null,[s[6]||(s[6]=i('<h1 id="Comparison-Layer" tabindex="-1">Comparison Layer <a class="header-anchor" href="#Comparison-Layer" aria-label="Permalink to &quot;Comparison Layer {#Comparison-Layer}&quot;">​</a></h1><p>Some text to describe the comparison layer within usual ICNs.</p><h2 id="List-of-comparisons" tabindex="-1">List of comparisons <a class="header-anchor" href="#List-of-comparisons" aria-label="Permalink to &quot;List of comparisons {#List-of-comparisons}&quot;">​</a></h2><p>List the possible parameters and how it affects the comparison.</p><h3 id="non-parametric" tabindex="-1">Non-parametric <a class="header-anchor" href="#non-parametric" aria-label="Permalink to &quot;Non-parametric&quot;">​</a></h3>',5)),o("details",p,[o("summary",null,[s[0]||(s[0]=o("a",{id:"CompositionalNetworks.co_identity-learning-15_comparison",href:"#CompositionalNetworks.co_identity-learning-15_comparison"},[o("span",{class:"jlbinding"},"CompositionalNetworks.co_identity")],-1)),s[1]||(s[1]=e()),t(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[2]||(s[2]=i('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">co_identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span></code></pre></div><p>Identity function. Already defined in Julia as <code>identity</code>, specialized for scalars in the <code>comparison</code> layer.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/comparison.jl#L1-L4" target="_blank" rel="noreferrer">source</a></p>',3))]),s[7]||(s[7]=i('<div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>co_euclidian</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>co_abs_diff_val_vars</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>co_val_minus_vars</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>co_vars_minus_val</code>. Check Documenter&#39;s build log for details.</p></div><h3 id="Param:-:val" tabindex="-1">Param: <code>:val</code> <a class="header-anchor" href="#Param:-:val" aria-label="Permalink to &quot;Param: `:val` {#Param:-:val}&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>co_abs_diff_val_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>co_val_minus_param</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>co_param_minus_val</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>co_euclidian_param</code>. Check Documenter&#39;s build log for details.</p></div><h3 id="Layer-generation" tabindex="-1">Layer generation <a class="header-anchor" href="#Layer-generation" aria-label="Permalink to &quot;Layer generation {#Layer-generation}&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>make_comparisons</code>. Check Documenter&#39;s build log for details.</p></div>',11)),o("details",m,[o("summary",null,[s[3]||(s[3]=o("a",{id:"CompositionalNetworks.comparison_layer-learning-15_comparison",href:"#CompositionalNetworks.comparison_layer-learning-15_comparison"},[o("span",{class:"jlbinding"},"CompositionalNetworks.comparison_layer")],-1)),s[4]||(s[4]=e()),t(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[5]||(s[5]=i('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">comparison_layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(param </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Generate the layer of transformations functions of the ICN. Iff <code>param</code> value is set, also includes all the parametric comparison with that value. The operations are mutually exclusive, that is only one will be selected.</p><p><a href="https://github.com/JuliaConstraints/CompositionalNetworks.jl/blob/v0.5.9/src/layers/comparison.jl#L83-L86" target="_blank" rel="noreferrer">source</a></p>',3))])])}const _=n(d,[["render",u]]);export{y as __pageData,_ as default};
