<template>
  <div class="container">
    <header class="header fixed-top">
      <b-dropdown id="dropdown-dropright" dropright :text="theYear" variant="primary" class="m-2">
        <b-dropdown-item href="#" @click="onSetYear('2020')">
          2020
        </b-dropdown-item>
        <b-dropdown-item href="#" @click="onSetYear('2021')">
          2021
        </b-dropdown-item>
      </b-dropdown>
    </header>

    <div id="daysUntilKickOff" class="text-right m-2" style="color: white">
      &nbsp;
      <span v-if="theYear === '2021'">
        <b>{{ daysUntilKickOff }} days </b> until kick-off
      </span>
    </div>

    <div id="winners">
      <b-img
        :src="`/resources/${theYear}/winners.jpg`"
        fluid
        alt="winners"
        style="margin-top: 1.5rem;"
      />
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
    },
    theYear () {
      return this.$store.state.year
    }
  },
  mounted () {
    this.getYear()
  },
  methods: {
    async onSetYear (y) {
      this.$store.commit('setYear', {
        year: y
      })
      await this.$store.dispatch('getTeams')
    },
    async getYear () {
      await this.$store.dispatch('getYear')
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
