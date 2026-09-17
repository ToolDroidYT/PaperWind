import { useTheme } from '@/lib/useTheme';
import { Button as PaperButton } from 'react-native-paper';
import type { ReactNode } from 'react';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'filled' | 'outlined' | 'text';
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    disabled?: boolean;
    className?: string;
}

export function Button({
    title,
    onPress,
    variant = 'filled',
    size = 'md',
    icon,
    disabled = false,
}: ButtonProps) {
    const { colors } = useTheme();

    const mode =
        variant === 'filled'
            ? 'contained'
            : variant === 'outlined'
              ? 'outlined'
              : 'text';

    return (
        <PaperButton
            mode={mode}
            onPress={onPress}
            disabled={disabled}
            icon={icon as any}
            compact={size === 'sm'}
            buttonColor={variant === 'filled' ? colors.primary : undefined}
            textColor={
                variant === 'filled' ? colors.onPrimary : colors.primary
            }>
            {title}
        </PaperButton>
    );
}
