import { View, Text, Pressable, Platform } from "react-native";
import { useTheme } from "@lib/useTheme";
import { isMonetAvailable } from "@lib/monet";
import { ThemedCard } from "@components/ThemedCard";

const THEMES = ["light", "dark", "system"] as const;

export default function SettingsScreen() {
  const { isDark, mode, setTheme, colors, useMonet, toggleMonet } = useTheme();
  const monetSupported = Platform.OS === "android" && isMonetAvailable();

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24, color: colors.onBackground }}>
        Settings
      </Text>

      {/* Appearance Section */}
      <Text style={{ fontSize: 12, fontWeight: "600", marginBottom: 12, color: colors.onSurfaceVariant, letterSpacing: 1, textTransform: "uppercase" }}>
        Appearance
      </Text>

      {THEMES.map((t) => {
        const isActive = mode === t;
        return (
          <Pressable
            key={t}
            onPress={() => setTheme(t)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 16,
              borderRadius: 12,
              marginBottom: 8,
              backgroundColor: isActive ? colors.primary : colors.surfaceContainer,
            }}
          >
            <Text style={{
              fontSize: 16,
              fontWeight: isActive ? "600" : "400",
              color: isActive ? colors.onPrimary : colors.onSurface,
              textTransform: "capitalize",
            }}>
              {t} Mode
            </Text>
            {isActive && (
              <Text style={{ color: colors.onPrimary, fontSize: 18 }}>&#10003;</Text>
            )}
          </Pressable>
        );
      })}

      {/* Material You Section */}
      <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 24, marginBottom: 12, color: colors.onSurfaceVariant, letterSpacing: 1, textTransform: "uppercase" }}>
        Material You
      </Text>

      <ThemedCard>
        <Pressable
          onPress={monetSupported ? toggleMonet : undefined}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: monetSupported ? 1 : 0.5,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: colors.onSurface }}>
              Dynamic Colors
            </Text>
            <Text style={{ fontSize: 13, marginTop: 4, color: colors.onSurfaceVariant }}>
              {monetSupported
                ? "Use wallpaper-derived colors (Android 12+)"
                : "Seed-based palette (Android Monet unavailable)"}
            </Text>
          </View>

          {/* Toggle Switch */}
          <Pressable
            onPress={monetSupported ? toggleMonet : undefined}
            style={{
              width: 51,
              height: 31,
              borderRadius: 16,
              padding: 2,
              backgroundColor: useMonet ? colors.primary : colors.surfaceVariant,
              justifyContent: "center",
            }}
          >
            <View style={{
              width: 27,
              height: 27,
              borderRadius: 14,
              backgroundColor: useMonet ? colors.onPrimary : colors.outline,
              marginLeft: useMonet ? 22 : 0,
            }} />
          </Pressable>
        </Pressable>

        {/* Color Preview Swatches */}
        <View style={{ flexDirection: "row", marginTop: 16, gap: 8 }}>
          {[
            { label: "Primary", color: colors.primary },
            { label: "Secondary", color: colors.secondary },
            { label: "Tertiary", color: colors.tertiary },
            { label: "Surface", color: colors.surfaceContainer },
          ].map(({ label, color: c }) => (
            <View key={label} style={{ flex: 1, alignItems: "center" }}>
              <View style={{
                width: "100%",
                height: 32,
                borderRadius: 8,
                backgroundColor: c,
                borderWidth: 1,
                borderColor: colors.outlineVariant,
              }} />
              <Text style={{ fontSize: 10, marginTop: 4, color: colors.onSurfaceVariant }}>
                {label}
              </Text>
            </View>
          ))}
        </View>
      </ThemedCard>

      {/* About Section */}
      <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 24, marginBottom: 12, color: colors.onSurfaceVariant, letterSpacing: 1, textTransform: "uppercase" }}>
        About
      </Text>

      <ThemedCard>
        <Text style={{ fontSize: 16, color: colors.onSurface }}>
          MaterialWind v1.0.0
        </Text>
        <Text style={{ fontSize: 13, marginTop: 4, color: colors.onSurfaceVariant }}>
          React Native + NativeWind + Expo Go
        </Text>
      </ThemedCard>
    </View>
  );
}
