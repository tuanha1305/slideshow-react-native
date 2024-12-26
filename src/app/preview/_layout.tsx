import { Button, Text } from "../../components";
import ImageGallery from "../../components/ImageGallery";
import { View, YStack, XStack, ScrollView } from "tamagui";

export default function PreviewPage() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1}>
          <ImageGallery
            mainImage={require("@/assets/images/img_property_1_default_666x374.png")}
            h={666}
            pt="$12"
            pos="relative"
          />
          <XStack bg="$black" jc="center" ai="center" px="$8" py="$6">
            <YStack f={1} ai="flex-start">
              <Text size="headline_h6" tag="h6" ff="$PoppinsSemiBold" fos="$4" fow="600">
                Food & Joy
              </Text>
              <Text size="button_mini" color="$gray" fos="$2" fow="400">
                Chiling on the beach
              </Text>
            </YStack>
            <Button size="2xl" colorScheme="white_0" miw={120} br="$10">
              Use Template
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
