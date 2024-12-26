import { StackProps } from "tamagui";
import { Text } from "./..";
import { ImageBackground } from "react-native";
import { Image, ZStack, XStack, View, YStack } from "tamagui";

interface Props extends StackProps {
  className?: string;
  mainImage?: ReturnType<typeof require>;
  timericon1?: string;
  label?: React.ReactNode;
  ellipse31?: boolean;
  image1?: string;
  image2?: string;
  ellipseImage?: string;
  image3?: string;
  image4?: string;
}

export default function ImageGallery({
  mainImage = require("@/assets/images/img_property_1_default_30.png"),
  timericon1,
  label,
  ellipse31,
  image1,
  image2,
  ellipseImage,
  image3,
  image4,
  ...props
}: Props) {
  return (
    <ZStack {...props}>
      <Image source={mainImage} h={666} f={1} w="100%" objectFit="cover" br="$12" />
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
        source={require("@/assets/images/img_group_383.png")}
      >
        <YStack pt="$8" ai="center" jc="center" px="$3">
          <XStack mt={4} als="stretch" jc="space-between" mx={6}>
            <Image source={require("@/assets/images/img_icon_flash_1_1.png")} h={24} w={24} objectFit="cover" />
            <Image source={require("@/assets/images/img_icon_grid_1_1_main.png")} h={24} w={24} objectFit="cover" />
            <Image source={require("@/assets/images/img_icon_timer.png")} h={24} w={24} objectFit="cover" />
            <Image source={require("@/assets/images/img_icon_add.png")} h={24} w={24} objectFit="cover" />
          </XStack>
          {!!timericon1 ? <Image source={timericon1} h={24} mt={28} mr={10} w={24} objectFit="cover" /> : null}
          {!!label ? (
            <Text mt={4} mr={10} fos="$1" fow="400">
              {label}
            </Text>
          ) : null}
          <ZStack h="$8" mt={10} boc="$main" borderWidth={2} bs="solid" w="10%" ac="center" br="$10">
            {!!ellipse31 ? <View h="$6" bg="$white_0" w={32} m="auto" br="$8" /> : null}
            <Image
              source={require("@/assets/images/img_icon_boomerang.png")}
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
            source={require("@/assets/images/img_icon_timer_1_2_white_0_24x24.png")}
            h={24}
            mt={12}
            mr={10}
            w={24}
            objectFit="cover"
          />
          <Text mt={4} mr={4} fos="$1" fow="400">
            Collage
          </Text>
          <Image
            source={require("@/assets/images/img_icon_timer_1_2_8.png")}
            h={24}
            mt={10}
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
            {!!image1 ? <Image source={image1} h="$8" w={40} objectFit="cover" br="$10" /> : null}
            {!!image2 ? <Image source={image2} h="$12" w={56} objectFit="cover" br="$13" /> : null}
            <ZStack h={72} boc="$white_0" borderWidth={2} bs="solid" f={1} ac="center" br="$15">
              {!!ellipseImage ? (
                <Image source={ellipseImage} h={60} w={60} objectFit="cover" m="auto" br="$14" />
              ) : null}
            </ZStack>
            {!!image3 ? <Image source={image3} h="$12" w={56} objectFit="cover" br="$13" /> : null}
            {!!image4 ? <Image source={image4} h="$8" w={40} objectFit="cover" br="$10" /> : null}
          </XStack>
        </YStack>
      </ImageBackground>
    </ZStack>
  );
}
