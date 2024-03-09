# Documentation
using Documenter
using DocumenterVitepress

# Pedrformance checking tools
using PerfChecker

# Constraints
using ConstraintCommons
using ConstraintDomains
using Constraints
using ConstraintModels

# Learning
using CompositionalNetworks
using QUBOConstraints
using ConstraintLearning

# Constraint-Based Local Search
using LocalSearchSolvers
using CBLS

# Meta-package
using MetaStrategist

makedocs(;
    modules=[
        PerfChecker,
        ConstraintCommons, ConstraintDomains, Constraints, ConstraintModels,
        CompositionalNetworks, QUBOConstraints, ConstraintLearning,
        LocalSearchSolvers, CBLS,
        MetaStrategist,
    ],
    authors="Jean-François BAFFIER",
    repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
    sitename="Julia Constraints",
    format=DocumenterVitepress.MarkdownVitepress(
        repo = "https://github.com/JuliaConstraints/JuliaConstraints.github.io",
        devurl = "dev",
        deploy_url = "https://juliaconstraints.github.io/",
        description = "Resources about Constraint Programming in Julia"
    ),
    pages=[
        "Home" => "index.md",
        "Constraint Programming" => [
            "Introduction" => "cp/intro.md",
            "Optimization(s)?" => "cp/opt.md",
        ],
        "Constraints" => [
            "ConstraintCommons.jl" => "constraints/constraint_commons.md",
            "ConstraintDomains.jl" => "constraints/constraint_domains.md",
            "Constraints.jl" => "constraints/constraints.md",
            "ConstraintModels" => "constraints/constraint_models.md",
        ],
        "Learning" => [
            "CompositionalNetworks.jl" => "learning/compositional_networks.md",
            "QUBOConstraints.jl" => "learning/qubo_constraints.md",
            "ConstraintLearning.jl" => "learning/constraint_learning.md",
        ],
        "Solvers" => [
            "JuMPed" => [
                "CBLS.jl" => "solvers/cbls.md",
            ],            
            "Others" => [
                "LocalSearchSolvers.jl" => "solvers/local_search_solvers.md",
            ],
        ],
        "Meta Strategist" => [
            "MetaStrategist.jl" => "meta/meta_strategist.md",
        ],
        "Performance Checking" => [
            "PerfChecker.jl" => "perf/perf_checker.md",
            "BenchmarkToolsExt" => "perf/benchmark_ext.md",
            "Interface" => "perf/perf_interface.md",
        ],
    ],
    warnonly = true,
)

deploydocs(;
    repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
    push_preview=true,
)
