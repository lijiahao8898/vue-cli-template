let state = {
  isCollapse: localStorage.getItem('isCollapse') === 'true',   // 显示和隐藏左侧菜单栏
  systemName: '至元数据科技有限公司'
};

const mutations = {
  toggleSidebar (state, nextState) {
    state = Object.assign(state, {isCollapse: nextState});
    localStorage.setItem('isCollapse', nextState);
  },
};

export default {
  namespaced: true,
  state,
  mutations
};
