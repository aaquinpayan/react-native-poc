import '../tamagui-web.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaView, useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import React from 'react';
import DittoProvider from 'ditto-react-native';
import source from './ditto';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)'
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded, fontsError] = useFonts({
		Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
		RobotoItalic: require('../assets/fonts/Roboto-Italic.ttf'),
		RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
		RobotoMediumItalic: require('../assets/fonts/Roboto-MediumItalic.ttf'),
		RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
		RobotoBoldItalic: require('../assets/fonts/Roboto-BoldItalic.ttf'),
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
	});

	useEffect(() => {
		if (fontsLoaded || fontsError) {
			// Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontsError]);

	if (!fontsLoaded && !fontsError) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<DittoProvider source={source}>
			<TamaguiProvider config={config} defaultTheme={colorScheme as any}>
				<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
					<Stack>
						<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
						<Stack.Screen name="modal" options={{ presentation: 'modal' }} />
					</Stack>
				</ThemeProvider>
			</TamaguiProvider>
		</DittoProvider>
	);
}
