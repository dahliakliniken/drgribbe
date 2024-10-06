## Semantic Release

We use [**Semantic Release**](https://semantic-release.gitbook.io/semantic-release/) to automate the versioning and changelog generation based on conventional commits, ensuring that every release is consistent and properly documented.

### Why Semantic Release?

- **Automated Versioning**: Versions are automatically determined based on your commit messages, following the [Semantic Versioning](https://semver.org/) guidelines (e.g., `major.minor.patch`).
- **Changelog Generation**: A changelog is automatically generated for each release, making it easy to track changes and updates.
- **Automated Releases**: Once a branch is merged, **Semantic Release** handles publishing the new version (if required) to production, generating release notes, and updating the changelog.

### Commit Message Guidelines

We follow **Conventional Commits** for writing commit messages to ensure that **Semantic Release** can correctly determine the type of version bump (major, minor, or patch). Here's the format:

```
<type>(<scope>): <subject>
```

- **Type**: Describes the kind of change you’re making (e.g., `feat`, `fix`, `chore`, etc.).
- **Scope**: Optional, indicates the area affected (e.g., `api`, `ui`, `docs`).
- **Subject**: A short description of the change.

#### Common Types:

- **feat**: A new feature (triggers a `minor` version bump).
- **fix**: A bug fix (triggers a `patch` version bump).
- **docs**: Documentation updates.
- **chore**: Maintenance tasks (e.g., updating dependencies).
- **BREAKING CHANGE**: For breaking changes that require a `major` version bump.

#### Example:

- `feat(ui): add a new button component`
- `fix(api): correct data-fetching issue`
- `chore(deps): update dependencies`

### Release Workflow

1. **Merge to `develop`**: After a PR is merged into the `develop` branch, **Semantic Release** will analyze the commits, determine if a new version is required, and update the version number, changelog, and release notes.

2. **Merge to `main`**: When a feature is ready for production and merged into `main`, **Semantic Release** automates the release process, including publishing the new version to the production environment on Vercel.
