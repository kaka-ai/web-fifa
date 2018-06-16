<template>
  <div class="m-match">
    <div class="col-sm-12 col-md-12">
      <div class="card d-none d-sm-block">
        <div class="card-body row">
          <div class="col-5 text-right">
            <span class="h5 mr-1">{{homeTeam.country | country}}</span>
            <button type="button" class="btn bmd-btn-fab">
              <img class="flag btn-raised" :src="getFlagUrl(homeTeam.country)" alt="Flag"/>
            </button>
          </div>
          <div class="col-2 text-center pt-3 h5">
           <div v-if="status == 'completed'">
              <div>
                <span>{{homeTeam.goals}}</span>
                <span>-</span>
                <span>{{awayTeam.goals}}</span>
              </div>
           </div>
           <div v-else>
              <span>{{datetime | date(' : ')}}</span>
           </div>
          </div>
          <div class="col-5">
            <button type="button" class="btn bmd-btn-fab">
            <img class="flag" :src="getFlagUrl(awayTeam.country)" alt="Flag"/>
            </button>
            <span class="h5 ml-1">{{awayTeam.country | country}}</span>
          </div>
        </div>
      </div>
      <div class="card d-block d-sm-none">
        <div class="card-body row">
          <div class="col-5 text-right">
            <button type="button" class="btn bmd-btn-fab">
              <img class="flag btn-raised" :src="getFlagUrl(homeTeam.country)" alt="Flag"/>
            </button><br>
            <span class="h5 mr-1">{{homeTeam.country | country}}</span>
          </div>
          <div class="col-2 text-center pt-4 h5">
           <div v-if="status == 'completed'">
              <div>
                <span>{{homeTeam.goals}}</span>
                <span>{{awayTeam.goals}}</span>
              </div>
           </div>
           <div v-else>
              <span>{{datetime | date(' ')}}</span>
           </div>
          </div>
          <div class="col-5">
            <button type="button" class="btn bmd-btn-fab">
            <img class="flag" :src="getFlagUrl(awayTeam.country)" alt="Flag"/>
            </button><br>
            <span class="h5 ml-1">{{awayTeam.country | country}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchItem',
  props: {
    datetime: {
      default: '2018-06-14T17:00:00.000-05:00'
    },
    status: {
      default: 'completed'
    },
    homeTeam: {
      default: () => ({
        country: 'Russia',
        code: 'RUS',
        goals: 5
      })
    },
    awayTeam: {
      default: () => ({
        country: 'Saudi Arabia',
        code: 'KSA',
        goals: 0
      })
    }
  },
  methods: {
    getFlagUrl (name) {
      name = name.toLowerCase().replace(' ', '-')
      return `/static/img/flags/svg/${name}.svg`
    }
  }
}
</script>

<style scoped>

.flag {
  margin-top: 4px;
  margin-bottom: 4px;
  width: 40px;
  height: 40px;
}
.card-body {
  padding: 0;
}
.m-match {
  width: 100%;
}
</style>
