import getBrandLogoHorizontal from "@/components/brand/logo/horizontal";
import getBrandLogoStacked from "@/components/brand/logo/stacked";

import { EnumColorHex, EnumColorVariant } from "@/types/Color";
import { ImageGenerationConfig } from "@/types/Config";

export const STACKED_LOGO_VARIANTS: ImageGenerationConfig[] = [
  {
    id: "logo-stacked-dark",
    name: "Logo_Stacked_Dark.png",
    folder: "Logo/Stacked",
    variant: EnumColorVariant.DARK,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-light",
    name: "Logo_Stacked_Light.png",
    folder: "Logo/Stacked",
    variant: EnumColorVariant.LIGHT,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-blue",
    name: "Logo_Stacked_Blue.png",
    folder: "Logo/Stacked",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-green",
    name: "Logo_Stacked_Green.png",
    folder: "Logo/Stacked",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-yellow",
    name: "Logo_Stacked_Yellow.png",
    folder: "Logo/Stacked",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-red",
    name: "Logo_Stacked_Red.png",
    folder: "Logo/Stacked",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandLogoStacked,
  },
];

export const HORIZONTAL_LOGO_VARIANTS: ImageGenerationConfig[] = [
  {
    id: "logo-horizontal-dark",
    name: "Logo_Horizontal_Dark.png",
    folder: "Logo/Horizontal",
    variant: EnumColorVariant.DARK,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-light",
    name: "Logo_Horizontal_Light.png",
    folder: "Logo/Horizontal",
    variant: EnumColorVariant.LIGHT,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-blue",
    name: "Logo_Horizontal_Blue.png",
    folder: "Logo/Horizontal",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-green",
    name: "Logo_Horizontal_Green.png",
    folder: "Logo/Horizontal",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-yellow",
    name: "Logo_Horizontal_Yellow.png",
    folder: "Logo/Horizontal",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-red",
    name: "Logo_Horizontal_Red.png",
    folder: "Logo/Horizontal",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandLogoHorizontal,
  },
];
