/**
 * Affiliate-hjälpare (robust + kompatibel med Claude-komponenterna).
 * - Tar emot optional bookingId (så det inte kraschar om ID saknas i mockdata)
 * - Lägger på AID om det finns i .env.local
 */
export function generateBookingUrl(bookingId?: string) {
  if (!bookingId) return 'https://www.booking.com'
  const aid = process.env.NEXT_PUBLIC_BOOKING_AFFILIATE_ID || ''
  const base = `https://www.booking.com/hotel/${bookingId}.html`
  return aid ? `${base}?aid=${aid}` : base
}
