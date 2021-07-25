export const state = () => ({})

export const getters = {
}

export const mutations = {
}

export const actions = {
  async getTeams () {
    const res = await this.$axios.get('/teams.json', { progress: false })
    return res.data
  }
}
