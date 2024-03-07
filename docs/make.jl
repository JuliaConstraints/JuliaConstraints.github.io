using Documenter, DocumenterVitepress

using ConstraintCommons

makedocs(;
    modules=[ConstraintCommons],
    authors="Jean-François BAFFIER",
    repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
    sitename="Chairmarks.jl",
    format=DocumenterVitepress.MarkdownVitepress(
        repo = "https://github.com/JuliaConstraints/JuliaConstraints.github.io",
        devurl = "dev",
        deploy_url = "https://juliaconstraints.github.io/",
    ),
    pages=[
        "Home" => "index.md",
    ],
    warnonly = true,
)

deploydocs(;
    repo="https://github.com/JuliaConstraints/JuliaConstraints.github.io",
    push_preview=true,
)
