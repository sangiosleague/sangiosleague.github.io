<template>
  <div :data-git="gitUrl" />
</template>

<script>
export default {
  data () {
    return {
      gitUrl: `https://github.com/sangiosleague/sangiosleague.github.io/commit/${process.env.NUXT_ENV_CURRENT_GIT_SHA}`
    }
  }
}
</script>

<style lang="scss">
body {
  background: url(/logo_watermark.svg) no-repeat center center fixed;;
  background-size: contain;
  padding: 1rem;
}
</style>
