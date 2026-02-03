/**
 * Rooms API Route
 *
 * Handles room-related API requests using the CMS adapter.
 *
 * GET /api/rooms - Get all rooms
 * GET /api/rooms?id=xxx - Get room by ID
 * POST /api/rooms - Create a booking
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCMSAdapter } from '@/lib/cms';
import { BookingFormData } from '@/types';

/**
 * GET handler - Fetch rooms
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const roomId = searchParams.get('id');

    const cms = getCMSAdapter();

    if (roomId) {
      // Get single room
      const room = await cms.getRoomById(roomId);

      if (!room) {
        return NextResponse.json(
          { success: false, error: 'Room not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, data: room });
    }

    // Get all rooms
    const rooms = await cms.getRooms();
    return NextResponse.json({ success: true, data: rooms });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch rooms' },
      { status: 500 }
    );
  }
}

/**
 * POST handler - Create booking
 */
export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json();

    // Validate required fields
    if (
      !body.roomId ||
      !body.checkIn ||
      !body.checkOut ||
      !body.guestName ||
      !body.guestEmail ||
      !body.guestPhone
    ) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const cms = getCMSAdapter();

    // Check availability
    const isAvailable = await cms.checkAvailability(body.roomId, body.checkIn, body.checkOut);

    if (!isAvailable) {
      return NextResponse.json(
        {
          success: false,
          error: 'ROOM_UNAVAILABLE',
          message: 'Room is not available for the selected dates',
        },
        { status: 409 }
      );
    }

    // Create booking
    const result = await cms.createBooking(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error, message: result.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      bookingId: result.bookingId,
      message: result.message,
    });
  } catch (error) {
    console.error('Booking Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
