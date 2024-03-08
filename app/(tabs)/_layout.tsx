import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'tamagui';
import { Bars3Icon } from 'react-native-heroicons/outline';

const logo = require('../../assets/favicon.png');
export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: 'red'
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Tab One',
					tabBarIcon: ({ color }) => <Text>Hi!</Text>,
					headerTitle: () => (
						<View className="py-4">
							<Image
								source={{
									uri: logo
								}}
								className="h-[40px] w-auto"
								resizeMode="contain"
							/>
						</View>
					),
					headerTitleAlign: 'center',
					headerShadowVisible: true,
					headerStyle: {
						height: 125,
						// elevation: 0, // shadow on android devices
						shadowOffset: { width: 0, height: 1 },
						shadowOpacity: 0.25,
						shadowRadius: 5,
						shadowColor: '#000'
					},
					headerLeft: () => (
						<Link href="/modal" className="px-4" asChild>
							<View>
								<Bars3Icon strokeWidth={2} size={36} color="#111928" />
							</View>
						</Link>
					)
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <Text>Hello!</Text>
				}}
			/>
		</Tabs>
	);
}
