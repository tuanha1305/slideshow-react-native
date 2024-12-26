import { Button, Text, List } from "../../components";
import { Stack } from "expo-router";
import { Image, YStack, ZStack, XStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const data = [
  { property1Default: require("@/assets/images/img_property_1_default_296x170.png") },
  { property1Default: require("@/assets/images/img_property_1_default_7.png") },
  { property1Default: require("@/assets/images/img_property_1_default_8.png") },
  { property1Default: require("@/assets/images/img_property_1_default_9.png") },
];

export default function ProjectPage() {
  return (
    <ZStack ac="center" f={1}>
      <YStack h="100%" boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
        <ZStack h="100%" f={1}>
          <List
            data={data}
            numColumns={2}
            renderItem={(props, style) => {
              const { item, index } = props;
              return <Image source={item.property1Default} h={296} objectFit="contain" br="$8" style={style} f={1} />;
            }}
            gap={14}
            contentContainerStyle={{ justifyContent: "center" }}
            style={{
              height: "100%",
              position: "absolute",
              bottom: -40,
              right: 0,
              left: 0,
              width: "100%",
              marginHorizontal: 10,
            }}
          />
          <LinearGradient
            pos="absolute"
            t={0}
            l={0}
            r={0}
            w="100%"
            h={116}
            als="topCenter"
            mx="auto"
            colors={["#00000099", "#00000099", "#00000099", "#00000099", "#00000099"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          >
            <Stack.Screen
              options={{
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                headerBackVisible: false,
                header: () => {
                  return (
                    <XStack dsp="flex" ai="center" py="$10">
                      <Text
                        size="headline_h6"
                        tag="h6"
                        mt={20}
                        mb={72}
                        ff="$PoppinsSemiBold"
                        fos="$4"
                        fow="600"
                        f={1}
                        ta="center"
                      >
                        My Project
                      </Text>
                    </XStack>
                  );
                },
              }}
            />
          </LinearGradient>
        </ZStack>
        <LinearGradient
          h={136}
          colors={["#00000000", "#00000049", "#00000090", "#000000c3", "#000000"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <XStack jc="space-between" ai="center" px={52} py={28}>
            <Button
              size="5xl"
              shape="circle"
              colorScheme="white_0"
              icon={<Image source={require("@/assets/images/img_icon_home_1.png")} w={24} h={24} />}
              ml={6}
              w={48}
              br="$12"
            />
            <ZStack h="$13" bg="$white_0" w="30%" ac="center" br="$16">
              <Button
                size="6xl"
                shape="circle"
                colorScheme="black"
                icon={<Image source={require("@/assets/images/img_icon_add.png")} w={24} h={24} />}
                w={56}
                m="auto"
                br="$13"
              />
            </ZStack>
            <YStack boc="$main" borderWidth={3} bs="solid" w="22%" br="$14" />
          </XStack>
        </LinearGradient>
      </YStack>
      <Button
        colorScheme="white_0"
        icon={<Image source={require("@/assets/images/img_icon_profile_2user.png")} w={24} h={24} />}
        h="$11"
        als="bottomRight"
        w={48}
        objectFit="contain"
        pos="absolute"
        b="9%"
        r="16%"
        m="auto"
        br="$12"
      />
    </ZStack>
  );
}
