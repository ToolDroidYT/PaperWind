import { useState } from 'react';
import { Sparkles, Wind } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { Button, Card, Switch } from 'react-native-paper';
import { useTheme } from '@/lib/useTheme';

export default function HomeScreen() {
    const { colors, toggleTheme } = useTheme();
    const [notifications, setNotifications] = useState(true);

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
                    PaperWind
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

            <Card style={{ marginTop: 32, width: '100%', maxWidth: 380 }}>
                <Card.Content>
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
                </Card.Content>
            </Card>

            <Card style={{ marginTop: 24, width: '100%', maxWidth: 380 }}>
                <Card.Content>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: colors.onSurfaceVariant,
                            marginBottom: 12,
                        }}>
                        Buttons
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 12,
                        }}>
                        <Button mode='contained' onPress={toggleTheme}>
                            Filled
                        </Button>
                        <Button mode='outlined' onPress={toggleTheme}>
                            Outlined
                        </Button>
                        <Button mode='text' onPress={toggleTheme}>
                            Text
                        </Button>
                        <Button disabled onPress={() => {}}>
                            Disabled
                        </Button>
                    </View>
                </Card.Content>
            </Card>

            <Card style={{ marginTop: 16, width: '100%', maxWidth: 380 }}>
                <Card.Content>
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
                        value={notifications}
                        onValueChange={setNotifications}
                    />
                </Card.Content>
            </Card>
        </View>
    );
}
