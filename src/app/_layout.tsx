import { Stack } from "expo-router";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import { Provider } from "@/provider";
import useAppFonts from "@/hooks/useAppFonts";
import "../styles/font.css";

/** @see https://docs.expo.dev/router/advanced/router-settings/#initialroutename */
export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  useAppFonts();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Provider>
          <Stack>
            <Stack.Screen name="template" options={{ headerShown: false }} />
            <Stack.Screen name="project" />
            <Stack.Screen name="preview" options={{ headerShown: false }} />
            <Stack.Screen name="album" />
            <Stack.Screen name="cameraeffect" options={{ headerShown: false }} />
            <Stack.Screen name="cameraeffectone" options={{ headerShown: false }} />
            <Stack.Screen name="cameraboomerang" options={{ headerShown: false }} />
            <Stack.Screen name="cameraboomerangone" options={{ headerShown: false }} />
            <Stack.Screen name="cameraboomerangtwo" options={{ headerShown: false }} />
            <Stack.Screen name="cameracollage" options={{ headerShown: false }} />
            <Stack.Screen name="cameracollageone" options={{ headerShown: false }} />
            <Stack.Screen name="cameracollagetwo" options={{ headerShown: false }} />
            <Stack.Screen name="cameraslideshow" options={{ headerShown: false }} />
            <Stack.Screen name="cameraslideshowone" options={{ headerShown: false }} />
            <Stack.Screen name="cameraslideshowtwo" options={{ headerShown: false }} />
            <Stack.Screen name="cameraslowmo" options={{ headerShown: false }} />
            <Stack.Screen name="cameraslowmoone" options={{ headerShown: false }} />
            <Stack.Screen name="editadjust" options={{ headerShown: false }} />
            <Stack.Screen name="editadjustone" options={{ headerShown: false }} />
            <Stack.Screen name="editadjusttwo" options={{ headerShown: false }} />
            <Stack.Screen name="collage" />
            <Stack.Screen name="editeffect" options={{ headerShown: false }} />
            <Stack.Screen name="editeffectone" options={{ headerShown: false }} />
            <Stack.Screen name="editfilter" options={{ headerShown: false }} />
            <Stack.Screen name="editfilterone" options={{ headerShown: false }} />
            <Stack.Screen name="edittransition" options={{ headerShown: false }} />
            <Stack.Screen name="edittransitionone" options={{ headerShown: false }} />
            <Stack.Screen name="editmusic" options={{ headerShown: false }} />
            <Stack.Screen name="editmusicone" options={{ headerShown: false }} />
            <Stack.Screen name="editmusictwo" options={{ headerShown: false }} />
            <Stack.Screen name="editsticker" options={{ headerShown: false }} />
            <Stack.Screen name="editstickerone" options={{ headerShown: false }} />
            <Stack.Screen name="editstickertwo" options={{ headerShown: false }} />
            <Stack.Screen name="edittext" options={{ headerShown: false }} />
            <Stack.Screen name="edittextone" options={{ headerShown: false }} />
            <Stack.Screen name="edittexttwo" options={{ headerShown: false }} />
            <Stack.Screen name="edittextthree" options={{ headerShown: false }} />
            <Stack.Screen name="editcanvas" options={{ headerShown: false }} />
            <Stack.Screen name="editcanvasone" options={{ headerShown: false }} />
            <Stack.Screen name="export" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </Provider>
      </View>
    </GestureHandlerRootView>
  );
}
