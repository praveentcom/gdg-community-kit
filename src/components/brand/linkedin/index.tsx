import { EnumColorHex, EnumColorVariant } from "@/types/Color";
import {
  ImageDimensions,
  EnumImageVariant,
  getImageVariantSuffix,
} from "@/types/Image";
import ReactDOMServer from "react-dom/server";

const CONFIG = {
  positions: {
    locationText: {
      top: 296,
      left: 636,
      rightPadding: 25,
    },
    customImage: {
      top: 35,
      left: 1380,
      width: 820,
      height: 300,
    },
  },
  font: {
    size: 36,
    lineHeight: 1.2,
    family: "Google Sans",
    weight: "normal",
  },
};

function Element({
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
}) {
  const { positions, font } = CONFIG;

  return (
    <div
      style={{
        height: `${dimensions.height}px`,
        width: `${dimensions.width}px`,
        position: "relative",
      }}
    >
      {customImageUrl &&
        imageVariant === EnumImageVariant.CUSTOM_IMAGE_URL &&
        CONFIG.positions.customImage && (
          <img
            src={customImageUrl}
            alt="Custom Image"
            style={{
              width: `${CONFIG.positions.customImage.width}px`,
              height: `${CONFIG.positions.customImage.height}px`,
              objectFit: "cover",
              position: "absolute",
              top: `${CONFIG.positions.customImage.top}px`,
              left: `${CONFIG.positions.customImage.left}px`,
            }}
          />
        )}
      <img
        src={`${process.env.BASE_URL}/images/base/brand/linkedin/${colorVariant}/base_image${getImageVariantSuffix(imageVariant)}.png`}
        alt="Brand Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${positions.locationText.left}px`,
          top: `${positions.locationText.top}px`,
          right: `${positions.locationText.rightPadding}px`,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <p
          style={{
            color: fontColor,
            fontSize: `${font.size}px`,
            fontWeight: font.weight,
            fontFamily: font.family,
            margin: 0,
            lineHeight: font.lineHeight,
            wordBreak: "break-word",
          }}
        >
          {location}
        </p>
      </div>
    </div>
  );
}

export default function getBrandLinkedInBanner({
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
}) {
  const componentHtml = ReactDOMServer.renderToStaticMarkup(
    <Element
      location={location}
      colorVariant={colorVariant}
      dimensions={dimensions}
      fontColor={fontColor}
      imageVariant={imageVariant}
      customImageUrl={customImageUrl}
    />,
  );

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            html, body {
                margin: 0;
                padding: 0;
                height: ${dimensions.height}px;
                width: ${dimensions.width}px;
                overflow: hidden;
            }
        </style>
        </head>
        <body>
        ${componentHtml}
        </body>
    </html>`;

  return fullHtml;
}
