import { useRouter, useLocalSearchParams } from "expo-router";

import { List } from "../../components";
import React from "react";
import { Image, YStack } from "tamagui";

const data = [
  { property1Default: require("@/assets/images/img_property_1_default.png") },
  { property1Default: require("@/assets/images/img_property_1_default_266x166.png") },
  { property1Default: require("@/assets/images/img_property_1_default_1.png") },
  { property1Default: require("@/assets/images/img_icon_camera.png") },
  { property1Default: require("@/assets/images/img_property_1_default.png") },
  { property1Default: require("@/assets/images/img_property_1_default_290x166.png") },
  { property1Default: require("@/assets/images/img_property_1_default_2.png") },
  { property1Default: require("@/assets/images/img_property_1_default_3.png") },
  { property1Default: require("@/assets/images/img_property_1_default_4.png") },
  { property1Default: require("@/assets/images/img_property_1_default.png") },
  { property1Default: require("@/assets/images/img_property_1_default_5.png") },
  { property1Default: require("@/assets/images/img_property_1_default_6.png") },
];

export default function TemplatePage() {
  const router = useRouter();
  const { initial } = useLocalSearchParams();
  React.useEffect(() => {
    // trigger splash effect only when redirected from `index`.
    if (!initial) return;

    const id = setTimeout(() => {
      router.replace("/cameraeffectone");
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <List
        data={data}
        numColumns={5}
        renderItem={(props, style) => {
          const { item, index } = props;
          return <Image source={item.property1Default} h={266} objectFit="contain" br="$8" style={style} f={1} />;
        }}
        style={{ height: "100%", flex: 1 }}
      />
    </YStack>
  );
}
