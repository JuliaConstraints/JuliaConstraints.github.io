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
            "Part 1: Basics" => [
                "Introduction" => "cp/intro.md",
                "CP 101" => "cp/cp101.md",
                "Optimization(s)?" => "cp/opt.md",
                "Getting Started" => "cp/getting_started.md",
                "Ecosystem" => "cp/ecosystem.md",
            ],
            "Part 2: Advanced" => [
                "CP Techniques" => "cp/advanced.md",
                "Applications" => "cp/applications.md",
                "Models" => "cp/models.md",
                "Tutorials&XP" => "cp/tuto_xp.md",
                "Contributing" => "cp/contribution.md",
            ],
        ],
        "Constraints" => [
            "ConstraintCommons.jl" => "constraints/constraint_commons.md",
            "ConstraintDomains.jl" => "constraints/constraint_domains.md",
            "Constraints.jl" => "constraints/constraints.md",
            "ConstraintModels.jl" => "constraints/constraint_models.md",
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
        "API" => [
            "Public" => "public_api.md",
            "Full" => "full_api.md",
        ],
    ],
    warnonly = true,
)

deploydocs(;
    repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
    push_preview=true,
)
