/**
 * Server-side Translation System
 *
 * Provides translation functions for server components.
 * Does not use 'use client' directive.
 */

import koMessages from '@/messages/ko.json';
import enMessages from '@/messages/en.json';
import jaMessages from '@/messages/ja.json';
import zhMessages from '@/messages/zh.json';

export type Messages = typeof koMessages;

const messages: Record<string, Messages> = {
  ko: koMessages,
  en: enMessages,
  ja: jaMessages,
  zh: zhMessages,
};

// Server-side helper to get all messages for a locale
export function getMessages(locale: string): Messages {
  return messages[locale] || messages.ko;
}

// Create translator function for server components
export function createTranslator(locale: string, namespace?: keyof Messages) {
  const allMessages = getMessages(locale);
  const scopedMessages = namespace ? allMessages[namespace] : allMessages;

  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = scopedMessages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}
