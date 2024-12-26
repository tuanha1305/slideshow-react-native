import SocialMediaButtons from "../../components/SocialMediaButtons";
import UserInterfaceComponent1 from "../../components/UserInterfaceComponent1";
import { View, YStack, ScrollView } from "tamagui";

export default function ExportPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack gap="$7" f={1} ai="flex-start">
          <UserInterfaceComponent1
            userImage={require("@/assets/images/img_property_1_default_54.png")}
            closeIcon={require("@/assets/images/img_icon_arrow_left.png")}
            h={666}
            als="stretch"
            pos="relative"
          />
          <ScrollView horizontal mb={10} ml={16} w="96%">
            <SocialMediaButtons gap="$6" dsp="flex" ai="center" />
          </ScrollView>
        </YStack>
      </ScrollView>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
