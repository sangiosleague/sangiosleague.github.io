<template>
  <div>
    <h1>teams</h1>
    <b-img v-for="team in teams" :key="team" :src="`/images/teams/${team}.png`" fluid alt="Fluid image" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const teams = await $axios.$get('/api/teams.json')
    return { teams }
  }
}
</script>

<style lang="scss">
</style>
