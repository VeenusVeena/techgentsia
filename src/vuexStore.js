import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    safelyStoredNumber: 2,

    userX: {
      name: "",
      email: "",
      dob: "",
      gender: "",
      password: "",
    },
  },
  getters: {
    safelyStoredNumber: (state) => state.safelyStoredNumber,
    userX: (state) => state.userX,
  },
  mutations: {
    setName(state, value) {
      state.userX.name = value;
    },
    setEmail(state, value) {
      state.userX.email = value;
    },
    setPassword(state, value) {
      state.userX.password = value;
    },
    setGender(state, value) {
      state.userX.gender = value;
    },
    setDob(state, value) {
      state.userX.dob = value;
    },
  },
});
