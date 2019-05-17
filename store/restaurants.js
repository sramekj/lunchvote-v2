export const state = () => ({
  restaurants: [
    {
      id: '16507120',
      name: 'Potrefená Husa',
      link: 'http://www.potrefene-husy.cz/cz/pankrac-poledni-menu'
    },
    {
      id: '16516837',
      name: 'Café Empiria',
      link: 'https://cafe-empiria.cz/cs/'
    }
    // TODO......
  ]
})

export const getters = {
  getRestaurants(state) {
    return state.restaurants
  }
}
