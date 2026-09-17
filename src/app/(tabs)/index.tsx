import { ThemedButton } from '@/components/ThemedButton';
import { ThemedCard } from '@/components/ThemedCard';
import { useTheme } from '@/lib/useTheme';
import { Sparkles, Wind } from 'lucide-react-native';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    const { colors, toggleTheme } = useTheme();

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24,
                backgroundColor: colors.background,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                }}>
                <Wind size={36} stroke={colors.primary} />
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: colors.onBackground,
                    }}>
                    MaterialWind
                </Text>
            </View>

            <Text
                style={{
                    marginTop: 8,
                    fontSize: 16,
                    color: colors.onSurfaceVariant,
                }}>
                React Native + NativeWind + Expo
            </Text>

            <ThemedCard style={{ marginTop: 32, width: '100%', maxWidth: 380 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                    }}>
                    <Sparkles size={20} stroke={colors.primary} />
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: colors.onSurface,
                        }}>
                        Welcome to your new project
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 8,
                        textAlign: 'center',
                        fontSize: 14,
                        color: colors.onSurfaceVariant,
                    }}>
                    Edit app/(tabs)/index.tsx to get started
                </Text>
            </ThemedCard>

            <View style={{ marginTop: 32, flexDirection: 'row', gap: 16 }}>
                <ThemedButton title='Toggle Theme' onPress={toggleTheme} />
                <ThemedButton
                    title='Secondary'
                    onPress={() => {}}
                    variant='secondary'
                />
            </View>
        </View>
    );
}
