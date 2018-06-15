import axios from 'axios'
import serverService from '@/service/ServerService'

export default {
  namespaced: true,
  state: {
    matches: []
  },
  getters: {
    getMatches (state) {
      return state.matches
    }
  },
  mutations: {
    getMatches (state, {matches}) {
      state.matches = matches
    },
    getMatchesToday (state, {matches}) {
      state.matches = matches
    }
  },
  actions: {
    getMatches (context) {
      let url = serverService.getMatchesEndpoint()
      axios.get(url).then(response => {
        context.commit('getMatches', {matches: response.data})
      }).catch(err => {
        console.error(err)
      })
    },
    getMatchesToday (context) {
      let url = serverService.getMatchesTodayEndpoint()
      axios.get(url).then(response => {
        context.commit('getMatchesToday', {matches: response.data})
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
