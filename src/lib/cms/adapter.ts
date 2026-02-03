/**
 * CMS Adapter Interface
 *
 * This defines the contract that all CMS adapters must implement.
 * By using this interface, we can easily switch between different CMS backends
 * (Mock, Sanhawings, or any future CMS) without changing the application code.
 *
 * INTEGRATION GUIDE:
 * 1. Create a new adapter file (e.g., new-cms-adapter.ts)
 * 2. Implement all methods defined in CMSAdapter interface
 * 3. Update index.ts to use the new adapter based on environment config
 */

import { Room, BookingFormData, BookingResponse, CMSAdapter } from '@/types';

/**
 * Abstract base class for CMS adapters
 * Provides common functionality and enforces interface compliance
 */
export abstract class BaseCMSAdapter implements CMSAdapter {
  protected apiUrl: string;
  protected apiKey: string;

  constructor(apiUrl?: string, apiKey?: string) {
    this.apiUrl = apiUrl || '';
    this.apiKey = apiKey || '';
  }

  /**
   * Fetch all rooms from the CMS
   * @returns Promise<Room[]> Array of room objects
   */
  abstract getRooms(): Promise<Room[]>;

  /**
   * Fetch a single room by its ID
   * @param id - The room ID
   * @returns Promise<Room | null> Room object or null if not found
   */
  abstract getRoomById(id: string): Promise<Room | null>;

  /**
   * Fetch a single room by its URL slug
   * @param slug - The URL-friendly room identifier
   * @returns Promise<Room | null> Room object or null if not found
   */
  abstract getRoomBySlug(slug: string): Promise<Room | null>;

  /**
   * Check if a room is available for the given dates
   * @param roomId - The room ID
   * @param checkIn - Check-in date (ISO string)
   * @param checkOut - Check-out date (ISO string)
   * @returns Promise<boolean> True if available, false otherwise
   */
  abstract checkAvailability(
    roomId: string,
    checkIn: string,
    checkOut: string
  ): Promise<boolean>;

  /**
   * Create a new booking
   * @param data - Booking form data
   * @returns Promise<BookingResponse> Booking result
   */
  abstract createBooking(data: BookingFormData): Promise<BookingResponse>;

  /**
   * Check if the CMS connection is working
   * @returns Promise<boolean> True if connected, false otherwise
   */
  abstract isConnected(): Promise<boolean>;

  /**
   * Helper method to generate a unique booking ID
   */
  protected generateBookingId(): string {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `BK-${timestamp}-${randomPart}`.toUpperCase();
  }

  /**
   * Helper method to validate booking dates
   */
  protected validateDates(checkIn: string, checkOut: string): boolean {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return checkInDate >= today && checkOutDate > checkInDate;
  }

  /**
   * Helper method to calculate number of nights
   */
  protected calculateNights(checkIn: string, checkOut: string): number {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}

/**
 * Type guard to check if an object implements CMSAdapter
 */
export function isCMSAdapter(obj: unknown): obj is CMSAdapter {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    'getRooms' in obj &&
    'getRoomById' in obj &&
    'getRoomBySlug' in obj &&
    'checkAvailability' in obj &&
    'createBooking' in obj &&
    'isConnected' in obj
  );
}
