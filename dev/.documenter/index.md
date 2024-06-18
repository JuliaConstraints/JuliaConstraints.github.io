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


&lt;p style=&quot;margin-bottom:2cm&quot;&gt;&lt;/p&gt;

&lt;div class=&quot;vp-doc&quot; style=&quot;width:80%; margin:auto&quot;&gt;

&lt;h1&gt;What is Julia Constraints? (chatGPTed atm)&lt;/h1&gt;

&lt;p&gt;The Julia Constraints organization is dedicated to advancing Constraint Programming within the Julia ecosystem, serving as a hub for resources that facilitate the creation, understanding, and solution of constraint programming problems. Our goal is to make Constraint Programming accessible and efficient for users at all levels of expertise, by providing a comprehensive suite of tools that integrate seamlessly with JuMP.jl, a popular Julia package for mathematical optimization.&lt;/p&gt;

&lt;h2&gt;Our offerings include:&lt;/h2&gt;

&lt;h3&gt;Core Packages:&lt;/h3&gt; &lt;p&gt;A foundation of common packages (ConstraintCommons, ConstraintDomains, Constraints, ConstraintModels) that supply essential features for constraint programming, ensuring users have the basic tools necessary for their projects.&lt;/p&gt;

&lt;h3&gt;Learning and Translation Tools:&lt;/h3&gt; &lt;p&gt;Advanced packages like CompositionalNetworks, QUBOConstraints, and ConstraintsTranslator bridge the gap between ease of modeling and computational efficiency. These tools learn from constraints and convert natural language problems into constraint programming solutions, requiring minimal input from the user beyond the model itself.&lt;/p&gt;

&lt;h3&gt;Solvers:&lt;/h3&gt; &lt;p&gt;We provide a range of solvers, from native Julia solvers (LocalSearchSolvers) to interfaces with JuMP for external CP solvers, catering to various problem-solving needs.&lt;/p&gt;

&lt;h3&gt;MetaStrategist (Emerging Technology):&lt;/h3&gt; &lt;p&gt;In its formative stages, MetaStrategist embodies our pioneering spirit. As a burgeoning meta-solving package, it aims to harness the strengths of CP and JuMP. Its vision is to formulate tailored strategies that consider the unique hardware and software resources at hand, offering a new horizon in problem-solving efficiency and adaptability.&lt;/p&gt;

&lt;h3&gt;Performance Checker (Community Resource):&lt;/h3&gt; &lt;p&gt;PerfChecker.jl transcends its role within Julia Constraints, offering its capabilities to the broader Julia package ecosystem. This indispensable tool for cross-version performance checking not only safeguards the high efficiency and reliability of our packages but also serves the wider community. By facilitating clear and simple performance evaluations, PerfChecker.jl enhances both development and maintenance, contributing to the overall health and progress of Julia&#39;s growing library of resources.&lt;/p&gt;

&lt;p&gt;At Julia Constraints, our mission is to democratize Constraint Programming by providing robust, user-friendly tools that simplify the modeling process, enhance efficiency, and empower users to solve complex problems with ease.&lt;/p&gt;

&lt;/div&gt;
