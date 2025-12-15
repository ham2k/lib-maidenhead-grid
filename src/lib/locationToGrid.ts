import { cleanLocationParams } from './cleanLocationParams'

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWX'
const LOWERCASE = UPPERCASE.toLowerCase()

type LocationParam = number | string | (() => number | string) | undefined

interface LocationObject {
  lat?: number | string | (() => number | string)
  latitude?: number | string | (() => number | string)
  lon?: number | string | (() => number | string)
  lng?: number | string | (() => number | string)
  longitude?: number | string | (() => number | string)
}

type LocationInput = LocationParam | LocationObject

export function locationToGrid4(p1: LocationInput, p2?: LocationParam): string | undefined {
  const [lat, lon] = cleanLocationParams(p1, p2)

  if (lat === undefined || lon === undefined) return undefined
  if (Math.abs(lat) === 90.0) return undefined // No maidenhead grid at poles

  // Latitude
  const adjLat = lat + 90
  const fieldLat = UPPERCASE[Math.trunc(adjLat / 10)]
  const squareLat = '' + Math.trunc(adjLat % 10)

  // Longitude
  const adjLon = lon + 180
  const fieldLon = UPPERCASE[Math.trunc(adjLon / 20)]
  const squareLon = '' + Math.trunc((adjLon / 2) % 10)

  return [fieldLon, fieldLat, squareLon, squareLat].join('')
}

export function locationToGrid6(p1: LocationInput, p2?: LocationParam): string | undefined {
  const [lat, lon] = cleanLocationParams(p1, p2)

  if (lat === undefined || lon === undefined) return undefined
  if (Math.abs(lat) === 90.0) return undefined // No maidenhead grid at poles

  // Latitude
  const adjLat = lat + 90
  const fieldLat = UPPERCASE[Math.trunc(adjLat / 10)]
  const squareLat = '' + Math.trunc(adjLat % 10)
  const rLat = (adjLat - Math.trunc(adjLat)) * 60
  const subLat = LOWERCASE[Math.trunc(rLat / 2.5)]

  // Longitude
  const adjLon = lon + 180
  const fieldLon = UPPERCASE[Math.trunc(adjLon / 20)]
  const squareLon = '' + Math.trunc((adjLon / 2) % 10)
  const rLon = (adjLon - 2 * Math.trunc(adjLon / 2)) * 60
  const subLon = LOWERCASE[Math.trunc(rLon / 5)]

  return [fieldLon, fieldLat, squareLon, squareLat, subLon, subLat].join('')
}

export function locationToGrid8(p1: LocationInput, p2?: LocationParam): string | undefined {
  const [lat, lon] = cleanLocationParams(p1, p2)

  if (lat === undefined || lon === undefined) return undefined
  if (Math.abs(lat) === 90.0) return undefined // No maidenhead grid at poles

  // Latitude
  const adjLat = lat + 90
  const fieldLat = UPPERCASE[Math.trunc(adjLat / 10)]
  const squareLat = '' + Math.trunc(adjLat % 10)
  const remLat = (adjLat - Math.trunc(adjLat))
  const subLat = LOWERCASE[Math.trunc(remLat * 24)]
  const extSquareLat = '' + Math.trunc(remLat * 24 % 1 * 10)

  // Longitude
  const adjLon = lon + 180
  const fieldLon = UPPERCASE[Math.trunc(adjLon / 20)]
  const squareLon = '' + Math.trunc((adjLon / 2) % 10)
  const remLon = (adjLon - 2 * Math.trunc(adjLon / 2))
  const subLon = LOWERCASE[Math.trunc(remLon * 12)]
  const extSquareLon = '' + Math.trunc(remLon * 12 % 1 * 10)

  return [fieldLon, fieldLat, squareLon, squareLat, subLon, subLat, extSquareLon, extSquareLat].join('')
}

export const locationToGrid = locationToGrid6

