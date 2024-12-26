import { styled, Text } from "tamagui";

const MyText = styled(Text, {
  color: "$white_0",
  ff: "$PoppinsMedium",
  variants: {
    size: {
      small: {},
      xs: {},
      tiny: {},
      button_default: {},
      button_mini: {},
      button_small: {},
      "...": (value) => {
        return {
          fos: value,
          fow: "400",
        };
      },
    },
  } as const,
  defaultVariants: {
    size: "xs",
  },
});
export default MyText;
