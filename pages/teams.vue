<template>
  <div id="teams" class="container">
    <h1>teams</h1>

    <b-table
      striped
      hover
      :fields="fields"
      :items="teams"
      responsive="sm"
      thead-class="d-none"
    >
      <template #cell(id)="data">
        <b-img
          :src="`/images/${year}/teams/${data.value}.png`"
          thumbnail
          alt="thumbnail image"
        />
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        // A column that needs custom formatting
        'name',
        { key: 'id', label: '' }
      ],
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

<style lang="scss">
#teams img {
  /* padding: 1rem;
  border-radius: 2rem !important;
  */
  max-width: 75%;
}
td:last-child {
  text-align: right !important;
}
</style>
