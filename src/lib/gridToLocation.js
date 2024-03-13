
const GRID_4_REGEX = /^[A-X][A-X][0-9][0-9]$/
const GRID_6_REGEX = /^[A-X][A-X][0-9][0-9][a-x][a-x]$/

export function gridToLocation(grid) {
	var lat = 0.0
	var lon = 0.0

	function lat4(g){
		return 10 * (g.charCodeAt(1) - 'A'.charCodeAt(0)) + parseInt(g.charAt(3)) - 90
	}

	function lon4(g){
		return 20 * (g.charCodeAt(0) - 'A'.charCodeAt(0)) + 2 * parseInt(g.charAt(2)) - 180
	}

	if ((grid.length != 4) && (grid.length != 6)) {
		throw "gridToLocation: grid square: grid must be 4 or 6 chars: " + grid;
	}

	if (GRID_4_REGEX.test(grid)) {
		// Decode 4-character grid square
		lat = lat4(grid) + 0.5
		lon = lon4(grid) + 1
	} else if (GRID_6_REGEX.test(grid)) {
		// Decode 6-character grid square
		lat = lat4(grid) + (1.0 / 60.0) * 2.5 * (grid.charCodeAt(5) - 'a'.charCodeAt(0) + 0.5)
		lon = lon4(grid) + (1.0 / 60.0) * 5 * (grid.charCodeAt(4) - 'a'.charCodeAt(0) + 0.5)
	} else {
		throw "gridToLocation: invalid grid: " + grid
	}

	return [lat, lon]
}
