<template>
  <div>
    <h1>teams</h1>
    <b-img v-for="team in teams" :key="team" :src="`/images/${team}.png`" fluid alt="Fluid image" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      teams: []
    }
  },
  mounted () {
    this.getTeams()
  },
  methods: {
    async getTeams () {
      this.teams = await this.$store.dispatch('getTeams')
    }
  }
}
</script>

<style lang="scss">
</style>
