<!-- https://merrymaker.github.io/bs4-holygrail-layout/ -->
<template>
  <div class="d-flex flex-column vh-100">
    <header class="header fixed-top">
      <b-dropdown id="dropdown-dropright" dropright :text="$store.state.year" variant="primary" class="m-2">
        <b-dropdown-item href="#" @click="onSetYear('2020')">
          2020
        </b-dropdown-item>
        <b-dropdown-item href="#" @click="onSetYear('2021')">
          2021
        </b-dropdown-item>
      </b-dropdown>
    </header>
    <main role="main">
      <Nuxt />
    </main>
    <footer class="footer fixed-bottom">
      <Navbar />
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    async onSetYear (y) {
      this.$store.commit('setYear', {
        year: y
      })
      await this.$store.dispatch('getTeams')
    }
  }
}
</script>

<style scoped>
</style>
