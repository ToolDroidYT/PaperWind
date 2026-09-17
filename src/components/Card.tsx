import { cn } from '@/lib/cn';
import { useTheme } from '@/lib/useTheme';
import { View, type ViewProps } from 'react-native';

interface CardProps extends ViewProps {
    children: React.ReactNode;
}

export function Card({
    children,
    className,
    style,
    ...props
}: CardProps) {
    const { colors } = useTheme();

    return (
        <View
            className={cn('rounded-2xl p-5', className)}
            style={[{ backgroundColor: colors.surfaceContainer }, style]}
            {...props}>
            {children}
        </View>
    );
}
