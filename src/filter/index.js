import uppercase from './uppercase/UppercaseFilter'
import limit from './limit/LimitFilter'
import date from './date/DateFilter'

export default {
  install (Vue) {
    Vue.filter('uppercase', uppercase)
    Vue.filter('limit', limit)
    Vue.filter('date', date)
  }
}
