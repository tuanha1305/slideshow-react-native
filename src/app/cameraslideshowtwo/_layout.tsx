import ImageGallery from "../../components/ImageGallery";
import UserProfile1 from "../../components/UserProfile1";
import { View, YStack, ScrollView } from "tamagui";

export default function CameraSlideshowTwoPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <ImageGallery
            mainImage={require("@/assets/images/img_property_1_default_34.png")}
            timericon1={require("@/assets/images/img_icon_timer_1_2_24x24.png")}
            image1={require("@/assets/images/img_image_6.png")}
            image2={require("@/assets/images/img_image_7.png")}
            ellipseImage={require("@/assets/images/img_group_white_0.png")}
            image3={require("@/assets/images/img_image_9.png")}
            image4={require("@/assets/images/img_image_10.png")}
            h={666}
            pos="relative"
          />
          <UserProfile1
            rectangleImage={require("@/assets/images/img_rectangle_70.png")}
            bg="$black"
            dsp="flex"
            ai="center"
          />
        </YStack>
      </ScrollView>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
