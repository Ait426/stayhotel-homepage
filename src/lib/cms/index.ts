/**
 * CMS Adapter Factory
 *
 * This module provides a single entry point for getting the appropriate CMS adapter.
 * The adapter is selected based on environment configuration.
 *
 * USAGE:
 * ```typescript
 * import { getCMSAdapter } from '@/lib/cms';
 *
 * const cms = getCMSAdapter();
 * const rooms = await cms.getRooms();
 * ```
 *
 * SWITCHING BETWEEN ADAPTERS:
 * - Development/Demo: Set NEXT_PUBLIC_USE_MOCK_CMS=true in .env.local
 * - Production: Set NEXT_PUBLIC_USE_MOCK_CMS=false and configure Sanhawings credentials
 */

import { CMSAdapter, CMSConfig } from '@/types';
import { MockCMSAdapter } from './mock-adapter';
import { SanhawingsCMSAdapter } from './sanhawings-adapter';

// Singleton instance to avoid creating multiple adapters
let adapterInstance: CMSAdapter | null = null;

/**
 * Get CMS configuration from environment variables
 */
function getCMSConfig(): CMSConfig {
  return {
    useMock: process.env.NEXT_PUBLIC_USE_MOCK_CMS === 'true',
    apiUrl: process.env.SANHAWINGS_API_URL,
    apiKey: process.env.SANHAWINGS_API_KEY,
  };
}

/**
 * Get the appropriate CMS adapter based on configuration
 *
 * @param forceNew - If true, creates a new instance instead of returning cached one
 * @returns CMSAdapter instance
 */
export function getCMSAdapter(forceNew = false): CMSAdapter {
  // Return cached instance if available
  if (adapterInstance && !forceNew) {
    return adapterInstance;
  }

  const config = getCMSConfig();

  if (config.useMock) {
    // Use mock adapter for development/testing
    console.log('📦 Using Mock CMS Adapter');
    adapterInstance = new MockCMSAdapter();
  } else {
    // Use Sanhawings adapter for production
    if (!config.apiUrl || !config.apiKey) {
      console.warn('⚠️ Sanhawings API not configured, falling back to Mock adapter');
      console.warn('   Set SANHAWINGS_API_URL and SANHAWINGS_API_KEY in .env.local');
      adapterInstance = new MockCMSAdapter();
    } else {
      console.log('🏨 Using Sanhawings CMS Adapter');
      adapterInstance = new SanhawingsCMSAdapter(config.apiUrl, config.apiKey);
    }
  }

  return adapterInstance;
}

/**
 * Reset the cached adapter instance
 * Useful for testing or when configuration changes
 */
export function resetCMSAdapter(): void {
  adapterInstance = null;
}

/**
 * Check if we're using the mock adapter
 */
export function isUsingMockAdapter(): boolean {
  const config = getCMSConfig();
  return config.useMock || !config.apiUrl || !config.apiKey;
}

// Re-export types and base class for extending
export { BaseCMSAdapter } from './adapter';
export { MockCMSAdapter } from './mock-adapter';
export { SanhawingsCMSAdapter } from './sanhawings-adapter';
