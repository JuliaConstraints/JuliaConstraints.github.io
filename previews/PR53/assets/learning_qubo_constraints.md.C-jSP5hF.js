import{_ as a,c as t,o as s,a7 as i}from"./chunks/framework.B__MqT43.js";const _=JSON.parse('{"title":"Introduction to QUBOConstraints.jl","description":"","frontmatter":{},"headers":[],"relativePath":"learning/qubo_constraints.md","filePath":"learning/qubo_constraints.md","lastUpdated":null}'),n={name:"learning/qubo_constraints.md"},e=i('<h1 id="Introduction-to-QUBOConstraints.jl" tabindex="-1">Introduction to QUBOConstraints.jl <a class="header-anchor" href="#Introduction-to-QUBOConstraints.jl" aria-label="Permalink to &quot;Introduction to QUBOConstraints.jl {#Introduction-to-QUBOConstraints.jl}&quot;">​</a></h1><p>Introduction to <code>QUBOConstraints.jl</code>.</p><h2 id="Basic-features" tabindex="-1">Basic features <a class="header-anchor" href="#Basic-features" aria-label="Permalink to &quot;Basic features {#Basic-features}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="QUBOConstraints.QUBO_base-learning-qubo_constraints" href="#QUBOConstraints.QUBO_base-learning-qubo_constraints">#</a> <b><u>QUBOConstraints.QUBO_base</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QUBO_base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n, weight </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>A basic QUBO matrix to ensure that binarized variables keep a valid encoding.</p><p><a href="https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.2/src/base.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="QUBOConstraints.QUBO_linear_sum-learning-qubo_constraints" href="#QUBOConstraints.QUBO_linear_sum-learning-qubo_constraints">#</a> <b><u>QUBOConstraints.QUBO_linear_sum</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QUBO_linear_sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n, σ)</span></span></code></pre></div><p>One valid QUBO matrix given <code>n</code> variables and parameter <code>σ</code> for the linear sum constraint.</p><p><a href="https://github.com/JuliaConstraints/QUBOConstraints.jl/blob/v0.2.2/src/handmade/linear_sum.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br>',7),r=[e];function o(l,d,c,p,h,u){return s(),t("div",null,r)}const g=a(n,[["render",o]]);export{_ as __pageData,g as default};
