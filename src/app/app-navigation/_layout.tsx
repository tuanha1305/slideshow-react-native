import React from "react";
import { FlatList, TouchableOpacity, ListRenderItem } from "react-native";
import { useRouter, Stack } from "expo-router";
import { Text, YStack } from "tamagui";

const routes = [
  "template",
  "project",
  "preview",
  "album",
  "cameraeffect",
  "cameraeffectone",
  "cameraboomerang",
  "cameraboomerangone",
  "cameraboomerangtwo",
  "cameracollage",
  "cameracollageone",
  "cameracollagetwo",
  "cameraslideshow",
  "cameraslideshowone",
  "cameraslideshowtwo",
  "cameraslowmo",
  "cameraslowmoone",
  "editadjust",
  "editadjustone",
  "editadjusttwo",
  "collage",
  "editeffect",
  "editeffectone",
  "editfilter",
  "editfilterone",
  "edittransition",
  "edittransitionone",
  "editmusic",
  "editmusicone",
  "editmusictwo",
  "editsticker",
  "editstickerone",
  "editstickertwo",
  "edittext",
  "edittextone",
  "edittexttwo",
  "edittextthree",
  "editcanvas",
  "editcanvasone",
  "export",
] as const;

export default function AppNavigation() {
  const router = useRouter();

  const renderItem: ListRenderItem<(typeof routes)[number]> = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/${item}`)}
      style={{
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen options={{ headerTitle: "Available Routes" }} />
      <YStack flex={1}>
        <FlatList
          style={{ flex: 1 }}
          data={routes}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </YStack>
    </>
  );
}
