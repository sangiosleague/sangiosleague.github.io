<template>
  <div id="Teams" class="container">
    <div v-if="!selectedTeam">
      <h1>Teams</h1>
      <b-card>
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
                class="thmb"
                :src="`/images/${year}/teams/${data.value}.jpg`"
                alt="thumbnail image"
              />
            </a>
          </template>
        </b-table>
      </b-card>
    </div>
    <div v-if="selectedTeam">
      <div class="float-left d-inline">
        <button
          type="button"
          class="btn btn-light"
          style="position: absolute; top: .5rem; left: 0.5rem !important; border-radius: 50%; background-color: rgba(255,255,255, .75)"
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
      <b-card>
        <b-table
          striped
          hover
          :items="teamMap[selectedTeam].players"
          responsive="sm"
          thead-class="d-none"
        />
      </b-card>
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
      return this.$store.state.teamMap
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
#teams img.thmb {
  max-width: 170px;
  border-radius: 50%;
}
td:last-child {
  text-align: right !important;
}
</style>
