import { View, Text, type ViewProps } from "react-native";
import { useTheme } from "@lib/useTheme";

interface ThemedCardProps extends ViewProps {
  children: React.ReactNode;
}

export function ThemedCard({ children, className, ...props }: ThemedCardProps) {
  const { isDark } = useTheme();

  return (
    <View
      className={`rounded-2xl p-5 ${
        isDark ? "bg-gray-800" : "bg-gray-100"
      } ${className ?? ""}`}
      {...props}
    >
      {children}
    </View>
  );
}
