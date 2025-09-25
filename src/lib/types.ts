/**
 * Claude-kompatibla typer för UI:t.
 *
 * Vi re-exporterar Hotel och City från den "riktiga" datakällan
 * (src/data/hotels-database.ts) så att alla UI-komponenter kan importera
 * från '@/lib/types' och ändå vara i synk med databasen.
 */

export type { Hotel, City } from '@/data/hotels-database'
