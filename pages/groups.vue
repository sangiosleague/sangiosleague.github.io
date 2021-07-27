<template>
  <div class="container">
    <h1>groups</h1>
    <div
      v-for="(fixtures, group) in fixturesMap"
      :key="group"
      class="card"
    >
      <b-table
        striped
        hover
        :items="fixtures"
        responsive="sm"
        thead-class="d-none"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fixturesMap () {
      return this._.reduce(this.$store.state.fixtures, function (result, value, key) {
        if (value.group === 'A' || value.group === 'B') {
          (result[value.group] || (result[value.group] = [])).push(value)
        }
        return result
      }, {})
    },
    teamMap () {
      return this.$store.state.teamMap
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
