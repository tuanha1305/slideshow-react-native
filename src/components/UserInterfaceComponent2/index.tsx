import { StackProps } from "tamagui";
import { Button, Text } from "./..";
import { Stack } from "expo-router";
import { CircularProgress } from "react-native-circular-progress";
import { Separator, View, XStack, ScrollView, Image, ZStack, YStack } from "tamagui";

interface Props extends StackProps {
  className?: string;
  userImage?: ReturnType<typeof require>;
  playIconButton?: string;
  progressText?: React.ReactNode;
  timericon1?: string;
  adjustLabel?: React.ReactNode;
  timericon2?: string;
  effectLabel?: React.ReactNode;
  timericon3?: string;
  presetLabel?: React.ReactNode;
  timericon4?: string;
  transitionLabel?: React.ReactNode;
  ellipse31?: boolean;
  group213iconbutton?: string;
  group214iconbutton?: string;
  rectangle75?: boolean;
  rectangle76?: boolean;
  rectangle77?: boolean;
  rectangle78?: boolean;
  rectangle79?: boolean;
  rectangle80?: boolean;
  rectangle81?: boolean;
  rectangle82?: boolean;
  rectangle83?: boolean;
  rectangle84?: boolean;
  rectangle85?: boolean;
  rectangle86?: boolean;
  rectangle87?: boolean;
  rectangle88?: boolean;
  rectangle89?: boolean;
  rectangle90?: boolean;
  rectangle91?: boolean;
  rectangle92?: boolean;
  rectangle93?: boolean;
  rectangle94?: boolean;
  rectangle95?: boolean;
  rectangle96?: boolean;
  rectangle97?: boolean;
  rectangle98?: boolean;
  rectangle99?: boolean;
  rectangle101?: boolean;
  rectangle103?: boolean;
  rectangle105?: boolean;
  rectangle107?: boolean;
  rectangle109?: boolean;
  rectangle111?: boolean;
  rectangle113?: boolean;
  rectangle115?: boolean;
  rectangle117?: boolean;
  rectangle119?: boolean;
  rectangle121?: boolean;
  rectangle100?: boolean;
  rectangle102?: boolean;
  rectangle104?: boolean;
  rectangle106?: boolean;
  rectangle108?: boolean;
  rectangle110?: boolean;
  rectangle112?: boolean;
  rectangle114?: boolean;
  rectangle116?: boolean;
  rectangle118?: boolean;
  rectangle120?: boolean;
}

