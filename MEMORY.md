# MEMORY.md — Session State

## Current State

- Working directory: `MaterialWind`
- Bundle ID: `com.materialwind.app`
- App name: PaperWind

## What was done

- Theme subsystem: Zustand store (`theme-store.ts`), `useTheme()` hook, Monet wrapper, default palettes
- `cn()` utility (clsx + tailwind-merge)
- Root layout with `PaperProvider` mapping `MaterialColors` → Paper MD3 theme
- Tab navigator (Home, Settings) with `react-native-paper` components
- Home screen: button demos, switch demos, branding
- Settings screen: theme mode selector (light/dark/system), Monet toggle, color preview swatches
- Preferences helper (AsyncStorage) — defined but not wired into store startup

## Key files

- `src/lib/useTheme.ts` — main theme hook (colors, isDark, mode, setters)
- `src/lib/themes.ts` — default light/dark MaterialColors palettes (BLUE_SEED)
- `src/lib/monet.ts` — Monet/dynamic color wrapper (@expo/ui)
- `src/lib/preferences.ts` — AsyncStorage persistence helpers
- `src/lib/cn.ts` — className merging utility
- `src/store/theme-store.ts` — Zustand store for theme state
- `src/app/_layout.tsx` — root layout with PaperProvider
- `src/app/(tabs)/_layout.tsx` — tab navigator
- `src/app/(tabs)/index.tsx` — home screen
- `src/app/(tabs)/settings.tsx` — settings screen

## Decisions

- No test framework installed
- No custom fonts (system defaults)
- No CSS variables — colors applied via inline `style` props
- `react-native-paper` for UI components (Button, Card, Switch)
- Zustand for state management
- `@expo/ui/jetpack-compose` for Material 3 colors
- Preferences module defined but not wired into Zustand store hydration (TODO)
- `src/components/` directory exists but is empty — ready for reusable components
