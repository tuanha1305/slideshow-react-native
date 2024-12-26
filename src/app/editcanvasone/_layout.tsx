import BottomBar from "../../components/BottomBar";
import { YStack } from "tamagui";

export default function EditCanvasOne() {
  return (
    <YStack boc="$black" borderWidth={6} bs="solid" bg="$black" f={1}>
      <BottomBar />
    </YStack>
  );
}
