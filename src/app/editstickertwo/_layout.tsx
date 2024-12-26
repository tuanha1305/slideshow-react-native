import { Button } from "../../components";
import BottomBar from "../../components/BottomBar";
import UserInterfaceComponent2 from "../../components/UserInterfaceComponent2";
import { View, YStack, Image, ZStack, XStack, ScrollView } from "tamagui";

export default function EditStickerTwoPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack gap="$14" f={1}>
          <ZStack h={666} ac="center">
            <UserInterfaceComponent2 h="100%" f={1} pos="relative" br="$12" />
            <YStack
              ml={18}
              als="centerLeft"
              ai="center"
              pos="absolute"
              l={19}
              b={0}
              t={0}
              h="100%"
              jc="center"
              w="100%"
              my="auto"
            >
              <Image source={require("@/assets/images/img_frame_294.png")} h={72} ml={6} w={72} objectFit="cover" />
              <XStack mt={126} als="stretch" jc="space-between" ai="center">
                <Image source={require("@/assets/images/img_image_68x68.png")} h={68} w={68} objectFit="cover" />
                <Image source={require("@/assets/images/img_image_286x208.png")} h={286} w="58%" objectFit="contain" />
              </XStack>
              <ZStack h={112} mt={14} ml={120} w="20%">
                <Button
                  size="6xl"
                  shape="circle"
                  icon={<Image source={require("@/assets/images/img_group_white_0_56x56.png")} w={28} h="$5" />}
                  boc="$black"
                  borderWidth={1}
                  w={56}
                  pos="absolute"
                  b={0}
                  r={-1}
                  m="auto"
                  br="$13"
                />
                <Image
                  source={require("@/assets/images/img_frame_296.png")}
                  h={70}
                  als="center"
                  w={70}
                  objectFit="cover"
                  pos="absolute"
                  t={0}
                  mx="auto"
                />
              </ZStack>
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
