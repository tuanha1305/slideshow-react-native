import { styled, Heading } from "tamagui";

const MyHeading = styled(Heading, {
  color: "",
  ff: "",
  tt: "none",
  variants: {
    size: { headline_h3: {}, headline_h6: {} },
  } as const,
  defaultVariants: {},
});
export default MyHeading;
