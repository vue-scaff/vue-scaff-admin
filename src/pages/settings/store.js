export default ({ $http, $style }) => {
  const name = "settings";

  const state = {
    theme: $style.theme,
    showSettings: process.env.showSettings,
    tagsView: process.env.tagsView,
    fixedHeader: process.env.fixedHeader,
    sidebarLogo: process.env.sidebarLogo
  };

  const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value;
      }
    }
  };

  const actions = {
    changeSetting({ commit }, data) {
      commit("CHANGE_SETTING", data);
    }
  };

  return {
    name,
    state,
    mutations,
    actions
  };
};
