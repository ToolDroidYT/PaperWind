import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  THEME: "@materialwind/theme",
  NOTIFICATIONS: "@materialwind/notifications",
  ONBOARDING_COMPLETE: "@materialwind/onboarding",
  LANGUAGE: "@materialwind/language",
} as const;

export const Preferences = {
  getTheme: async (): Promise<string | null> => {
    return AsyncStorage.getItem(KEYS.THEME);
  },

  setTheme: async (theme: string): Promise<void> => {
    await AsyncStorage.setItem(KEYS.THEME, theme);
  },

  getNotifications: async (): Promise<boolean> => {
    const val = await AsyncStorage.getItem(KEYS.NOTIFICATIONS);
    return val !== null ? JSON.parse(val) : true;
  },

  setNotifications: async (enabled: boolean): Promise<void> => {
    await AsyncStorage.setItem(KEYS.NOTIFICATIONS, JSON.stringify(enabled));
  },

  isOnboardingComplete: async (): Promise<boolean> => {
    const val = await AsyncStorage.getItem(KEYS.ONBOARDING_COMPLETE);
    return val === "true";
  },

  setOnboardingComplete: async (): Promise<void> => {
    await AsyncStorage.setItem(KEYS.ONBOARDING_COMPLETE, "true");
  },

  getLanguage: async (): Promise<string> => {
    const val = await AsyncStorage.getItem(KEYS.LANGUAGE);
    return val ?? "en";
  },

  setLanguage: async (language: string): Promise<void> => {
    await AsyncStorage.setItem(KEYS.LANGUAGE, language);
  },

  clearAll: async (): Promise<void> => {
    await AsyncStorage.removeMany(Object.values(KEYS));
  },
};
