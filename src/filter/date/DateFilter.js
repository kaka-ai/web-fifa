import moment from 'moment'

export default (input, seperator = '') => {
  return moment(input, 'yyyy-MM-DDTHH:mm:ssZ').local().format(`HH${seperator}mm`)
}
