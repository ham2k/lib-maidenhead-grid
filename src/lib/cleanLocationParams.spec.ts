import { cleanLocationParams } from './cleanLocationParams'

describe('cleanLocationParams', () => {
  it('should handle two numbers', () => {
    expect(cleanLocationParams(10, 20)).toEqual([10, 20])
    expect(cleanLocationParams(-10, 20)).toEqual([-10, 20])
  })

  it('should handle strings', () => {
    expect(cleanLocationParams("10", "20")).toEqual([10, 20])
    expect(cleanLocationParams("-10", "20")).toEqual([-10, 20])
    expect(cleanLocationParams(-10, "20")).toEqual([-10, 20])
  })

  it('should handle objects', () => {
    expect(cleanLocationParams({lat: "10", lon: "20"})).toEqual([10, 20])
    expect(cleanLocationParams({lat: 10, lon: "20"})).toEqual([10, 20])
    expect(cleanLocationParams({lat: "10", longitude: "20"})).toEqual([10, 20])
    expect(cleanLocationParams({latitude: "10", longitude: "20"})).toEqual([10, 20])
    expect(cleanLocationParams({lat: "10", lng: "20"})).toEqual([10, 20])
  })
  it('should handle objects with methods', () => {
    expect(cleanLocationParams({lat: () => "10", lon: () => "20"})).toEqual([10, 20])
  })
})

