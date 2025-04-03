import { EnumColorHex, EnumColorVariant } from "@/types/Color";
import { ImageDimensions } from "@/types/Image";
import generateGoogleSansFontStyles from "@/utils/common/generateGoogleSansFontStyles";
import ReactDOMServer from "react-dom/server";

const CONFIG = {
  positions: {
    locationText: {
      top: 996,
      left: 140,
      rightPadding: 100,
    },
  },
  font: {
    size: 100,
    lineHeight: 1.2,
    family: "Google Sans",
    weight: "normal",
  },
};

function Element({
  location,
  variant,
  dimensions,
  fontColor,
}: {
  location: string;
  variant: EnumColorVariant;
  dimensions: ImageDimensions;
  fontColor: EnumColorHex;
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
      <img
        src={`${process.env.BASE_URL}/images/base/brand/logo/stacked/${variant}/base_image.png`}
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

export default function getBrandLogoStacked({
  location,
  variant,
  dimensions,
  fontColor,
}: {
  location: string;
  variant: EnumColorVariant;
  dimensions: ImageDimensions;
  fontColor: EnumColorHex;
}) {
  const componentHtml = ReactDOMServer.renderToStaticMarkup(
    <Element
      location={location}
      variant={variant}
      dimensions={dimensions}
      fontColor={fontColor}
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
