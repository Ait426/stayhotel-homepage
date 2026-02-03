/**
 * Brand Configuration
 *
 * All brand-related settings are loaded from environment variables.
 * To change the hotel brand, simply update the .env.local file.
 * No code changes required!
 */

import { BrandConfig } from '@/types';

/**
 * Get the brand configuration from environment variables
 * Falls back to default values if env vars are not set
 */
export const getBrandConfig = (): BrandConfig => ({
  name: {
    ko: process.env.NEXT_PUBLIC_BRAND_NAME || 'STAY HOTEL in PYEONGTAEK',
    en: process.env.NEXT_PUBLIC_BRAND_NAME_EN || 'STAY HOTEL in PYEONGTAEK',
    ja: process.env.NEXT_PUBLIC_BRAND_NAME_JA || 'STAY HOTEL in PYEONGTAEK',
    zh: process.env.NEXT_PUBLIC_BRAND_NAME_ZH || 'STAY HOTEL in PYEONGTAEK',
  },
  tagline: {
    ko: process.env.NEXT_PUBLIC_BRAND_TAGLINE || '평택역 도보 2분, 프리미엄 부띠크 호텔',
    en: process.env.NEXT_PUBLIC_BRAND_TAGLINE_EN || '2 min walk from Pyeongtaek Station',
    ja: process.env.NEXT_PUBLIC_BRAND_TAGLINE_JA || '平澤駅から徒歩2分、プレミアムブティックホテル',
    zh: process.env.NEXT_PUBLIC_BRAND_TAGLINE_ZH || '平泽站步行2分钟，精品酒店',
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '031-654-3333',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ptstayhotel@gmail.com',
    address: {
      ko: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '경기도 평택시 평택1로 7 (평택동)',
      en: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_EN || '7, Pyeongtaek 1-ro, Pyeongtaek-si, Gyeonggi-do',
      ja: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_JA || '京畿道平澤市平澤1路7（平澤洞）',
      zh: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_ZH || '京畿道平泽市平泽1路7号（平泽洞）',
    },
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    naverBlog: process.env.NEXT_PUBLIC_NAVER_BLOG_ID
      ? `https://blog.naver.com/${process.env.NEXT_PUBLIC_NAVER_BLOG_ID}`
      : undefined,
  },
});

/**
 * Get brand name by locale
 */
export const getBrandName = (locale: string): string => {
  const config = getBrandConfig();
  return config.name[locale as keyof typeof config.name] || config.name.en;
};

/**
 * Get brand tagline by locale
 */
export const getBrandTagline = (locale: string): string => {
  const config = getBrandConfig();
  return config.tagline[locale as keyof typeof config.tagline] || config.tagline.en;
};

/**
 * Get contact info
 */
export const getContactInfo = () => {
  const config = getBrandConfig();
  return config.contact;
};

/**
 * Check if Tawk.to is configured
 */
export const isTawkConfigured = (): boolean => {
  return !!(
    process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID &&
    process.env.NEXT_PUBLIC_TAWK_WIDGET_ID &&
    process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID !== 'your_property_id_here'
  );
};

/**
 * Get Tawk.to configuration
 */
export const getTawkConfig = () => ({
  propertyId: process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || '',
  widgetId: process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || '',
});

/**
 * Check if Google Analytics is configured
 */
export const isGAConfigured = (): boolean => {
  return !!(
    process.env.NEXT_PUBLIC_GA_ID &&
    process.env.NEXT_PUBLIC_GA_ID !== 'G-XXXXXXXXXX'
  );
};

/**
 * Get Google Analytics ID
 */
export const getGAId = (): string => {
  return process.env.NEXT_PUBLIC_GA_ID || '';
};

// Export a default brand config instance
export const brandConfig = getBrandConfig();
