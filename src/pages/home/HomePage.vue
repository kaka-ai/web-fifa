<template>
  <div class="m-home">
    <div class="row">
      <div class="col text-center">
        <h1 class="text-muted text-uppercase">Match Tonight</h1>
      </div>
    </div>
     <delay class="row justify-content-center" v-for="(item, index) in matches"
      :key="index"
      :wait="(index + 1) * 0.6 * 1000">
      <MatchItem class="pb-2 animated fadeInUp" v-show="item.home_team.code != 'TBD'"
      :status="item.status"
      :datetime="item.datetime"
      :homeTeam="item.home_team"
      :awayTeam="item.away_team"/>
    </delay>
  </div>
</template>

<script>
import MatchItem from '@/components/match-item/MatchItem'
export default {
  components: {
    MatchItem
  },
  name: 'HomePage',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('match/getMatchesToday')
  },
  computed: {
    matches () {
      return this.$store.getters['match/getMatches']
    }
  }
}
</script>

<style scoped>

</style>
