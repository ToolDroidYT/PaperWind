import '../../global.css';
import { useTheme } from '@/lib/useTheme';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
    const { isDark } = useTheme();

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PaperProvider>
                <StatusBar style={isDark ? 'light' : 'dark'} />
                <Stack screenOptions={{ headerShown: false }} />
            </PaperProvider>
        </GestureHandlerRootView>
    );
}
