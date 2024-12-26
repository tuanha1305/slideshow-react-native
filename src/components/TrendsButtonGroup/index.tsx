import { StackProps } from "tamagui";
import { Text } from "./..";
import { Image, XStack } from "tamagui";

interface Props extends StackProps {
  className?: string;
  trendsText?: React.ReactNode;
  marliText?: React.ReactNode;
  koreanText?: React.ReactNode;
  springText?: React.ReactNode;
  summerText?: React.ReactNode;
}

export default function TrendsButtonGroup({
  trendsText = "TRENDS",
  marliText = "MARLI",
  koreanText = "KOREAN",
  springText = "SPRING",
  summerText = "SUMMER",
  ...props
}: Props) {
  return (
    <XStack {...props}>
      <Text size="button_mini" fos="$2" fow="400">
        {trendsText}
      </Text>
      <Text size="button_mini" fos="$2" fow="400">
        {marliText}
      </Text>
      <Text size="button_mini" fos="$2" fow="400">
        {koreanText}
      </Text>
      <Text size="button_mini" color="$main" fos="$2" fow="400">
        {springText}
      </Text>
      <Text size="button_mini" fos="$2" fow="400">
        {summerText}
      </Text>
      <Image source={require("@/assets/images/img_icon_search.png")} h={18} w={18} objectFit="cover" />
    </XStack>
  );
}
