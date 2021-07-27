<template>
  <div class="container">
    <h1>groups</h1>
    <div
      v-for="(fixtures, group) in fixturesMap"
      :key="group"
      class="card"
    >
      <h1>{{ group }}</h1>
      <b-table
        striped
        hover
        :items="fixtures"
        responsive="sm"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fixturesMap () {
      const map = { A: {}, B: {} }
      this.$store.state.fixtures.forEach((fixture) => {
        if (fixture.group === 'A' || fixture.group === 'B') {
          if (!map[fixture.group][fixture.teams[0].id]) {
            map[fixture.group][fixture.teams[0].id] = {
              name: fixture.teams[0].id,
              totalGoals: 0
            }
          }
          map[fixture.group][fixture.teams[0].id].totalGoals += fixture.teams[0].goals
        }
      })
      // eslint-disable-next-line no-console
      console.log('mapA', map.A)
      return { A: Object.values(map.A), B: Object.values(map.B) }
    },
    map () {
      return this.$store.state.map
    }
  },
  mounted () {
    this.getFixtures()
    this.getTeams()
  },
  methods: {
    async getTeams () {
      await this.$store.dispatch('getTeams')
    },
    async getFixtures () {
      await this.$store.dispatch('getFixtures')
    }
  }
}

</script>

<style lang="scss">
</style>
