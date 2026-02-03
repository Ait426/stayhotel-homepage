/**
 * Translation System - Barrel Export
 *
 * Re-exports server and client translation utilities.
 * Server components should import from './translations-server'
 * Client components should import from './translations-client'
 */

// Server-side exports (for server components)
export { getMessages, createTranslator } from './translations-server';
export type { Messages } from './translations-server';

// Client-side exports (for client components)
export { TranslationProvider, useTranslations, useLocale } from './translations-client';
