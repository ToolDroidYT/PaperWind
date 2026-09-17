import { cn } from '@/lib/cn';
import { useTheme } from '@/lib/useTheme';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { Pressable, Text, type ViewStyle } from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'filled' | 'outlined' | 'text';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

const SIZE_MAP = {
    sm: { paddingV: 'px-3', paddingH: 'py-1.5', text: 'text-sm' },
    md: { paddingV: 'px-5', paddingH: 'py-2.5', text: 'text-base' },
    lg: { paddingV: 'px-7', paddingH: 'py-3.5', text: 'text-lg' },
} as const;

export function Button({
    title,
    onPress,
    variant = 'filled',
    size = 'md',
    icon,
    disabled = false,
    className,
}: ButtonProps) {
    const { colors } = useTheme();
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handlePressIn = () => {
        scale.value = withSpring(0.95, { stiffness: 400, damping: 20 });
    };

    const handlePressOut = () => {
        scale.value = withSpring(1, { stiffness: 400, damping: 20 });
    };

    const sizeConfig = SIZE_MAP[size];

    const getContainerStyle = (): ViewStyle => {
        if (variant === 'filled') {
            return {
                backgroundColor: disabled
                    ? colors.onSurface + '1F'
                    : colors.primary,
            };
        }
        if (variant === 'outlined') {
            return {
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: disabled
                    ? colors.onSurface + '1F'
                    : colors.outline,
            };
        }
        return { backgroundColor: 'transparent' };
    };

    const getTextColor = (): string => {
        if (variant === 'filled') {
            return disabled ? colors.onSurface + '61' : colors.onPrimary;
        }
        return disabled ? colors.onSurface + '61' : colors.primary;
    };

    return (
        <AnimatedPressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            disabled={disabled}
            style={[
                getContainerStyle(),
                {
                    borderRadius: 9999,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                },
                disabled && { opacity: 0.38 },
                animatedStyle,
            ]}
            className={cn(
                sizeConfig.paddingV,
                sizeConfig.paddingH,
                'items-center justify-center',
                className,
            )}>
            {icon}
            <Text
                className={cn(sizeConfig.text, 'font-semibold')}
                style={{ color: getTextColor() }}>
                {title}
            </Text>
        </AnimatedPressable>
    );
}
