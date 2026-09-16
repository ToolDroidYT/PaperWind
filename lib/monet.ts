import {
  type MaterialColors,
  type MaterialColorsOptions,
  getMaterialColors,
  isDynamicColorAvailable,
} from "@expo/ui/jetpack-compose";
import { BLUE_SEED } from "./themes";

/**
 * Check if Android 12+ dynamic colors (Monet) are available.
 */
export function isMonetAvailable(): boolean {
  return isDynamicColorAvailable;
}

/**
 * Get Monet-derived colors.
 *
 * - Android 12+: wallpaper-derived palette (no seedColor)
 * - iOS / older Android: seed-based palette using the blue seed
 *
 * @param scheme - 'light' or 'dark'
 * @param useMonet - if false, returns undefined (caller should use default theme)
 */
export function getMonetColors(
  scheme: "light" | "dark",
  useMonet: boolean
): MaterialColors | undefined {
  if (!useMonet) return undefined;

  const options: MaterialColorsOptions = { scheme };

  // On Android 12+ with Monet ON, omit seedColor to get wallpaper colors.
  // On iOS / older Android, use seedColor so the palette still works.
  if (!isDynamicColorAvailable) {
    options.seedColor = BLUE_SEED;
  }

  return getMaterialColors(options);
}
