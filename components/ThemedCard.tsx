import { View, type ViewProps } from "react-native";

import { cn } from "@lib/cn";
import { useTheme } from "@lib/useTheme";

interface ThemedCardProps extends ViewProps {
  children: React.ReactNode;
}

export function ThemedCard({ children, className, style, ...props }: ThemedCardProps) {
  const { colors } = useTheme();

  return (
    <View
      className={cn("rounded-2xl p-5", className)}
      style={[{ backgroundColor: colors.surfaceContainer }, style]}
      {...props}
    >
      {children}
    </View>
  );
}
