import { createFont, createTamagui, createTokens } from "@tamagui/core";
import { shorthands } from "@tamagui/shorthands";
import { config as defaultConfig } from "@tamagui/config/v3";
import { color, radius, space, size } from "./src/theme/index.ts";

const fontSizes = { "1": 9, "2": 12, "3": 14, "4": 16, "5": 28 };

const createAppFont = (familyName: string) => {
  return createFont({
    family: familyName,
    size: fontSizes as any,
  });
};

const PoppinsSemiBold = createAppFont("Poppins-SemiBold");
const PoppinsMedium = createAppFont("Poppins-Medium");
const PoppinsRegular = createAppFont("Poppins-Regular");

const config = createTamagui({
  ...defaultConfig,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: { body: PoppinsMedium, heading: PoppinsMedium, PoppinsSemiBold, PoppinsMedium, PoppinsRegular },
  tokens: createTokens({ ...defaultConfig.tokens, color, radius, space, size }),
});

export type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export { config };
