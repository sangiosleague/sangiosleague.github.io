export const state = () => ({
  year: '2020',
  teams: [],
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
    // eslint-disable-next-line no-console
    // console.log('setTeams', state.teams)
  },
  selectTeam (state, payload) {
    state.selectedTeam = payload.team
    // eslint-disable-next-line no-console
    // console.log('selectTeam', state.selectedTeam)
  },
  setFixtures (state, payload) {
    state.fixtures = payload
  }
}

export const actions = {
  async getTeams ({ commit, state }) {
    const res = await this.$axios.get(state.year + '/teams.json', { progress: false })
    commit('setTeams', res.data)
    return res.data
  },
  async getFixtures ({ commit, state }) {
    const res = await this.$axios.get(state.year + '/fixtures.json', { progress: false })
    commit('setFixtures', res.data)
    return res.data
  }
}
