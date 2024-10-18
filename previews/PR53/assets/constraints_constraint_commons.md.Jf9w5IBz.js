import{_ as s,c as a,o as i,a7 as t}from"./chunks/framework.B__MqT43.js";const k=JSON.parse('{"title":"ConstraintCommons.jl","description":"","frontmatter":{},"headers":[],"relativePath":"constraints/constraint_commons.md","filePath":"constraints/constraint_commons.md","lastUpdated":null}'),n={name:"constraints/constraint_commons.md"},e=t(`<h1 id="constraintcommons-jl" tabindex="-1">ConstraintCommons.jl <a class="header-anchor" href="#constraintcommons-jl" aria-label="Permalink to &quot;ConstraintCommons.jl&quot;">​</a></h1><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl" target="_blank" rel="noreferrer">ConstraintCommons.jl</a> is an essential package within the <em>Julia Constraints</em> ecosystem designed to facilitate the development and interoperability of constraint programming solutions in Julia. It serves as a foundational layer that provides shared structures, abstract types, functions, and generic methods utilized by both basic feature packages and learning-oriented packages.</p><p>Only advanced users or package developers are likely to use it. The package covers <em>parameters</em>, (regular) <em>languages</em>, <code>Core</code> or <code>Base</code> methods <em>extensions</em>, <em>sampling</em>, <em>extrema</em>, and <em>dictionaries</em>.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>This section of the package list or extract parameters based on the <em>XCSP3-core</em> specifications. Note that, for the foreseeable future, the default constraints specification will follow these specifications.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS-constraints-constraint_commons" href="#ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS</u></b> — <i>Constant</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> USUAL_CONSTRAINT_PARAMETERS</span></span></code></pre></div><p>List of usual constraints parameters (based on <code>XCSP3-core</code> constraints). The list is based on the nature of each kind of parameter instead of the keywords used in the <code>XCSP3-core</code> format.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> USUAL_CONSTRAINT_PARAMETERS </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># boolean parameter</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :dim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># dimension, an integer parameter used along the pair_vars or vals parameters</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># index to target one variable in the input vector</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># describe a regular language such as an automaton or a MDD</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :op</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># an operator such as comparison or arithmetic operator</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :pair_vars</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a list of parameters that are paired with each variable in the input vector</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># one scalar value</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :vals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a list of scalar values (independent of the input vector size)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/parameters.jl#L1-L17" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.extract_parameters-constraints-constraint_commons" href="#ConstraintCommons.extract_parameters-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.extract_parameters</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extract_parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{Method, Function}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; parameters)</span></span></code></pre></div><p>Extracts the intersection between the <code>kargs</code> of <code>m</code> and <code>parameters</code> (defaults to <code>USUAL_CONSTRAINT_PARAMETERS</code>).</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/parameters.jl#L21-L25" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extract_parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, constraints_dict</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USUAL_CONSTRAINTS; parameters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ConstraintCommons</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USUAL_CONSTRAINT_PARAMETERS)</span></span></code></pre></div><p>Return the parameters of the constraint <code>s</code> in <code>constraints_dict</code>.</p><p><strong>Arguments</strong></p><ul><li><p><code>s::Symbol</code>: the constraint name.</p></li><li><p><code>constraints_dict::Dict{Symbol,Constraint}</code>: dictionary of constraints. Default is <code>USUAL_CONSTRAINTS</code>.</p></li><li><p><code>parameters::Vector{Symbol}</code>: vector of parameters. Default is <code>ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS</code>.</p></li></ul><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extract_parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:all_different</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.6/src/usual_constraints.jl#L44-L58" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="performances" tabindex="-1">Performances <a class="header-anchor" href="#performances" aria-label="Permalink to &quot;Performances&quot;">​</a></h3><div style="display:flex;justify-content:space-between;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_parameters.png?raw=true" alt="Bench Evolution Parameters" style="width:48%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_parameters.png?raw=true" alt="Chair Evolution Parameters" style="width:48%;"></div><h2 id="languages" tabindex="-1">Languages <a class="header-anchor" href="#languages" aria-label="Permalink to &quot;Languages&quot;">​</a></h2><p><em>XCSP3</em> considers two kinds of structure to recognize languages as core constraints: Automata, Multivalued Decision Diagrams (MMDs).</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.AbstractMultivaluedDecisionDiagram-constraints-constraint_commons" href="#ConstraintCommons.AbstractMultivaluedDecisionDiagram-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.AbstractMultivaluedDecisionDiagram</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AbstractMultivaluedDecisionDiagram</span></span></code></pre></div><p>An abstract interface for Multivalued Decision Diagrams (MDD) used in Julia Constraints packages. Requirements:</p><ul><li><code>accept(a&lt;:AbstractMultivaluedDecisionDiagram, word)</code>: return <code>true</code> if <code>a</code> accepts <code>word</code>.</li></ul><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/diagrams.jl#L1-L6" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.MDD-constraints-constraint_commons" href="#ConstraintCommons.MDD-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.MDD</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MDD{S,T} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractMultivaluedDecisionDiagram</span></span></code></pre></div><p>A minimal implementation of a multivalued decision diagram structure.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/diagrams.jl#L9-L13" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.AbstractAutomaton-constraints-constraint_commons" href="#ConstraintCommons.AbstractAutomaton-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.AbstractAutomaton</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AbstractAutomaton</span></span></code></pre></div><p>An abstract interface for automata used in Julia Constraints packages. Requirements:</p><ul><li><code>accept(a&lt;:AbstractAutomaton, word)</code>: return <code>true</code> if <code>a</code> accepts <code>word</code>.</li></ul><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/automata.jl#L1-L6" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.Automaton-constraints-constraint_commons" href="#ConstraintCommons.Automaton-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.Automaton</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Automaton{S, T, F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Union{S, Vector{S}, Set{S}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractAutomaton</span></span></code></pre></div><p>A minimal implementation of a deterministic automaton structure.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/automata.jl#L9-L13" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.accept-constraints-constraint_commons" href="#ConstraintCommons.accept-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.accept</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">accept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{Automaton, MDD}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, w)</span></span></code></pre></div><p>Return <code>true</code> if <code>a</code> accepts the word <code>w</code> and <code>false</code> otherwise.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/automata.jl#L29-L33" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ConstraintCommons</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">accept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fa</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FakeAutomaton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, word)</span></span></code></pre></div><p>Implement the <code>accept</code> methods for <code>FakeAutomaton</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.13/src/parameters.jl#L41-L45" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.at_end-constraints-constraint_commons" href="#ConstraintCommons.at_end-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.at_end</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">at_end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Automaton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, s)</span></span></code></pre></div><p>Internal method used by <code>accept</code> with <code>Automaton</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/automata.jl#L20-L24" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-2" tabindex="-1">Performances <a class="header-anchor" href="#Performances-2" aria-label="Permalink to &quot;Performances {#Performances-2}&quot;">​</a></h3><div style="display:flex;flex-wrap:wrap;justify-content:space-between;"><div style="flex:1 1 48%;margin:1%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_automata.png?raw=true" alt="Bench Evolution Automata" style="width:100%;"></div><div style="flex:1 1 48%;margin:1%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_automata.png?raw=true" alt="Chair Evolution Automata" style="width:100%;"></div><div style="flex:1 1 48%;margin:1%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_diagrams.png?raw=true" alt="Bench Evolution Diagrams" style="width:100%;"></div><div style="flex:1 1 48%;margin:1%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_diagrams.png?raw=true" alt="Chair Evolution Diagrams" style="width:100%;"></div></div><h2 id="extensions" tabindex="-1">Extensions <a class="header-anchor" href="#extensions" aria-label="Permalink to &quot;Extensions&quot;">​</a></h2><p>We extend some operations for <code>Nothing</code> and <code>Symbol</code>.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.symcon-constraints-constraint_commons" href="#ConstraintCommons.symcon-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.symcon</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">symcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, s2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, connector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Extends <code>*</code> to <code>Symbol</code>s multiplication by connecting the symbols by an <code>_</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/symbols.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.consin-constraints-constraint_commons" href="#ConstraintCommons.consin-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.consin</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">consin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Extends <code>Base.in</code> (or <code>∈</code>) when the set is <code>nothing</code>. Returns <code>false</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/nothing.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.consisempty-constraints-constraint_commons" href="#ConstraintCommons.consisempty-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.consisempty</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">consisempty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Extends <code>Base.isempty</code> when the set is <code>nothing</code>. Returns <code>true</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/nothing.jl#L9-L13" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-3" tabindex="-1">Performances <a class="header-anchor" href="#Performances-3" aria-label="Permalink to &quot;Performances {#Performances-3}&quot;">​</a></h3><div style="display:flex;flex-wrap:wrap;justify-content:space-between;"><div style="flex:1 1 48%;margin:1%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_nothing.png?raw=true" alt="Bench Evolution Nothing" style="width:100%;"></div><div style="flex:1 1 48%;margin:1%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_nothing.png?raw=true" alt="Chair Evolution Nothing" style="width:100%;"></div><div style="flex:1 1 48%;margin:1%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_symbols.png?raw=true" alt="Bench Evolution Symbols" style="width:100%;"></div><div style="flex:1 1 48%;margin:1%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_symbols.png?raw=true" alt="Chair Evolution Symbols" style="width:100%;"></div></div><h2 id="sampling" tabindex="-1">Sampling <a class="header-anchor" href="#sampling" aria-label="Permalink to &quot;Sampling&quot;">​</a></h2><p>During our constraint learning processes, we use sampling to efficiently make partial exploration of search spaces. The following are some examples of sampling utilities.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.oversample-constraints-constraint_commons" href="#ConstraintCommons.oversample-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.oversample</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">oversample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X, f)</span></span></code></pre></div><p>Oversample elements of <code>X</code> until the boolean function <code>f</code> has as many <code>true</code> and <code>false</code> configurations.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/sampling.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-4" tabindex="-1">Performances <a class="header-anchor" href="#Performances-4" aria-label="Permalink to &quot;Performances {#Performances-4}&quot;">​</a></h3><div style="display:flex;justify-content:space-between;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_samplings.png?raw=true" alt="Bench Evolution" style="width:48%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_samplings.png?raw=true" alt="Chair Evolution" style="width:48%;"></div><h2 id="extrema" tabindex="-1">Extrema <a class="header-anchor" href="#extrema" aria-label="Permalink to &quot;Extrema&quot;">​</a></h2><p>We need to compute the difference between extrema of various kind of collections in several situations.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.δ_extrema-constraints-constraint_commons" href="#ConstraintCommons.δ_extrema-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.δ_extrema</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">δ_extrema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Compute both the difference between the maximum and the minimum of over all the collections of <code>X</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/extrema.jl#L1-L4" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-5" tabindex="-1">Performances <a class="header-anchor" href="#Performances-5" aria-label="Permalink to &quot;Performances {#Performances-5}&quot;">​</a></h3><div style="display:flex;justify-content:space-between;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_extrema.png?raw=true" alt="Bench Evolution" style="width:48%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_extrema.png?raw=true" alt="Chair Evolution" style="width:48%;"></div><h2 id="dictionaries" tabindex="-1">Dictionaries <a class="header-anchor" href="#dictionaries" aria-label="Permalink to &quot;Dictionaries&quot;">​</a></h2><p>We provide the ever-useful <code>incsert!</code> function for dictionaries.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.incsert!-constraints-constraint_commons" href="#ConstraintCommons.incsert!-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.incsert!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">incsert!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{AbstractDict, AbstractDictionary}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ind, val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Increase or insert a counter in a dictionary-based collection. The counter insertion defaults to <code>val = 1</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.3/src/dictionaries.jl#L2-L6" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-6" tabindex="-1">Performances <a class="header-anchor" href="#Performances-6" aria-label="Permalink to &quot;Performances {#Performances-6}&quot;">​</a></h3><div style="display:flex;justify-content:space-between;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/bench_evolution_dictionaries.png?raw=true" alt="Bench Evolution" style="width:48%;"><img src="https://github.com/JuliaConstraints/Benchmarks/blob/main/ConstraintCommons/visuals/chair_evolution_dictionaries.png?raw=true" alt="Chair Evolution" style="width:48%;"></div>`,55),o=[e];function r(l,h,c,p,d,m){return i(),a("div",null,o)}const g=s(n,[["render",r]]);export{k as __pageData,g as default};