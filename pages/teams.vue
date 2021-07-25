<template>
  <div id="teams">
    <h1>teams</h1>
    <b-img
      v-for="team in teams"
      :key="team"
      :src="`/images/${team}.png`"
      rounded
      fluid
      alt="Fluid image"
    />
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

<style lang="scss" scoped>
#teams img {
  padding: 1rem;
  border-radius: 2rem !important;
}
</style>
