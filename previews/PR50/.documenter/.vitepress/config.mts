import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import mathjax3 from "markdown-it-mathjax3";
import footnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/previews/PR50/',// TODO: replace this in makedocs!
  title: 'Julia Constraints',
  description: "A VitePress Site",
  lastUpdated: true,
  cleanUrls: true,
  outDir: '../final_site', // This is required for MarkdownVitepress to work correctly...
  
  ignoreDeadLinks: true,

  markdown: {
    math: true,
    config(md) {
      md.use(tabsMarkdownPlugin),
      md.use(mathjax3),
      md.use(footnote)
    },
    theme: {
      light: "github-light",
      dark: "github-dark"}
  },
  themeConfig: {
    outline: 'deep',
    logo: { src: '/logo.png', width: 24, height: 24},
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav: [
{ text: 'Home', link: '/index' },
{ text: 'Constraint Programming', collapsed: false, items: [
{ text: 'Part 1: Basics', collapsed: false, items: [
{ text: 'Introduction', link: '/cp/intro' },
{ text: 'CP 101', link: '/cp/cp101' },
{ text: 'Optimization(s)?', link: '/cp/opt' },
{ text: 'Getting Started', link: '/cp/getting_started' },
{ text: 'Ecosystem', link: '/cp/ecosystem' }]
 },
{ text: 'Part 2: Advanced', collapsed: false, items: [
{ text: 'CP Techniques', link: '/cp/advanced' },
{ text: 'Applications', link: '/cp/applications' },
{ text: 'Models', link: '/cp/models' },
{ text: 'Tutorials&XP', link: '/cp/tuto_xp' },
{ text: 'Contributing', link: '/cp/contribution' }]
 }]
 },
{ text: 'Constraints', collapsed: false, items: [
{ text: 'Introduction', link: '/constraints/intro' },
{ text: 'ConstraintCommons.jl', link: '/constraints/constraint_commons' },
{ text: 'ConstraintDomains.jl', link: '/constraints/constraint_domains' },
{ text: 'Constraints.jl', collapsed: false, items: [
{ text: 'Basic Tools', link: '/constraints/constraints' },
{ text: 'Generic Constraints', link: '/constraints/generic_constraints' },
{ text: 'Language Constraints', link: '/constraints/language_constraints' },
{ text: 'Comparison Constraints', link: '/constraints/comparison_constraints' },
{ text: 'Counting and Summing Constraints', link: '/constraints/counting_summing_constraints' },
{ text: 'Connection Constraints', link: '/constraints/connection_constraints' },
{ text: 'Packing and Scheduling Constraints', link: '/constraints/packing_scheduling_constraints' },
{ text: 'Graph Constraints', link: '/constraints/graph_constraints' },
{ text: 'Elementary Constraints', link: '/constraints/elementary_constraints' }]
 },
{ text: 'ConstraintModels.jl', link: '/constraints/constraint_models' }]
 },
{ text: 'Learning', collapsed: false, items: [
{ text: 'Introduction', link: '/learning/intro' },
{ text: 'CompositionalNetworks.jl', collapsed: false, items: [
{ text: 'About ICNs', link: '/learning/compositional_networks' },
{ text: 'Layers', link: '/learning/layers' },
{ text: 'Transformations Layer', link: '/learning/transformation' },
{ text: 'Arithmetic Layer', link: '/learning/arithmetic' },
{ text: 'Aggregation Layer', link: '/learning/aggregation' },
{ text: 'Comparison Layer', link: '/learning/comparison' }]
 },
{ text: 'QUBOConstraints.jl', collapsed: false, items: [
{ text: 'Model as QUBO', link: '/learning/qubo_constraints' },
{ text: 'Encoding', link: '/learning/qubo_encoding' },
{ text: 'Learning', link: '/learning/qubo_learning' }]
 },
{ text: 'ConstraintLearning.jl', link: '/learning/constraint_learning' }]
 },
{ text: 'Solvers', collapsed: false, items: [
{ text: 'Introduction', link: '/solvers/intro' },
{ text: 'JuMPed', collapsed: false, items: [
{ text: 'CBLS.jl', link: '/solvers/cbls' }]
 },
{ text: 'Others', collapsed: false, items: [
{ text: 'LocalSearchSolvers.jl', link: '/solvers/local_search_solvers' }]
 }]
 },
{ text: 'Meta Strategist', collapsed: false, items: [
{ text: 'MetaStrategist.jl', link: '/meta/meta_strategist' }]
 },
{ text: 'Performance Checking', collapsed: false, items: [
{ text: 'PerfChecker.jl', link: '/perf/perf_checker' },
{ text: 'Tutorial', link: '/perf/tutorial' },
{ text: 'Interface', link: '/perf/perf_interface' },
{ text: 'BenchmarkToolsExt', link: '/perf/benchmark_ext' },
{ text: 'ChairmarksExt', link: '/perf/chairmarks_ext' },
{ text: 'API', link: '/perf/api' }]
 },
{ text: 'API', collapsed: false, items: [
{ text: 'Public', link: '/public_api' },
{ text: 'Full', link: '/full_api' }]
 }
]
,
    sidebar: [
{ text: 'Home', link: '/index' },
{ text: 'Constraint Programming', collapsed: false, items: [
{ text: 'Part 1: Basics', collapsed: false, items: [
{ text: 'Introduction', link: '/cp/intro' },
{ text: 'CP 101', link: '/cp/cp101' },
{ text: 'Optimization(s)?', link: '/cp/opt' },
{ text: 'Getting Started', link: '/cp/getting_started' },
{ text: 'Ecosystem', link: '/cp/ecosystem' }]
 },
{ text: 'Part 2: Advanced', collapsed: false, items: [
{ text: 'CP Techniques', link: '/cp/advanced' },
{ text: 'Applications', link: '/cp/applications' },
{ text: 'Models', link: '/cp/models' },
{ text: 'Tutorials&XP', link: '/cp/tuto_xp' },
{ text: 'Contributing', link: '/cp/contribution' }]
 }]
 },
{ text: 'Constraints', collapsed: false, items: [
{ text: 'Introduction', link: '/constraints/intro' },
{ text: 'ConstraintCommons.jl', link: '/constraints/constraint_commons' },
{ text: 'ConstraintDomains.jl', link: '/constraints/constraint_domains' },
{ text: 'Constraints.jl', collapsed: false, items: [
{ text: 'Basic Tools', link: '/constraints/constraints' },
{ text: 'Generic Constraints', link: '/constraints/generic_constraints' },
{ text: 'Language Constraints', link: '/constraints/language_constraints' },
{ text: 'Comparison Constraints', link: '/constraints/comparison_constraints' },
{ text: 'Counting and Summing Constraints', link: '/constraints/counting_summing_constraints' },
{ text: 'Connection Constraints', link: '/constraints/connection_constraints' },
{ text: 'Packing and Scheduling Constraints', link: '/constraints/packing_scheduling_constraints' },
{ text: 'Graph Constraints', link: '/constraints/graph_constraints' },
{ text: 'Elementary Constraints', link: '/constraints/elementary_constraints' }]
 },
{ text: 'ConstraintModels.jl', link: '/constraints/constraint_models' }]
 },
{ text: 'Learning', collapsed: false, items: [
{ text: 'Introduction', link: '/learning/intro' },
{ text: 'CompositionalNetworks.jl', collapsed: false, items: [
{ text: 'About ICNs', link: '/learning/compositional_networks' },
{ text: 'Layers', link: '/learning/layers' },
{ text: 'Transformations Layer', link: '/learning/transformation' },
{ text: 'Arithmetic Layer', link: '/learning/arithmetic' },
{ text: 'Aggregation Layer', link: '/learning/aggregation' },
{ text: 'Comparison Layer', link: '/learning/comparison' }]
 },
{ text: 'QUBOConstraints.jl', collapsed: false, items: [
{ text: 'Model as QUBO', link: '/learning/qubo_constraints' },
{ text: 'Encoding', link: '/learning/qubo_encoding' },
{ text: 'Learning', link: '/learning/qubo_learning' }]
 },
{ text: 'ConstraintLearning.jl', link: '/learning/constraint_learning' }]
 },
{ text: 'Solvers', collapsed: false, items: [
{ text: 'Introduction', link: '/solvers/intro' },
{ text: 'JuMPed', collapsed: false, items: [
{ text: 'CBLS.jl', link: '/solvers/cbls' }]
 },
{ text: 'Others', collapsed: false, items: [
{ text: 'LocalSearchSolvers.jl', link: '/solvers/local_search_solvers' }]
 }]
 },
{ text: 'Meta Strategist', collapsed: false, items: [
{ text: 'MetaStrategist.jl', link: '/meta/meta_strategist' }]
 },
{ text: 'Performance Checking', collapsed: false, items: [
{ text: 'PerfChecker.jl', link: '/perf/perf_checker' },
{ text: 'Tutorial', link: '/perf/tutorial' },
{ text: 'Interface', link: '/perf/perf_interface' },
{ text: 'BenchmarkToolsExt', link: '/perf/benchmark_ext' },
{ text: 'ChairmarksExt', link: '/perf/chairmarks_ext' },
{ text: 'API', link: '/perf/api' }]
 },
{ text: 'API', collapsed: false, items: [
{ text: 'Public', link: '/public_api' },
{ text: 'Full', link: '/full_api' }]
 }
]
,
    editLink: { pattern: "https://https://github.com/JuliaConstraints/JuliaConstraints.github.io/edit/main/docs/src/:path" },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JuliaConstraints/JuliaConstraints.github.io' }
    ],
    footer: {
      message: 'Made with <a href="https://documenter.juliadocs.org/stable/" target="_blank"><strong>Documenter.jl</strong></a> & <a href="https://vitepress.dev" target="_blank"><strong>VitePress</strong></a> <br>',
      copyright: `© Copyright ${new Date().getUTCFullYear()}.`
    }
  }
})
