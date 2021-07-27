<template>
  <div class="container">
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

    <div v-if="$store.state.year === '2021'" id="daysUntilKickOff" class="text-right m-2">
      <b>{{ daysUntilKickOff }} days </b> until kick-off
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    daysUntilKickOff () {
      const start = this.$moment('2021-08-07')
      const now = this.$moment()
      return start.diff(now, 'days')
    }
  },
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

<style lang="scss" scoped>
#daysUntilKickOff {
  font-size:  x-large;
  margin-top: 1rem;
}
</style>
