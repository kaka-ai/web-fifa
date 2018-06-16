import moment from 'moment'

export default (input, seperator = '') => {
  return moment(input).utc().add(1, 'hours').format(`HH ${seperator} mm`)
}
