import { Pressable, Text } from "react-native";

import { cn } from "@lib/cn";
import { useTheme } from "@lib/useTheme";

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export function ThemedButton({
  title,
  onPress,
  variant = "primary",
  className,
}: ThemedButtonProps) {
  const { colors } = useTheme();
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      className={cn("rounded-xl px-6 py-3", className)}
      style={{
        backgroundColor: isPrimary ? colors.primary : colors.secondaryContainer,
      }}
    >
      <Text
        className={cn("text-center font-semibold")}
        style={{
          color: isPrimary ? colors.onPrimary : colors.onSecondaryContainer,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
