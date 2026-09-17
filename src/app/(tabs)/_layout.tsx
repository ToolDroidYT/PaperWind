import { Tabs } from 'expo-router';
import { Home, Settings } from 'lucide-react-native';
import { useTheme } from '@/lib/useTheme';

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
                    tabBarIcon: ({ color, size }) => (
                        <Home size={size} stroke={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Settings',
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Settings size={size} stroke={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
