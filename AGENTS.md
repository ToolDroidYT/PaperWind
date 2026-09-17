# AGENTS.md — Agent Instructions

PaperWind — React Native Material 3 Template — Expo 57 + NativeWind 4 + React Native Paper + TypeScript.

## Entry Points

| File        | Purpose                       |
| ----------- | ----------------------------- |
| `BRAIN.md`  | Project knowledge & reasoning |
| `MEMORY.md` | Persistent session facts      |
| `DESIGN.md` | Visual design system          |

Always read `BRAIN.md` first for architecture, conventions, and decisions. Read `MEMORY.md` for session state.
Update `MEMORY.md` with any new facts or instructions that should persist across sessions.

## Commands

| Command             | What                         |
| ------------------- | ---------------------------- |
| `npm start`         | Expo dev server              |
| `npm run android`   | Start on Android emulator    |
| `npm run ios`       | Start on iOS simulator       |
| `npm run web`       | Start on web (Metro bundler) |
| `npm run lint`      | `expo lint`                  |
| `npm run typecheck` | `tsc --noEmit`               |

No test framework is installed. Verify changes via `lint` then `typecheck` only.

## Coding Standards

- TypeScript strict mode — all files `.ts`/`.tsx`
- 4-space indent in TS/TSX (Prettier enforced)
- JSX uses single quotes (`jsxSingleQuote: true` in `.prettierrc`)
- HTML/CSS/JSON/YAML use 2-space indent (Prettier override)
- Single quotes, semicolons, trailing commas, arrow parens always
- Path aliases: `@/` → `./src/`
- Prettier sorts imports automatically (react first, then third-party, then `@/`, then relative)
- Tailwind classes are auto-sorted by `prettier-plugin-tailwindcss` in `cn()`, `cva()`, `clsx()`
- Never use `${}` template string interpolation in classNames — always use `cn()`

## Subagent Strategy

On complex or long-running tasks (multi-file refactors, implementing new sections), delegate to subagents using the `task` tool with `subagent_type: "general"`. Each subagent should receive a focused, self-contained prompt with clear deliverable instructions. Keep the main agent context lean.

## Non-Negotiable Rules

- Use only information that exists in the repository or is explicitly provided by the user.
- Do not invent projects, job history, metrics, awards, links, or social handles.
- If something is missing, use a neutral placeholder, mark it clearly as TODO, or leave the section out.
- Prefer modern, maintainable, greenfield-style decisions when the codebase allows it.
- Avoid unnecessary complexity, overengineering, and decorative noise.
- **Agent Memory Protocol:** Whenever the user says "remember that..." or explicitly asks the agent to remember something, the agent MUST immediately append that instruction or preference into `MEMORY.md`, `BRAIN.md`, or `AGENTS.md` so it is preserved for future sessions.

## Architecture Notes

- **Source root**: `src/` is set as the source root via `app.json` experiments. File-based routing lives under `src/app/`.
- **NativeWind CSS wiring**: `global.css` must be imported in the root layout (`src/app/_layout.tsx:1`). Metro config pipes it through `withNativeWind`. Babel uses `jsxImportSource: 'nativewind'`.
- **Theme binding**: Colors come from `@expo/ui` (`MaterialColors` type). The root layout maps them into react-native-paper's MD3 theme. Components consume colors via `useTheme()` from `@/lib/useTheme`.
- **Inline styles over CSS variables** — PaperWind applies colors via React Native `style` props, not NativeWind CSS variable interop.
- **New Architecture disabled**: `newArchEnabled: false` in `app.json`.

## Theme System

- **`useTheme()`** — full API: colors, isDark, mode, setTheme, toggleTheme, useMonet, toggleMonet, setMonet. Import from `@/lib/useTheme`.
- Always use colors from the theme hook — never hardcode hex values in components.
- Use `react-native-paper` components for standard UI patterns (Button, Card, Switch, etc.).
- Use inline `style` for dynamic color values (this project uses inline styles, not CSS variables).
- Use semantic tokens (`primary`, `surface`, `on-surface`) over raw M3 names where possible.

## When Unsure

- Prefer simpler implementation.
- Prefer leaving out uncertain content.
- Prefer asking for missing source material only when the absence blocks progress.
