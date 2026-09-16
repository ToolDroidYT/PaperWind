import { View, Text } from "react-native";
import { useTheme } from "@lib/useTheme";
import { ThemedCard } from "@components/ThemedCard";
import { ThemedButton } from "@components/ThemedButton";

export default function HomeScreen() {
  const { isDark, colors, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: colors.background }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.onBackground }}>
        MaterialWind
      </Text>
      <Text style={{ marginTop: 8, fontSize: 16, color: colors.onSurfaceVariant }}>
        React Native + NativeWind + Expo
      </Text>

      <ThemedCard style={{ marginTop: 32, width: "100%", maxWidth: 380 }}>
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: colors.onSurface }}>
          Welcome to your new project
        </Text>
        <Text style={{ marginTop: 8, textAlign: "center", fontSize: 14, color: colors.onSurfaceVariant }}>
          Edit app/(tabs)/index.tsx to get started
        </Text>
      </ThemedCard>

      <View style={{ marginTop: 32, flexDirection: "row", gap: 16 }}>
        <ThemedButton title="Toggle Theme" onPress={toggleTheme} />
        <ThemedButton title="Secondary" onPress={() => {}} variant="secondary" />
      </View>
    </View>
  );
}
