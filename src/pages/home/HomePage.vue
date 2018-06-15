<template>
  <div class="m-home row justify-content-center">
    <MatchItem class="pb-2" v-for="(item, index) in matches"
    :key="index" v-show="item.home_team.code != 'TBD'"
    :status="item.status"
    :datetime="item.datetime"
    :homeTeam="item.home_team"
    :awayTeam="item.away_team"/>
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
    this.$store.dispatch('match/getMatches')
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
