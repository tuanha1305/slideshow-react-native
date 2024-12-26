import { StackProps } from "tamagui";
import { Text } from "./..";
import { Image, ZStack, XStack, ScrollView } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

interface Props extends StackProps {
  className?: string;
  normalTagText?: React.ReactNode;
  marliTagText?: React.ReactNode;
  koreanTagText?: React.ReactNode;
  springtagtext1?: React.ReactNode;
  springtagtext2?: React.ReactNode;
  summertagtext1?: React.ReactNode;
  summertagtext2?: React.ReactNode;
}

export default function ImageGalleryWithTags({
  normalTagText = "NORMAL",
  marliTagText = "MARLI",
  koreanTagText = "KOREAN",
  springtagtext1 = "SPRING",
  springtagtext2 = "SPRING",
  summertagtext1 = "SUMMER",
  summertagtext2 = "SUMMER",
  ...props
}: Props) {
  return (
    <XStack {...props}>
      <LinearGradient w="26%" h={68} colors={["#00000000", "#000000"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
        <ZStack pl="$8" ac="center" h="100%">
          <Image source={require("@/assets/images/img_icon_camera_change.png")} h="$5" w={28} objectFit="cover" />
        </ZStack>
      </LinearGradient>
      <XStack f={1} jc="space-between" ai="center">
        <ScrollView horizontal f={1}>
          <XStack f={1} jc="flex-end">
            <Text size="button_mini" color="$main" fos="$2" fow="400">
              {normalTagText}
            </Text>
            <Text size="button_mini" color="$gray" ml={20} fos="$2" fow="400">
              {marliTagText}
            </Text>
            <Text size="button_mini" color="$gray" ml={20} fos="$2" fow="400">
              {koreanTagText}
            </Text>
            <Text size="button_mini" color="$gray" ml={20} fos="$2" fow="400">
              {springtagtext1}
            </Text>
            <Text size="button_mini" color="$gray" ml={20} fos="$2" fow="400">
              {springtagtext2}
            </Text>
            <Text size="button_mini" color="$gray" ml={20} fos="$2" fow="400">
              {summertagtext1}
            </Text>
            <Text size="button_mini" color="$gray" ml={20} fos="$2" fow="400">
              {summertagtext2}
            </Text>
          </XStack>
        </ScrollView>
        <LinearGradient
          w="34%"
          h={68}
          colors={["#00000000", "#000000"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <ZStack pr="$8" ac="center" h="100%">
            <Image
              source={require("@/assets/images/img_group_white_0_32x32.png")}
              h="$6"
              w={32}
              objectFit="cover"
              ml="auto"
            />
          </ZStack>
        </LinearGradient>
      </XStack>
    </XStack>
  );
}
