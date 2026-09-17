import { cn } from '@/lib/cn';
import { useTheme } from '@/lib/useTheme';
import { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

interface SwitchProps {
    checked: boolean;
    onValueChange: (value: boolean) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
}

const TRACK_W = 52;
const TRACK_H = 32;
const THUMB_SIZE = 24;
const PADDING = 4;

export function Switch({
    checked,
    onValueChange,
    label,
    disabled = false,
    className,
}: SwitchProps) {
    const { colors } = useTheme();
    const translateX = useSharedValue(checked ? TRACK_W - THUMB_SIZE - PADDING * 2 : 0);
    const progress = useSharedValue(checked ? 1 : 0);

    useEffect(() => {
        translateX.value = withSpring(
            checked ? TRACK_W - THUMB_SIZE - PADDING * 2 : 0,
            { stiffness: 500, damping: 28 },
        );
        progress.value = withSpring(checked ? 1 : 0, {
            stiffness: 500,
            damping: 28,
        });
    }, [checked]);

    const trackStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            progress.value,
            [0, 1],
            [colors.surfaceVariant, colors.primary],
        ),
    }));

    const thumbStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
        backgroundColor: interpolateColor(
            progress.value,
            [0, 1],
            [colors.outline, colors.onPrimary],
        ),
    }));

    return (
        <Pressable
            onPress={() => !disabled && onValueChange(!checked)}
            disabled={disabled}
            className={cn(
                'flex-row items-center gap-3',
                disabled && 'opacity-38',
                className,
            )}>
            <Animated.View
                style={[
                    trackStyle,
                    {
                        width: TRACK_W,
                        height: TRACK_H,
                        borderRadius: TRACK_H / 2,
                        padding: PADDING,
                        justifyContent: 'center',
                    },
                ]}>
                <Animated.View
                    style={[
                        thumbStyle,
                        {
                            width: THUMB_SIZE,
                            height: THUMB_SIZE,
                            borderRadius: THUMB_SIZE / 2,
                        },
                    ]}
                />
            </Animated.View>
            {label && (
                <Animated.Text
                    style={{ color: colors.onSurface, fontSize: 16 }}>
                    {label}
                </Animated.Text>
            )}
        </Pressable>
    );
}
