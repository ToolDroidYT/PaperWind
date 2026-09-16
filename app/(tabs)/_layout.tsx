import { useTheme } from '@lib/useTheme';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.onSurfaceVariant,
                tabBarStyle: {
                    backgroundColor: colors.surfaceContainer,
                    borderTopColor: colors.outlineVariant,
                },
                headerStyle: {
                    backgroundColor: colors.surface,
                },
                headerTintColor: colors.onSurface,
            }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarLabel: 'Home',
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Settings',
                    tabBarLabel: 'Settings',
                }}
            />
        </Tabs>
    );
}
