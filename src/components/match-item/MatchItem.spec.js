import { shallowMount, createLocalVue } from '@vue/test-utils'
import MatchItem from './MatchItem'
import filter from '@/filter'
import Delay from 'vue-delay'

const localVue = createLocalVue()
localVue.use(Delay)

localVue.use(filter)

describe('MatchItem.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(MatchItem, {
      localVue
    })
    expect(wrapper).not.toBeNull()
  })
})
