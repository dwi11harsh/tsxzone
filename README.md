# TSXZone

TSXZone is a lean and easy-to-use UI library built with TypeScript and React. This project is set up as a monorepo using Turborepo, making it easy to manage multiple packages and applications.

## Features

- Monorepo structure using Turborepo
- TypeScript support
- React components
- Next.js applications
- Shared UI library
- ESLint configuration
- Prettier formatting

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js >=18
- pnpm 8.9.0 or later

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/tsxzone.git
   cd tsxzone
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Start the development server:
   ```
   pnpm dev
   ```

This will start the development servers for all applications in the monorepo.

## Project Structure

- `apps/`
  - `docs/`: Documentation site
  - `web/`: Main web application
- `packages/`
  - `ui/`: Shared UI components
  - `eslint-config/`: Shared ESLint configuration
  - `typescript-config/`: Shared TypeScript configuration

## Available Scripts

In the project directory, you can run:

- `pnpm build`: Build all applications and packages
- `pnpm dev`: Start the development server for all applications
- `pnpm lint`: Run ESLint on all projects
- `pnpm format`: Format all files using Prettier
- `pnpm ui`: Run UI-specific commands (customize as needed)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
