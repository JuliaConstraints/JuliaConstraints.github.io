# Documentation
using Documenter
using DocumenterVitepress

# Pedrformance checking tools
using PerfChecker

# Constraints
using ConstraintCommons
# using PatternFolds
using ConstraintDomains
using Constraints
using ConstraintModels

# Learning
using CompositionalNetworks
using QUBOConstraints
using ConstraintsTranslator
using ConstraintLearning

# Solvers
using LocalSearchSolvers
using CBLS
# using ConstraintExplorer

# Meta-package
using MetaStrategist

makedocs(;
    modules=[
        PerfChecker,
        ConstraintCommons, ConstraintDomains, Constraints, ConstraintModels,
        # ConstraintCommons, PatternFolds, ConstraintDomains, Constraints, ConstraintModels,
        CompositionalNetworks, QUBOConstraints, ConstraintsTranslator, ConstraintLearning,
        LocalSearchSolvers, CBLS, #ConstraintExplorer,
        MetaStrategist,
    ],
    authors="Julia Constraints et al.",
    repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
    sitename="Julia Constraints",
    format=DocumenterVitepress.MarkdownVitepress(
        repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
        devurl="dev",
        deploy_url="https://juliaconstraints.github.io/",
        description="Resources about Constraint Programming in Julia",
        # build_vitepress=false
    ),
    pages=[
        "Home" => "index.md",
        "Constraint Programming" => [
            "Part 1: Basics" => [
                "Introduction" => "cp/00_intro.md",
                "CP 101" => "cp/10_cp101.md",
                "Optimization(s)?" => "cp/20_opt.md",
                "Getting Started" => "cp/30_getting_started.md",
                "Ecosystem" => "cp/40_ecosystem.md",
            ],
            "Part 2: Advanced" => [
                "CP Techniques" => "cp/50_advanced.md",
                "Applications" => "cp/60_applications.md",
                "Models" => "cp/70_models.md",
                "Tutorials&XP" => "cp/80_tuto_xp.md",
                "Contributing" => "cp/90_contribution.md",
            ],
        ],
        "Modeling Toolkit" => [
            "Introduction" => "constraints/00_intro.md",
            "Variables and Domains" => "constraints/10_variables_and_domains.md",
            "Constraints" => [
                "Basics" => "constraints/20_constraints.md",
                "Generic Constraints" => "constraints/21_generic_constraints.md",
                "Language Constraints" => "constraints/22_language_constraints.md",
                "Comparison Constraints" => "constraints/23_comparison_constraints.md",
                "Counting and Summing Constraints" => "constraints/24_counting_summing_constraints.md",
                "Connection Constraints" => "constraints/25_connection_constraints.md",
                "Packing and Scheduling Constraints" => "constraints/26_packing_scheduling_constraints.md",
                "Graph Constraints" => "constraints/27_graph_constraints.md",
                "Elementary Constraints" => "constraints/28_elementary_constraints.md",
            ],
            "Model Catalog" => "constraints/40_constraint_models.md",
            "Internals" => [
                "ConstraintCommons.jl" => "constraints/60_constraint_commons.md",
                "PatternFolds.jl" => "constraints/61_pattern_folds.md",
                "ConstraintDomains.jl" => "constraints/62_constraint_domains.md",
                "Constraints.jl" => "constraints/63_constraints_jl.md",
            ],
        ],
        "Learning" => [
            "Introduction" => "learning/00_intro.md",
            "CompositionalNetworks.jl" => [
                "About ICNs" => "learning/10_compositional_networks.md",
                "Layers" => "learning/11_layers.md",
                "Transformations Layer" => "learning/12_transformation.md",
                "Arithmetic Layer" => "learning/13_arithmetic.md",
                "Aggregation Layer" => "learning/14_aggregation.md",
                "Comparison Layer" => "learning/15_comparison.md",
            ],
            "QUBOConstraints.jl" => [
                "Model as QUBO" => "learning/20_qubo_constraints.md",
                "Encoding" => "learning/21_qubo_encoding.md",
                "Learning" => "learning/22_qubo_learning.md",
            ],
            "ConstraintsTranslator.jl" => "learning/30_constraints_translator.md",
            "ConstraintLearning.jl" => "learning/90_constraint_learning.md",
        ],
        "Solvers" => [
            "Introduction" => "solvers/00_intro.md",
            "JuMPed" => [
                "CBLS.jl" => "solvers/10_cbls.md",
                "ConstraintExplorer.jl" => "solvers/40_constraint_explorer.md",
            ],
            "Other interfaces" => [
                "LocalSearchSolvers.jl" => "solvers/50_local_search_solvers.md",
            ],
            "Meta Solvers" => [
                "MetaStrategist.jl" => "solvers/80_meta_strategist.md",
            ],
        ],
        "Performance Checking" => [
            "PerfChecker.jl" => "perf/00_perf_checker.md",
            "Tutorial" => "perf/10_tutorial.md",
            "Interface" => "perf/20_perf_interface.md",
            "BenchmarkToolsExt" => "perf/30_benchmark_ext.md",
            "ChairmarksExt" => "perf/40_chairmarks_ext.md",
            "API" => "perf/90_api.md"
        ],
        "API" => [
            "Public" => "api/00_public.md",
            "Full" => "api/10_full.md",
        ],
    ],
    warnonly=true,
)

deploydocs(;
    repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
    target="build",
    branch="gh-pages",
    devbranch="main",
    push_preview=true,
)
