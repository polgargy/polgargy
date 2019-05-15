import Vue from 'vue'

Vue.filter('date', (value, format = 'YYYY. MM. DD. HH:mm', lang = 'hu') => {
  moment.locale(lang)

  return moment(value)
    .utc()
    .format(format)
})

Vue.filter('uppercase', value => {
  return value.toUpperCase()
})
