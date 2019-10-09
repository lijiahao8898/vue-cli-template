let state = {
  isCollapse: localStorage.getItem('isCollapse') === 'true'   // 显示和隐藏左侧菜单栏
};

const mutations = {
  toggleSidebar (state, nextState) {
    state.isCollapse = nextState;
    localStorage.setItem('isCollapse', nextState);
  },
};

export default {
  state,
  mutations
};
