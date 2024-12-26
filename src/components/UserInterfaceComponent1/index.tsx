import { StackProps } from "tamagui";
import { Text, Button } from "./..";
import { View, YStack, XStack, Image, ZStack } from "tamagui";

interface Props extends StackProps {
  className?: string;
  userImage?: ReturnType<typeof require>;
  closeIcon?: ReturnType<typeof require>;
  timerText?: React.ReactNode;
  doneButtonText?: string;
  progressStartTime?: React.ReactNode;
  progressEndTime?: React.ReactNode;
}

export default function UserInterfaceComponent1({
  userImage = require("@/assets/images/img_property_1_default_28.png"),
  closeIcon = require("@/assets/images/img_icon_add.png"),
  timerText,
  doneButtonText,
  progressStartTime = "01:23",
  progressEndTime = "02:45",
  ...props
}: Props) {
  return (
    <ZStack {...props}>
      <Image source={userImage} h={666} f={1} w="100%" objectFit="cover" br="$12" />
      <YStack ai="center" pos="absolute" l={0} b={0} r={0} t={0} h="100%" jc="center" w="100%" px={2} mx={10} my="auto">
        <XStack ml={2} als="stretch" jc="space-between" ai="center">
          <Image source={closeIcon} h={24} w={24} objectFit="cover" />
          {!!timerText ? (
            <Text size="button_default" fos="$4" fow="400">
              {timerText}
            </Text>
          ) : null}
          {!!doneButtonText ? (
            <Button size="md" shape="round" colorScheme="white_0" miw={64}>
              {doneButtonText}
            </Button>
          ) : null}
        </XStack>
        <YStack mt={24} als="stretch" ai="flex-end">
          <Image source={require("@/assets/images/img_icon_timer_1_2.png")} h={24} mr={6} w={24} objectFit="cover" />
          <Text mt={4} fos="$1" fow="400">
            Replace
          </Text>
          <Image
            source={require("@/assets/images/img_icon_timer_1_2_white_0.png")}
            h={24}
            mt={14}
            mr={6}
            w={24}
            objectFit="cover"
          />
          <Text mt={4} mr={6} fos="$1" fow="400">
            Crop
          </Text>
        </YStack>
        <Button
          size="8xl"
          shape="circle"
          icon={<Image source={require("@/assets/images/img_property_1_play.png")} w={48} h="$11" />}
          mt={124}
          boc="$black"
          borderWidth={1}
          w={80}
          br="$16"
        />
        <XStack mt={254} ml={2} gap="$11" als="stretch" jc="center" ai="center">
          <Text size="button_small" fos="$3" fow="400">
            {progressStartTime}
          </Text>
          <YStack boc="$black" borderWidth={1} bs="solid" bg="$color_black_900_cc" f={1} ai="flex-start" br="$5">
            <YStack bg="$white_0" w="68%" ai="flex-end" br="$4">
              <View h={6} bg="$main" w={6} br="$3" />
            </YStack>
          </YStack>
          <Text size="button_small" fos="$3" fow="400">
            {progressEndTime}
          </Text>
        </XStack>
      </YStack>
    </ZStack>
  );
}
