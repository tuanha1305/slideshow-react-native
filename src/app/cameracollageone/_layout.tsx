import ImageGallery1 from "../../components/ImageGallery1";
import ImageGridComponent from "../../components/ImageGridComponent";
import { View, YStack, ScrollView } from "tamagui";

export default function CameraCollageOnePage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <ImageGallery1 h={666} pos="relative" />
          <YStack>
            <ImageGridComponent
              gridimage1={require("@/assets/images/img_grid_9_2.png")}
              gridimage2={require("@/assets/images/img_grid_3_2.png")}
              gridimage3={require("@/assets/images/img_grid_7_2.png")}
              gridimage5={require("@/assets/images/img_grid_7_2.png")}
              gridimage6={require("@/assets/images/img_grid_3_2.png")}
              gridimage7={require("@/assets/images/img_grid_3_2.png")}
              cameraIcon={require("@/assets/images/img_icon_camera_change.png")}
              groupImage={require("@/assets/images/img_group_white_0_32x32.png")}
              h={68}
              bg="$black"
              pos="relative"
            />
          </YStack>
        </YStack>
      </ScrollView>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
