# Releases and Deployments

## Branching Strategy

`main` is the only long-lived branch. Feature and fix branches are created from `main` and merged back via pull request.

```
main
└── feat/xxx
    └── PR → Vercel preview → merge to main → production deploy + semantic-release
```

- **Feature branches:** `feat/your-feature-name`
- **Bug fixes:** `fix/your-fix-description`
- **Pull requests:** Target `main` for code review

## Review and Deployment

1. Open a PR against `main`. Vercel creates a preview deployment for review and testing.
2. After approval, merge the PR into `main`.
3. Vercel deploys to **production** automatically.
4. **Semantic Release** runs on the merge, bumps the version when warranted, updates `CHANGELOG.md`, and creates a GitHub release.

There is no separate staging branch or release branch. Preview deployments replace the old staging workflow.

## Pull request title format

This project uses squash merge. The final commit on `main` is based on the PR title, so PR titles must follow [Conventional Commits](https://www.conventionalcommits.org/). Invalid titles are blocked by CI before merge.

Examples:

- `feat: add information banner`
- `fix: correct mobile layout`
- `docs: update deployment docs`
- `chore: update dependencies`

Local commits are also checked via Husky when you commit. See [semantic_release.md](./semantic_release.md) for the full format.
