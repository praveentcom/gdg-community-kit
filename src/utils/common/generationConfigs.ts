import getBrandBevyBanner from "@/components/brand/bevy-banner";
import getBrandBlogCover1024x512 from "@/components/brand/blog-cover/1024x512";
import getBrandBlogCover2500x744 from "@/components/brand/blog-cover/2500x744";
import getBrandEmailHeader from "@/components/brand/email-header";
import getBrandLandingBanner1440x499 from "@/components/brand/landing-banners/1440x499";
import getBrandLandingBanner2500x471 from "@/components/brand/landing-banners/2500x471";
import getBrandLandingBanner640x500 from "@/components/brand/landing-banners/640x500";
import getBrandLinkedInBanner from "@/components/brand/linkedin";
import getBrandLogoHorizontal from "@/components/brand/logo/horizontal";
import getBrandLogoStacked from "@/components/brand/logo/stacked";
import getBrandTwitterBanner from "@/components/brand/twitter";
import getBrandWebsiteBanner1440x499 from "@/components/brand/website-banners/1440x499";
import getBrandWebsiteBanner2500x471 from "@/components/brand/website-banners/2500x471";
import getBrandWebsiteBanner640x500 from "@/components/brand/website-banners/640x500";

import { EnumColorHex, EnumColorVariant } from "@/types/Color";
import { ImageGenerationConfig } from "@/types/Config";
import { EnumImageVariant } from "@/types/Image";

export const STACKED_LOGO_VARIANTS: ImageGenerationConfig[] = [
  {
    id: "logo-stacked-dark",
    name: "Logo_Stacked_Dark.png",
    folder: "Logo/Stacked",
    colorVariant: EnumColorVariant.DARK,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-light",
    name: "Logo_Stacked_Light.png",
    folder: "Logo/Stacked",
    colorVariant: EnumColorVariant.LIGHT,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-blue",
    name: "Logo_Stacked_Blue.png",
    folder: "Logo/Stacked",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-green",
    name: "Logo_Stacked_Green.png",
    folder: "Logo/Stacked",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-yellow",
    name: "Logo_Stacked_Yellow.png",
    folder: "Logo/Stacked",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoStacked,
  },
  {
    id: "logo-stacked-red",
    name: "Logo_Stacked_Red.png",
    folder: "Logo/Stacked",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 960,
      height: 1330,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoStacked,
  },
];

export const HORIZONTAL_LOGO_VARIANTS: ImageGenerationConfig[] = [
  {
    id: "logo-horizontal-dark",
    name: "Logo_Horizontal_Dark.png",
    folder: "Logo/Horizontal",
    colorVariant: EnumColorVariant.DARK,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-light",
    name: "Logo_Horizontal_Light.png",
    folder: "Logo/Horizontal",
    colorVariant: EnumColorVariant.LIGHT,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-blue",
    name: "Logo_Horizontal_Blue.png",
    folder: "Logo/Horizontal",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-green",
    name: "Logo_Horizontal_Green.png",
    folder: "Logo/Horizontal",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-yellow",
    name: "Logo_Horizontal_Yellow.png",
    folder: "Logo/Horizontal",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoHorizontal,
  },
  {
    id: "logo-horizontal-red",
    name: "Logo_Horizontal_Red.png",
    folder: "Logo/Horizontal",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1920,
      height: 390,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLogoHorizontal,
  },
];

export const BEVY_BANNER: ImageGenerationConfig[] = [
  {
    id: "bevy-banner-blue",
    name: "Bevy_Banner_Blue.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-green",
    name: "Bevy_Banner_Green.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-yellow",
    name: "Bevy_Banner_Yellow.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-red",
    name: "Bevy_Banner_Red.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBevyBanner,
  },
];

export const BEVY_BANNER_SKELETON: ImageGenerationConfig[] = [
  {
    id: "bevy-banner-skeleton-blue",
    name: "Bevy_Banner_Skeleton_Blue.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-skeleton-green",
    name: "Bevy_Banner_Skeleton_Green.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-skeleton-yellow",
    name: "Bevy_Banner_Skeleton_Yellow.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-skeleton-red",
    name: "Bevy_Banner_Skeleton_Red.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandBevyBanner,
  },
];

export const BEVY_BANNER_CUSTOM_IMAGE: ImageGenerationConfig[] = [
  {
    id: "bevy-banner-custom-image-blue",
    name: "Bevy_Banner_Custom_Image_Blue.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-custom-image-green",
    name: "Bevy_Banner_Custom_Image_Green.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-custom-image-yellow",
    name: "Bevy_Banner_Custom_Image_Yellow.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-custom-image-red",
    name: "Bevy_Banner_Custom_Image_Red.png",
    folder: "Bevy Banner",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandBevyBanner,
  },
];

