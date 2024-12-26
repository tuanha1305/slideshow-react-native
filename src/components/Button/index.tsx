import { cloneElement, forwardRef } from "react";
import { styled, GetProps } from "@tamagui/core";
import { View, type Button as TButton } from "tamagui";
import Text from "../Text";

import type { ElementRef, Ref } from "react";

type BaseProps = {
  variant?: "outline" | "fill";
  size?: "xl" | "4xl" | "7xl" | "2xl" | "5xl" | "xs" | "sm" | "8xl" | "3xl" | "md" | "6xl" | "lg";
  shape?: "square" | "round" | "circle";
  icon?: React.ReactElement;
  iconAfter?: React.ReactElement;
  colorScheme?: string;
};
type TextProps = Omit<GetProps<typeof TButton.Text>, keyof BaseProps>;
type FrameProps = Omit<GetProps<typeof Base>, keyof TextProps>;
type Props = FrameProps & TextProps & BaseProps;

const textColors: any = {
  outline: {},
  fill: {
    white_0: "$black",
  },
};

const textSizes: Record<NonNullable<Props["size"]>, any> = {
  xl: "$3",
  "4xl": "$3",
  "7xl": undefined,
  "2xl": "$3",
  "5xl": undefined,
  xs: undefined,
  sm: undefined,
  "8xl": undefined,
  "3xl": undefined,
  md: "$3",
  "6xl": undefined,
  lg: undefined,
};

const Button = (props: Props, ref: Ref<ElementRef<typeof Base>>) => {
  const {
    variant = "fill",
    shape,
    size = "lg",
    children,
    icon,
    iconAfter,
    fontWeight = "400",
    colorScheme = "black_900_cc",
    ls,
    fow,
    ...buttonProps
  } = props;
  const iconOnly = !children && Boolean(icon);
  const textColor = textColors[variant]?.[colorScheme as string];
  const textSize = textSizes[size];

  return (
    <Base
      ref={ref}
      variant={variant}
      shape={shape}
      size={size}
      iconOnly={iconOnly}
      colorScheme={colorScheme}
      {...buttonProps}
    >
      {icon
        ? cloneElement(icon, {
            color: iconOnly ? textColor : (icon.props.color ?? textColor),
          })
        : null}
      <Text color={textColor} size={textSize} ls={ls} fow={fow} ff="$PoppinsMedium">
        {children}
      </Text>
      {iconAfter ? cloneElement(iconAfter, { color: iconAfter.props.color ?? textColor }) : null}
    </Base>
  );
};

const MyButton = forwardRef(Button);

const Base = styled(View, {
  name: "Button",
  role: "button",
  bg: "transparent",
  dsp: "flex",
  fd: "row",
  ai: "center",
  jc: "center",
  pressStyle: { opacity: 0.8, scale: 0.99 },
  variants: {
    size: {
      xl: {
        h: "$7",
        px: 26,
      },
      "4xl": {
        h: "$10",
        px: "$4",
      },
      "7xl": {
        h: 72,
        px: "$10",
      },
      "2xl": {
        h: "$8",
        px: "$3",
      },
      "5xl": {
        h: "$11",
        px: "$6",
      },
      xs: {
        h: "$3",
      },
      sm: {
        h: 24,
      },
      "8xl": {
        h: "$13",
        px: "$8",
      },
      "3xl": {
        h: "$9",
        px: "$3",
      },
      md: {
        h: "$6",
        px: "$6",
      },
      "6xl": {
        h: "$12",
        px: "$8",
      },
      lg: {
        h: "$7",
      },
    },
    variant: {
      outline: (_, { props }: { props: any }) => {
        const { colorScheme } = props;
        const colorCombinations = {
          white_0: {
            boc: "$white_0",
            borderWidth: 2,
            bs: "solid",
          },
          main: {
            boc: "$main",
            borderWidth: 2,
            bs: "solid",
          },
        };
        return colorScheme ? colorCombinations[colorScheme as keyof typeof colorCombinations] : undefined;
      },
      fill: (_, { props }: { props: any }) => {
        const { colorScheme } = props;
        const colorCombinations = {
          black_900_99: {
            bg: "$color_black_900_99",
          },
          blue_A400: {
            bg: "$blue_a400",
          },
          yellow_A200: {
            bg: "$yellow_a200",
          },
          red_A700: {
            bg: "$red_a700",
          },
          pink_A400: {
            bg: "$pink_a400",
          },
          black: {
            bg: "$black",
          },
          blue_500: {
            bg: "$blue_500",
          },
          white_0: {
            bg: "$white_0",
            color: "$black",
          },
          black_900_cc: {
            bg: "$color_black_900_cc",
          },
        };
        return colorScheme ? colorCombinations[colorScheme as keyof typeof colorCombinations] : undefined;
      },
    },
    shape: {
      square: {
        br: 0,
      },
      round: {
        br: "$8",
      },
      circle: {
        br: 999,
      },
    },
    iconOnly: {
      true: {
        gap: 0,
        padding: 0,
        aspectRatio: 1,
      },
    },
    colorScheme: {} as Record<string, any>,
  } as const,
  defaultVariants: {
    variant: "fill",
    size: "lg",
    colorScheme: "black_900_cc",
  },
});
export default MyButton;
export type { Props as ButtonProps };
