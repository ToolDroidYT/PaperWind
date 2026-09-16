import { useColorScheme } from "nativewind";
import { useThemeStore } from "@store/theme-store";

export function useTheme() {
  const { colorScheme } = useColorScheme();
  const { mode, setTheme } = useThemeStore();

  return {
    colorScheme: (colorScheme ?? "light") as "light" | "dark",
    isDark: colorScheme === "dark",
    mode,
    setTheme,
    toggleTheme: () =>
      setTheme(colorScheme === "dark" ? "light" : "dark"),
  };
}
