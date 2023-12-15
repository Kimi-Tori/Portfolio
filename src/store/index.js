import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    theme: 'light',
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});