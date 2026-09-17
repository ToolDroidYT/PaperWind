import { Button } from '@/components/Button';
import { Switch } from '@/components/Switch';
import { ThemedCard } from '@/components/ThemedCard';
import { useTheme } from '@/lib/useTheme';
import { Sparkles, Wind } from 'lucide-react-native';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    const { colors, toggleTheme } = useTheme();
    const [notifications, setNotifications] = useState(true);
    const [selectedChip, setSelectedChip] = useState<'all' | 'unread'>('all');

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

            {/* Buttons */}
            <ThemedCard style={{ marginTop: 24, width: '100%', maxWidth: 380 }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: colors.onSurfaceVariant,
                        marginBottom: 12,
                    }}>
                    Buttons
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                    <Button title='Filled' onPress={toggleTheme} />
                    <Button
                        title='Outlined'
                        variant='outlined'
                        onPress={toggleTheme}
                    />
                    <Button
                        title='Text'
                        variant='text'
                        onPress={toggleTheme}
                    />
                    <Button
                        title='Disabled'
                        disabled
                        onPress={() => {}}
                    />
                </View>
            </ThemedCard>

            {/* Switch */}
            <ThemedCard style={{ marginTop: 16, width: '100%', maxWidth: 380 }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: colors.onSurfaceVariant,
                        marginBottom: 12,
                    }}>
                    Switches
                </Text>
                <Switch
                    checked={notifications}
                    onValueChange={setNotifications}
                    label='Notifications'
                />
            </ThemedCard>
        </View>
    );
}
