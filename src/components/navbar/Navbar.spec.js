import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import OriginStore from '@/store'
import Navbar from './Navbar'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Navbar.vue', () => {
  let store
  beforeEach(() => {
    store = {...OriginStore}
  })

  it('should render correct contents', () => {
    const wrapper = shallowMount(Navbar, {
      store,
      localVue
    })
    expect(wrapper).not.toBeNull()
  })
})
