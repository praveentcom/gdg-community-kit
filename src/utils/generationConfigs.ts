import getBrandBevyBanner from "@/components/brand/bevy-banner";
import getBrandBlogCover1024x512 from "@/components/brand/blog-cover/1024x512";
import getBrandBlogCover2500x744 from "@/components/brand/blog-cover/2500×744";
import getBrandLandingBanner1440x499 from "@/components/brand/landing-banners/1440x499";
import getBrandLandingBanner2500x471 from "@/components/brand/landing-banners/2500x471";
import getBrandLandingBanner640x500 from "@/components/brand/landing-banners/640x500";
import getBrandLinkedInBanner from "@/components/brand/linkedin";
import getBrandLogoHorizontal from "@/components/brand/logo/horizontal";
import getBrandLogoStacked from "@/components/brand/logo/stacked";
import getBrandTwitterBanner from "@/components/brand/twitter";

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

export const BEVY_BANNER: ImageGenerationConfig[] = [
  {
    id: "bevy-banner-blue",
    name: "Bevy_Banner_Blue.png",
    folder: "Bevy Banner",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-green",
    name: "Bevy_Banner_Green.png",
    folder: "Bevy Banner",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-yellow",
    name: "Bevy_Banner_Yellow.png",
    folder: "Bevy Banner",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandBevyBanner,
  },
  {
    id: "bevy-banner-red",
    name: "Bevy_Banner_Red.png",
    folder: "Bevy Banner",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 634,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandBevyBanner,
  },
];

export const LANDING_BANNER_640x500: ImageGenerationConfig[] = [
  {
    id: "landing-banner-640x500-blue",
    name: "Landing_Banner_640x500_Blue.png",
    folder: "Landing Banner/640x500",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLandingBanner640x500,
  },
  {
    id: "landing-banner-640x500-green",
    name: "Landing_Banner_640x500_Green.png",
    folder: "Landing Banner/640x500",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandLandingBanner640x500,
  },
  {
    id: "landing-banner-640x500-yellow",
    name: "Landing_Banner_640x500_Yellow.png",
    folder: "Landing Banner/640x500",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandLandingBanner640x500,
  },
  {
    id: "landing-banner-640x500-red",
    name: "Landing_Banner_640x500_Red.png",
    folder: "Landing Banner/640x500",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 640,
      height: 500,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandLandingBanner640x500,
  },
];

export const LANDING_BANNER_1440x499: ImageGenerationConfig[] = [
  {
    id: "landing-banner-1440x499-blue",
    name: "Landing_Banner_1440x499_Blue.png",
    folder: "Landing Banner/1440x499",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-green",
    name: "Landing_Banner_1440x499_Green.png",
    folder: "Landing Banner/1440x499",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-yellow",
    name: "Landing_Banner_1440x499_Yellow.png",
    folder: "Landing Banner/1440x499",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-red",
    name: "Landing_Banner_1440x499_Red.png",
    folder: "Landing Banner/1440x499",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandLandingBanner1440x499,
  },
];

export const LANDING_BANNER_2500x471: ImageGenerationConfig[] = [
  {
    id: "landing-banner-2500x471-blue",
    name: "Landing_Banner_2500x471_Blue.png",
    folder: "Landing Banner/2500x471",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-green",
    name: "Landing_Banner_2500x471_Green.png",
    folder: "Landing Banner/2500x471",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-yellow",
    name: "Landing_Banner_2500x471_Yellow.png",
    folder: "Landing Banner/2500x471",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-red",
    name: "Landing_Banner_2500x471_Red.png",
    folder: "Landing Banner/2500x471",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandLandingBanner2500x471,
  },
];

export const LANDING_BANNER_1440x499_SKELETON: ImageGenerationConfig[] = [
  {
    id: "landing-banner-1440x499-skeleton-blue",
    name: "Landing_Banner_1440x499_Skeleton_Blue.png",
    folder: "Landing Banner/1440x499",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.BLUE,
    bgImage: "skeleton",
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-skeleton-green",
    name: "Landing_Banner_1440x499_Skeleton_Green.png",
    folder: "Landing Banner/1440x499",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.GREEN,
    bgImage: "skeleton",
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-skeleton-yellow",
    name: "Landing_Banner_1440x499_Skeleton_Yellow.png",
    folder: "Landing Banner/1440x499",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.YELLOW,
    bgImage: "skeleton",
    generator: getBrandLandingBanner1440x499,
  },
  {
    id: "landing-banner-1440x499-skeleton-red",
    name: "Landing_Banner_1440x499_Skeleton_Red.png",
    folder: "Landing Banner/1440x499",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 1440,
      height: 499,
    },
    fontColor: EnumColorHex.RED,
    bgImage: "skeleton",
    generator: getBrandLandingBanner1440x499,
  },
];

export const LANDING_BANNER_2500x471_SKELETON: ImageGenerationConfig[] = [
  {
    id: "landing-banner-2500x471-skeleton-blue",
    name: "Landing_Banner_2500x471_Skeleton_Blue.png",
    folder: "Landing Banner/2500x471",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.BLUE,
    bgImage: "skeleton",
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-skeleton-green",
    name: "Landing_Banner_2500x471_Skeleton_Green.png",
    folder: "Landing Banner/2500x471",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.GREEN,
    bgImage: "skeleton",
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-skeleton-yellow",
    name: "Landing_Banner_2500x471_Skeleton_Yellow.png",
    folder: "Landing Banner/2500x471",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.YELLOW,
    bgImage: "skeleton",
    generator: getBrandLandingBanner2500x471,
  },
  {
    id: "landing-banner-2500x471-skeleton-red",
    name: "Landing_Banner_2500x471_Skeleton_Red.png",
    folder: "Landing Banner/2500x471",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 471,
    },
    fontColor: EnumColorHex.RED,
    bgImage: "skeleton",
    generator: getBrandLandingBanner2500x471,
  },
];

