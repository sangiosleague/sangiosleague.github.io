<template>
  <div class="container">
    <h1 v-if="!hasTeams">
      Teams
    </h1>
    <div v-if="hasTeams">
      <div id="teams" class="text-center">
        <div v-if="!selectedTeam">
          <b-card no-body style="margin-bottom: 1rem;">
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
                    :src="`/resources/${year}/teams/${data.value}.jpg`"
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
            :src="`/resources/${year}/teams/${selectedTeam}.png`"
            fluid
            alt="fuild image"
          />
          <b-card no-body style="margin-bottom: 1rem;">
            <b-tabs card>
              <b-tab title="Matchs" active>
                <div
                  v-for="fixture in $store.getters.getFixtures(selectedTeam)"
                  :key="fixture.id"
                  style="width: 100%"
                >
                  <Match :fixture="fixture" :team-map="teamMap" style="margin-bottom: 1rem;" />
                </div>
              </b-tab>
              <b-tab title="Team">
                <b-table
                  striped
                  hover
                  :items="teamMap[selectedTeam].players"
                  responsive="sm"
                  thead-class="d-none"
                />
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  scrollToTop: true,
  data () {
    return {
      fields: [
        'name',
        { key: 'id', label: '' }
      ]
    }
  },
  computed: {
    hasTeams () {
      return this.$store.state.teams.length > 0
    },
    ...mapGetters({
      teams: 'getTeams',
      teamMap: 'getTeamMap',
      selectedTeam: 'getSelectedTeam',
      year: 'getYear'
    })
  },
  mounted () {
    this.getTeams()
    this.getFixtures()
    window.addEventListener('keydown', this.unselectYearOnEscape)
  },
  destroyed () {
    window.removeEventListener('keypress', this.unselectYearOnEscape)
  },
  methods: {
    unselectYearOnEscape (e) {
      if (e.key === 'Escape' && this.selectedTeam !== undefined) {
        this.$store.commit('selectTeam', {
          team: undefined
        })
      }
    },
    selectTeam (team) {
      this.$store.commit('selectTeam', {
        team
      })
    },
    async getTeams () {
      await this.$store.dispatch('getTeams')
    },
    async getFixtures () {
      await this.$store.dispatch('getFixtures')
    }
  }
}
</script>

<style lang="scss">
#teams img.thmb {
  max-width: 170px;
  border-radius: 50%;
}
#teams td {
  text-align: left !important;
}
#teams td:last-child {
  text-align: right !important;
}
</style>
