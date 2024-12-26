import { Button, Text, List } from "../../components";
import { Stack } from "expo-router";
import { View, YStack, XStack, Image, ScrollView } from "tamagui";

const data = [
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_10.png") },
  { property1Default: require("@/assets/images/img_property_1_default_11.png") },
  { property1Default: require("@/assets/images/img_property_1_default_12.png") },
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_13.png") },
  { property1Default: require("@/assets/images/img_property_1_default_14.png") },
  { property1Default: require("@/assets/images/img_property_1_default_15.png") },
  { property1Default: require("@/assets/images/img_property_1_default_16.png") },
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_17.png") },
  { property1Default: require("@/assets/images/img_property_1_default_18.png") },
  { property1Default: require("@/assets/images/img_property_1_default_19.png") },
  { property1Default: require("@/assets/images/img_property_1_default_20.png") },
  { property1Default: require("@/assets/images/img_property_1_default_21.png") },
  { property1Default: require("@/assets/images/img_property_1_default_22.png") },
  { property1Default: require("@/assets/images/img_property_1_default_23.png") },
  { property1Default: require("@/assets/images/img_property_1_default_24.png") },
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_92x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_38x92.png") },
  { property1Default: require("@/assets/images/img_property_1_default_25.png") },
  { property1Default: require("@/assets/images/img_property_1_default_26.png") },
  { property1Default: require("@/assets/images/img_property_1_default_27.png") },
];

export default function AlbumPage() {
  return (
    <YStack pt={56} boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTransparent: true,
          header: () => {
            return (
              <XStack dsp="flex" h="$12" ai="center" py="$8">
                <Image
                  source={require("@/assets/images/img_icon_arrow_left_white_0.png")}
                  h={24}
                  ml={16}
                  w={24}
                  objectFit="cover"
                  mr="auto"
                  maw="100%"
                />
                <Text size="small" tag="h6" ff="$PoppinsSemiBold" fos="$4" fow="600" f={1} mr={1} ta="center">
                  Album
                </Text>
                <Image
                  source={require("@/assets/images/img_icon_camera.png")}
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <List
            data={data}
            numColumns={4}
            scrollEnabled={false}
            renderItem={(props, style) => {
              const { item, index } = props;
              return <Image source={item.property1Default} h={92} objectFit="cover" style={style} f={1} />;
            }}
            gap={2}
            contentContainerStyle={{ justifyContent: "center" }}
            style={{ marginTop: 4 }}
          />
          <XStack bg="$black" jc="space-between" ai="center" px="$8" py="$7">
            <Text size="button_default" color="$gray" fos="$4" fow="400">
              8 photos selected
            </Text>
            <Button size="2xl" colorScheme="white_0" miw={80} br="$10">
              Start
            </Button>
          </XStack>
        </YStack>
      </ScrollView>
      <YStack bg="$black" ai="center" py="$7">
        <View h={2} bg="$white_0" w={40} br="$1" />
      </YStack>
    </YStack>
  );
}
