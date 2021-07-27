export const state = () => ({
  year: '2021',
  teams: [],
  teamMap: [],
  selectedTeam: undefined,
  fixtures: []
})

export const getters = {
  getFixtures: state => (team) => {
    return state.fixtures.reduce((accumulator, currentValue) => {
      if (currentValue.teams[0].id === team || currentValue.teams[1].id === team) {
        accumulator.push(currentValue)
      }
      return accumulator
    }, [])
  }
}

export const mutations = {
  setYear (state, payload) {
    if ((payload.year === '2020' || payload.year === '2021') && state.year !== payload.year) {
      state.year = payload.year
      state.teamMap = []
      state.selectedTeam = undefined
      state.fixtures = []
    }
  },
  setTeams (state, payload) {
    state.teams = payload
    state.teamMap = state.teams.reduce((accumulator, currentValue) => {
      accumulator[currentValue.id] = currentValue
      return accumulator
    }, {})
  },
  selectTeam (state, payload) {
    state.selectedTeam = payload.team
  },
  setFixtures (state, payload) {
    state.fixtures = payload
    state.fixtures.forEach(function (element) {
      element.id = element.teams[0].id + '_' + element.teams[1].id
    })
  },
  restoreStoreModule (state, { module, value }) {
    const split = module.split('.')
    const last = split.pop();

    (split.length
      ? split.reduce((acc, cur) => acc[cur], state)
      : state)[last] = value
  }
}

export const actions = {
  getYear ({ commit, state }) {
    // eslint-disable-next-line no-console
    console.log(state.year)
  },
  async getTeams ({ commit, state }) {
    const res = await this.$axios.get(state.year + '/teams.json', { progress: false })
    const teams = res.data
    commit('setTeams', teams)
    return teams
  },
  async getFixtures ({ commit, state }) {
    const res = await this.$axios.get(state.year + '/fixtures.json', { progress: false })
    const fixtures = res.data
    commit('setFixtures', fixtures)
    return fixtures
  }
}
