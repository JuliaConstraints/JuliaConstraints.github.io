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
        "Getting Started" => "getting_started.md",
        "Performance Checking" => [
            "PerfChecker.jl" => "perf_checker.md",
            "BenchmarkToolsExt" => "benchmark_ext.md",
            "Interface" => "perf_interface.md",
        ],
        "Constraints" => [
            "ConstraintCommons.jl" => "constraint_commons.md",
            "ConstraintDomains.jl" => "constraint_domains.md",
            "Constraints.jl" => "constraints.md",
            "ConstraintModels" => "constraint_models.md",
        ],
        "Learning" => [
            "CompositionalNetworks.jl" => "compositional_networks.md",
            "QUBOConstraints.jl" => "qubo_constraints.md",
            "ConstraintLearning.jl" => "constraint_learning.md",
        ],
        "JuMPed Solvers" => [
            "CBLS.jl" => "cbls.md",
        ],
        "Raw Solvers" => [
            "LocalSearchSolvers.jl" => "local_search_solvers.md",
        ],
        "Meta Strategist" => [
            "MetaStrategist.jl" => "meta_strategist.md",
        ]
    ],
    warnonly = true,
)

deploydocs(;
    repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
    push_preview=true,
)
