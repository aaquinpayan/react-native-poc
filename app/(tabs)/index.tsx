import React from 'react';
import { Button, Card, Separator, Text, View, XStack, YStack, AlertDialog } from 'tamagui';
import { ChartBarIcon, UserIcon } from 'react-native-heroicons/outline';
import { Ditto } from 'ditto-react-native';
export default function TabOneScreen() {
	return (
		<YStack flex={1} flexGrow={1} gap={20} className="py-9 px-4 bg-[#E5E7EB]">
			<YStack>
				<Text unstyled className="text-2xl leading-[43.5px] font-bold">
					Manage
				</Text>
				<Separator className="border-t-[5px] border-[#164A9A] w-1/4 rounded-full" />
			</YStack>
			<YStack gap={20}>
				{/* Cards */}
				<XStack gap={20}>
					<Card elevation={10} className="p-4 bg-white flex-1 flex flex-col space-y-4">
						<View padding={6}>
							<ChartBarIcon size={27} color="#000" />
						</View>

						<View rowGap={6}>
							<Text fontWeight="700">Lorem Ipsum</Text>
							<Text fontSize={8} lineHeight={12} color="#667085">
								<Ditto componentId="lorem.description" />
							</Text>
						</View>
					</Card>
				</XStack>

				<XStack gap={20}>
					{/* Button & Alert Dialog */}
					<AlertDialog native={false}>
						<AlertDialog.Trigger asChild>
							<Button
								className="bg-[#164A9A] text-white px-3 py-1 space-x-2 rounded-md text-sm font-medium"
								shadowColor="#0000000D"
								shadowOffset={{ width: 0, height: 1 }}
								shadowOpacity={0.25}
								shadowRadius={2}
							>
								<UserIcon size={16} color="white" />
								Profile: Jason Carter
							</Button>
						</AlertDialog.Trigger>

						<AlertDialog.Portal>
							<AlertDialog.Overlay
								key="overlay"
								animation="quick"
								opacity={0.5}
								enterStyle={{ opacity: 0 }}
								exitStyle={{ opacity: 0 }}
							/>
							<AlertDialog.Content
								bordered
								elevate
								key="content"
								animation={[
									'quick',
									{
										opacity: {
											overshootClamping: true
										}
									}
								]}
								enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
								exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
								x={0}
								scale={1}
								opacity={1}
								y={0}
							>
								<YStack gap>
									<AlertDialog.Title>Accept</AlertDialog.Title>
									<AlertDialog.Description>
										By pressing yes, you accept our terms and conditions.
									</AlertDialog.Description>

									<XStack gap="$3" justifyContent="flex-end">
										<AlertDialog.Cancel asChild>
											<Button>Cancel</Button>
										</AlertDialog.Cancel>
										<AlertDialog.Action asChild>
											<Button theme="active">Accept</Button>
										</AlertDialog.Action>
									</XStack>
								</YStack>
							</AlertDialog.Content>
						</AlertDialog.Portal>
					</AlertDialog>
				</XStack>
			</YStack>
		</YStack>
	);
}

const items = [
	{ name: 'Apple' },
	{ name: 'Pear' },
	{ name: 'Blackberry' },
	{ name: 'Peach' },
	{ name: 'Apricot' },
	{ name: 'Melon' },
	{ name: 'Honeydew' },
	{ name: 'Starfruit' },
	{ name: 'Blueberry' },
	{ name: 'Raspberry' },
	{ name: 'Strawberry' },
	{ name: 'Mango' },
	{ name: 'Pineapple' },
	{ name: 'Lime' },
	{ name: 'Lemon' },
	{ name: 'Coconut' },
	{ name: 'Guava' },
	{ name: 'Papaya' },
	{ name: 'Orange' },
	{ name: 'Grape' },
	{ name: 'Jackfruit' },
	{ name: 'Durian' }
];
