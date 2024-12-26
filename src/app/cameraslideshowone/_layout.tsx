import ImageGallery from "../../components/ImageGallery";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import { View, YStack, ZStack, ScrollView } from "tamagui";

export default function CameraSlideshowOnePage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <ZStack h={736} f={1}>
          <ImageGallery
            mainImage={require("@/assets/images/img_property_1_default_34.png")}
            timericon1={require("@/assets/images/img_icon_timer_1_2_24x24.png")}
            h={666}
            als="topCenter"
            f={1}
            pos="relative"
          />
          <UserProfile
            userimage2={require("@/assets/images/img_image_7.png")}
            userProfilePhoto={require("@/assets/images/img_group.png")}
            gap="$9"
            dsp="flex"
            jc="flex-end"
            ai="center"
            pos="absolute"
            b="11%"
            r={0}
            l={0}
            w="100%"
            px="$1"
            mx={10}
          />
          <UserProfile1
            rectangleImage={require("@/assets/images/img_rectangle_70.png")}
            bg="$black"
            dsp="flex"
            ai="center"
            pos="absolute"
            b={1}
            r={0}
            l={0}
            w="100%"
            mx="auto"
          />
        </ZStack>
      </ScrollView>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
