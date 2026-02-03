/**
 * next-intl Configuration (v3)
 */

import { getRequestConfig } from 'next-intl/server';

const locales = ['ko', 'en', 'ja', 'zh'];

export default getRequestConfig(async ({ locale }) => {
  // Ensure that the incoming locale is valid
  if (!locales.includes(locale)) {
    locale = 'ko';
  }

  return {
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
});