export const LANDING_BANNER_640x500: ImageGenerationConfig[] = [
  {
    id: "landing-banner-640x500-blue",
    name: "Landing_Banner_640x500_Blue.png",
    folder: "Landing Banner/640x500",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner640x500,
  },
  {
    id: "landing-banner-640x500-green",
    name: "Landing_Banner_640x500_Green.png",
    folder: "Landing Banner/640x500",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner640x500,
  },
  {
    id: "landing-banner-640x500-yellow",
    name: "Landing_Banner_640x500_Yellow.png",
    folder: "Landing Banner/640x500",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner640x500,
  },
  {
    id: "landing-banner-640x500-red",
    name: "Landing_Banner_640x500_Red.png",
    folder: "Landing Banner/640x500",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner640x500,
  },
];

export const LANDING_BANNER_1440x499: ImageGenerationConfig[] = [
  {
    id: "landing-banner-1440x499-blue",
    name: "Landing_Banner_1440x499_Blue.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-green",
    name: "Landing_Banner_1440x499_Green.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-yellow",
    name: "Landing_Banner_1440x499_Yellow.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-red",
    name: "Landing_Banner_1440x499_Red.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner1440x499,
  },
];

export const LANDING_BANNER_2500x471: ImageGenerationConfig[] = [
  {
    id: "landing-banner-2500x471-blue",
    name: "Landing_Banner_2500x471_Blue.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-green",
    name: "Landing_Banner_2500x471_Green.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-yellow",
    name: "Landing_Banner_2500x471_Yellow.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-red",
    name: "Landing_Banner_2500x471_Red.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLandingBanner2500x471,
  },
];

export const LANDING_BANNER_1440x499_SKELETON: ImageGenerationConfig[] = [
  {
    id: "landing-banner-1440x499-skeleton-blue",
    name: "Landing_Banner_1440x499_Skeleton_Blue.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-skeleton-green",
    name: "Landing_Banner_1440x499_Skeleton_Green.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-skeleton-yellow",
    name: "Landing_Banner_1440x499_Skeleton_Yellow.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-skeleton-red",
    name: "Landing_Banner_1440x499_Skeleton_Red.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLandingBanner1440x499,
  },
];

export const LANDING_BANNER_2500x471_SKELETON: ImageGenerationConfig[] = [
  {
    id: "landing-banner-2500x471-skeleton-blue",
    name: "Landing_Banner_2500x471_Skeleton_Blue.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-skeleton-green",
    name: "Landing_Banner_2500x471_Skeleton_Green.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-skeleton-yellow",
    name: "Landing_Banner_2500x471_Skeleton_Yellow.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-skeleton-red",
    name: "Landing_Banner_2500x471_Skeleton_Red.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLandingBanner2500x471,
  },
];

export const LANDING_BANNER_1440x499_CUSTOM_IMAGE: ImageGenerationConfig[] = [
  {
    id: "landing-banner-1440x499-custom-image-blue",
    name: "Landing_Banner_1440x499_Custom_Image_Blue.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-custom-image-green",
    name: "Landing_Banner_1440x499_Custom_Image_Green.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-custom-image-yellow",
    name: "Landing_Banner_1440x499_Custom_Image_Yellow.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-custom-image-red",
    name: "Landing_Banner_1440x499_Custom_Image_Red.png",
    folder: "Landing Banner/1440x499",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLandingBanner1440x499,
  },
];

export const LANDING_BANNER_2500x471_CUSTOM_IMAGE: ImageGenerationConfig[] = [
  {
    id: "landing-banner-2500x471-custom-image-blue",
    name: "Landing_Banner_2500x471_Custom_Image_Blue.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-custom-image-green",
    name: "Landing_Banner_2500x471_Custom_Image_Green.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-custom-image-yellow",
    name: "Landing_Banner_2500x471_Custom_Image_Yellow.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-custom-image-red",
    name: "Landing_Banner_2500x471_Custom_Image_Red.png",
    folder: "Landing Banner/2500x471",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLandingBanner2500x471,
  },
];

export const BLOG_COVER_1024x512: ImageGenerationConfig[] = [
  {
    id: "blog-cover-1024x512-blue",
    name: "Blog_Cover_1024x512_Blue.png",
    folder: "Blog Cover/1024x512",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1024,
      height: 512,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBlogCover1024x512,
  },
  {
    id: "blog-cover-1024x512-green",
    name: "Blog_Cover_1024x512_Green.png",
    folder: "Blog Cover/1024x512",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1024,
      height: 512,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBlogCover1024x512,
  },
  {
    id: "blog-cover-1024x512-yellow",
    name: "Blog_Cover_1024x512_Yellow.png",
    folder: "Blog Cover/1024x512",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1024,
      height: 512,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBlogCover1024x512,
  },
  {
    id: "blog-cover-1024x512-red",
    name: "Blog_Cover_1024x512_Red.png",
    folder: "Blog Cover/1024x512",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1024,
      height: 512,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBlogCover1024x512,
  },
];

