<template>
  <div id="teams" class="container">
    <h1>teams</h1>
    <div v-if="!selectedTeam">
      <b-table
        striped
        hover
        :fields="fields"
        :items="teams"
        responsive="sm"
        thead-class="d-none"
      >
        <template #cell(id)="data">
          <a
            @click="selectTeam(data.value)"
          >
            <b-img
              :src="`/images/${year}/teams/${data.value}.png`"
              thumbnail
              alt="thumbnail image"
            />
          </a>
        </template>
      </b-table>
    </div>
    <div v-if="selectedTeam">
      <h2>
        <a @click="selectTeam(undefined)">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </a>
      </h2>
      <b-img
        :src="`/images/${year}/teams/${selectedTeam}.png`"
        fluid
        alt="fuild image"
      />
    </div>
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
    selectedTeam () {
      return this.$store.state.selectedTeam
    },
    year () {
      return this.$store.state.year
    }
  },
  mounted () {
    this.getTeams()
  },
  methods: {
    selectTeam (team) {
      this.$store.commit('selectTeam', {
        team
      })
    },
    async getTeams () {
      this.teams = await this.$store.dispatch('getTeams')
    }
  }
}
</script>

<style lang="scss">
#teams img.img-thumbnail{
  max-width: 200px;
}
td:last-child {
  text-align: right !important;
}
</style>
