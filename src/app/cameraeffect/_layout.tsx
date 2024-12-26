import ImageGallery from "../../components/ImageGallery";
import ImageGalleryWithTags from "../../components/ImageGalleryWithTags";
import { View, YStack, ScrollView } from "tamagui";

export default function CameraEffectPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <ImageGallery
            mainImage={require("@/assets/images/img_property_1_default_29.png")}
            ellipseImage={true}
            image3={require("@/assets/images/img_image_56x56.png")}
            image4={require("@/assets/images/img_image_40x40.png")}
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