export const BLOG_COVER_2500x744: ImageGenerationConfig[] = [
  {
    id: "blog-cover-2500x744-blue",
    name: "Blog_Cover_2500x744_Blue.png",
    folder: "Blog Cover/2500x744",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 744,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBlogCover2500x744,
  },
  {
    id: "blog-cover-2500x744-green",
    name: "Blog_Cover_2500x744_Green.png",
    folder: "Blog Cover/2500x744",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 744,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBlogCover2500x744,
  },
  {
    id: "blog-cover-2500x744-yellow",
    name: "Blog_Cover_2500x744_Yellow.png",
    folder: "Blog Cover/2500x744",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 744,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBlogCover2500x744,
  },
  {
    id: "blog-cover-2500x744-red",
    name: "Blog_Cover_2500x744_Red.png",
    folder: "Blog Cover/2500x744",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 744,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandBlogCover2500x744,
  },
];

export const LINKEDIN_BANNER: ImageGenerationConfig[] = [
  {
    id: "linkedin-banner-blue",
    name: "LinkedIn_Banner_Blue.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-green",
    name: "LinkedIn_Banner_Green.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-yellow",
    name: "LinkedIn_Banner_Yellow.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-red",
    name: "LinkedIn_Banner_Red.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandLinkedInBanner,
  },
];

export const LINKEDIN_BANNER_SKELETON: ImageGenerationConfig[] = [
  {
    id: "linkedin-banner-skeleton-blue",
    name: "LinkedIn_Banner_Skeleton_Blue.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-skeleton-green",
    name: "LinkedIn_Banner_Skeleton_Green.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-skeleton-yellow",
    name: "LinkedIn_Banner_Skeleton_Yellow.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-skeleton-red",
    name: "LinkedIn_Banner_Skeleton_Red.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandLinkedInBanner,
  },
];

export const LINKEDIN_BANNER_CUSTOM_IMAGE: ImageGenerationConfig[] = [
  {
    id: "linkedin-banner-custom-image-blue",
    name: "LinkedIn_Banner_Custom_Image_Blue.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-custom-image-green",
    name: "LinkedIn_Banner_Custom_Image_Green.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-custom-image-yellow",
    name: "LinkedIn_Banner_Custom_Image_Yellow.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-custom-image-red",
    name: "LinkedIn_Banner_Custom_Image_Red.png",
    folder: "LinkedIn",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandLinkedInBanner,
  },
];

export const TWITTER_BANNER: ImageGenerationConfig[] = [
  {
    id: "twitter-banner-blue",
    name: "Twitter_Banner_Blue.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-green",
    name: "Twitter_Banner_Green.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-yellow",
    name: "Twitter_Banner_Yellow.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-red",
    name: "Twitter_Banner_Red.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandTwitterBanner,
  },
];

export const TWITTER_BANNER_SKELETON: ImageGenerationConfig[] = [
  {
    id: "twitter-banner-skeleton-blue",
    name: "Twitter_Banner_Skeleton_Blue.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-skeleton-green",
    name: "Twitter_Banner_Skeleton_Green.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-skeleton-yellow",
    name: "Twitter_Banner_Skeleton_Yellow.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-skeleton-red",
    name: "Twitter_Banner_Skeleton_Red.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandTwitterBanner,
  },
];

export const TWITTER_BANNER_CUSTOM_IMAGE: ImageGenerationConfig[] = [
  {
    id: "twitter-banner-custom-image-blue",
    name: "Twitter_Banner_Custom_Image_Blue.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-custom-image-green",
    name: "Twitter_Banner_Custom_Image_Green.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-custom-image-yellow",
    name: "Twitter_Banner_Custom_Image_Yellow.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-custom-image-red",
    name: "Twitter_Banner_Custom_Image_Red.png",
    folder: "Twitter",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandTwitterBanner,
  },
];

export const EMAIL_HEADER: ImageGenerationConfig[] = [
  {
    id: "email-header-blue",
    name: "Email_Header_Blue.png",
    folder: "Email Header",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1244,
      height: 388,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandEmailHeader,
  },
  {
    id: "email-header-green",
    name: "Email_Header_Green.png",
    folder: "Email Header",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1244,
      height: 388,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandEmailHeader,
  },
  {
    id: "email-header-yellow",
    name: "Email_Header_Yellow.png",
    folder: "Email Header",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1244,
      height: 388,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandEmailHeader,
  },
  {
    id: "email-header-red",
    name: "Email_Header_Red.png",
    folder: "Email Header",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1244,
      height: 388,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandEmailHeader,
  },
];

