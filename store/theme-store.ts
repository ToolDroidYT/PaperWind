import { colorScheme } from 'nativewind';
import { create } from 'zustand';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
    mode: ThemeMode;
    isDark: boolean;
    useMonet: boolean;
    setTheme: (mode: ThemeMode) => void;
    toggleMonet: () => void;
    setMonet: (enabled: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    mode: 'system',
    isDark: false,
    useMonet: false,

    setTheme: (mode) => {
        colorScheme.set(mode === 'system' ? 'system' : mode);
        set({ mode, isDark: mode === 'dark' });
    },

    toggleMonet: () => {
        set((state) => ({ useMonet: !state.useMonet }));
    },

    setMonet: (enabled) => {
        set({ useMonet: enabled });
    },
}));
