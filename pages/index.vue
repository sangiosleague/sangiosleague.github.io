<template>
  <h2 class="text-center" style="margin-top: 1rem;">
    <b>{{ daysUntilKickOff }} days </b> until kick-off
  </h2>
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

<style lang="scss">
</style>
