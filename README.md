# Bohr Developer Portal

First point of call for users wanting to integrate with the Nucleus API. Built with [Docusaurus v3](https://docusaurus.io/) and deployed to GitHub Pages.

## Prerequisites

- **Node.js**: `>= 24.0` (see `.nvmrc`)
- **Package Manager**: `npm`

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the local development server:

    ```bash
    npm start
    ```

## OpenAPI Documentation

- **Source of truth**: `openapi/ogc.api.json`
- **Generated output**: `docs/ogcapi/`

> **Important**: Do not edit generated files in `docs/ogcapi/` directly. Always edit `openapi/ogc.api.json` and regenerate.

- **Regenerate docs**:

    ```bash
    npm run docusaurus gen-api-docs all
    ```

- **Clean generated docs**:

    ```bash
    npm run docusaurus clean-api-docs all
    ```

## Quality & Verification

Before submitting changes or committing, run the standard verification sequence:

```bash
npm run lint && npm run typecheck && npm run build
```

Additional commands:

- **Lint**: `npm run lint`
- **Typecheck**: `npm run typecheck`
- **Format**: `npm run format`
- **Serve production build**: `npm run serve`
- **Clear cache**: `npm run clear`

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).
