# DESIGN.md — Design System

## Overview

Material 3 template app. Colors are fully dynamic — generated at runtime from `@expo/ui/jetpack-compose` using either Android 12+ Monet (wallpaper-derived) or a blue seed color (`#2563EB`).

Colors are applied via **inline `style` props** using the `colors` object from `useTheme()`, and through **react-native-paper** components which receive the theme via `PaperProvider`.

Light and dark modes are supported.

## Color System

Colors are **not hardcoded**. The `MaterialColors` type from `@expo/ui` provides all color tokens at runtime.

### Usage pattern

```tsx
const { colors } = useTheme();

// Inline style
<View style={{ backgroundColor: colors.background }}>
    <Text style={{ color: colors.onSurface }}>Hello</Text>
</View>

// React Native Paper components (auto-themed via PaperProvider)
<Button mode="contained">Primary</Button>
<Card><Card.Content>...</Card.Content></Card>
<Switch value={true} />
```

### Color token reference

| Semantic role            | Light mode value | Dark mode value | Token                     |
| ------------------------ | ---------------- | --------------- | ------------------------- |
| Primary                  | `#2563EB`        | `#B3C5FF`       | `colors.primary`          |
| On Primary               | `#FFFFFF`        | `#002C72`       | `colors.onPrimary`        |
| Primary Container        | `#DBE1FE`        | `#1E4083`       | `colors.primaryContainer` |
| On Primary Container     | `#001849`        | `#DBE1FE`       | `colors.onPrimaryContainer` |
| Secondary                | `#565E71`        | `#BEC6DC`       | `colors.secondary`        |
| On Secondary             | `#FFFFFF`        | `#283041`       | `colors.onSecondary`      |
| Secondary Container      | `#DAE2F9`        | `#3E4759`       | `colors.secondaryContainer` |
| On Secondary Container   | `#131C2B`        | `#DAE2F9`       | `colors.onSecondaryContainer` |
| Tertiary                 | `#705574`        | `#D8BBDE`       | `colors.tertiary`         |
| On Tertiary              | `#FFFFFF`        | `#412A42`       | `colors.onTertiary`       |
| Tertiary Container       | `#FAD8FD`        | `#583E57`       | `colors.tertiaryContainer` |
| On Tertiary Container    | `#2A132E`        | `#FAD8FD`       | `colors.onTertiaryContainer` |
| Background               | `#FEFBFF`        | `#131316`       | `colors.background`       |
| On Background            | `#1B1B1F`        | `#E3E2E6`       | `colors.onBackground`     |
| Surface                  | `#FEFBFF`        | `#131316`       | `colors.surface`          |
| On Surface               | `#1B1B1F`        | `#E3E2E6`       | `colors.onSurface`        |
| Surface Variant          | `#E1E2EC`        | `#44474E`       | `colors.surfaceVariant`   |
| On Surface Variant       | `#44474E`        | `#C4C6D0`       | `colors.onSurfaceVariant` |
| Surface Container        | `#F2EDF6`        | `#1F1F23`       | `colors.surfaceContainer` |
| Surface Container Low    | `#F8F3FC`        | `#1B1B1F`       | `colors.surfaceContainerLow` |
| Surface Container High   | `#ECE7F0`        | `#2A2A2E`       | `colors.surfaceContainerHigh` |
| Surface Container Highest| `#E6E1EA`        | `#353539`       | `colors.surfaceContainerHighest` |
| Surface Container Lowest | `#FFFFFF`        | `#0E0E12`       | `colors.surfaceContainerLowest` |
| Error                    | `#BA1A1A`        | `#FFB4AB`       | `colors.error`            |
| On Error                 | `#FFFFFF`        | `#690005`       | `colors.onError`          |
| Error Container          | `#FFDAD6`        | `#93000A`       | `colors.errorContainer`   |
| On Error Container       | `#410002`        | `#FFDAD6`       | `colors.onErrorContainer` |
| Outline                  | `#74777F`        | `#8E9099`       | `colors.outline`          |
| Outline Variant          | `#C4C6D0`        | `#44474E`       | `colors.outlineVariant`   |

## Typography

- **Font family**: System defaults (no custom fonts)
- **Weights used**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold) — applied via `fontWeight` in inline styles

### Type scale

| Token     | Size | Weight    | Usage            |
| --------- | ---- | --------- | ---------------- |
| Display   | 30px | Bold      | App title        |
| Headline  | 18px | SemiBold  | Card titles      |
| Title     | 16px | SemiBold  | Section headers  |
| Body Md   | 16px | Regular   | Body text        |
| Body Sm   | 14px | Regular   | Descriptions     |
| Label Md  | 14px | Medium    | Button text      |
| Label Sm  | 12px | Regular   | Captions, labels |
| Overline  | 12px | SemiBold  | Section labels   |

## Spacing

Base unit: 4px. Used consistently in padding, margins, and gaps.

| Token | Value |
| ----- | ----- |
| `xs`  | 4px   |
| `sm`  | 8px   |
| `md`  | 16px  |
| `lg`  | 24px  |
| `xl`  | 32px  |
| `2xl` | 48px  |

## Shape

| Token  | Value  | Use              |
| ------ | ------ | ---------------- |
| `sm`   | 4px    | Small elements   |
| `md`   | 8px    | Default radius   |
| `lg`   | 12px   | Cards, inputs    |
| `xl`   | 16px   | Large cards      |
| `full` | 9999px | Buttons, avatars |

## Component Patterns

### Buttons (react-native-paper)

- **Filled**: `<Button mode="contained">Label</Button>` — uses `colors.primary` / `colors.onPrimary`
- **Outlined**: `<Button mode="outlined">Label</Button>` — uses `colors.primary` outline
- **Text**: `<Button mode="text">Label</Button>` — no background
- **Disabled**: `<Button disabled>Label</Button>`

### Cards (react-native-paper)

- `<Card>` with `<Card.Content>` — auto-uses Paper theme colors
- No shadows — use surface container colors for depth

### Switches (react-native-paper)

- `<Switch value={bool} onValueChange={fn} />` — auto-themed via PaperProvider
- Track color follows `colors.primary` / `colors.surfaceVariant`

### Layout

- Use `ScrollView` for scrollable content
- Use `View` with `flex: 1` for full-screen containers
- Apply `backgroundColor: colors.background` for screen backgrounds
- Use `gap`, `padding`, `marginBottom` for spacing

## Do's and Don'ts

**Do:**

- Use `react-native-paper` components for standard UI patterns (Button, Card, Switch)
- Use `useTheme()` to get colors — never hardcode hex values
- Use inline `style` for dynamic color values
- Keep components simple and reusable
- Use the Material 3 color tokens — don't invent new colors

**Don't:**

- Don't hardcode color hex values in components
- Don't add `shadow-*` classes — use surface color elevation instead
- Don't use NativeWind color classes for Material 3 colors (use inline styles with `colors.*`)
- Don't add new font families without updating the design system
