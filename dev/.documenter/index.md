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
      text: Constraint Programming ?!
      link: /cp/intro
    - theme: alt
      text: View on Github
      link: https://github.com/JuliaConstraints/JuliaConstraints.github.io

features:
  - icon: <img width="64" height="64" src="JuMP-logo-dark.png" alt="JuMP.jl"/>
    title: JuMP.jl
    details: Model optimization problems via JuMP.jl!
    link: "https://jump.dev/"
  - icon: <img width="64" height="64" src="toqubo-logo.png" alt="ToQUBO.jl"/>
    title: ToQUBO.jl
    details: Convert and send optimization models to QUBO solvers!
    link: "https://github.com/psrenergy/ToQUBO.jl"
  - icon: <img width="64" height="64" src="pluto-logo.png" alt="Pluto.jl"/>
    title: Pluto.jl
    details: Simple, reactive programming environment via Julia notebooks
    link: "https://plutojl.org/"
---

<p style="margin-bottom:2cm"></p>

<div class="vp-doc" style="width:80%; margin:auto">

<h1>What is Julia Constraints? (chatGPTed atm)</h1>

<p>The Julia Constraints organization is dedicated to advancing Constraint Programming within the Julia ecosystem, serving as a hub for resources that facilitate the creation, understanding, and solution of constraint programming problems. Our goal is to make Constraint Programming accessible and efficient for users at all levels of expertise, by providing a comprehensive suite of tools that integrate seamlessly with JuMP.jl, a popular Julia package for mathematical optimization.</p>

<h2>Our offerings include:</h2>

<h3>Core Packages:</h3>
<p>A foundation of common packages (ConstraintCommons, ConstraintDomains, Constraints, ConstraintModels) that supply essential features for constraint programming, ensuring users have the basic tools necessary for their projects.</p>

<h3>Learning and Translation Tools:</h3>
<p>Advanced packages like CompositionalNetworks, QUBOConstraints, and ConstraintsTranslator bridge the gap between ease of modeling and computational efficiency. These tools learn from constraints and convert natural language problems into constraint programming solutions, requiring minimal input from the user beyond the model itself.</p>

<h3>Solvers:</h3>
<p>We provide a range of solvers, from native Julia solvers (LocalSearchSolvers) to interfaces with JuMP for external CP solvers, catering to various problem-solving needs.</p>

<h3>MetaStrategist (Emerging Technology):</h3>
<p>In its formative stages, MetaStrategist embodies our pioneering spirit. As a burgeoning meta-solving package, it aims to harness the strengths of CP and JuMP. Its vision is to formulate tailored strategies that consider the unique hardware and software resources at hand, offering a new horizon in problem-solving efficiency and adaptability.</p>

<h3>Performance Checker (Community Resource):</h3>
<p>PerfChecker.jl transcends its role within Julia Constraints, offering its capabilities to the broader Julia package ecosystem. This indispensable tool for cross-version performance checking not only safeguards the high efficiency and reliability of our packages but also serves the wider community. By facilitating clear and simple performance evaluations, PerfChecker.jl enhances both development and maintenance, contributing to the overall health and progress of Julia's growing library of resources.</p>

<p>At Julia Constraints, our mission is to democratize Constraint Programming by providing robust, user-friendly tools that simplify the modeling process, enhance efficiency, and empower users to solve complex problems with ease.</p>

</div>

