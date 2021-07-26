<template>
  <div id="teams" class="container">
    <h1>teams</h1>

    <b-table striped hover :items="teams" />

    <!-- div
      v-for="value in teams"
      :key="value.id"
    >
      <a
        href="#"
      >{{ value.name }}</a>
    </div>
    <b-img
      v-for="value in teams"
      :key="value.id"
      :src="`/images/${year}/teams/${value.id}.png`"
      rounded
      fluid
      alt="Fluid image"
    / -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      teams: []
    }
  },
  computed: {
    year () {
      return this.$store.state.year
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
