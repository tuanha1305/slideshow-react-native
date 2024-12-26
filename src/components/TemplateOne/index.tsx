import UserInterfaceComponent1 from "../../components/UserInterfaceComponent1";
import { Stack } from "expo-router";
import { View, YStack, ScrollView } from "tamagui";

export default function TemplateOne() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack gap="$13" f={1}>
          <UserInterfaceComponent1 timerText="00:00" doneButtonText="Done" h={666} pos="relative" />
          <YStack bg="$black" px="$4" py="$7">
            <YStack ai="center">
              <View h={2} bg="$white_0" w={40} br="$1" />
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
