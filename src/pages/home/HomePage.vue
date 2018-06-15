<template>
  <div class="m-home row">
    <MatchItem/>
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
