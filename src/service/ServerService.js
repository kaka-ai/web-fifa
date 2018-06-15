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
}

export default new ServerService()
