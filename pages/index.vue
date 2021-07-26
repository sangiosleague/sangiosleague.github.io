<template>
  <div v-if="$store.state.year === '2021'" id="daysUntilKickOff" class="text-right m-2">
    <b>{{ daysUntilKickOff }} days </b> until kick-off
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
  }
}
</script>

<style lang="scss" scoped>
#daysUntilKickOff {
  font-size:  x-large;
  margin-top: 1rem;
}
</style>
