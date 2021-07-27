<template>
  <b-card>
    <div style="font-size: smaller">
      <span v-if="!onlyHour">
        {{ $moment(fixture.when).format('LLLL') }}
      </span>
      <span v-if="onlyHour">
        {{ $moment(fixture.when).format('H:mm') }}
      </span>
      <span class="float-right">{{ fixture.group }}</span>
    </div>
    <div class="d-flex flex-column">
      <div class="text-left" :style="winner(fixture, 0) ? 'font-weight: bold' : ''">
        {{ teamMap[fixture.teams[0].id].name }}
      </div>
      <div class="text-center" style="margin: 0 1rem; font-family: monospace;">
        <span style="font-size: larger;">{{ fixture.teams[0].goals }}</span>
        <font-awesome-icon :icon="['fas', 'minus']" />
        <span style="font-size: larger;">{{ fixture.teams[1].goals }}</span>
      </div>
      <div v-if="fixture.teams[0].penalties && fixture.teams[1].penalties" class="text-center" style="font-style: italic; font-size: smaller">
        D.C.R. ({{ fixture.teams[0].penalties }} - {{ fixture.teams[1].penalties }})
      </div>
      <div class="text-right" :style="winner(fixture, 1) ? 'font-weight: bold' : ''">
        {{ teamMap[fixture.teams[1].id].name }}
      </div>
      <div v-if="fixture.youtube" class="text-center">
        <a :href="fixture.youtube">Watch highlights</a>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    onlyHour: {
      type: Boolean,
      default: false,
      required: false
    },
    fixture: {
      type: Object,
      default: () => {
        return {
          when: '2020-08-08T22:00:00+02:00',
          group: 'A',
          teams: [
            { id: 'TDEU', goals: 7 },
            { id: 'Wagliun20', goals: 1 }
          ]
        }
      },
      required: true
    },
    teamMap: {
      type: Object,
      default: () => { return {} },
      required: true
    }
  },
  methods: {
    winner (fixture, index) {
      const goals1 = fixture.teams[index].goals
      const goals2 = fixture.teams[(index + 1) % 2].goals
      if (goals1 === goals2) {
        if (fixture.teams[0].penalties && fixture.teams[1].penalties) {
          const penalties1 = fixture.teams[index].penalties
          const penalties2 = fixture.teams[(index + 1) % 2].penalties
          return penalties1 > penalties2
        } else {
          return false
        }
      } else {
        return goals1 > goals2
      }
    }
  }
}
</script>

<style scoped>
.card-body {
  padding: .75rem;
}
</style>
