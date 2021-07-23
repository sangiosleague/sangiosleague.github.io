<template>
  <p class="">
    View Count: <b>{{ count }}</b>
  </p>
</template>

<script>
export default {
  async asyncData () {
    const response = await fetch('http://localhost:3001/api/count')
    return await response.json() // { count: 123 }
  },
  data () {
    return {
      count: 0
    }
  },
  head: {
    title: 'Nuxt with Upstash'
  },
  methods: {
    async getCount () {
      const response = await fetch('http://localhost:3001/api/count')
      const data = await response.json()
      this.count = data.count
    }
  }
}
</script>

<style lang="scss">
</style>
