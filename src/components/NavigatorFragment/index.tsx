import UserInterfaceComponent2 from "../../components/UserInterfaceComponent2";
import { Stack } from "expo-router";
import { View, YStack, ScrollView } from "tamagui";

export default function NavigatorFragment() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack gap="$14" f={1}>
          <UserInterfaceComponent2
            userImage={require("@/assets/images/img_property_1_default_53.png")}
            playIconButton={require("@/assets/images/img_property_1_play.png")}
            progressText="0"
            timericon1={require("@/assets/images/img_icon_timer_1_2_6.png")}
            adjustLabel="Adjust"
            timericon2={require("@/assets/images/img_icon_timer_1_2_10.png")}
            effectLabel="Effect"
            timericon3={require("@/assets/images/img_icon_timer_1_2_1.png")}
            presetLabel="Preset"
            timericon4={require("@/assets/images/img_icon_timer_1_2_2.png")}
            transitionLabel="Transition"
            group213iconbutton={require("@/assets/images/img_group_213_white_0_36x36.png")}
            h={666}
            pos="relative"
          />
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
