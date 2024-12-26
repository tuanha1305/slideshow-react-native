import UserInterfaceComponent2 from "../../components/UserInterfaceComponent2";
import { Image, YStack, ZStack, ScrollView } from "tamagui";

export default function EditTextOnePage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <ZStack h={768} f={1}>
          <UserInterfaceComponent2
            userImage={require("@/assets/images/img_property_1_default_51.png")}
            playIconButton={true}
            h={666}
            als="topCenter"
            f={1}
            pos="relative"
            br="$12"
          />
          <YStack
            h="100%"
            pt={160}
            bg="$color_black_900_99"
            pos="absolute"
            l={0}
            b={0}
            r={0}
            t={0}
            jc="center"
            w="100%"
            px="$4"
            m="auto"
          >
            <YStack mb={262} ai="flex-end">
              <Image source={require("@/assets/images/img_image_186x116.png")} h={186} w="48%" objectFit="contain" />
            </YStack>
          </YStack>
        </ZStack>
      </ScrollView>
    </YStack>
  );
}
