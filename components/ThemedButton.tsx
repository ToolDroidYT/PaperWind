import { Pressable, Text } from "react-native";
import { useTheme } from "@lib/useTheme";

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

export function ThemedButton({
  title,
  onPress,
  variant = "primary",
}: ThemedButtonProps) {
  const { colors } = useTheme();

  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: isPrimary ? colors.primary : colors.secondaryContainer,
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 12,
      }}
    >
      <Text
        style={{
          color: isPrimary ? colors.onPrimary : colors.onSecondaryContainer,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
