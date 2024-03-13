import { locationToGrid4, locationToGrid6 } from './locationToGrid'

describe('locationToGrid', () => {
  it('should work for 4 element grids', () => {
    expect(locationToGrid4(48.14666, 11.60833)).toEqual('JN58') // Munich
    expect(locationToGrid4(-34.91, -56.21166)).toEqual('GF15') // Montevideo
    expect(locationToGrid4(38.92, -77.065)).toEqual('FM18') // Washington, DC
    expect(locationToGrid4(-41.28333, 174.745)).toEqual('RE78') // Wellington
    expect(locationToGrid4(41.714775, -72.727260)).toEqual('FN31') // Newington, CT (W1AW)
    expect(locationToGrid4(37.413708, -122.1073236)).toEqual('CM87') // Palo Alto (K6WRU)
    expect(locationToGrid4(35.0542, -85.1142)).toEqual('EM75') // Chattanooga (KI6CQ/4)
    expect(locationToGrid4(43.686292, -70.549876)).toEqual('FN43') // Buxton (N1SH)
  })

  it('should work for 6 element grids', () => {
    expect(locationToGrid6(48.14666, 11.60833)).toEqual('JN58td') // Munich
    expect(locationToGrid6(-34.91, -56.21166)).toEqual('GF15vc') // Montevideo
    expect(locationToGrid6(38.92, -77.065)).toEqual('FM18lw') // Washington, DC
    expect(locationToGrid6(-41.28333, 174.745)).toEqual('RE78ir') // Wellington
    expect(locationToGrid6(41.714775, -72.727260)).toEqual('FN31pr') // Newington, CT (W1AW)
    expect(locationToGrid6(37.413708, -122.1073236)).toEqual('CM87wj') // Palo Alto (K6WRU)
    expect(locationToGrid6(35.0542, -85.1142)).toEqual('EM75kb') // Chattanooga (KI6CQ/4)
    expect(locationToGrid6(43.686292, -70.549876)).toEqual('FN43rq') // Buxton (N1SH)
  })
})

