import '../../global.css';
import { useTheme } from '@/lib/useTheme';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export default function RootLayout() {
    const { isDark, colors } = useTheme();

    const theme = isDark
        ? {
              ...MD3DarkTheme,
              colors: {
                  ...MD3DarkTheme.colors,
                  primary: colors.primary,
                  onPrimary: colors.onPrimary,
                  primaryContainer: colors.primaryContainer,
                  onPrimaryContainer: colors.onPrimaryContainer,
                  secondary: colors.secondary,
                  onSecondary: colors.onSecondary,
                  secondaryContainer: colors.secondaryContainer,
                  onSecondaryContainer: colors.onSecondaryContainer,
                  tertiary: colors.tertiary,
                  onTertiary: colors.onTertiary,
                  tertiaryContainer: colors.tertiaryContainer,
                  onTertiaryContainer: colors.onTertiaryContainer,
                  error: colors.error,
                  onError: colors.onError,
                  errorContainer: colors.errorContainer,
                  onErrorContainer: colors.onErrorContainer,
                  background: colors.background,
                  onBackground: colors.onBackground,
                  surface: colors.surface,
                  onSurface: colors.onSurface,
                  surfaceVariant: colors.surfaceVariant,
                  onSurfaceVariant: colors.onSurfaceVariant,
                  outline: colors.outline,
                  outlineVariant: colors.outlineVariant,
              },
          }
        : {
              ...MD3LightTheme,
              colors: {
                  ...MD3LightTheme.colors,
                  primary: colors.primary,
                  onPrimary: colors.onPrimary,
                  primaryContainer: colors.primaryContainer,
                  onPrimaryContainer: colors.onPrimaryContainer,
                  secondary: colors.secondary,
                  onSecondary: colors.onSecondary,
                  secondaryContainer: colors.secondaryContainer,
                  onSecondaryContainer: colors.onSecondaryContainer,
                  tertiary: colors.tertiary,
                  onTertiary: colors.onTertiary,
                  tertiaryContainer: colors.tertiaryContainer,
                  onTertiaryContainer: colors.onTertiaryContainer,
                  error: colors.error,
                  onError: colors.onError,
                  errorContainer: colors.errorContainer,
                  onErrorContainer: colors.onErrorContainer,
                  background: colors.background,
                  onBackground: colors.onBackground,
                  surface: colors.surface,
                  onSurface: colors.onSurface,
                  surfaceVariant: colors.surfaceVariant,
                  onSurfaceVariant: colors.onSurfaceVariant,
                  outline: colors.outline,
                  outlineVariant: colors.outlineVariant,
              },
          };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PaperProvider theme={theme}>
                <StatusBar style={isDark ? 'light' : 'dark'} />
                <Stack screenOptions={{ headerShown: false }} />
            </PaperProvider>
        </GestureHandlerRootView>
    );
}
