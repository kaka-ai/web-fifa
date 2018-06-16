import dateFilter from './DateFilter'

describe('DateFilter tests', () => {
  it('should render uppercase content', () => {
    let input = 'sample'
    let result = dateFilter(input)
    expect(result).not.toBeNull()

    result = dateFilter('2018-06-15T16:00:00.000-05:00', ':')
    expect(result).not.toBeNull()

    let pattern = /\d:\d/
    expect(pattern.test(result)).toBeTruthy()

    result = dateFilter('2018-06-15T16:00:00.000-05:00')
    expect(result).not.toBeNull()

    pattern = /\d\d/
    expect(pattern.test(result)).toBeTruthy()
  })
})
