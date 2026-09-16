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
  const { isDark } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      className={`rounded-xl px-6 py-3 ${
        variant === "primary"
          ? "bg-blue-500 active:bg-blue-600"
          : isDark
            ? "bg-gray-700 active:bg-gray-600"
            : "bg-gray-200 active:bg-gray-300"
      }`}
    >
      <Text
        className={`text-center font-semibold ${
          variant === "primary"
            ? "text-white"
            : isDark
              ? "text-gray-200"
              : "text-gray-800"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}
