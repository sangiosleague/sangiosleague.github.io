<template>
  <div id="daysUntilKickOff" class="text-center">
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