export default function UserInterfaceComponent2({
  userImage = require("@/assets/images/img_property_1_default_48.png"),
  playIconButton,
  progressText,
  timericon1,
  adjustLabel,
  timericon2,
  effectLabel,
  timericon3,
  presetLabel,
  timericon4,
  transitionLabel,
  ellipse31,
  group213iconbutton,
  group214iconbutton,
  rectangle75,
  rectangle76,
  rectangle77,
  rectangle78,
  rectangle79,
  rectangle80,
  rectangle81,
  rectangle82,
  rectangle83,
  rectangle84,
  rectangle85,
  rectangle86,
  rectangle87,
  rectangle88,
  rectangle89,
  rectangle90,
  rectangle91,
  rectangle92,
  rectangle93,
  rectangle94,
  rectangle95,
  rectangle96,
  rectangle97,
  rectangle98,
  rectangle99,
  rectangle101,
  rectangle103,
  rectangle105,
  rectangle107,
  rectangle109,
  rectangle111,
  rectangle113,
  rectangle115,
  rectangle117,
  rectangle119,
  rectangle121,
  rectangle100,
  rectangle102,
  rectangle104,
  rectangle106,
  rectangle108,
  rectangle110,
  rectangle112,
  rectangle114,
  rectangle116,
  rectangle118,
  rectangle120,
  ...props
}: Props) {
  return (
    <ZStack {...props}>
      <Image source={userImage} h={666} f={1} w="100%" objectFit="cover" br="$12" />
      <YStack pt={32} gap="$12" pos="absolute" l={0} b={0} r={0} t={0} h="100%" jc="center" w="100%" m="auto">
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTransparent: true,
            header: () => {
              return (
                <XStack dsp="flex" h="$6" ai="center" px="$7">
                  <XStack f={1} ai="center">
                    <Image
                      source={require("@/assets/images/img_icon_add.png")}
                      h={24}
                      w={24}
                      objectFit="cover"
                      maw="100%"
                    />
                    <XStack f={1} jc="center" ai="center">
                      <XStack pr={56} gap="$5" f={1} jc="flex-end">
                        <Text size="button_default" fos="$4" fow="400">
                          00:00
                        </Text>
                        <Text size="button_default" color="$white_1" fos="$4" fow="400">
                          00:00
                        </Text>
                      </XStack>
                      <Button size="md" shape="round" colorScheme="white_0" miw={64}>
                        Done
                      </Button>
                    </XStack>
                  </XStack>
                </XStack>
              );
            },
          }}
        />
        <YStack gap="$9" ai="center" mx={10}>
          <XStack als="stretch" ai="flex-start">
            <YStack gap="$15" als="flex-end" f={1} ai="flex-end">
              {!!playIconButton ? (
                <Button
                  size="8xl"
                  shape="circle"
                  icon={<Image source={require("@/assets/images/img_property_1_play.png")} w={48} h="$11" />}
                  boc="$black"
                  borderWidth={1}
                  w={80}
                  br="$16"
                />
              ) : null}
              <ZStack h="$12" mr={10} w="26%" ac="center">
                <CircularProgress
                  size={56}
                  fill={65}
                  rotation={360}
                  backgroundColor="#000000cc"
                  tintColor="#ffa800"
                  width={4}
                  backgroundWidth={50}
                  boc="$black"
                  borderWidth={1}
                  bs="solid"
                  f={1}
                  br="$13"
                />
                {!!progressText ? (
                  <Text
                    size="button_small"
                    fos="$3"
                    fow="400"
                    pos="absolute"
                    l={0}
                    b={0}
                    r={0}
                    t={0}
                    h="100%"
                    jc="center"
                    ai="center"
                    w="max-content"
                    m="auto"
                  >
                    {progressText}
                  </Text>
                ) : null}
              </ZStack>
            </YStack>
            <YStack mb={36} w="12%" ai="center">
              {!!timericon1 ? <Image source={timericon1} h={24} w={24} objectFit="cover" /> : null}
              {!!adjustLabel ? (
                <Text mt={4} fos="$1" fow="400">
                  {adjustLabel}
                </Text>
              ) : null}
              {!!timericon2 ? <Image source={timericon2} h={24} mt={10} w={24} objectFit="cover" /> : null}
              {!!effectLabel ? (
                <Text mt={4} fos="$1" fow="400">
                  {effectLabel}
                </Text>
              ) : null}
              {!!timericon3 ? <Image source={timericon3} h={24} mt={10} w={24} objectFit="cover" /> : null}
              {!!presetLabel ? (
                <Text mt={4} fos="$1" fow="400">
                  {presetLabel}
                </Text>
              ) : null}
              {!!timericon4 ? <Image source={timericon4} h={24} mt={10} w={24} objectFit="cover" /> : null}
              {!!transitionLabel ? (
                <Text mt={4} fos="$1" fow="400">
                  {transitionLabel}
                </Text>
              ) : null}
              <ZStack h="$8" mt={10} ml={2} boc="$main" borderWidth={2} bs="solid" als="stretch" ac="center" br="$10">
                {!!ellipse31 ? <View h="$6" bg="$white_0" w={32} m="auto" br="$8" /> : null}
                <Image
                  source={require("@/assets/images/img_icon_music.png")}
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
                source={require("@/assets/images/img_icon_timer_1_2_4.png")}
                h={24}
                mt={12}
                w={24}
                objectFit="cover"
              />
              <Text mt={4} fos="$1" fow="400">
                Sticker
              </Text>
              <Image
                source={require("@/assets/images/img_icon_timer_1_2_5.png")}
                h={24}
                mt={10}
                w={24}
                objectFit="cover"
              />
              <Text mt={4} fos="$1" fow="400">
                Text
              </Text>
              <Image
                source={require("@/assets/images/img_icon_timer_1_2_white_0.png")}
                h={24}
                mt={10}
                w={24}
                objectFit="cover"
              />
              <Text mt={4} fos="$1" fow="400">
                Canvas
              </Text>
            </YStack>
          </XStack>
          <XStack gap="$6" jc="center" ai="center" px="$1">
            {!!group213iconbutton ? (
              <Button
                shape="circle"
                icon={<Image source={require("@/assets/images/img_group_213_white_0.png")} w={20} h={20} />}
                boc="$black"
                borderWidth={1}
                w={36}
                px="$3"
                br="$9"
              />
            ) : null}
            <XStack
              gap="$1"
              boc="$black"
              borderWidth={1}
              bs="solid"
              bg="$color_black_900_cc"
              jc="center"
              py="$3"
              br="$6"
            >
              <Image source={require("@/assets/images/img_frame_208.png")} h="$3" w="14%" objectFit="contain" />
              <Image source={require("@/assets/images/img_frame_208.png")} h="$3" w="14%" objectFit="contain" />
              <Image source={require("@/assets/images/img_frame_208.png")} h="$3" w="14%" objectFit="contain" />
              <Image source={require("@/assets/images/img_frame_208.png")} h="$3" w="14%" objectFit="contain" />
              <Image source={require("@/assets/images/img_frame_208.png")} h="$3" w="14%" objectFit="contain" />
              <Image source={require("@/assets/images/img_frame_208.png")} h="$3" w="14%" objectFit="contain" />
              <Image source={require("@/assets/images/img_frame_208.png")} h="$3" w="14%" objectFit="contain" />
            </XStack>
            {!!group214iconbutton ? (
              <Button
                shape="circle"
                icon={<Image source={require("@/assets/images/img_group_214.png")} w={20} h={20} />}
                boc="$black"
                borderWidth={1}
                w={36}
                px="$3"
                br="$9"
              />
            ) : null}
          </XStack>
        </YStack>
        <ScrollView horizontal als="flex-start">
          <XStack gap="$2" f={1} jc="center" ai="center">
            {!!rectangle75 ? <Separator h={24} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle76 ? <Separator h={24} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle77 ? <Separator h="$11" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle78 ? <Separator h={34} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle79 ? <View h="$3" bg="$main" w={4} br="$2" /> : null}
            {!!rectangle80 ? <Separator h={54} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle81 ? <Separator h="$5" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle82 ? <Separator h={46} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle83 ? <Separator h={34} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle84 ? <Separator h="$6" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle85 ? <Separator h="$3" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle86 ? <Separator h={34} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle87 ? <Separator h="$10" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle88 ? <Separator h={24} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle89 ? <Separator h="$9" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle90 ? <Separator h={52} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle91 ? <Separator h="$5" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle92 ? <View h={10} bg="$main" w={4} br="$2" /> : null}
            {!!rectangle93 ? <Separator h={38} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle94 ? <Separator h="$11" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle95 ? <Separator h="$9" brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle96 ? <Separator h={20} brw={4} als="stretch" boc="$main" br="$2" vertical /> : null}
            {!!rectangle97 ? <Separator h={46} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle98 ? <Separator h="$10" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle99 ? <Separator h={24} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle101 ? <Separator h="$7" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle103 ? <Separator h={50} als="stretch" brw={4} boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle105 ? <Separator h="$12" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle107 ? <Separator h={20} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle109 ? <Separator h={24} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle111 ? <Separator h="$6" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle113 ? <Separator h="$4" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle115 ? <Separator h={22} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle117 ? <Separator h={26} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle119 ? <Separator h={54} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle121 ? <Separator h={46} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle100 ? <Separator h={30} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle102 ? <Separator h="$7" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle104 ? <Separator h={46} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle106 ? <Separator h="$11" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle108 ? <Separator h={24} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle110 ? <View h="$3" bg="$white_0" w={4} br="$2" /> : null}
            {!!rectangle112 ? <Separator h="$4" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle114 ? <Separator h={26} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle116 ? <Separator h="$6" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle118 ? <Separator h="$9" brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
            {!!rectangle120 ? <Separator h={50} brw={4} als="stretch" boc="$white_0" br="$2" vertical /> : null}
          </XStack>
        </ScrollView>
      </YStack>
    </ZStack>
  );
}
