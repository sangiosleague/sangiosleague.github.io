export const state = () => ({
  year: '2020',
  selectedTeam: undefined
})

export const getters = {
}

export const mutations = {
  setYear (state, payload) {
    if (payload.year === '2020' || payload.year === '2021') {
      state.year = payload.year
    }
  },
  selectTeam (state, payload) {
    state.selectedTeam = payload.team
  }
}

export const actions = {
  async getTeams ({ state }) {
    const res = await this.$axios.get(state.year + '/teams.json', { progress: false })
    return res.data
  }
}
