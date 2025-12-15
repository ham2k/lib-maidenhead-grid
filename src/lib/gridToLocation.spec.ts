import { gridToLocation } from './gridToLocation'

describe('gridToLocation', () => {
  it('should work for 4-element grids', () => {
    expect(gridToLocation('JN58')).toEqual([48.5, 11.0]) // Munich
    expect(gridToLocation('GF15')).toEqual([-34.5, -57.0]) // Montevideo
    expect(gridToLocation('FM18')).toEqual([38.5, -77.0]) // Washington, DC
    expect(gridToLocation('RE78')).toEqual([-41.5, 175.0]) // Wellington
    expect(gridToLocation('FN31')).toEqual([41.5, -73.0]) // Newington, CT (W1AW)
    expect(gridToLocation('CM87')).toEqual([37.5, -123.0]) // Palo Alto (K6WRU)
    expect(gridToLocation('EM75')).toEqual([35.5, -85.0]) // Chattanooga (KI6CQ/4)
    expect(gridToLocation('FN43')).toEqual([43.5, -71.0]) // Buxton (N1SH)
  })

  it('should work for 6-element grids', () => {
    expect(gridToLocation('JN58td')).toEqual([48.145833333333336, 11.625]) // Munich
    expect(gridToLocation('GF15vc')).toEqual([-34.89583333333333, -56.208333333333336]) // Montevideo
    expect(gridToLocation('FM18lw')).toEqual([38.9375, -77.04166666666666]) // Washington, DC
    expect(gridToLocation('RE78ir')).toEqual([-41.27083333333333, 174.70833333333331]) // Wellington
    expect(gridToLocation('FN31pr')).toEqual([41.72916666666667, -72.70833333333333]) // Newington, CT (W1AW)
    expect(gridToLocation('CM87wj')).toEqual([37.395833333333336, -122.125]) // Palo Alto (K6WRU)
    expect(gridToLocation('EM75kb')).toEqual([35.0625, -85.125]) // Chattanooga (KI6CQ/4)
    expect(gridToLocation('FN43rq')).toEqual([43.6875, -70.54166666666666]) // Buxton (N1SH)
  })

  it('should work for 8-element grids', () => {
    expect(gridToLocation('JN58td25')).toEqual([48.14791666666667, 11.604166666666668]) // Munich
    expect(gridToLocation('GF15vc41')).toEqual([-34.91041666666666, -56.2125]) // Montevideo
    expect(gridToLocation('FM18lw20')).toEqual([38.918749999999996, -77.0625]) // Washington, DC
    expect(gridToLocation('RE78ir92')).toEqual([-41.28125, 174.7458333333333]) // Wellington
    expect(gridToLocation('FN31pr21')).toEqual([41.71458333333334, -72.72916666666667]) // Newington, CT (W1AW)
    expect(gridToLocation('CM87wj79')).toEqual([37.41458333333333, -122.10416666666667]) // Palo Alto (K6WRU)
    expect(gridToLocation('EM75kb63')).toEqual([35.05625, -85.11250000000001]) // Chattanooga (KI6CQ/4)
    expect(gridToLocation('FN43rq44')).toEqual([43.68541666666666, -70.54583333333333]) // Buxton (N1SH)
  })

})

