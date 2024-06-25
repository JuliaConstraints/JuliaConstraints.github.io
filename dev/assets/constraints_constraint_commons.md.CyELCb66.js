import{_ as s,c as a,o as i,a6 as t}from"./chunks/framework.U9t3ZutP.js";const k=JSON.parse('{"title":"ConstraintCommons.jl","description":"","frontmatter":{},"headers":[],"relativePath":"constraints/constraint_commons.md","filePath":"constraints/constraint_commons.md","lastUpdated":null}'),e={name:"constraints/constraint_commons.md"},n=t(`<h1 id="constraintcommons-jl" tabindex="-1">ConstraintCommons.jl <a class="header-anchor" href="#constraintcommons-jl" aria-label="Permalink to &quot;ConstraintCommons.jl&quot;">​</a></h1><p><em>ConstraintCommons.jl</em> is an essential package within the <em>Julia Constraints</em> ecosystem designed to facilitate the development and interoperability of constraint programming solutions in Julia. It serves as a foundational layer that provides shared structures, abstract types, functions, and generic methods utilized by both basic feature packages and learning-oriented packages.</p><h2 id="Key-Features-and-Functionalities" tabindex="-1">Key Features and Functionalities <a class="header-anchor" href="#Key-Features-and-Functionalities" aria-label="Permalink to &quot;Key Features and Functionalities {#Key-Features-and-Functionalities}&quot;">​</a></h2><ul><li><p><strong>Shared Structures and Abstract Types</strong>: ConstraintCommons.jl offers a collection of shared data structures and abstract types. This standardization is crucial for ensuring that packages such as ConstraintDomains, Constraints, ConstraintLearning, etc. can seamlessly interact and integrate, fostering a cohesive development environment.</p></li><li><p><strong>Generic Functions and Methods</strong>: The package includes a set of generic functions and methods that are common across the JuliaConstraints ecosystem. This approach minimizes duplication and facilitates the extension of functionalities across different packages without requiring redundant code.</p></li><li><p><strong>Interface for Learning and Application Transition</strong>: One of the pivotal roles of ConstraintCommons.jl is to provide a shared interface that bridges the gap between learning packages (e.g., CompositionalNetworks, QUBOConstraints, and ConstraintTranslator) and basic functionality packages. This interface ensures that once a learning process is complete, the resulting models or solutions can be directly utilized with the basic packages, eliminating the need for users to manage multiple package dependencies actively.</p></li><li><p><strong>Simplifying the User Experience</strong>: By ensuring that learning outcomes are compatible with the fundamental packages for constraint programming, ConstraintCommons.jl simplifies the workflow for end-users. Once the learning aspect of problem modeling is completed, users can proceed with their projects relying solely on the basic packages, streamlining the development process and enhancing usability.</p></li><li><p><strong>Impact on the JuliaConstraints Ecosystem</strong>: ConstraintCommons.jl plays a critical role in the JuliaConstraints ecosystem by providing the foundational elements that enable package interoperability and efficient development workflows. Its design emphasizes ease of use and seamless transition between the learning phase of constraint programming and practical application, thereby enhancing productivity and reducing the complexity of developing constraint-based solutions.</p></li></ul><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>This section of the package list or extract parameters based on the <em>XCSP3-core</em> specifications. Note that, for the forseeable future, the default constraints specification will follow the XCSP3 format.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS-constraints-constraint_commons" href="#ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS</u></b> — <i>Constant</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> USUAL_CONSTRAINT_PARAMETERS</span></span></code></pre></div><p>List of usual constraints parameters (based on XCSP3-core constraints).</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> USUAL_CONSTRAINT_PARAMETERS </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :dim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :op</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :pair_vars</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :vals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/parameters.jl#L1-L17" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.extract_parameters-constraints-constraint_commons" href="#ConstraintCommons.extract_parameters-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.extract_parameters</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extract_parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{Method, Function}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; parameters)</span></span></code></pre></div><p>Extracts the intersection between the <code>kargs</code> of <code>m</code> and <code>parameters</code> (defaults to <code>USUAL_CONSTRAINT_PARAMETERS</code>).</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/parameters.jl#L21-L25" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extract_parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, constraints_dict</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USUAL_CONSTRAINTS; parameters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ConstraintCommons</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USUAL_CONSTRAINT_PARAMETERS)</span></span></code></pre></div><p>Return the parameters of the constraint <code>s</code> in <code>constraints_dict</code>.</p><p><strong>Arguments</strong></p><ul><li><p><code>s::Symbol</code>: the constraint name.</p></li><li><p><code>constraints_dict::Dict{Symbol,Constraint}</code>: dictionary of constraints. Default is <code>USUAL_CONSTRAINTS</code>.</p></li><li><p><code>parameters::Vector{Symbol}</code>: vector of parameters. Default is <code>ConstraintCommons.USUAL_CONSTRAINT_PARAMETERS</code>.</p></li></ul><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extract_parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:all_different</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="https://github.com/JuliaConstraints/Constraints.jl/blob/v0.5.5/src/usual_constraints.jl#L44-L58" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-–-TODO" tabindex="-1">Performances – TODO <a class="header-anchor" href="#Performances-–-TODO" aria-label="Permalink to &quot;Performances – TODO {#Performances-–-TODO}&quot;">​</a></h3><h2 id="languages" tabindex="-1">Languages <a class="header-anchor" href="#languages" aria-label="Permalink to &quot;Languages&quot;">​</a></h2><p><em>XCSP3</em> considers two kinds of structure to recognize languages as core constraints: Automata, Multivalued Decision Diagrams (MMDs).</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.AbstractMultivaluedDecisionDiagram-constraints-constraint_commons" href="#ConstraintCommons.AbstractMultivaluedDecisionDiagram-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.AbstractMultivaluedDecisionDiagram</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AbstractMultivaluedDecisionDiagram</span></span></code></pre></div><p>An abstract interface for Multivalued Decision Diagrams (MDD) used in Julia Constraints packages. Requirements:</p><ul><li><code>accept(a&lt;:AbstractMultivaluedDecisionDiagram, word)</code>: return <code>true</code> if <code>a</code> accepts <code>word</code>.</li></ul><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/diagrams.jl#L1-L6" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.MDD-constraints-constraint_commons" href="#ConstraintCommons.MDD-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.MDD</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MDD{S,T} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractMultivaluedDecisionDiagram</span></span></code></pre></div><p>A minimal implementation of a multivalued decision diagram structure.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/diagrams.jl#L9-L13" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.AbstractAutomaton-constraints-constraint_commons" href="#ConstraintCommons.AbstractAutomaton-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.AbstractAutomaton</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AbstractAutomaton</span></span></code></pre></div><p>An abstract interface for automata used in Julia Constraints packages. Requirements:</p><ul><li><code>accept(a&lt;:AbstractAutomaton, word)</code>: return <code>true</code> if <code>a</code> accepts <code>word</code>.</li></ul><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L1-L6" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.Automaton-constraints-constraint_commons" href="#ConstraintCommons.Automaton-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.Automaton</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Automaton{S, T, F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Union{S, Vector{S}, Set{S}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractAutomaton</span></span></code></pre></div><p>A minimal implementation of a deterministic automaton structure.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L9-L13" target="_blank" rel="noreferrer">source</a></p></div><br><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>Automaton(a::MDD)</code>. Check Documenter&#39;s build log for details.</p></div><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.accept-constraints-constraint_commons" href="#ConstraintCommons.accept-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.accept</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">accept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{Automaton, MDD}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, w)</span></span></code></pre></div><p>Return <code>true</code> if <code>a</code> accepts the word <code>w</code> and <code>false</code> otherwise.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L29-L33" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ConstraintCommons</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">accept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fa</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FakeAutomaton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, word)</span></span></code></pre></div><p>Implement the <code>accept</code> methods for <code>FakeAutomaton</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintDomains.jl/blob/v0.3.10/src/parameters.jl#L41-L45" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.at_end-constraints-constraint_commons" href="#ConstraintCommons.at_end-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.at_end</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">at_end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Automaton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, s)</span></span></code></pre></div><p>Internal method used by <code>accept</code> with <code>Automaton</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/automata.jl#L20-L24" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-–-TODO-2" tabindex="-1">Performances – TODO <a class="header-anchor" href="#Performances-–-TODO-2" aria-label="Permalink to &quot;Performances – TODO {#Performances-–-TODO-2}&quot;">​</a></h3><h2 id="extensions" tabindex="-1">Extensions <a class="header-anchor" href="#extensions" aria-label="Permalink to &quot;Extensions&quot;">​</a></h2><p>We extended some operations for <code>Nothing</code> and <code>Symbol</code>.</p><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>Base.:*</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>Base.in(::Any, ::Nothing)</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>Base.isempty(::Nothing)</code>. Check Documenter&#39;s build log for details.</p></div><h3 id="Performances-–-TODO-3" tabindex="-1">Performances – TODO <a class="header-anchor" href="#Performances-–-TODO-3" aria-label="Permalink to &quot;Performances – TODO {#Performances-–-TODO-3}&quot;">​</a></h3><h2 id="sampling" tabindex="-1">Sampling <a class="header-anchor" href="#sampling" aria-label="Permalink to &quot;Sampling&quot;">​</a></h2><p>During our constraint learning processes, we use sampling to efficiently make partial exploration of search spaces. Follows some sampling utilities.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.oversample-constraints-constraint_commons" href="#ConstraintCommons.oversample-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.oversample</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">oversample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X, f)</span></span></code></pre></div><p>Oversample elements of <code>X</code> until the boolean function <code>f</code> has as many <code>true</code> and <code>false</code> configurations.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/sampling.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-–-TODO-4" tabindex="-1">Performances – TODO <a class="header-anchor" href="#Performances-–-TODO-4" aria-label="Permalink to &quot;Performances – TODO {#Performances-–-TODO-4}&quot;">​</a></h3><h2 id="extrema" tabindex="-1">Extrema <a class="header-anchor" href="#extrema" aria-label="Permalink to &quot;Extrema&quot;">​</a></h2><p>We need to compute the difference between extrema of various kind of collections in several situations.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.δ_extrema-constraints-constraint_commons" href="#ConstraintCommons.δ_extrema-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.δ_extrema</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">δ_extrema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Compute both the difference between the maximum and the minimum of over all the collections of <code>X</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/extrema.jl#L1-L4" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-–-TODO-5" tabindex="-1">Performances – TODO <a class="header-anchor" href="#Performances-–-TODO-5" aria-label="Permalink to &quot;Performances – TODO {#Performances-–-TODO-5}&quot;">​</a></h3><h2 id="dictionaries" tabindex="-1">Dictionaries <a class="header-anchor" href="#dictionaries" aria-label="Permalink to &quot;Dictionaries&quot;">​</a></h2><p>We provide the everuseful <code>incsert!</code> function for dictionaries.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="ConstraintCommons.incsert!-constraints-constraint_commons" href="#ConstraintCommons.incsert!-constraints-constraint_commons">#</a> <b><u>ConstraintCommons.incsert!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">incsert!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{AbstractDict, AbstractDictionary}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ind, val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Increase or insert a counter in a dictionary-based collection. The counter insertion defaults to <code>val = 1</code>.</p><p><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl/blob/v0.2.1/src/dictionaries.jl#L2-L6" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Performances-–-TODO-6" tabindex="-1">Performances – TODO <a class="header-anchor" href="#Performances-–-TODO-6" aria-label="Permalink to &quot;Performances – TODO {#Performances-–-TODO-6}&quot;">​</a></h3>`,48),o=[n];function r(l,c,d,p,h,m){return i(),a("div",null,o)}const g=s(e,[["render",r]]);export{k as __pageData,g as default};
