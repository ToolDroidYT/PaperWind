import { type MaterialColors } from '@expo/ui/jetpack-compose';
import { useThemeStore } from '@store/theme-store';
import { useColorScheme } from 'nativewind';
import { getMonetColors } from './monet';
import { DEFAULT_DARK_COLORS, DEFAULT_LIGHT_COLORS } from './themes';

export function useTheme() {
    const { colorScheme } = useColorScheme();
    const { mode, setTheme, useMonet, toggleMonet, setMonet } = useThemeStore();

    const isDark = colorScheme === 'dark';

    // Resolve active color palette
    const monetColors = getMonetColors(isDark ? 'dark' : 'light', useMonet);
    const colors: MaterialColors =
        monetColors ?? (isDark ? DEFAULT_DARK_COLORS : DEFAULT_LIGHT_COLORS);

    return {
        colorScheme: (colorScheme ?? 'light') as 'light' | 'dark',
        isDark,
        mode,
        setTheme,
        toggleTheme: () => setTheme(isDark ? 'light' : 'dark'),
        useMonet,
        toggleMonet,
        setMonet,
        colors,
    };
}
