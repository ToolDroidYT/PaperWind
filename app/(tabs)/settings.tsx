import { View, Text, Pressable } from "react-native";
import { useTheme } from "@lib/useTheme";

const THEMES = ["light", "dark", "system"] as const;

export default function SettingsScreen() {
  const { isDark, mode, setTheme } = useTheme();

  return (
    <View className={`flex-1 p-6 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Text
        className={`text-2xl font-bold mb-6 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Settings
      </Text>

      <Text
        className={`text-sm font-medium mb-3 uppercase tracking-wide ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Appearance
      </Text>

      {THEMES.map((t) => (
        <Pressable
          key={t}
          onPress={() => setTheme(t)}
          className={`flex-row items-center justify-between p-4 rounded-xl mb-3 ${
            mode === t
              ? "bg-blue-500"
              : isDark
                ? "bg-gray-800"
                : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-base capitalize ${
              mode === t
                ? "text-white font-semibold"
                : isDark
                  ? "text-gray-300"
                  : "text-gray-700"
            }`}
          >
            {t} Mode
          </Text>
          {mode === t && (
            <Text className="text-white text-lg">&#10003;</Text>
          )}
        </Pressable>
      ))}

      <Text
        className={`text-sm font-medium mt-6 mb-3 uppercase tracking-wide ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        About
      </Text>

      <View
        className={`p-4 rounded-xl ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <Text className={`text-base ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          MaterialWind v1.0.0
        </Text>
        <Text className={`text-sm mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          React Native + NativeWind + Expo Go
        </Text>
      </View>
    </View>
  );
}
