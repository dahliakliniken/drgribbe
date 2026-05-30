# Semantic Release

We use [**Semantic Release**](https://semantic-release.gitbook.io/semantic-release/) to automate versioning and changelog generation based on conventional commits.

## Why Semantic Release?

- **Automated Versioning**: Versions are determined from commit messages following [Semantic Versioning](https://semver.org/).
- **Changelog Generation**: `CHANGELOG.md` is updated for each release.
- **GitHub Releases**: Release notes are published automatically when releasable commits land on `main`.

## Commit Message Guidelines

We follow **Conventional Commits**:

```
<type>(<scope>): <subject>
```

- **Type**: Kind of change (`feat`, `fix`, `chore`, etc.).
- **Scope**: Optional area affected (e.g. `api`, `ui`).
- **Subject**: Short description of the change.

#### Common Types

- **feat**: New feature (minor version bump).
- **fix**: Bug fix (patch version bump).
- **docs**: Documentation updates.
- **chore**: Maintenance tasks.
- **BREAKING CHANGE**: Breaking change (major version bump).

#### Examples

- `feat(ui): add a new button component`
- `fix(api): correct data-fetching issue`
- `chore(deps): update dependencies`

### Squash Merges

If PRs are squash-merged, the **PR title** must follow Conventional Commits — that title becomes the commit on `main` that Semantic Release analyzes.

Examples:

- `feat: add information banner`
- `fix: correct mobile layout`
- `chore: update dependencies`

## Release Workflow

Semantic Release runs automatically when commits are pushed to `main` (typically after a PR merge). It:

1. Analyzes commits since the last release.
2. Determines the next version (if any releasable changes exist).
3. Updates `package.json`, `CHANGELOG.md`, and the GitHub release.
4. Commits release artifacts back to `main` with `[skip ci]` to avoid a release loop.

See [release_process.md](./release_process.md) for the full branching and deployment flow.
