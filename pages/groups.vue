<template>
  <div class="container">
    <h1>Groups</h1>
    <div
      v-for="(fixtures, group) in fixturesMap"
      :key="group"
      class="card"
      style="margin-bottom:1rem"
    >
      <h3 style="margin-left: .5rem">
        Group {{ group }}
      </h3>
      <b-table
        id="groups"
        striped
        hover
        :items="fixtures"
        responsive="sm"
      >
        <template #cell(team)="data">
          {{ teamMap[data.item.team].name }}
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    teamMap () {
      return this.$store.state.teamMap
    },
    fixturesMap () {
      const map = { A: {}, B: {} }
      const directs = {}
      function rememberDirect (left, right, val) {
        if (!directs[left]) {
          directs[left] = {}
        }
        directs[left][right] = val
        // eslint-disable-next-line no-console
        console.log(directs)
      }
      this.$store.state.fixtures.forEach((fixture) => {
        if (fixture.group === 'A' || fixture.group === 'B') {
          for (const left in [0, 1]) {
            const nameLeft = fixture.teams[left].id
            const right = (+left + 1) % 2
            const nameRight = fixture.teams[right].id
            let obj = map[fixture.group][fixture.teams[left].id]
            if (!obj) {
              obj = map[fixture.group][fixture.teams[left].id] = {
                team: nameLeft,
                Pts: 0,
                PG: 0,
                V: 0,
                N: 0,
                P: 0,
                GF: 0,
                GS: 0,
                '⁺∕₋': 0
              }
            }
            obj.GF += fixture.teams[left].goals
            obj.GS += fixture.teams[right].goals
            obj['⁺∕₋'] += (fixture.teams[left].goals - fixture.teams[right].goals)
            obj.PG += 1
            if (fixture.teams[left].goals > fixture.teams[right].goals) {
              obj.V += 1
              obj.Pts += 3
              rememberDirect(nameLeft, nameRight, 1)
            } else if (fixture.teams[left].goals < fixture.teams[right].goals) {
              obj.P += 1
              rememberDirect(nameLeft, nameRight, -1)
            } else {
              obj.N += 1
              obj.Pts += 1
              rememberDirect(nameLeft, nameRight, 0)
            }
          }
        }
      })
      function compare (a, b) {
        // points
        let diff = b.Pts - a.Pts
        if (diff !== 0) {
          return diff
        }
        // diff goals
        diff = b['⁺∕₋'] - a['⁺∕₋']
        if (diff !== 0) {
          return diff
        }
        // goals
        diff = b.GF - a.GF
        if (diff !== 0) {
          return diff
        }
        // scontri diretti
        diff = directs[a.team][b.team]
        if (diff !== 0) {
          return diff
        }
      }
      return { A: Object.values(map.A).sort(compare), B: Object.values(map.B).sort(compare) }
    },
    map () {
      return this.$store.state.map
    }
  },
  mounted () {
    this.getFixtures()
    this.getTeams()
  },
  methods: {
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
#groups tbody tr:nth-child(-n + 2) {
    border-left: 6px solid turquoise; // #40A0E0
    border-right: 6px solid turquoise;
}
</style>
