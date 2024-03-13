export function cleanLocationParams(p1, p2) {
  let lat, lon
  if (p1.lat) lat = p1.lat
  else if (p1.latitude || p1.hasOwnProperty('latitude')) lat = p1.latitude
  else lat = p1

  if (p1.lon || p1.hasOwnProperty('lon')) lon = p1.lon
  else if (p1.lng || p1.hasOwnProperty('lng')) lon = p1.lng
  else if (p1.longitude || p1.hasOwnProperty('longitude')) lon = p1.longitude
  else lon = p2

  if (typeof lat === "function") lat = lat()
  if (typeof lon === "function") lon = lon()

	if (typeof lat === "string") lat = parseFloat(lat)
	if (typeof lon === "string") lon = parseFloat(lon)

	if (isNaN(lat)) lat = undefined
	if (Math.abs(lat) > 90) lat = undefined

	if (isNaN(lon)) lat = undefined
	if (Math.abs(lon) > 180) lat = undefined
  return [lat, lon]
}
