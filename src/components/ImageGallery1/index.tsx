import { StackProps } from "tamagui";
import { Text } from "./..";
import { ImageBackground } from "react-native";
import { Image, ZStack, XStack, View, YStack } from "tamagui";

interface Props extends StackProps {
  className?: string;
  label?: React.ReactNode;
  label1?: React.ReactNode;
}

export default function ImageGallery1({ label = "Effect", label1 = "Label", ...props }: Props) {
  return (
    <ZStack {...props}>
      <YStack h="100%" pos="absolute" l={0} b={0} r={0} t={0} jc="center" w="100%" m="auto">
        <YStack>
          <XStack jc="space-between">
            <Image
              source={require("@/assets/images/img_property_1_default_16.png")}
              h={332}
              w="50%"
              objectFit="contain"
            />
            <View h={332} bg="$black" w="50%" />
          </XStack>
        </YStack>
        <XStack jc="space-between">
          <View h={332} bg="$black" w="50%" />
          <View h={332} bg="$black" w="50%" />
        </XStack>
      </YStack>
      <ImageBackground
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          margin: "auto",
        }}
        source={require("@/assets/images/img_group_293.png")}
      >
        <YStack pt="$8" ai="center" jc="center" px="$3">
          <XStack mt={4} als="stretch" jc="space-between" mx={6}>
            <Image source={require("@/assets/images/img_icon_flash_1_1.png")} h={24} w={24} objectFit="cover" />
            <Image source={require("@/assets/images/img_icon_timer.png")} h={24} w={24} objectFit="cover" />
            <Image source={require("@/assets/images/img_icon_add.png")} h={24} w={24} objectFit="cover" />
          </XStack>
          <Image
            source={require("@/assets/images/img_icon_timer_1_2_10.png")}
            h={24}
            mt={28}
            mr={10}
            w={24}
            objectFit="cover"
          />
          <Text mt={4} mr={10} fos="$1" fow="400">
            {label}
          </Text>
          <Image
            source={require("@/assets/images/img_icon_timer_1_2_24x24.png")}
            h={24}
            mt={10}
            mr={10}
            w={24}
            objectFit="cover"
          />
          <Text mt={4} mr={10} fos="$1" fow="400">
            {label1}
          </Text>
          <ZStack h="$8" mt={10} boc="$main" borderWidth={2} bs="solid" w="10%" ac="center" br="$10">
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
          <Image
            source={require("@/assets/images/img_icon_timer_1_2_8.png")}
            h={24}
            mt={12}
            mr={10}
            w={24}
            objectFit="cover"
          />
          <Text mt={4} fos="$1" fow="400">
            Slideshow
          </Text>
          <Image
            source={require("@/assets/images/img_icon_timer_1_2_9.png")}
            h={24}
            mt={10}
            mr={10}
            w={24}
            objectFit="cover"
          />
          <Text mt={4} mr={4} fos="$1" fow="400">
            Slowmo
          </Text>
          <XStack mt={256} gap="$9" als="stretch" jc="flex-end" ai="center" mx={6}>
            <Image source={require("@/assets/images/img_image_6.png")} h="$8" w={40} objectFit="cover" br="$10" />
            <Image source={require("@/assets/images/img_image_7.png")} h="$12" w={56} objectFit="cover" br="$13" />
            <ZStack h={72} boc="$white_0" borderWidth={2} bs="solid" f={1} ac="center" br="$15">
              <Image
                source={require("@/assets/images/img_ellipse_23.png")}
                h={60}
                w={60}
                objectFit="cover"
                m="auto"
                br="$14"
              />
            </ZStack>
            <Image source={require("@/assets/images/img_image_56x56.png")} h="$12" w={56} objectFit="cover" br="$13" />
            <Image source={require("@/assets/images/img_image_40x40.png")} h="$8" w={40} objectFit="cover" br="$10" />
          </XStack>
        </YStack>
      </ImageBackground>
    </ZStack>
  );
}
