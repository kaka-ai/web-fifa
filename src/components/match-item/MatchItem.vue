<template>
  <div class="m-match">
    <div class="col-sm-12 col-md-12">
      <div class="card">
        <div class="card-body row">
          <div class="col-5 text-right">
            <span>{{homeTeam.country}}</span>
            <button type="button" class="btn bmd-btn-fab">
              <img class="flag btn-raised" :src="getFlagUrl(homeTeam.country)" alt="Flag"/>
            </button>
          </div>
          <div class="col-2 text-center pt-3 h5">
            <span>{{homeTeam.goals}}</span>
            <span>-</span>
            <span>{{awayTeam.goals}}</span>
          </div>
          <div class="col-5">
            <button type="button" class="btn bmd-btn-fab">
            <img class="flag" :src="getFlagUrl(awayTeam.country)" alt="Flag"/>
            </button>
            <span>{{awayTeam.country}}</span>
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
span {
  font-size: 1.2em;
  margin-left: 5px;
  margin-right: 5px;
}
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
