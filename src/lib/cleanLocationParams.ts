type LocationParam = number | string | (() => number | string) | undefined

interface LocationObject {
  lat?: number | string | (() => number | string)
  latitude?: number | string | (() => number | string)
  lon?: number | string | (() => number | string)
  lng?: number | string | (() => number | string)
  longitude?: number | string | (() => number | string)
}

type LocationInput = LocationParam | LocationObject

export function cleanLocationParams(p1: LocationInput, p2?: LocationParam): [number | undefined, number | undefined] {
  let lat: number | string | (() => number | string) | undefined
  let lon: number | string | (() => number | string) | undefined

  if (typeof p1 === 'object' && p1 !== null && !Array.isArray(p1)) {
    const obj = p1 as LocationObject
    if (obj.lat !== undefined) lat = obj.lat
    else if (obj.latitude !== undefined || 'latitude' in obj) lat = obj.latitude
    else lat = undefined

    if (obj.lon !== undefined || 'lon' in obj) lon = obj.lon
    else if (obj.lng !== undefined || 'lng' in obj) lon = obj.lng
    else if (obj.longitude !== undefined || 'longitude' in obj) lon = obj.longitude
    else lon = p2
  } else {
    lat = p1 as LocationParam
    lon = p2
  }

  if (typeof lat === "function") lat = lat()
  if (typeof lon === "function") lon = lon()

  if (typeof lat === "string") lat = parseFloat(lat)
  if (typeof lon === "string") lon = parseFloat(lon)

  if (typeof lat === "number" && isNaN(lat)) lat = undefined
  if (typeof lat === "number" && Math.abs(lat) > 90) lat = undefined

  if (typeof lon === "number" && isNaN(lon)) lon = undefined
  if (typeof lon === "number" && Math.abs(lon) > 180) lon = undefined

  return [typeof lat === "number" ? lat : undefined, typeof lon === "number" ? lon : undefined]
}

