import moment from 'moment'

export default (input, seperator = '') => {
  return moment(input, 'yyyy-MM-DDTHH:mm:ssZ').utc().add(1, 'hours').format(`HH${seperator}mm`)
}
