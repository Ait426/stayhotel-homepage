/**
 * Client-side Translation System
 *
 * Provides React context and hooks for client components.
 */

'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { Messages } from './translations-server';

// Client-side context
interface TranslationContextValue {
  locale: string;
  messages: Messages;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function TranslationProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: Messages;
}) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = messages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ locale, messages, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }

  const { messages, t } = context;

  if (namespace) {
    const scopedMessages = messages[namespace as keyof Messages];
    return (key: string): string => {
      if (scopedMessages && typeof scopedMessages === 'object' && key in scopedMessages) {
        return (scopedMessages as Record<string, string>)[key];
      }
      return key;
    };
  }

  return t;
}

export function useLocale() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useLocale must be used within a TranslationProvider');
  }
  return context.locale;
}
