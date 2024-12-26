import ImageGallery from "../../components/ImageGallery";
import ImageGalleryWithTags from "../../components/ImageGalleryWithTags";
import { View, YStack, ScrollView } from "tamagui";

export default function CameraSlowmoPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <ImageGallery
            mainImage={require("@/assets/images/img_property_1_default_35.png")}
            timericon1={require("@/assets/images/img_icon_timer_1_2_10.png")}
            label="Effect"
            image3={require("@/assets/images/img_image_11.png")}
            image4={require("@/assets/images/img_image_12.png")}
            h={666}
            pos="relative"
          />
          <ImageGalleryWithTags bg="$black" dsp="flex" ai="center" />
        </YStack>
      </ScrollView>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
