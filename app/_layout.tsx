import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from '@/context/AuthContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    JosefinThin: require('../assets/fonts/JosefinSans-Thin.ttf'),
    JosefinExtraLight: require('../assets/fonts/JosefinSans-ExtraLight.ttf'),
    JosefinLight: require('../assets/fonts/JosefinSans-Light.ttf'),
    JosefinRegular: require('../assets/fonts/JosefinSans-Regular.ttf'),
    JosefinMedium: require('../assets/fonts/JosefinSans-Medium.ttf'),
    JosefinSemiBold: require('../assets/fonts/JosefinSans-SemiBold.ttf'),
    JosefinBold: require('../assets/fonts/JosefinSans-Bold.ttf'),
  });

  if (!loaded) return null;

  return (
    <AuthProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
