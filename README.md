This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Here's a README template for a frontend project using Next.js 14 and pnpm:

---

# Project Name

A brief description of the project, including its main purpose and any key features.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, ensure you have [pnpm](https://pnpm.io/) installed. Then follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/jennieandersson/blue-harvest.git
   cd blue-harvest
   ```

2. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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
├── src/                  # Main source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Next.js pages
│   ├── styles/           # Global and component-specific styles
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions and helpers
│   └── types/            # TypeScript types and interfaces
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework for building web applications.
- [pnpm](https://pnpm.io/) - Fast, disk space-efficient package manager.
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for improved developer experience.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [ESLint](https://eslint.org/) - Linting tool for JavaScript/TypeScript.
- [Prettier](https://prettier.io/) - Code formatting tool.
