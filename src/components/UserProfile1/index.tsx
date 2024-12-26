import { StackProps } from "tamagui";
import { Button } from "./..";
import { Image, YStack, XStack, ZStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

interface Props extends StackProps {
  className?: string;
  rectangleImage?: string;
  doneButtonText?: string;
}

export default function UserProfile1({ rectangleImage, doneButtonText = "Done", ...props }: Props) {
  return (
    <XStack {...props}>
      <LinearGradient w="26%" h={68} colors={["#00000000", "#000000"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
        <ZStack pl="$8" ac="center" h="100%">
          <Image source={require("@/assets/images/img_icon_camera_change.png")} h="$5" w={28} objectFit="cover" />
        </ZStack>
      </LinearGradient>
      <XStack f={1} jc="flex-end" ai="center">
        {!!rectangleImage ? <Image source={rectangleImage} h="$5" w={28} objectFit="cover" br="$6" /> : null}
        <XStack w="62%" jc="center" ai="center" px={52}>
          <LinearGradient f={1} colors={["#00000000", "#000000"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
            <YStack ai="flex-end" jc="center" px="$8" py="$9">
              <Button size="md" shape="round" colorScheme="white_0" miw={56}>
                {doneButtonText}
              </Button>
            </YStack>
          </LinearGradient>
          <Image source={require("@/assets/images/img_rectangle_70.png")} h="$5" w={28} objectFit="cover" br="$6" />
        </XStack>
      </XStack>
    </XStack>
  );
}
