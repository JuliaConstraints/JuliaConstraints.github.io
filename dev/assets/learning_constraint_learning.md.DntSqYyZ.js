import{_ as i,c as s,o as a,a7 as e}from"./chunks/framework.RTxADYK2.js";const u=JSON.parse('{"title":"ConstraintLearning.jl","description":"","frontmatter":{},"headers":[],"relativePath":"learning/constraint_learning.md","filePath":"learning/constraint_learning.md","lastUpdated":null}'),t={name:"learning/constraint_learning.md"},n=e('<h1 id="ConstraintLearning.jl" tabindex="-1">ConstraintLearning.jl <a class="header-anchor" href="#ConstraintLearning.jl" aria-label="Permalink to &quot;ConstraintLearning.jl {#ConstraintLearning.jl}&quot;">​</a></h1><p>Documentation for <code>ConstraintLearning.jl</code>.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.ICNConfig" href="#ConstraintLearning.ICNConfig">#</a> <b><u>ConstraintLearning.ICNConfig</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ICNConfig{O </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ICNOptimizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>A structure to hold the metric and optimizer configurations used in learning the weigths of an ICN.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/base.jl#L8-L12" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.ICNConfig-Tuple{}" href="#ConstraintLearning.ICNConfig-Tuple{}">#</a> <b><u>ConstraintLearning.ICNConfig</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ICNConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; metric </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :hamming</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, optimizer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ICNGeneticOptimizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><p>Constructor for <code>ICNConfig</code>. Defaults to hamming metric using a genetic algorithm.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/genetic.jl#L150-L154" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.ICNGeneticOptimizer-Tuple{}" href="#ConstraintLearning.ICNGeneticOptimizer-Tuple{}">#</a> <b><u>ConstraintLearning.ICNGeneticOptimizer</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ICNGeneticOptimizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; kargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Default constructor to learn an ICN through a Genetic Algorithm. Default <code>kargs</code> TBW.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/genetic.jl#L111-L115" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.ICNLocalSearchOptimizer" href="#ConstraintLearning.ICNLocalSearchOptimizer">#</a> <b><u>ConstraintLearning.ICNLocalSearchOptimizer</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ICNLocalSearchOptimizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalSearchSolvers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><p>Default constructor to learn an ICN through a CBLS solver.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/cbls.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.ICNOptimizer" href="#ConstraintLearning.ICNOptimizer">#</a> <b><u>ConstraintLearning.ICNOptimizer</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ICNOptimizer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CompositionalNetworks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AbstractOptimizer</span></span></code></pre></div><p>An abstract type for optmizers defined to learn ICNs.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/base.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.QUBOGradientOptimizer-Tuple{}" href="#ConstraintLearning.QUBOGradientOptimizer-Tuple{}">#</a> <b><u>ConstraintLearning.QUBOGradientOptimizer</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QUBOGradientOptimizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; kargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>A QUBO optimizer based on gradient descent. Defaults TBW</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo/gradient.jl#L8-L12" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.QUBOOptimizer" href="#ConstraintLearning.QUBOOptimizer">#</a> <b><u>ConstraintLearning.QUBOOptimizer</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QUBOOptimizer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QUBOConstraints</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AbstractOptimizer</span></span></code></pre></div><p>An abstract type for optimizers used to learn QUBO matrices from constraints.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo/base.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.optimize!-Tuple{Any, Any, Any, Any, Any, ICNGeneticOptimizer}" href="#CompositionalNetworks.optimize!-Tuple{Any, Any, Any, Any, Any, ICNGeneticOptimizer}">#</a> <b><u>CompositionalNetworks.optimize!</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CompositionalNetworks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">optimize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(icn, solutions, non_sltns, dom_size, metric, optimizer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ICNGeneticOptimizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; parameters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Extends the <code>optimize!</code> method to <code>ICNGeneticOptimizer</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/genetic.jl#L126-L130" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="CompositionalNetworks.optimize!-Tuple{Any, Any, Any, Any, Any, ICNLocalSearchOptimizer}" href="#CompositionalNetworks.optimize!-Tuple{Any, Any, Any, Any, Any, ICNLocalSearchOptimizer}">#</a> <b><u>CompositionalNetworks.optimize!</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CompositionalNetworks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">optimize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(icn, solutions, non_sltns, dom_size, metric, optimizer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ICNLocalSearchOptimizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; parameters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Extends the <code>optimize!</code> method to <code>ICNLocalSearchOptimizer</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/cbls.jl#L37-L41" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning._optimize!-NTuple{7, Any}" href="#ConstraintLearning._optimize!-NTuple{7, Any}">#</a> <b><u>ConstraintLearning._optimize!</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_optimize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(icn, X, X_sols; metric </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hamming, pop_size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Optimize and set the weigths of an ICN with a given set of configuration <code>X</code> and solutions <code>X_sols</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/genetic.jl#L11-L14" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.domain_size-Tuple{Number}" href="#ConstraintLearning.domain_size-Tuple{Number}">#</a> <b><u>ConstraintLearning.domain_size</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">domain_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Extends the domain_size function when <code>ds</code> is number (for dispatch purposes).</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/common.jl#L24-L28" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.generate_population-Tuple{Any, Any}" href="#ConstraintLearning.generate_population-Tuple{Any, Any}">#</a> <b><u>ConstraintLearning.generate_population</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">generate_population</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(icn, pop_size</span></span></code></pre></div><p>Generate a pôpulation of weigths (individuals) for the genetic algorithm weigthing <code>icn</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/genetic.jl#L1-L4" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.icn-Tuple{Any, Any}" href="#ConstraintLearning.icn-Tuple{Any, Any}">#</a> <b><u>ConstraintLearning.icn</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">icn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X,X̅; kargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, parameters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>TBW</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.loss-Tuple{Any, Any, Any}" href="#ConstraintLearning.loss-Tuple{Any, Any, Any}">#</a> <b><u>ConstraintLearning.loss</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">loss</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, Q)</span></span></code></pre></div><p>Loss of the prediction given by <code>Q</code>, a training set <code>y</code>, and a given configuration <code>x</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo/gradient.jl#L29-L33" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.make_df-NTuple{5, Any}" href="#ConstraintLearning.make_df-NTuple{5, Any}">#</a> <b><u>ConstraintLearning.make_df</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">make_df</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X, Q, penalty, binarization, domains)</span></span></code></pre></div><p>DataFrame arrangement to ouput some basic evaluation of a matrix <code>Q</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo/gradient.jl#L36-L40" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.make_set_penalty-Tuple{Any, Any}" href="#ConstraintLearning.make_set_penalty-Tuple{Any, Any}">#</a> <b><u>ConstraintLearning.make_set_penalty</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">make_set_penalty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X, X̅, args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; kargs)</span></span></code></pre></div><p>Return a penalty function when the training set is already split into a pair of solutions <code>X</code> and non solutions <code>X̅</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/common.jl#L63-L67" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.make_training_sets-NTuple{4, Any}" href="#ConstraintLearning.make_training_sets-NTuple{4, Any}">#</a> <b><u>ConstraintLearning.make_training_sets</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">make_training_sets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X, penalty, args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Return a pair of solutions and non solutions sets based on <code>X</code> and <code>penalty</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/common.jl#L31-L35" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.mutually_exclusive-Tuple{Any, Any}" href="#ConstraintLearning.mutually_exclusive-Tuple{Any, Any}">#</a> <b><u>ConstraintLearning.mutually_exclusive</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mutually_exclusive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(layer, w)</span></span></code></pre></div><p>Constraint ensuring that <code>w</code> encode exclusive operations in <code>layer</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/cbls.jl#L12-L16" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.no_empty_layer-Tuple{Any}" href="#ConstraintLearning.no_empty_layer-Tuple{Any}">#</a> <b><u>ConstraintLearning.no_empty_layer</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">no_empty_layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x; X </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Constraint ensuring that at least one operation is selected.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/cbls.jl#L23-L27" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.optimize!-NTuple{8, Any}" href="#ConstraintLearning.optimize!-NTuple{8, Any}">#</a> <b><u>ConstraintLearning.optimize!</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">optimize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(icn, X, X_sols, global_iter, local_iter; metric</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hamming, popSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Optimize and set the weigths of an ICN with a given set of configuration <code>X</code> and solutions <code>X_sols</code>. The best weigths among <code>global_iter</code> will be set.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/genetic.jl#L57-L60" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.parameter_specific_operations-Tuple{Any}" href="#ConstraintLearning.parameter_specific_operations-Tuple{Any}">#</a> <b><u>ConstraintLearning.parameter_specific_operations</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">parameter_specific_operations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x; X </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Constraint ensuring that at least one operation related to parameters is selected if the error function to be learned is parametric.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/icn/cbls.jl#L30-L34" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.predict-Tuple{Any, Any}" href="#ConstraintLearning.predict-Tuple{Any, Any}">#</a> <b><u>ConstraintLearning.predict</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">predict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, Q)</span></span></code></pre></div><p>Return the predictions given by <code>Q</code> for a given configuration <code>x</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo/gradient.jl#L22-L26" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.preliminaries-Tuple{Any, Any, Any}" href="#ConstraintLearning.preliminaries-Tuple{Any, Any, Any}">#</a> <b><u>ConstraintLearning.preliminaries</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">preliminaries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args)</span></span></code></pre></div><p>Preliminaries to the training process in a <code>QUBOGradientOptimizer</code> run.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo/gradient.jl#L77-L81" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.qubo" href="#ConstraintLearning.qubo">#</a> <b><u>ConstraintLearning.qubo</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qubo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X,X̅; kargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, parameters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>TBW</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.sub_eltype-Tuple{Any}" href="#ConstraintLearning.sub_eltype-Tuple{Any}">#</a> <b><u>ConstraintLearning.sub_eltype</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sub_eltype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X)</span></span></code></pre></div><p>Return the element type of of the first element of a collection.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/common.jl#L17-L21" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.train!-NTuple{9, Any}" href="#ConstraintLearning.train!-NTuple{9, Any}">#</a> <b><u>ConstraintLearning.train!</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">train!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Q, X, penalty, η, precision, X_test, oversampling, binarization, domains)</span></span></code></pre></div><p>Training inner method.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo/gradient.jl#L98-L102" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.train-Union{Tuple{D}, Tuple{Any, Any, Vector{D}}} where D&lt;:DiscreteDomain" href="#ConstraintLearning.train-Union{Tuple{D}, Tuple{Any, Any, Vector{D}}} where D&lt;:DiscreteDomain">#</a> <b><u>ConstraintLearning.train</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">train</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X, penalty[, d]; optimizer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> QUBOGradientOptimizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), X_test </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> X)</span></span></code></pre></div><p>Learn a QUBO matrix on training set <code>X</code> for a constraint defined by <code>penalty</code> with optional domain information <code>d</code>. By default, it uses a <code>QUBOGradientOptimizer</code> and <code>X</code> as a testing set.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/qubo/gradient.jl#L125-L129" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintLearning.δ-Tuple{Any}" href="#ConstraintLearning.δ-Tuple{Any}">#</a> <b><u>ConstraintLearning.δ</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">δ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X[, Y]; discrete </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Compute the extrema over a collection <code>X``or a pair of collection</code>(X, Y)`.</p><p><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl/blob/v0.1.6/src/common.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br>',58),r=[n];function l(o,p,d,h,c,g){return a(),s("div",null,r)}const b=i(t,[["render",l]]);export{u as __pageData,b as default};
