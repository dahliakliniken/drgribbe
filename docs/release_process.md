# Releases and Deployments

## Branching Strategy

We follow a structured branching strategy to ensure smooth feature development and bug fixes:

- **Feature Branches:** For new features, create a branch named feat/your-feature-name.
- **Bug Fixes:** For bug fixes, create a branch named fix/your-fix-description.
- **Pull Requests:** Once your feature or fix is complete, create a Pull Request (PR) to the `develop` branch for code review.

## Merging and Deployment Process

1. **Merging to develop:** After the PR is approved, merge your branch into the `develop` branch. This triggers an automatic deployment to the **staging environment** on **Vercel** for testing and further review. The `develop` branch represents the latest state of ongoing development.

2. **Production Deployment:**
   - When the `main` branch receives a merge from `develop`, the project is automatically deployed to **production** on Vercel.
   - Make sure to create a proper Pull Request when merging to `main` to maintain transparency and review the code before deployment.

## Deployment Workflow

- **Develop Branch:**
  - This is where all new features and bug fixes are merged after a review.
  - It represents the latest development state but is not yet live in production.
- **Main Branch:**
  - This branch is always in sync with the live production environment.
  - Only merge into `main` when you are ready to deploy the latest changes to production.

## Automated Deployment

We use **Vercel** for continuous deployment. Every merge to the `develop` branch triggers a deployment to the **staging environment**. Merging to the `main` branch triggers an automatic deployment to the **production environment**.

Be sure to monitor the deployment status after merging to ensure everything is deployed successfully.
