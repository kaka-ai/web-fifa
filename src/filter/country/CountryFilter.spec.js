import countryFilter from './CountryFilter'

describe('CountryFilter.js', () => {
  it('It should return corrent country name', () => {
    let actual = countryFilter('Korea Republic')
    expect(actual).not.toBeNull()
    expect(actual).toEqual('South Korea')

    actual = countryFilter('AAAA')
    expect(actual).not.toBeNull()
    expect(actual).toEqual('AAAA')
  })
})
