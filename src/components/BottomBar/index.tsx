import { StackProps } from "tamagui";
import NavigatorFragment from "../NavigatorFragment";
import TemplateOne from "../TemplateOne";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { XStack, Image, View } from "tamagui";

const tabData = [
  { icon: require("@/assets/images/img_image.png") },
  { icon: require("@/assets/images/img_image_36x36.png") },
  { icon: require("@/assets/images/img_image_1.png") },
  { icon: require("@/assets/images/img_image_2.png") },
  { icon: require("@/assets/images/img_image_45.png") },
  { icon: require("@/assets/images/img_image_16.png") },
  { icon: require("@/assets/images/img_image_5.png") },
  { icon: require("@/assets/images/img_group_510.png") },
];
const Tab = createBottomTabNavigator();
const TabFallBack = () => <XStack />;
interface Props extends StackProps {
  className?: string;
}

export default function BottomBar({ ...props }: Props) {
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        tabBar={(tabProps) => {
          return (
            <XStack jc="space-between" ai="center" h={68} {...props}>
              {tabProps.state.routes.map((route, index) => {
                const onPress = () => {
                  const event = tabProps.navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (tabProps.state.index !== index && !event.defaultPrevented) {
                    tabProps.navigation.navigate(route.name);
                  }
                };
                return (
                  <React.Fragment key={route.name}>
                    {tabProps.state.index === index ? (
                      <View ai="center" f={1} onPress={onPress}>
                        <Image
                          source={tabData[index].icon}
                          h="$7"
                          bg=""
                          objectFit="contain"
                          w={36}
                          br="$6"
                          tintColor="undefined"
                        />
                      </View>
                    ) : (
                      <View ai="center" f={1} onPress={onPress}>
                        <Image
                          source={tabData[index].icon}
                          h="$7"
                          bg=""
                          objectFit="contain"
                          w={36}
                          br="$6"
                          tintColor="undefined"
                        />
                      </View>
                    )}
                  </React.Fragment>
                );
              })}
            </XStack>
          );
        }}
      >
        <Tab.Screen name="Tab" component={NavigatorFragment} />
        <Tab.Screen name="Tab1" component={TabFallBack} />
        <Tab.Screen name="Tab2" component={TabFallBack} />
        <Tab.Screen name="Tab3" component={TabFallBack} />
        <Tab.Screen name="Tab4" component={TabFallBack} />
        <Tab.Screen name="Tab5" component={TabFallBack} />
        <Tab.Screen name="Tab6" component={TabFallBack} />
        <Tab.Screen name="Tab7" component={TemplateOne} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
