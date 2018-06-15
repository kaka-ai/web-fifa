<template>
  <div class="m-match">
    <div class="col s12 m12">
      <div class="card">
        <div class="card-content">
          <img :src="getFlagUrl(homeTeam.code)" alt="Flag">
          <img :src="getFlagUrl(awayTeam.code)" alt="Flag">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import serverService from '@/service/ServerService'
export default {
  name: 'MatchItem',
  data () {
    return {
      datetime: '2018-06-14T17:00:00.000-05:00',
      status: 'completed',
      homeTeam: {
        country: 'Russia',
        code: 'RUS',
        goals: 5
      },
      awayTeam: {
        country: 'Saudi Arabia',
        code: 'KSA',
        goals: 0
      }
    }
  },
  methods: {
    getFlagUrl (code) {
      return serverService.getFlagEndpoint(code)
    }
  }
}
</script>

<style scoped>

</style>
