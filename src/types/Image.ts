export type ImageDimensions = {
  width: number;
  height: number;
};

export enum EnumImageVariant {
  NORMAL = "normal",
  CUSTOM_IMAGE_TRANSPARENT = "custom_image_transparent",
  CUSTOM_IMAGE_URL = "custom_image_url",
}

export function getImageVariantSuffix(imageVariant: EnumImageVariant): string {
  switch (imageVariant) {
    case EnumImageVariant.NORMAL:
      return "";
    case EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT:
    case EnumImageVariant.CUSTOM_IMAGE_URL:
      return "_transparent";
    default:
      throw new Error(`Unknown image variant: ${imageVariant}`);
  }
}
