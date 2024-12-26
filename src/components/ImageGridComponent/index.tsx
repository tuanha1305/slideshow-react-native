import { StackProps } from "tamagui";
import { Image, ZStack, XStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

interface Props extends StackProps {
  className?: string;
  gridimage1?: string;
  gridimage2?: string;
  gridimage3?: string;
  gridimage4?: ReturnType<typeof require>;
  gridimage5?: string;
  gridimage6?: string;
  gridimage7?: string;
  cameraIcon?: string;
  groupImage?: string;
}

export default function ImageGridComponent({
  gridimage1,
  gridimage2,
  gridimage3,
  gridimage4 = require("@/assets/images/img_grid_2_2_white_0.png"),
  gridimage5,
  gridimage6,
  gridimage7,
  cameraIcon,
  groupImage,
  ...props
}: Props) {
  return (
    <ZStack {...props}>
      <XStack gap="$6" jc="center" pos="absolute" l={0} b={0} r={0} t={0} h="100%" ai="center" px={52} m="auto">
        {!!gridimage1 ? <Image source={gridimage1} h="$5" w={28} objectFit="cover" /> : null}
        {!!gridimage2 ? <Image source={gridimage2} h="$5" w={28} objectFit="cover" /> : null}
        {!!gridimage3 ? <Image source={gridimage3} h="$5" w={28} objectFit="cover" /> : null}
        <Image source={gridimage4} h="$5" w={28} objectFit="cover" />
        {!!gridimage5 ? <Image source={gridimage5} h="$5" w={28} objectFit="cover" /> : null}
        {!!gridimage6 ? <Image source={gridimage6} h="$5" w={28} objectFit="cover" /> : null}
        {!!gridimage7 ? <Image source={gridimage7} h="$5" w={28} objectFit="cover" /> : null}
      </XStack>
      <XStack h="100%" jc="center" ai="center" pos="absolute" l={0} b={0} r={0} t={0} w="100%" m="auto">
        <LinearGradient
          w="24%"
          h={68}
          colors={["#00000000", "#000000"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <ZStack pl="$7" ac="center" h="100%">
            {!!cameraIcon ? <Image source={cameraIcon} h="$5" w={28} objectFit="cover" /> : null}
          </ZStack>
        </LinearGradient>
        <LinearGradient
          w="30%"
          h={68}
          colors={["#00000000", "#000000"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <ZStack pr="$8" ac="center" h="100%">
            {!!groupImage ? <Image source={groupImage} h="$6" w={32} objectFit="cover" ml="auto" /> : null}
          </ZStack>
        </LinearGradient>
      </XStack>
    </ZStack>
  );
}
