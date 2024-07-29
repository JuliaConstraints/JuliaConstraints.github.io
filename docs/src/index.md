```@raw html
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Julia Constraints"
  text: "Model Smoothly Decide Wisely"
  tagline: A Toolkit for Constraint Programming
  image:
    src: /logo.png
    alt: JuliaConstraints
  actions:
    - theme: brand
      text: Model, Learn, and Solve!
      link: /constraints/intro
    - theme: alt
      text: View on Github
      link: https://github.com/JuliaConstraints/JuliaConstraints.github.io

features:
  - icon: <img width="64" height="64" src="JuMP-logo-dark.png" alt="JuMP.jl"/>
    title: JuMP.jl
    details: Model optimization problems via JuMP.jl!
    link: "https://jump.dev/"
  - icon: <img width="64" height="64" src="/logo.png" alt="PerfChecker.jl"/>
    title: PerfChecker.jl
    details: Cross-version performance checking tool
    link: "https://github.com/JuliaConstraints/PerfChecker.jl"
  - icon: <img width="64" height="64" src="pluto-logo.png" alt="Pluto.jl"/>
    title: Pluto.jl
    details: Simple, reactive programming environment via Julia notebooks
    link: "https://plutojl.org/"
---
```

```@raw html
<p style="margin-bottom:2cm"></p>

<div class="vp-doc" style="width:80%; margin:auto">

<h1>What is Julia Constraints?</h1>

<p>The <a href="https://github.com/JuliaConstraints">Julia Constraints</a> organization serves as a hub for resources to create, understand, and solve optimization through the lens of Constraint Programming.  Our goal is to make Constraint Programming accessible and efficient for users at all levels of expertise, by providing a comprehensive suite of tools.</p>

<p>Most tools integrate seamlessly with <a href="https://jump.dev/">JuMP</a>, a popular Julia package for mathematical optimization.</p>

<h2>Ecosystem overview</h2>

<h3>Core Packages</h3>
<p>The foundation of common packages that provide essential features for constraint programming ensures that users possess the fundamental tools required for their projects.</p>
<ul>
        <li><a href="https://github.com/JuliaConstraints/ConstraintCommons.jl"><strong>ConstraintCommons.jl</strong></a> is designed to make constraint programming solutions in Julia interoperable. It provides shared structures, abstract types, functions, and generic methods used by both basic feature packages and learning-oriented packages.</li>
        <li><a href="https://github.com/JuliaConstraints/ConstraintDomains.jl"><strong>ConstraintDomains.jl</strong></a> focuses on the definition and manipulation of variable domains, which are used to solve constraint programming problems. This package provides the infrastructure needed to specify both discrete and continuous domains, allowing a wide range of constraint programming applications.</li>
        <li><a href="https://github.com/JuliaConstraints/Constraints.jl"><strong>Constraints.jl</strong></a> is a key component, specifically designed to facilitate the definition, manipulation, and application of constraints in constraint programming. This package is central to handling both standard and complex constraints, making it an indispensable tool for developers and researchers working in CP.</li>
        <li><a href="https://github.com/JuliaConstraints/Constraintmodels.jl"><strong>ConstraintModels.jl</strong></a> is a package for Julia Constraints' solvers that stores Constraint Programming models.</li>
    </ul>
    <h3>Learning and Translation Tools</h3>
    <p>A collection that bridges the gap between the ease of modeling and computational efficacy. These tools learn from constraints or convert natural language problems into constraint programming solutions, requiring minimal input from the user beyond the model itself.</p>
    <ul>
        <li><a href="https://github.com/JuliaConstraints/Compositionalnetworks.jl"><strong>CompositionalNetworks.jl</strong></a> provides interpretable compositional networks (<em>ICN</em>), a combinatorial variant of neural networks that allows the user to obtain interpretable results, unlike regular artificial neural networks.</li>
        <li><a href="https://github.com/JuliaConstraints/QUBOConstraints.jl"><strong>QUBOConstraints.jl</strong></a> is a package that can (automatically) learn QUBO matrices from optimization constraints.</li>
        <li><strong>ConstraintsTranslator.jl</strong> (tentative name, WIP) is a tool for converting problems expressed in natural language into optimization models.</li>
        <li><a href="https://github.com/JuliaConstraints/ConstraintLearning.jl"><strong>ConstraintLearning.jl</strong></a> is a common interface that integrates the various components outlined above.</li>
    </ul>
    <h3>Solvers</h3>
    <p>We offer a variety of solvers, from native Julia solvers to interfaces with JuMP for external CP solvers, to cater to various problem-solving needs.</p>
    <ul>
        <li><a href="https://github.com/JuliaConstraints/LocalSearchSolvers.jl"><strong>LocalSearchSolvers.jl</strong></a> is a Julia native framework to (semi-)automatically build Constraint-based Local Search solvers. It serves as a basic for the experimental design or core and learning oriented packages in Julia Constraints.</li>
        <li><a href="https://github.com/JuliaConstraints/CBLS.jl"><strong>CBLS.jl</strong></a> a MOI/JuMP interface for the above framework!</li>
        <li><a href="https://github.com/JuliaConstraints/CPLEXCP.jl"><strong>CPLEXCP.jl</strong></a> a Julia interface for CPLEX CP Optimizer.</li>
        <li><a href="https://github.com/JuliaConstraints/Chuffed.jl"><strong>Chuffed.jl</strong></a> a wrapper for the constraint-programming solver Chuffed to Julia.</li>
        <li><a href="https://github.com/JuliaConstraints/JaCoP.jl"><strong>JaCoP.jl</strong></a> a Julia interface for the JaCoP constraint-programming solver.</li>
    </ul>
    <h4>JuMP extras</h4>
    <p>Constraint Programming is slowly making steps into the main JuMP components. However, some extra resources are available as</p>
    <ul>
        <li><a href="https://github.com/JuliaConstraints/ConstraintProgrammingExtensions.jl"><strong>ConstraintProgrammingExtensions.jl</strong></a> provides extensions to MathOptInterface to support constraint programming.</li>
        <li><a href="https://github.com/JuliaConstraints/JuCP.jl"><strong>JuCP.jl</strong></a> similarly provides extensions to JuMP.</li>
    </ul>
    <h4>Meta-solving</h4>
    <p><strong>MetaStrategist.jl</strong> is a meta-solving package in its formative stages, which aims to harness the strengths of CP and JuMP. Its goal is to formulate tailored strategies that take into consideration the unique hardware and software resources at hand, offering a new horizon in problem-solving efficiency and adaptability. Stay tuned!</p>
    <h3>Performance related tools</h3>
    <p>We've made a tool for cross-version performance checking that ensures the high efficiency and reliability of our solutions. By facilitating clear and simple performance evaluations, <a href="https://github.com/JuliaConstraints/PerfChecker.jl"><strong>PerfChecker.jl</strong></a> enhances both development and maintenance, contributing to the overall health and progress of Julia (Constraints)'s growing library of resources.</p>
    <h2>Contributors Page</h2>
    <h3>Acknowledgments</h3>
    <p>The Julia Constraints community would not be where it is today without the collective efforts of many talented individuals and organizations. We extend our heartfelt thanks to:</p>
    <ul>
        <li><a href="https://www.iijlab.net/en/"><strong>IIJ Research Lab</strong></a>: The driving force behind more than half of this project!</li>
        <li><a href="https://jump.dev/"><strong>JuMP-dev Community</strong></a>: For their extensive contributions to the development of our packages.</li>
        <li><strong>Individual Contributors</strong>: Numerous developers and researchers who have dedicated their time and skills to enhance our tools.</li>
    </ul>

</div>
```
