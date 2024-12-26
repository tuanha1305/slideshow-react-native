import BottomBar from "../../components/BottomBar";
import UserInterfaceComponent2 from "../../components/UserInterfaceComponent2";
import { View, YStack, ScrollView } from "tamagui";

export default function EditAdjustOnePage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack gap="$14" f={1}>
          <UserInterfaceComponent2
            userImage={require("@/assets/images/img_property_1_default_36.png")}
            playIconButton={require("@/assets/images/img_property_1_play.png")}
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

      {/* <BottomBar />
       */}
    </YStack>
  );
}
