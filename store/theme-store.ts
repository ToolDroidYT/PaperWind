import { create } from "zustand";
import { colorScheme } from "nativewind";

type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
  isDark: boolean;
  setTheme: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "system",
  isDark: false,
  setTheme: (mode) => {
    colorScheme.set(mode === "system" ? "system" : mode);
    set({ mode, isDark: mode === "dark" });
  },
}));
