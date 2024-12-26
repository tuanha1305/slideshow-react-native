import { StackProps } from "tamagui";
import { Image, ZStack, XStack } from "tamagui";

interface Props extends StackProps {
  className?: string;
  userimage2?: ReturnType<typeof require>;
  userProfilePhoto?: ReturnType<typeof require>;
}

export default function UserProfile({
  userimage2 = require("@/assets/images/img_image_8.png"),
  userProfilePhoto = require("@/assets/images/img_ellipse_23_60x60.png"),
  ...props
}: Props) {
  return (
    <XStack {...props}>
      <Image source={require("@/assets/images/img_image_6.png")} h="$8" w={40} objectFit="cover" br="$10" />
      <Image source={userimage2} h="$12" w={56} objectFit="cover" br="$13" />
      <ZStack h={72} boc="$white_0" borderWidth={2} bs="solid" f={1} ac="center" br="$15">
        <Image source={userProfilePhoto} h={60} w={60} objectFit="cover" m="auto" br="$14" />
      </ZStack>
      <Image source={require("@/assets/images/img_image_56x56.png")} h="$12" w={56} objectFit="cover" br="$13" />
      <Image source={require("@/assets/images/img_image_40x40.png")} h="$8" w={40} objectFit="cover" br="$10" />
    </XStack>
  );
}
