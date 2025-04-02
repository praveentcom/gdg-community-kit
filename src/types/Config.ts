import { EnumColorHex, EnumColorVariant } from "./Color";
import { ImageDimensions } from "./Image";

export type ImageGenerationConfig = {
  id: string;
  name: string;
  folder: string;
  variant: EnumColorVariant;
  dimensions: ImageDimensions;
  fontColor: EnumColorHex;
  bgImage?: string | null;
  generator: ({
    location,
    variant,
    dimensions,
    fontColor,
    bgImage,
  }: {
    location: string;
    variant: EnumColorVariant;
    dimensions: ImageDimensions;
    fontColor: EnumColorHex;
    bgImage?: string | null;
  }) => string;
};
