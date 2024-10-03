import{_ as i,c as a,a5 as n,o as t}from"./chunks/framework.CJakPlgM.js";const g=JSON.parse('{"title":"Chairmarks Extension","description":"","frontmatter":{},"headers":[],"relativePath":"perf/40_chairmarks_ext.md","filePath":"perf/40_chairmarks_ext.md","lastUpdated":null}'),e={name:"perf/40_chairmarks_ext.md"};function h(l,s,k,p,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="Chairmarks-Extension" tabindex="-1">Chairmarks Extension <a class="header-anchor" href="#Chairmarks-Extension" aria-label="Permalink to &quot;Chairmarks Extension {#Chairmarks-Extension}&quot;">​</a></h1><p>A benchmarking extension, based on <code>Chairmarks.jl</code>, has been interfaced with <code>PerfChecker.jl</code>. This section will provide some usage examples, documentation, and links to related notebooks.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Like all other extensions, <code>BenchmarkTools</code> extension can be used in the following way:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Chairmarks, PerfChecker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @check</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :chairmark</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:option1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;value1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:option2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;value2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @__DIR__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # the prelimnary code goes here</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Example</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> begin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # the code you want to be benchmarked</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">domath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># returns x + 5, 15 in this case.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>Options specific to this backend with their default values are defined as:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:threads</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:track</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:evals</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:seconds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:samples</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:gc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span></code></pre></div>`,8)]))}const c=i(e,[["render",h]]);export{g as __pageData,c as default};
