import TrendsButtonGroup from "../../components/TrendsButtonGroup";
import UserInterfaceComponent2 from "../../components/UserInterfaceComponent2";
import { View, YStack, ScrollView } from "tamagui";

export default function EditMusicPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <UserInterfaceComponent2
            playIconButton={true}
            timericon1={require("@/assets/images/img_icon_timer_1_2_6.png")}
            adjustLabel={true}
            timericon2={require("@/assets/images/img_icon_timer_1_2_10.png")}
            effectLabel={true}
            timericon3={require("@/assets/images/img_icon_timer_1_2_1.png")}
            presetLabel="Preset"
            timericon4={require("@/assets/images/img_icon_timer_1_2_2.png")}
            transitionLabel="Transition"
            ellipse31={true}
            h={666}
            pos="relative"
          />
          <TrendsButtonGroup
            marliText="MY MUSIC"
            koreanText="APPLE MUSIC"
            gap="$10"
            bg="$black"
            shadowColor="#0000004c"
            shadowOffset={{ width: 0, height: 0 }}
            shadowOpacity={0.5}
            shadowRadius={3}
            elevation={3}
            dsp="flex"
            jc="center"
            ai="center"
            px="$2"
          />
        </YStack>
      </ScrollView>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
