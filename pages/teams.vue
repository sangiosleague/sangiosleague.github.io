<template>
  <div id="teams" class="container">
    <div v-if="!selectedTeam">
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
      <div class="float-left d-inline">
        <button
          type="button"
          class="btn btn-light"
          style="position: absolute; top: 3.5rem; left: 0.5rem !important; border-radius: 50%"
          @click="selectTeam(undefined)"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
      </div>
      <b-img
        :src="`/images/${year}/teams/${selectedTeam}.png`"
        fluid
        alt="fuild image"
      />
      <b-table
        striped
        hover
        :items="teamMap[selectedTeam].players"
        responsive="sm"
        thead-class="d-none"
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
      ]
    }
  },
  computed: {
    teams () {
      return this.$store.state.teams
    },
    teamMap () {
      const qwe = this._.keyBy(this.$store.state.teams, 'id')
      // this._.mapValues(this._.keyBy(this.$store.state.teams, 'id'), 'players')
      // eslint-disable-next-line no-console
      console.log(qwe)
      return qwe
    },
    selectedTeam () {
      return this.$store.state.selectedTeam
    },
    year () {
      return this.$store.state.year
    }
  },
  mounted () {
    this.getTeams()
    // eslint-disable-next-line no-console
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.selectedTeam !== undefined) {
        this.$store.commit('selectTeam', {
          team: undefined
        })
      }
    })
  },
  methods: {
    selectTeam (team) {
      this.$store.commit('selectTeam', {
        team
      })
    },
    async getTeams () {
      await this.$store.dispatch('getTeams')
    }
  }
}
</script>

<style lang="scss">
#teams {
  padding: 0;
}
#teams img.img-thumbnail{
  max-width: 200px;
}
td:last-child {
  text-align: right !important;
}
</style>
