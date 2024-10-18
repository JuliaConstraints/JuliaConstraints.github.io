import{_ as t,c as e,j as i,a,G as l,a5 as h,B as p,o as k}from"./chunks/framework.CJakPlgM.js";const u=JSON.parse('{"title":"Constraints.jl: Streamlining Constraint Definition and Integration in Julia","description":"","frontmatter":{},"headers":[],"relativePath":"constraints/28_elementary_constraints.md","filePath":"constraints/28_elementary_constraints.md","lastUpdated":null}'),r={name:"constraints/28_elementary_constraints.md"},o={class:"jldocstring custom-block",open:""};function d(E,s,c,g,C,y){const n=p("Badge");return k(),e("div",null,[s[3]||(s[3]=i("h1",{id:"Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia",tabindex:"-1"},[a("Constraints.jl: Streamlining Constraint Definition and Integration in Julia "),i("a",{class:"header-anchor",href:"#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia","aria-label":'Permalink to "Constraints.jl: Streamlining Constraint Definition and Integration in Julia {#Constraints.jl:-Streamlining-Constraint-Definition-and-Integration-in-Julia}"'},"​")],-1)),s[4]||(s[4]=i("h3",{id:"Elementary-Constraints",tabindex:"-1"},[a("Elementary Constraints "),i("a",{class:"header-anchor",href:"#Elementary-Constraints","aria-label":'Permalink to "Elementary Constraints {#Elementary-Constraints}"'},"​")],-1)),i("details",o,[i("summary",null,[s[0]||(s[0]=i("a",{id:"Constraints.xcsp_instantiation-constraints-28_elementary_constraints",href:"#Constraints.xcsp_instantiation-constraints-28_elementary_constraints"},[i("span",{class:"jlbinding"},"Constraints.xcsp_instantiation")],-1)),s[1]||(s[1]=a()),l(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[2]||(s[2]=h(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">xcsp_instantiation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; list, values)</span></span></code></pre></div><p>Return <code>true</code> if the instantiation constraint is satisfied, <code>false</code> otherwise. The instantiation constraint is a global constraint ensuring that <code>x</code> takes on a specific set of <code>values</code> in a specific order.</p><p><strong>Arguments</strong></p><ul><li><p><code>list::AbstractVector</code>: list of values to check.</p></li><li><p><code>values::AbstractVector</code>: list of values to check against.</p></li></ul><p><strong>Variants</strong></p><ul><li><code>:instantiation</code>: Global constraint ensuring that <code>x</code> takes on a specific set of <code>values</code> in a specific order.</li></ul><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">concept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:instantiation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x; pair_vars)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">concept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:instantiation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(x; pair_vars)</span></span></code></pre></div><p><strong>Examples</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> concept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:instantiation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]; pair_vars</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]; pair_vars</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.8/src/constraints/instantiation.jl#L5-L28" target="_blank" rel="noreferrer">source</a></p>`,10))])])}const m=t(r,[["render",d]]);export{u as __pageData,m as default};