export const BLOG_COVER_1024x512: ImageGenerationConfig[] = [
  {
    id: "blog-cover-1024x512-blue",
    name: "Blog_Cover_1024x512_Blue.png",
    folder: "Blog Cover/1024x512",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1024,
      height: 512,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandBlogCover1024x512,
  },
  {
    id: "blog-cover-1024x512-green",
    name: "Blog_Cover_1024x512_Green.png",
    folder: "Blog Cover/1024x512",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1024,
      height: 512,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandBlogCover1024x512,
  },
  {
    id: "blog-cover-1024x512-yellow",
    name: "Blog_Cover_1024x512_Yellow.png",
    folder: "Blog Cover/1024x512",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1024,
      height: 512,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandBlogCover1024x512,
  },
  {
    id: "blog-cover-1024x512-red",
    name: "Blog_Cover_1024x512_Red.png",
    folder: "Blog Cover/1024x512",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 1024,
      height: 512,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandBlogCover1024x512,
  },
];

export const BLOG_COVER_2500x744: ImageGenerationConfig[] = [
  {
    id: "blog-cover-2500x744-blue",
    name: "Blog_Cover_2500x744_Blue.png",
    folder: "Blog Cover/2500x744",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2500,
      height: 744,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandBlogCover2500x744,
  },
  {
    id: "blog-cover-2500x744-green",
    name: "Blog_Cover_2500x744_Green.png",
    folder: "Blog Cover/2500x744",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2500,
      height: 744,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandBlogCover2500x744,
  },
  {
    id: "blog-cover-2500x744-yellow",
    name: "Blog_Cover_2500x744_Yellow.png",
    folder: "Blog Cover/2500x744",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2500,
      height: 744,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandBlogCover2500x744,
  },
  {
    id: "blog-cover-2500x744-red",
    name: "Blog_Cover_2500x744_Red.png",
    folder: "Blog Cover/2500x744",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 2500,
      height: 744,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandBlogCover2500x744,
  },
];

export const LINKEDIN_BANNER: ImageGenerationConfig[] = [
  {
    id: "linkedin-banner-blue",
    name: "LinkedIn_Banner_Blue.png",
    folder: "LinkedIn",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-green",
    name: "LinkedIn_Banner_Green.png",
    folder: "LinkedIn",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-yellow",
    name: "LinkedIn_Banner_Yellow.png",
    folder: "LinkedIn",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-red",
    name: "LinkedIn_Banner_Red.png",
    folder: "LinkedIn",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandLinkedInBanner,
  },
];

export const LINKEDIN_BANNER_SKELETON: ImageGenerationConfig[] = [
  {
    id: "linkedin-banner-skeleton-blue",
    name: "LinkedIn_Banner_Skeleton_Blue.png",
    folder: "LinkedIn",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.BLUE,
    bgImage: "skeleton",
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-skeleton-green",
    name: "LinkedIn_Banner_Skeleton_Green.png",
    folder: "LinkedIn",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.GREEN,
    bgImage: "skeleton",
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-skeleton-yellow",
    name: "LinkedIn_Banner_Skeleton_Yellow.png",
    folder: "LinkedIn",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.YELLOW,
    bgImage: "skeleton",
    generator: getBrandLinkedInBanner,
  },
  {
    id: "linkedin-banner-skeleton-red",
    name: "LinkedIn_Banner_Skeleton_Red.png",
    folder: "LinkedIn",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 2256,
      height: 382,
    },
    fontColor: EnumColorHex.RED,
    bgImage: "skeleton",
    generator: getBrandLinkedInBanner,
  },
];

export const TWITTER_BANNER: ImageGenerationConfig[] = [
  {
    id: "twitter-banner-blue",
    name: "Twitter_Banner_Blue.png",
    folder: "Twitter",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.BLUE,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-green",
    name: "Twitter_Banner_Green.png",
    folder: "Twitter",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.GREEN,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-yellow",
    name: "Twitter_Banner_Yellow.png",
    folder: "Twitter",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.YELLOW,
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-red",
    name: "Twitter_Banner_Red.png",
    folder: "Twitter",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.RED,
    generator: getBrandTwitterBanner,
  },
];

export const TWITTER_BANNER_SKELETON: ImageGenerationConfig[] = [
  {
    id: "twitter-banner-skeleton-blue",
    name: "Twitter_Banner_Skeleton_Blue.png",
    folder: "Twitter",
    variant: EnumColorVariant.BLUE,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.BLUE,
    bgImage: "skeleton",
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-skeleton-green",
    name: "Twitter_Banner_Skeleton_Green.png",
    folder: "Twitter",
    variant: EnumColorVariant.GREEN,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.GREEN,
    bgImage: "skeleton",
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-skeleton-yellow",
    name: "Twitter_Banner_Skeleton_Yellow.png",
    folder: "Twitter",
    variant: EnumColorVariant.YELLOW,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.YELLOW,
    bgImage: "skeleton",
    generator: getBrandTwitterBanner,
  },
  {
    id: "twitter-banner-skeleton-red",
    name: "Twitter_Banner_Skeleton_Red.png",
    folder: "Twitter",
    variant: EnumColorVariant.RED,
    dimensions: {
      width: 1500,
      height: 500,
    },
    fontColor: EnumColorHex.RED,
    bgImage: "skeleton",
    generator: getBrandTwitterBanner,
  },
];
