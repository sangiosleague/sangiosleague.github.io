<template>
  <div class="container" :class="{'noPad': selectedTeam}">
    <h1 v-if="!hasTeams">
      Teams
    </h1>
    <div v-if="hasTeams">
      <div id="teams" class="text-center">
        >
        <div v-if="!selectedTeam">
          <b-card no-body style="margin-bottom: 1rem;">
            <b-table
              striped
              hover
              :fields="fields"
              :items="teams"
              responsive="sm"
              thead-class="d-none"
              @row-clicked="(item, index, event) => rowClickHandler(item, index, event)"
            >
              <template #cell(id)="data">
                <img
                  class="thmb img-fluid"
                  :src="`${$axios.defaults.baseURL}/${year}/images/${data.value}.jpg`"
                  alt="thumbnail image"
                  :style="`${is2020?'border-radius: 50%;':''}`"
                >
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
          <img
            class="img-fluid"
            :src="`${$axios.defaults.baseURL}/${year}/images/${selectedTeam}.${is2020?'png':'jpg'}`"
            alt="fuild image"
          >
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
                  :fields="fields2"
                  :items="teamMap[selectedTeam].players"
                  responsive="sm"
                  thead-class="d-none"
                >
                  <template #cell(number)="data">
                    {{ data.value==-1 ? "All." : data.value }}
                  </template>
                </b-table>
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
      ],
      fields2: [
        'number', 'firstName', 'lastName'
      ]
    }
  },
  computed: {
    hasTeams () {
      return this.teams.length > 0
    },
    is2020 () {
      return this.year === '2020'
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
    window.addEventListener('keydown', this.unselectTeamOnEscape)
  },
  destroyed () {
    window.removeEventListener('keypress', this.unselectTeamOnEscape)
  },
  methods: {
    hasSelectedTeam () {
      // eslint-disable-next-line no-console
      console.log('selectedTeam', this.$store.state.selectTeam)
      return typeof this.selectedTeam !== 'undefined'
    },
    rowClickHandler (item, index, event) {
      // eslint-disable-next-line no-console
      console.log('item', item, 'index', index, 'event', event)
      this.selectTeam(item.id)
    },
    unselectTeamOnEscape (e) {
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
}
#teams td {
  text-align: left !important;
}
#teams td:last-child {
  text-align: right !important;
}
.noPad {
  padding-top: 0 !important;
}
</style>
