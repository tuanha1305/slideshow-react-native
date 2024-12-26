import { StackProps } from "tamagui";
import { Button } from "./..";
import { Image, XStack } from "tamagui";

interface Props extends StackProps {
  className?: string;
  downloadButtonText?: string;
}

export default function SocialMediaButtons({ downloadButtonText = "Download", ...props }: Props) {
  return (
    <XStack {...props}>
      <Button size="4xl" colorScheme="white_0" miw={96} br="$11">
        {downloadButtonText}
      </Button>
      <Button
        size="3xl"
        shape="circle"
        colorScheme="blue_A400"
        icon={<Image source={require("@/assets/images/img_social_facebook.png")} w={22} h={22} />}
        w={44}
        br="$11"
      />
      <Button
        size="3xl"
        shape="circle"
        colorScheme="yellow_A200"
        icon={<Image source={require("@/assets/images/img_social_snapchat.png")} w={42} h="$9" />}
        w={44}
        br="$11"
      />
      <Button
        size="3xl"
        shape="circle"
        colorScheme="red_A700"
        icon={<Image source={require("@/assets/images/img_youtube.png")} w={22} h="$3" />}
        w={44}
        br="$11"
      />
      <Button
        size="3xl"
        shape="circle"
        colorScheme="pink_A400"
        icon={<Image source={require("@/assets/images/img_social_instagram.png")} w={22} h={22} />}
        w={44}
        br="$11"
      />
      <Button
        size="3xl"
        shape="circle"
        colorScheme="black"
        icon={<Image source={require("@/assets/images/img_social_tiktok.png")} w={24} h="$5" />}
        boc="$blue_gray_900"
        borderWidth={1}
        w={44}
        br="$11"
      />
      <Button
        size="3xl"
        shape="circle"
        colorScheme="blue_500"
        icon={<Image source={require("@/assets/images/img_social_twitter.png")} w={22} h="$4" />}
        w={44}
        br="$11"
      />
      <Image source={require("@/assets/images/img_social_telegram.png")} h="$10" w={44} objectFit="cover" />
      <Image source={require("@/assets/images/img_social_whatsapp.png")} h="$10" w={44} objectFit="cover" />
    </XStack>
  );
}
