import axios from 'axios'

class ServerService {
  constructor () {
    axios.defaults.timeout = 4000

    this.protocol = 'http'
    this.port = '80'
    this.host = 'worldcup.sfg.io'
  }
  getEndpoint () {
    return `${this.protocol}://${this.host}:${this.port}`
  }
  getMatchesEndpoint () {
    return `${this.getEndpoint()}/matches`
  }
  getMatchesTodayEndpoint () {
    return `${this.getEndpoint()}/matches/today`
  }
  getFlagEndpoint (countryCode) {
    countryCode = countryCode.substring(0, 2)
    if (countryCode === 'KS') {
      countryCode = 'SA'
    }
    return `http://www.countryflags.io/${countryCode}/shiny/64.png`
  }
}

export default new ServerService()
