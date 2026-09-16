import { View, Text } from "react-native";
import { useTheme } from "@lib/useTheme";
import { ThemedCard } from "@components/ThemedCard";
import { ThemedButton } from "@components/ThemedButton";

export default function HomeScreen() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View
      className={`flex-1 items-center justify-center p-6 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Text
        className={`text-3xl font-bold ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        MaterialWind
      </Text>
      <Text
        className={`mt-2 text-base ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        React Native + NativeWind + Expo
      </Text>

      <ThemedCard className="mt-8 w-full max-w-sm">
        <Text
          className={`text-center text-lg font-semibold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome to your new project
        </Text>
        <Text
          className={`mt-2 text-center text-sm ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Edit app/(tabs)/index.tsx to get started
        </Text>
      </ThemedCard>

      <View className="mt-8 flex-row gap-4">
        <ThemedButton title="Toggle Theme" onPress={toggleTheme} />
        <ThemedButton
          title="Secondary"
          onPress={() => {}}
          variant="secondary"
        />
      </View>
    </View>
  );
}
