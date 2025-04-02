import { EnumColorHex, EnumColorVariant } from "./Color";
import { ImageDimensions } from "./Image";

export type ImageGenerationConfig = {
  id: string;
  name: string;
  folder: string;
  variant: EnumColorVariant;
  dimensions: ImageDimensions;
  fontColor: EnumColorHex;
  generator: ({
    location,
    variant,
    dimensions,
    fontColor,
  }: {
    location: string;
    variant: EnumColorVariant;
    dimensions: ImageDimensions;
    fontColor: EnumColorHex;
  }) => string;
};
