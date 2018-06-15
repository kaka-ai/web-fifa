import Vue from 'vue'
import MatchItem from './MatchItem'

describe('MatchItem.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MatchItem)
    const vm = new Constructor().$mount()
    expect(vm).not.toBeNull()
  })
})
