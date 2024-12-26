import { Button } from "../../components";
import BottomBar from "../../components/BottomBar";
import UserInterfaceComponent2 from "../../components/UserInterfaceComponent2";
import { View, YStack, Image, ZStack, ScrollView } from "tamagui";

export default function EditTextThreePage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack gap="$14" f={1}>
          <ZStack h={666} ac="center">
            <UserInterfaceComponent2 h="100%" f={1} pos="relative" br="$12" />
            <YStack als="bottomCenter" ai="flex-start" pos="absolute" b={19} r={0} l={0} mx="auto">
              <Image source={require("@/assets/images/img_image_186x116.png")} h={186} w="76%" objectFit="contain" />
              <Button
                size="6xl"
                shape="circle"
                icon={<Image source={require("@/assets/images/img_group_white_0_56x56.png")} w={28} h="$5" />}
                als="center"
                boc="$black"
                borderWidth={1}
                w={56}
                br="$13"
              />
            </YStack>
          </ZStack>
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
