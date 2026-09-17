# PaperWind

A comprehensive React Native + NativeWind + Expo Go project template with Material 3 theming and Android 12+ Monet (Material You) dynamic color support.

## Tech Stack

- **Expo SDK 57** with Expo Go
- **NativeWind v4** + Tailwind CSS 3.4.17
- **Expo Router** (file-based routing)
- **TypeScript 6** (stable, Expo-compatible)
- **Zustand** (state management + theme persistence)
- **@expo/ui** (Material 3 dynamic colors / Monet)
- **npm** (package manager)

## Features

- **Dark/Light/System theme switching** via `useTheme()` hook
- **Android 12+ Monet support** — wallpaper-derived Material 3 colors
- **Seed-based fallback** — blue seed palette on iOS and older Android
- **Unified color system** — `MaterialColors` type from `@expo/ui` used everywhere
- **Persistent preferences** — theme, Monet toggle, notifications saved to AsyncStorage
- **Reusable themed components** — ThemedCard, ThemedButton with dynamic colors
- **Color preview swatches** in Settings

## Getting Started

```bash
npm install
npm start
# Scan QR code with Expo Go
```

## Project Structure

```
PaperWind/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx        # Tab navigator (uses colors)
│   │   ├── index.tsx          # Home screen
│   │   └── settings.tsx       # Settings with Monet toggle
│   ├── _layout.tsx            # Root layout
│   └── index.tsx              # Entry redirect
├── components/
│   ├── ThemedCard.tsx          # Card with colors.surfaceContainer
│   └── ThemedButton.tsx        # Button with colors.primary
├── lib/
│   ├── themes.ts              # Default light/dark MaterialColors palettes
│   ├── monet.ts               # Monet wrapper (@expo/ui)
│   ├── useTheme.ts            # useTheme() hook — returns colors, isDark, useMonet
│   └── preferences.ts         # AsyncStorage helpers
├── store/
│   └── theme-store.ts         # Zustand store (mode, useMonet, isDark)
├── global.css                 # Tailwind directives
├── tailwind.config.js
├── babel.config.js
├── metro.config.js
├── tsconfig.json
└── nativewind-env.d.ts
```

## Usage

### useTheme() Hook

```tsx
import { useTheme } from '@lib/useTheme';

function MyComponent() {
    const {
        colors, // MaterialColors — active palette (default or Monet)
        isDark, // boolean
        mode, // "light" | "dark" | "system"
        setTheme, // (mode) => void
        toggleTheme, // () => void
        useMonet, // boolean
        toggleMonet, // () => void
    } = useTheme();

    return (
        <View style={{ backgroundColor: colors.background }}>
            <Text style={{ color: colors.onBackground }}>Hello</Text>
        </View>
    );
}
```

### Monet Toggle

```tsx
const { useMonet, toggleMonet } = useTheme();

// Only available on Android 12+
// On iOS, uses seed-based palette automatically
```

### Default Theme Colors

When Monet is OFF, the app uses a blue seed (#2563EB) Material 3 palette:

| Role       | Light     | Dark      |
| ---------- | --------- | --------- |
| Primary    | `#2563EB` | `#B3C5FF` |
| Secondary  | `#565E71` | `#BEC6DC` |
| Tertiary   | `#705574` | `#D8BBDE` |
| Surface    | `#FEFBFF` | `#131316` |
| Background | `#FEFBFF` | `#131316` |

### Preferences Helper

```tsx
import { Preferences } from '@lib/preferences';

await Preferences.setMonet(true);
const monet = await Preferences.getMonet();

await Preferences.setTheme('dark');
const theme = await Preferences.getTheme();
```

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm start`         | Start Expo dev server        |
| `npm run typecheck` | Run TypeScript type checking |
