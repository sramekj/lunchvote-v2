import axios from 'axios'

export const state = () => ({
  dailymenulist: []
})
export const getters = {
  getMenus(state) {
    return state.dailymenulist
  }
}

export const actions = {
  async loadMenusForId({ commit }, id) {
    try {
      const response = await axios.get(
        `https://developers.zomato.com/api/v2.1/dailymenu?res_id=${id}`,
        {
          headers: {
            'user-key': '6a300d56ad8090e3aa3e469048dbdb78',
            Accept: 'application/json'
          }
        }
      )
      commit('setMenus', response.data)
    } catch (e) {
      alert(e)
    }
  }
}

export const mutations = {
  setMenus: (state, menus) => {
    state.dailymenulist = menus
  }
}
