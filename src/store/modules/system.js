let state = {
  isCollapse: false   // 显示和隐藏左侧菜单栏
};

const mutations = {
  hideSidebar (state, nextState) {
    state.isCollapse = nextState;
  },

  showSidebar (state) {
    console.log(state);
  }
};

export default {
  state,
  mutations
};
