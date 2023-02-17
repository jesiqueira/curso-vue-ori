import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Lobo",
    aulaCompletas: 10,
  },
  mutations: {
    changeUser(state) {
      state.user = "Ave";
    },
    completarAula(state) {
      state.aulaCompletas++
    },
  },
});
