// src/lib/data.ts
import type { Hotel, City } from '@/data/hotels-database'
import {
  getAllCities as rawGetAllCities,
  getHotelsByCity as rawGetHotelsByCity,
} from '@/data/hotels-database'

export async function getAllCities(): Promise<City[]> {
  return rawGetAllCities()
}

export async function getCityData(slug: string): Promise<City | undefined> {
  const cities = await rawGetAllCities()
  return cities.find(c => c.slug === slug)
}

export async function getHotelsByCity(slug: string): Promise<Hotel[]> {
  return rawGetHotelsByCity(slug)
}
