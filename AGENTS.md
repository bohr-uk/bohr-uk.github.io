# AGENTS.md

Bohr Developer Portal — a Docusaurus v3 static site (with OpenAPI docs) deployed to GitHub Pages.

## Environment & Dependencies

- **Node.js**: `>= 24.0` (`.nvmrc` pins `v24.19.0`), package manager `npm`.
- **`shims/faker/` & `package.json` `overrides`**: `@faker-js/faker` is mapped to `file:./shims/faker` (a local compatibility shim for `postman-collection` / OpenAPI tooling), and `package.json` carries targeted `overrides` for CVE remediation. Do not delete `shims/faker/` or remove `overrides` without verifying both `npm audit` and `npm run build`.

## Commands & Verification

No automated test runner is configured. Verify changes with:

```bash
npm run lint && npm run typecheck && npm run build
```

- **CI parity**: `.github/workflows/test-deploy.yml` (on PRs to `main`) runs `npm install`, `npm audit`, and `npm run build`. Run `npm audit` when touching dependencies — vulnerabilities fail PR CI. CI does **not** run `lint` or `typecheck`, so run them locally.
- **Typecheck**: `npm run typecheck` (`tsc`). Docusaurus `start`/`build` do not typecheck.
- **Lint**: `npm run lint` (`eslint .`). Uses ESM flat config in `eslint.config.mjs` (keep `.mjs`) and only checks `**/*.{ts,tsx}`.
- **Build**: `npm run build`. Fails on broken links (`onBrokenLinks: "throw"` in `docusaurus.config.ts`).
- **Format**: `npm run format` (`prettier --write . --ignore-path .gitignore`). Note `.prettierrc` uses 4-space indentation (`tabWidth: 4`, `printWidth: 100`) and sets `useTabs: true` for `*.yml` even though `.github/workflows/*.yml` currently uses 2 spaces — check `git diff` if formatting touches workflow YAML.
- **Local dev / cache**: `npm start`, `npm run serve`, `npm run clear`.

## OpenAPI Docs (`openapi/ogc.api.json` -> `docs/ogcapi/`)

- `openapi/ogc.api.json` is the OpenAPI source of truth; `docusaurus-plugin-openapi-docs` generates MDX into `docs/ogcapi/` (configured under the `petstore` key in `docusaurus.config.ts`).
- Regenerate / clean:
  - `npm run docusaurus gen-api-docs all`
  - `npm run docusaurus clean-api-docs all`
- **Mixed generated and hand-authored files in `docs/ogcapi/`**:
  - Generated (`*.api.mdx`): do not hand-edit; edit `openapi/ogc.api.json` and regenerate.
  - Hand-authored: `authentication.mdx`, `shared-responsibility.mdx`, `_category_.json`.
  - `bohr-ogc-api-features.info.mdx` and `docs/ogcapi/sidebar.ts` contain manual customizations and will be overwritten by `gen-api-docs` / `clean-api-docs`. Always review `git diff docs/ogcapi/` after regenerating.

## Site Wiring & Conventions

- `sidebars.ts` autogenerates the docs sidebar from `docs/` (`dirName: "."`); it does **not** import `docs/ogcapi/sidebar.ts`. Ordering in `docs/ogcapi/` is controlled by `_category_.json` and frontmatter `sidebar_position`.
- `docusaurus.config.ts` enables `future.v4: true` and uses `docItemComponent: "@theme/ApiItem"` from `docusaurus-theme-openapi-docs`.
- Pushes to `main` auto-deploy to GitHub Pages (`.github/workflows/deploy.yml`).
- PR descriptions follow `.github/PULL_REQUEST_TEMPLATE.md` and include a `[NUC-xxx]` issue reference.
