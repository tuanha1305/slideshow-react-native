import { StackProps } from "tamagui";
import { Text } from "./..";
import { XStack, Image } from "tamagui";

interface Props extends StackProps {
  className?: string;
  songTitle?: React.ReactNode;
  startTime?: React.ReactNode;
  endTime?: React.ReactNode;
}

export default function MusicPlayer({
  songTitle = "Pick Up Your Feelings",
  startTime = "00:00",
  endTime = "00:00",
  ...props
}: Props) {
  return (
    <XStack {...props}>
      <XStack gap="$6" f={1} ai="center">
        <Image source={require("@/assets/images/img_icon_music_white_0.png")} h={20} w={20} objectFit="cover" />
        <Text size="button_mini" fos="$2" fow="400">
          {songTitle}
        </Text>
      </XStack>
      <XStack gap="$5" jc="flex-end">
        <Text size="button_default" fos="$4" fow="400">
          {startTime}
        </Text>
        <Text size="button_default" color="$white_1" fos="$4" fow="400">
          {endTime}
        </Text>
      </XStack>
    </XStack>
  );
}
