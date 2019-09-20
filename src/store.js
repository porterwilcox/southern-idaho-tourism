import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    center: []
  },
  mutations: {
    setCenter(state, center) {
      state.center = center
    }
  },
  actions: {
    setCenter({ commit: c }, center) {
      c('setCenter', center)
    }
  }
})
