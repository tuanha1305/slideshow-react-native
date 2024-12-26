import ImageGallery1 from "../../components/ImageGallery1";
import ImageGridComponent from "../../components/ImageGridComponent";
import { View, YStack, Image, ZStack, ScrollView } from "tamagui";

export default function CameraCollageTwoPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <ZStack h={666} ac="center">
            <ImageGallery1 h="100%" f={1} pos="relative" />
            <ZStack
              h="$8"
              als="topRight"
              boc="$main"
              borderWidth={2}
              bs="solid"
              w="10%"
              ac="center"
              r={11}
              t="26%"
              m="auto"
              br="$10"
            >
              <View h="$6" bg="$white_0" w={32} m="auto" br="$8" />
              <Image
                source={require("@/assets/images/img_icon_grid_8_1.png")}
                h={20}
                w={20}
                objectFit="cover"
                pos="absolute"
                l={0}
                b={0}
                r={0}
                t={0}
                m="auto"
              />
            </ZStack>
          </ZStack>
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
