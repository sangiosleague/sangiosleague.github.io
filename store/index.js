export const state = () => ({
  year: '2020',
  teams: [],
  teamMap: [],
  selectedTeam: undefined,
  fixtures: []
})

export const getters = {
}

export const mutations = {
  setYear (state, payload) {
    if ((payload.year === '2020' || payload.year === '2021') && state.year !== payload.year) {
      state.year = payload.year
      state.teams = []
      state.selectedTeam = undefined
      // eslint-disable-next-line no-console
      // console.log('setYear', state.year)
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
  }
}

export const actions = {
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
