This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Dahliakliniken

A brief description of the project, including its main purpose and any key features.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

To get started with this project, ensure you have [pnpm](https://pnpm.io/) installed. Then follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/dahliakliniken/drgribbe.git
   cd drgribbe
   ```

2. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Scripts

Here are the available scripts for this project:

- `pnpm dev`: Starts the development server at `localhost:3000`.
- `pnpm build`: Builds the project for production.
- `pnpm start`: Starts the production server after a build.
- `pnpm lint`: Runs ESLint for code linting.

## Project Structure

A high-level overview of the folder structure:

```
├── public/               # Static assets (images, fonts, etc.)
├── app/                  # Main source code
│   ├── components/       # Reusable UI components
│   │  ├── inputs/        # Input elements like buttons, text fields, etc.
│   │  ├── layouts/       # Layout components for structuring pages
│   │  ├── surfaces/      # Surface components like cards, modals, etc.
│   │  ├── navigation/    # Navigation components like breadcrumbs
│   │  └── composites/    # Composite components combining multiple elements
│   ├── page.ts           # Main page component
│   ├── styles/           # Global and component-specific styles
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions and helpers
│   └── types/            # TypeScript types and interfaces
├── docs/                 # Directory containing documentation files
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## Release Process

This project uses [Semantic Release](https://semantic-release.gitbook.io/) for automated versioning and publishing:

- **Production releases**: Merges to `main` branch trigger production releases
- **Beta releases**: Merges to `develop` branch trigger pre-release versions
- **Commit format**: Follow [Conventional Commits](https://conventionalcommits.org/) for proper versioning

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework for building web applications.
- [pnpm](https://pnpm.io/) - Fast, disk space-efficient package manager.
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for improved developer experience.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [ESLint](https://eslint.org/) - Linting tool for JavaScript/TypeScript.
- [Prettier](https://prettier.io/) - Code formatting tool.
- [Semantic Release](https://semantic-release.gitbook.io/) - Automated versioning and package publishing.
