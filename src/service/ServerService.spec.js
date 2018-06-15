import serverService from './ServerService'

describe('ServerService Tests', () => {
  it('It should be not null', () => {
    expect(serverService).not.toBeNull()
  })

  it('It should have host, port and protocol', () => {
    expect(serverService.host).not.toBeNull()
    expect(serverService.port).not.toBeNull()
    expect(serverService.protocol).not.toBeNull()
  })

  it('It should return endpoint', () => {
    let actual = serverService.getEndpoint()
    expect(actual).not.toBeNull()
  })

  it('It should return matches endpoint', () => {
    let actual = serverService.getMatchesEndpoint()
    expect(actual).not.toBeNull()
  })

  it('It should return matches today endpoint', () => {
    let actual = serverService.getMatchesTodayEndpoint()
    expect(actual).not.toBeNull()
  })

  it('It should return flag endpoint', () => {
    let actual = serverService.getFlagEndpoint('be')
    expect(actual).not.toBeNull()

    actual = serverService.getFlagEndpoint('vi')
    expect(actual).not.toBeNull()
  })
})
