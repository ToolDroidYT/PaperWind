import { isMonetAvailable } from '@/lib/monet';
import { useTheme } from '@/lib/useTheme';
import { Check, Info, Palette, Phone } from 'lucide-react-native';
import { Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Card, Switch } from 'react-native-paper';

const THEMES = ['light', 'dark', 'system'] as const;

export default function SettingsScreen() {
    const { isDark, mode, setTheme, colors, useMonet, toggleMonet } =
        useTheme();
    const monetSupported = Platform.OS === 'android' && isMonetAvailable();

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: colors.background }}
            contentContainerStyle={{ padding: 24 }}
            showsVerticalScrollIndicator={false}>
            {/* Appearance Section */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12,
                }}>
                <Palette size={16} stroke={colors.onSurfaceVariant} />
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: colors.onSurfaceVariant,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                    }}>
                    Appearance
                </Text>
            </View>

            {THEMES.map((t) => {
                const isActive = mode === t;
                return (
                    <Pressable
                        key={t}
                        onPress={() => setTheme(t)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 16,
                            borderRadius: 12,
                            marginBottom: 8,
                            backgroundColor:
                                isActive ?
                                    colors.primary
                                :   colors.surfaceContainer,
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: isActive ? '600' : '400',
                                color:
                                    isActive ?
                                        colors.onPrimary
                                    :   colors.onSurface,
                                textTransform: 'capitalize',
                            }}>
                            {t} Mode
                        </Text>
                        {isActive && (
                            <Check size={20} stroke={colors.onPrimary} />
                        )}
                    </Pressable>
                );
            })}

            {/* Material You Section */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 24,
                    marginBottom: 12,
                }}>
                <Phone size={16} stroke={colors.onSurfaceVariant} />
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: colors.onSurfaceVariant,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                    }}>
                    Material You
                </Text>
            </View>

            <Card>
                <Card.Content>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            opacity: monetSupported ? 1 : 0.5,
                        }}>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: colors.onSurface,
                                }}>
                                Dynamic Colors
                            </Text>
                            <Text
                                style={{
                                    fontSize: 13,
                                    marginTop: 4,
                                    color: colors.onSurfaceVariant,
                                }}>
                                {monetSupported ?
                                    'Use wallpaper-derived colors (Android 12+)'
                                :   'Seed-based palette (Android Monet unavailable)'
                                }
                            </Text>
                        </View>

                        <Switch
                            value={useMonet}
                            onValueChange={monetSupported ? toggleMonet : () => {}}
                            disabled={!monetSupported}
                        />
                    </View>

                    {/* Color Preview Swatches */}
                    <View style={{ flexDirection: 'row', marginTop: 16, gap: 8 }}>
                        {[
                            { label: 'Primary', color: colors.primary },
                            { label: 'Secondary', color: colors.secondary },
                            { label: 'Tertiary', color: colors.tertiary },
                            { label: 'Surface', color: colors.surfaceContainer },
                        ].map(({ label, color: c }) => (
                            <View
                                key={label}
                                style={{ flex: 1, alignItems: 'center' }}>
                                <View
                                    style={{
                                        width: '100%',
                                        height: 32,
                                        borderRadius: 8,
                                        backgroundColor: c,
                                        borderWidth: 1,
                                        borderColor: colors.outlineVariant,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 10,
                                        marginTop: 4,
                                        color: colors.onSurfaceVariant,
                                    }}>
                                    {label}
                                </Text>
                            </View>
                        ))}
                    </View>
                </Card.Content>
            </Card>

            {/* About Section */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 24,
                    marginBottom: 12,
                }}>
                <Info size={16} stroke={colors.onSurfaceVariant} />
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: colors.onSurfaceVariant,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                    }}>
                    About
                </Text>
            </View>

            <Card>
                <Card.Content>
                    <Text style={{ fontSize: 16, color: colors.onSurface }}>
                        MaterialWind v1.0.0
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            marginTop: 4,
                            color: colors.onSurfaceVariant,
                        }}>
                        React Native + NativeWind + Expo Go
                    </Text>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}
