import { gridToLocation } from './gridToLocation'

describe('gridToLocation', () => {
  it('should work for 4 element grids', () => {
    expect(gridToLocation('JN58')).toEqual([48.5, 11.0]) // Munich
    expect(gridToLocation('GF15')).toEqual([-34.5, -57.0]) // Montevideo
    expect(gridToLocation('FM18')).toEqual([38.5, -77.0]) // Washington, DC
    expect(gridToLocation('RE78')).toEqual([-41.5, 175.0]) // Wellington
    expect(gridToLocation('FN31')).toEqual([41.5, -73.0]) // Newington, CT (W1AW)
    expect(gridToLocation('CM87')).toEqual([37.5, -123.0]) // Palo Alto (K6WRU)
    expect(gridToLocation('EM75')).toEqual([35.5, -85.0]) // Chattanooga (KI6CQ/4)
    expect(gridToLocation('FN43')).toEqual([43.5, -71.0]) // Buxton (N1SH)
  })

  it('should work for 4 element grids', () => {
    expect(gridToLocation('JN58td')).toEqual([48.145833333333336, 11.625]) // Munich
    expect(gridToLocation('GF15vc')).toEqual([-34.895833333333336, -56.208333333333336]) // Montevideo
    expect(gridToLocation('FM18lw')).toEqual([38.9375, -77.04166666666667]) // Washington, DC
    expect(gridToLocation('RE78ir')).toEqual([-41.270833333333336, 174.70833333333334]) // Wellington
    expect(gridToLocation('FN31pr')).toEqual([41.729166666666664, -72.70833333333333]) // Newington, CT (W1AW)
    expect(gridToLocation('CM87wj')).toEqual([37.395833333333336, -122.125]) // Palo Alto (K6WRU)
    expect(gridToLocation('EM75kb')).toEqual([35.0625, -85.125]) // Chattanooga (KI6CQ/4)
    expect(gridToLocation('FN43rq')).toEqual([43.6875, -70.54166666666667]) // Buxton (N1SH)
  })
})
