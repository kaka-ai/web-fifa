import moment from 'moment'

export default (input) => {
  return moment(input).utc().add(1, 'hours').format('HH:mm')
}
