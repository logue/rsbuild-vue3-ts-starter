# Project Guidelines

## Build and Test

- Use pnpm for all tasks. Do not use npm or yarn in this workspace.
- Use Node.js version `>=24`.
- Install dependencies with `pnpm install`.
- Common commands:
  - `pnpm dev` for local development
  - `pnpm type-check` for Vue + TypeScript checking
  - `pnpm lint` for unified lint/format execution (`lint:*`)
  - `pnpm build` for production build (includes type-checking)
  - `pnpm preview` to preview the production build locally
  - `pnpm test` for Rstest tests
  - `pnpm test:watch` for Rstest watch mode
- When touching runtime behavior, run at least `pnpm type-check` and relevant tests.

## Architecture

- Entry points are `src/main.ts` and `src/App.vue`.
- Route-level pages belong in `src/views`; reusable UI belongs in `src/components`.
- Router configuration is centralized in `src/router.ts`.
- Pinia stores are in `src/stores`.
- Import path alias `@` points to `src`.

## Conventions

- Prefer Vue 3 SFC with `<script setup lang="ts">`.
- Keep TypeScript strictness intact; avoid weakening tsconfig rules unless explicitly requested.
- Respect existing import grouping/order and let lint rules drive final ordering.
- Keep changes minimal and scoped; avoid broad refactors in template-derived files unless requested.

## Pitfalls

- `src/Meta.ts` is a regular source file that reads build-time constants (`__APP_VERSION__`, `__BUILD_DATE__`) injected via Rsbuild `define`. Do not revert it to a generated file.

## References

- Setup, commands, and troubleshooting: `README.md`
- Japanese documentation: `README.ja.md`
- Lint rules and import ordering details: `rslint.config.ts`
- Build behavior and chunking strategy: `rsbuild.config.ts`

## Related Customizations

- Frontend file-specific instruction: `.github/instructions/frontend-vue.instructions.md`
- Reusable execution prompt: `.github/prompts/run-safe-change.prompt.md`
- PR quality gate prompt: `.github/prompts/pre-pr-quality-gate.prompt.md`
- Release readiness prompt: `.github/prompts/pre-release-readiness.prompt.md`
