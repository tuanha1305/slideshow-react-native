import { Text, List } from "../../components";
import { Stack } from "expo-router";
import { View, YStack, Image, XStack, ZStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const data = [
  { property1Default: require("@/assets/images/img_property_1_default_196x112.png") },
  { property1Default: require("@/assets/images/img_property_1_default_37.png") },
  { property1Default: require("@/assets/images/img_property_1_default_38.png") },
  { property1Default: require("@/assets/images/img_property_1_default_39.png") },
  { property1Default: require("@/assets/images/img_property_1_default_40.png") },
  { property1Default: require("@/assets/images/img_property_1_default_41.png") },
  { property1Default: require("@/assets/images/img_property_1_default_42.png") },
  { property1Default: require("@/assets/images/img_property_1_default_43.png") },
  { property1Default: require("@/assets/images/img_property_1_default_44.png") },
];

export default function CollagePage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ZStack h="100%" f={1}>
        <List
          data={data}
          numColumns={3}
          renderItem={(props, style) => {
            const { item, index } = props;
            return <Image source={item.property1Default} h={196} objectFit="contain" br="$7" style={style} f={1} />;
          }}
          gap={10}
          contentContainerStyle={{ justifyContent: "center" }}
          style={{
            height: "100%",
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
            width: "100%",
            marginHorizontal: 8,
            marginVertical: "auto",
          }}
        />
        <LinearGradient
          pos="absolute"
          t={0}
          l={0}
          r={0}
          w="100%"
          h={116}
          als="center"
          mx="auto"
          colors={["#00000099", "#00000099", "#00000099", "#00000099", "#00000099"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <Stack.Screen
            options={{
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              header: () => {
                return (
                  <XStack dsp="flex" ai="center" py="$10">
                    <Image
                      source={require("@/assets/images/img_icon_arrow_left_white_0.png")}
                      h={24}
                      ml={16}
                      w={24}
                      objectFit="cover"
                      mr="auto"
                      maw="100%"
                    />
                    <Text
                      size="small"
                      tag="h6"
                      mt={20}
                      mb={72}
                      ff="$PoppinsSemiBold"
                      fos="$4"
                      fow="600"
                      f={1}
                      mr={1}
                      ta="center"
                    >
                      Collage
                    </Text>
                    <Image
                      source={require("@/assets/images/img_icon_add.png")}
                      h={24}
                      mr={15}
                      w={24}
                      objectFit="cover"
                      ml="auto"
                      maw="100%"
                    />
                  </XStack>
                );
              },
            }}
          />
        </LinearGradient>
      </ZStack>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
