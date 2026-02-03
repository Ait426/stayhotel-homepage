/**
 * next-intl Routing Configuration (v3)
 */

import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['ko', 'en', 'ja', 'zh'] as const;
export const defaultLocale = 'ko';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
