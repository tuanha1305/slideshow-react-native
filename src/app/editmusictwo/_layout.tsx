import MusicPlayer from "../../components/MusicPlayer";
import UserInterfaceComponent2 from "../../components/UserInterfaceComponent2";
import { View, YStack, ScrollView } from "tamagui";

export default function EditMusicTwoPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <UserInterfaceComponent2
            playIconButton={require("@/assets/images/img_property_1_play.png")}
            progressText="60"
            timericon1={require("@/assets/images/img_icon_timer_1_2_6.png")}
            adjustLabel="Adjust"
            timericon2={require("@/assets/images/img_icon_timer_1_2_10.png")}
            effectLabel="Effect"
            timericon3={require("@/assets/images/img_icon_timer_1_2_1.png")}
            presetLabel="Preset"
            timericon4={require("@/assets/images/img_icon_timer_1_2_2.png")}
            transitionLabel="Transition"
            ellipse31={true}
            group213iconbutton={require("@/assets/images/img_group_213_white_0.png")}
            group214iconbutton={require("@/assets/images/img_group_214.png")}
            rectangle75={true}
            rectangle76={true}
            rectangle77={true}
            rectangle78={true}
            rectangle79={true}
            rectangle80={true}
            rectangle81={true}
            rectangle82={true}
            rectangle83={true}
            rectangle84={true}
            rectangle85={true}
            rectangle86={true}
            rectangle87={true}
            rectangle88={true}
            rectangle89={true}
            rectangle90={true}
            rectangle91={true}
            rectangle92={true}
            rectangle93={true}
            rectangle94={true}
            rectangle95={true}
            rectangle96={true}
            rectangle97={true}
            rectangle98={true}
            rectangle99={true}
            rectangle101={true}
            rectangle103={true}
            rectangle105={true}
            rectangle107={true}
            rectangle109={true}
            rectangle111={true}
            rectangle113={true}
            rectangle115={true}
            rectangle117={true}
            rectangle119={true}
            rectangle121={true}
            rectangle100={true}
            rectangle102={true}
            rectangle104={true}
            rectangle106={true}
            rectangle108={true}
            rectangle110={true}
            rectangle112={true}
            rectangle114={true}
            rectangle116={true}
            rectangle118={true}
            rectangle120={true}
            h={666}
            pos="relative"
          />
          <MusicPlayer bg="$black" dsp="flex" jc="space-between" ai="center" px="$8" py="$9" />
        </YStack>
      </ScrollView>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