export const WEBSITE_BANNER_1440x499: ImageGenerationConfig[] = [
  {
    id: "website-banner-1440x499-blue",
    name: "Website_Banner_1440x499_Blue.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-green",
    name: "Website_Banner_1440x499_Green.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-yellow",
    name: "Website_Banner_1440x499_Yellow.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-red",
    name: "Website_Banner_1440x499_Red.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner1440x499,
  },
];

export const WEBSITE_BANNER_640x500: ImageGenerationConfig[] = [
  {
    id: "website-banner-640x500-blue",
    name: "Website_Banner_640x500_Blue.png",
    folder: "Website Banner/640x500",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner640x500,
  },
  {
    id: "website-banner-640x500-green",
    name: "Website_Banner_640x500_Green.png",
    folder: "Website Banner/640x500",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner640x500,
  },
  {
    id: "website-banner-640x500-yellow",
    name: "Website_Banner_640x500_Yellow.png",
    folder: "Website Banner/640x500",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner640x500,
  },
  {
    id: "website-banner-640x500-red",
    name: "Website_Banner_640x500_Red.png",
    folder: "Website Banner/640x500",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner640x500,
  },
];

export const WEBSITE_BANNER_2500x471: ImageGenerationConfig[] = [
  {
    id: "website-banner-2500x471-blue",
    name: "Website_Banner_2500x471_Blue.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-green",
    name: "Website_Banner_2500x471_Green.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-yellow",
    name: "Website_Banner_2500x471_Yellow.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-red",
    name: "Website_Banner_2500x471_Red.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.NORMAL,
    generator: getBrandWebsiteBanner2500x471,
  },
];

export const WEBSITE_BANNER_1440x499_SKELETON: ImageGenerationConfig[] = [
  {
    id: "website-banner-1440x499-skeleton-blue",
    name: "Website_Banner_1440x499_Skeleton_Blue.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-skeleton-green",
    name: "Website_Banner_1440x499_Skeleton_Green.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-skeleton-yellow",
    name: "Website_Banner_1440x499_Skeleton_Yellow.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-skeleton-red",
    name: "Website_Banner_1440x499_Skeleton_Red.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandWebsiteBanner1440x499,
  },
];

export const WEBSITE_BANNER_2500x471_SKELETON: ImageGenerationConfig[] = [
  {
    id: "website-banner-2500x471-skeleton-blue",
    name: "Website_Banner_2500x471_Skeleton_Blue.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-skeleton-green",
    name: "Website_Banner_2500x471_Skeleton_Green.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-skeleton-yellow",
    name: "Website_Banner_2500x471_Skeleton_Yellow.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-skeleton-red",
    name: "Website_Banner_2500x471_Skeleton_Red.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_TRANSPARENT,
    generator: getBrandWebsiteBanner2500x471,
  },
];

export const WEBSITE_BANNER_1440x499_CUSTOM_IMAGE: ImageGenerationConfig[] = [
  {
    id: "website-banner-1440x499-custom-image-blue",
    name: "Website_Banner_1440x499_Custom_Image_Blue.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-custom-image-green",
    name: "Website_Banner_1440x499_Custom_Image_Green.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-custom-image-yellow",
    name: "Website_Banner_1440x499_Custom_Image_Yellow.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandWebsiteBanner1440x499,
  },
  {
    id: "website-banner-1440x499-custom-image-red",
    name: "Website_Banner_1440x499_Custom_Image_Red.png",
    folder: "Website Banner/1440x499",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandWebsiteBanner1440x499,
  },
];

export const WEBSITE_BANNER_2500x471_CUSTOM_IMAGE: ImageGenerationConfig[] = [
  {
    id: "website-banner-2500x471-custom-image-blue",
    name: "Website_Banner_2500x471_Custom_Image_Blue.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.BLUE,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-custom-image-green",
    name: "Website_Banner_2500x471_Custom_Image_Green.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.GREEN,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-custom-image-yellow",
    name: "Website_Banner_2500x471_Custom_Image_Yellow.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.YELLOW,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandWebsiteBanner2500x471,
  },
  {
    id: "website-banner-2500x471-custom-image-red",
    name: "Website_Banner_2500x471_Custom_Image_Red.png",
    folder: "Website Banner/2500x471",
    colorVariant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.RED,
    imageVariant: EnumImageVariant.CUSTOM_IMAGE_URL,
    generator: getBrandWebsiteBanner2500x471,
  },
];
