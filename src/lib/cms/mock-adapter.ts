/**
 * Mock CMS Adapter
 *
 * This adapter provides mock data for development and testing.
 * It uses the room data defined in /src/config/rooms.ts
 *
 * USAGE:
 * - Set NEXT_PUBLIC_USE_MOCK_CMS=true in .env.local
 * - This adapter will be automatically used
 * - All operations return static data with simulated async behavior
 */

import { Room, BookingFormData, BookingResponse } from '@/types';
import { BaseCMSAdapter } from './adapter';
import { rooms, getRoomById as getRoom, getRoomBySlug as getRoomSlug } from '@/config/rooms';

/**
 * Mock CMS Adapter Implementation
 * Perfect for development, testing, and demos
 */
export class MockCMSAdapter extends BaseCMSAdapter {
  // Simulated bookings storage (in-memory)
  private bookings: Map<string, BookingFormData & { id: string; createdAt: Date }> = new Map();

  // Simulated blocked dates (for availability checking)
  private blockedDates: Map<string, string[]> = new Map();

  constructor() {
    super('mock://localhost', 'mock-api-key');
    console.log('🔧 MockCMSAdapter initialized - Using local room data');
  }

  /**
   * Get all rooms
   * Returns the static room data from config
   */
  async getRooms(): Promise<Room[]> {
    // Simulate network delay
    await this.simulateDelay(100);
    return rooms;
  }

  /**
   * Get room by ID
   */
  async getRoomById(id: string): Promise<Room | null> {
    await this.simulateDelay(50);
    return getRoom(id) || null;
  }

  /**
   * Get room by slug
   */
  async getRoomBySlug(slug: string): Promise<Room | null> {
    await this.simulateDelay(50);
    return getRoomSlug(slug) || null;
  }

  /**
   * Check availability
   * In mock mode, randomly returns unavailable 10% of the time
   * for realistic testing
   */
  async checkAvailability(
    roomId: string,
    checkIn: string,
    checkOut: string
  ): Promise<boolean> {
    await this.simulateDelay(200);

    // Validate dates
    if (!this.validateDates(checkIn, checkOut)) {
      return false;
    }

    // Check if room exists
    const room = getRoom(roomId);
    if (!room || !room.isAvailable) {
      return false;
    }

    // Check blocked dates
    const blocked = this.blockedDates.get(roomId) || [];
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    for (const blockedDate of blocked) {
      const date = new Date(blockedDate);
      if (date >= checkInDate && date < checkOutDate) {
        return false;
      }
    }

    // Simulate random unavailability (10% chance) for realistic testing
    // Comment out for demo purposes
    // if (Math.random() < 0.1) return false;

    return true;
  }

  /**
   * Create a booking
   * Stores the booking in memory and returns a success response
   */
  async createBooking(data: BookingFormData): Promise<BookingResponse> {
    await this.simulateDelay(500);

    // Validate required fields
    if (!data.roomId || !data.checkIn || !data.checkOut || !data.guestName || !data.guestEmail) {
      return {
        success: false,
        message: 'Missing required fields',
        error: 'VALIDATION_ERROR',
      };
    }

    // Check availability
    const isAvailable = await this.checkAvailability(data.roomId, data.checkIn, data.checkOut);
    if (!isAvailable) {
      return {
        success: false,
        message: 'Room is not available for the selected dates',
        error: 'ROOM_UNAVAILABLE',
      };
    }

    // Generate booking ID
    const bookingId = this.generateBookingId();

    // Store booking
    this.bookings.set(bookingId, {
      ...data,
      id: bookingId,
      createdAt: new Date(),
    });

    // Block the dates
    this.blockDatesForRoom(data.roomId, data.checkIn, data.checkOut);

    console.log(`📝 Mock Booking Created: ${bookingId}`);
    console.log(`   Room: ${data.roomId}`);
    console.log(`   Dates: ${data.checkIn} to ${data.checkOut}`);
    console.log(`   Guest: ${data.guestName}`);

    return {
      success: true,
      bookingId,
      message: 'Booking created successfully',
    };
  }

  /**
   * Check connection status
   * Mock adapter is always "connected"
   */
  async isConnected(): Promise<boolean> {
    await this.simulateDelay(50);
    return true;
  }

  // ============================================
  // Private Helper Methods
  // ============================================

  /**
   * Simulate network delay for realistic behavior
   */
  private simulateDelay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Block dates for a room (mark as booked)
   */
  private blockDatesForRoom(roomId: string, checkIn: string, checkOut: string): void {
    const dates = this.blockedDates.get(roomId) || [];
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const currentDate = new Date(checkInDate);
    while (currentDate < checkOutDate) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    this.blockedDates.set(roomId, dates);
  }

  /**
   * Get all bookings (for debugging)
   */
  getBookings(): Array<BookingFormData & { id: string; createdAt: Date }> {
    return Array.from(this.bookings.values());
  }

  /**
   * Clear all bookings (for testing)
   */
  clearBookings(): void {
    this.bookings.clear();
    this.blockedDates.clear();
    console.log('🗑️ Mock bookings cleared');
  }
}
