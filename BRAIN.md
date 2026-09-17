# BRAIN.md — Project Knowledge Base

## Stack

- **React 19** + **React Native 0.86** — cross-platform mobile/web
- **Expo 57** — managed workflow, file-based routing via `expo-router`
- **NativeWind 4** — Tailwind CSS for React Native (`className` → StyleSheet)
- **Tailwind CSS 3** — utility-first CSS (NativeWind preset)
- **TypeScript 6** — strict mode, path aliases (`@/` → `src/`)
- **@expo/ui (jetpack-compose)** — Material 3 dynamic color system (`MaterialColors`, `getMaterialColors`, `isDynamicColorAvailable`)
- **react-native-paper** — Material 3 UI component library (Button, Card, Switch, etc.)
- **Zustand** — lightweight state management for theme state
- **@react-native-async-storage/async-storage** — persistent theme preferences
- **lucide-react-native** — icon set
- **react-native-reanimated** — animations
- No test framework

## Architecture

```
src/
  app/
    _layout.tsx              — root layout: GestureHandlerRootView + PaperProvider + StatusBar
    index.tsx                — entry redirect to /(tabs)
    (tabs)/
      _layout.tsx            — tab navigator (Home, Settings)
      index.tsx              — home screen with button/switch demos
      settings.tsx           — settings: theme mode, Monet toggle, color swatches
  lib/
    cn.ts                    — clsx + tailwind-merge
    monet.ts                 — Monet/dynamic color wrapper (@expo/ui)
    preferences.ts           — AsyncStorage persistence helpers
    themes.ts                — Default Material 3 light/dark palettes (BLUE_SEED)
    useTheme.ts              — useTheme() hook — colors, isDark, mode, setters
  store/
    theme-store.ts           — Zustand store (mode, useMonet, isDark)
  components/                — (empty, ready for reusable components)
  global.css                 — Tailwind directives (no hardcoded colors)
```

## Theming System

The app uses `@expo/ui/jetpack-compose` to generate a full Material 3 color scheme. Android 12+ Monet (wallpaper-derived colors) is a first-class feature with explicit toggle and seed-color fallback.

### How it works

1. `src/app/_layout.tsx` imports `global.css` for NativeWind, wraps everything in `GestureHandlerRootView`
2. `useTheme()` is called in the root layout to get `isDark` and `colors`
3. A React Native Paper theme is composed by spreading `MD3DarkTheme`/`MD3LightTheme` and overlaying all `MaterialColors` roles
4. `PaperProvider` wraps children with the composed theme
5. `StatusBar` style is set based on dark/light mode
6. Components consume colors via `useTheme()` hook and apply them through inline `style` props

### Color source resolution

| Requested | Platform       | Resolved source | Palette from          |
| --------- | -------------- | --------------- | --------------------- |
| Monet ON  | Android 12+    | dynamic         | System wallpaper      |
| Monet ON  | Android <12    | seed            | Blue seed (#2563EB)   |
| Monet ON  | iOS / Web      | seed            | Blue seed (#2563EB)   |
| Monet OFF | any            | default         | Static palettes       |

### Theme modes

- `system` — follows device setting (default)
- `light` — forces light theme
- `dark` — forces dark theme

### Persistence

Theme preferences (`mode`, `useMonet`) are defined in `src/lib/preferences.ts` via AsyncStorage. **Note: Preferences are not yet wired into the Zustand store on startup** — the store initializes with defaults and does not hydrate from AsyncStorage. This is a known TODO.

### API

```ts
const {
    colorScheme,    // 'light' | 'dark' (resolved from NativeWind)
    isDark,         // boolean
    mode,           // 'light' | 'dark' | 'system'
    setTheme,       // (mode) => void
    toggleTheme,    // () => void — toggles light/dark
    useMonet,       // boolean
    toggleMonet,    // () => void
    setMonet,       // (enabled: boolean) => void
    colors,         // MaterialColors — active palette (default or Monet-derived)
} = useTheme();
```

## Typography

- **Default typeface**: System fonts (no custom fonts installed)
- **Font loading**: None — uses platform defaults
- **To add custom fonts**: Install `@expo-google-fonts/*`, add `expo-font` dependency, create font loading config, update root layout

## Utilities

- **`cn()`** from `@/lib/cn` — `clsx` + `tailwind-merge` for conditional classNames
- **`useTheme()`** from `@/lib/useTheme` — theme API hook
- **`Preferences`** from `@/lib/preferences` — AsyncStorage helpers (getTheme, setTheme, getMonet, setMonet, etc.)
- **`isMonetAvailable()`** from `@/lib/monet` — check Android 12+ dynamic color support
- **`getMonetColors(scheme, useMonet)`** from `@/lib/monet` — resolve Monet palette

## Decisions

1. **Inline styles over CSS variables** — PaperWind applies colors via React Native `style` props, not NativeWind CSS variable interop. This is simpler and works directly with react-native-paper.
2. **react-native-paper for UI components** — Button, Card, Switch, etc. come from Paper. Theme is mapped from `MaterialColors` → Paper's MD3 theme slots in `_layout.tsx`.
3. **Zustand for state management** — lightweight store for theme mode + Monet toggle. Chosen over Context for simplicity and direct NativeWind `colorScheme.set()` integration.
4. **@expo/ui over @pchmn/expo-material3-theme** — uses the Expo-native Material 3 color system with `MaterialColors` type and `getMaterialColors()` API.
5. **System fonts** — no custom typography yet. Keeps the template minimal.
6. **File-based routing** — `expo-router` with `src/` as source root.
7. **Default palettes as fallback** — `themes.ts` provides complete light/dark `MaterialColors` objects with blue seed (#2563EB) for when Monet is OFF or unavailable.
8. **Monet-aware resolution** — `monet.ts` handles platform detection and seed fallback automatically.
