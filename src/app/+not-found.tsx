import { Stack, useRouter } from "expo-router";
import { YStack, Button, Text } from "tamagui";

export default function NotFoundScreen() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <YStack flex={1} alignItems="center" justifyContent="center" padding="$4">
        <Text fontSize="$6" fontWeight="bold">
          This screen doesn't exist.
        </Text>
        <Button onPress={router.dismissAll}>Go to home screen!</Button>
      </YStack>
    </>
  );
}
