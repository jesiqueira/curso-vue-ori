import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Lobo",
    aulaCompletas: 10,
  },
  mutations: {
    CHANGE_USER(state, payload) {
      state.user = payload.user;
    },
    COMPLETAR_AULA(state) {
      state.aulaCompletas++
    },
  },
});
