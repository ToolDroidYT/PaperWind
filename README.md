# PaperWind

React Native Material 3 template. Expo 57, NativeWind 4, React Native Paper, TypeScript.

## Stack

- Expo 57
- React Native 0.86
- NativeWind 4 (Tailwind CSS for React Native)
- @expo/ui (Material 3 dynamic colors / Monet)
- react-native-paper (Material 3 UI components)
- Zustand (state management)
- TypeScript 6 (strict)

## Quick Start

```bash
npm install
npm start
```

## Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `npm start`         | Expo dev server          |
| `npm run android`   | Start on Android         |
| `npm run ios`       | Start on iOS             |
| `npm run web`       | Start on web             |
| `npm run lint`      | Lint                     |
| `npm run typecheck` | TypeScript type checking |

## Structure

```
src/
  app/
    _layout.tsx              # Root layout (PaperProvider)
    index.tsx                # Entry redirect
    (tabs)/
      _layout.tsx            # Tab navigator
      index.tsx              # Home screen
      settings.tsx           # Settings (theme + Monet)
  lib/
    cn.ts                    # clsx + tailwind-merge
    monet.ts                 # Monet wrapper (@expo/ui)
    preferences.ts           # AsyncStorage helpers
    themes.ts                # Default M3 palettes
    useTheme.ts              # useTheme() hook
  store/
    theme-store.ts           # Zustand store
  components/                # Reusable components (empty)
```

## Theming

Colors come from `@expo/ui` (`MaterialColors` type) and are resolved at runtime via `useTheme()`.

Android 12+ Monet (wallpaper-derived colors) is supported with explicit toggle. On iOS / older Android, a blue seed palette is used as fallback.

Use `useTheme()` to get `colors`, `isDark`, `mode`, and setters. Apply colors via inline `style` props or through `react-native-paper` components.

```tsx
const { colors, isDark, setTheme } = useTheme();
```

## Disclaimer

_This project is for personal and educational purposes only. It is not intended for production use._

## License

MIT
