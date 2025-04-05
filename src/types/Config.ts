import { EnumColorHex, EnumColorVariant } from "./Color";
import { ImageDimensions, EnumImageVariant } from "./Image";

export type ImageGenerationConfig = {
  id: string;
  name: string;
  folder: string;
  colorVariant: EnumColorVariant;
  dimensions: ImageDimensions;
  fontColor: EnumColorHex;
  imageVariant: EnumImageVariant;
  generator: ({
    location,
    colorVariant,
    dimensions,
    fontColor,
    imageVariant,
    customImageUrl,
  }: {
    location: string;
    colorVariant: EnumColorVariant;
    dimensions: ImageDimensions;
    fontColor: EnumColorHex;
    imageVariant: EnumImageVariant;
    customImageUrl: string;
  }) => string;
};
