const GRID_4_REGEX = /^[A-X][A-X][0-9][0-9]$/
const GRID_6_REGEX = /^[A-X][A-X][0-9][0-9][a-x][a-x]$/
const GRID_8_REGEX = /^[A-X][A-X][0-9][0-9][a-x][a-x][0-9][0-9]$/

function _lat4(g: string): number {
  return 10 * (g.charCodeAt(1) - 'A'.charCodeAt(0)) + parseInt(g.charAt(3), 10) - 90
}

function _lon4(g: string): number {
  return 20 * (g.charCodeAt(0) - 'A'.charCodeAt(0)) + 2 * parseInt(g.charAt(2), 10) - 180
}

function _lat6(g: string): number {
  return (1.0 / 24) * (g.charCodeAt(5) - 'a'.charCodeAt(0))
}

function _lon6(g: string): number {
  return (1.0 / 12) * (g.charCodeAt(4) - 'a'.charCodeAt(0))
}

function _lat8(g: string): number {
  return (1.0 / 24 / 10) * parseInt(g.charAt(7), 10)
}

function _lon8(g: string): number {
  return (1.0 / 12 / 10) * parseInt(g.charAt(6), 10)
}

export function gridToLocation(grid: string): [number, number] {
  let lat = 0.0
  let lon = 0.0

  if ((grid.length !== 4) && (grid.length !== 6) && (grid.length !== 8)) {
    throw new Error("gridToLocation: grid square: grid must be 4, 6 or 8 chars: " + grid)
  }

  if (GRID_4_REGEX.test(grid)) {
    // Decode 4-character grid square
    lat = _lat4(grid) + 0.5
    lon = _lon4(grid) + 1
  } else if (GRID_6_REGEX.test(grid)) {
    // Decode 6-character grid square
    lat = _lat4(grid) + _lat6(grid) + (1.0 / 24 * 0.5)
    lon = _lon4(grid) + _lon6(grid) + (1.0 / 12 * 0.5)
  } else if (GRID_8_REGEX.test(grid)) {
    // Decode 8-character grid square
    lat = _lat4(grid) + _lat6(grid) + _lat8(grid) + (1.0 / 24 * 0.05)
    lon = _lon4(grid) + _lon6(grid) + _lon8(grid) + (1.0 / 12 * 0.05)
  } else {
    throw new Error("gridToLocation: invalid grid: " + grid)
  }

  return [lat, lon]
}

