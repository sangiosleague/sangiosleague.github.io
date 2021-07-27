<template>
  <b-card>
    <div style="font-size: smaller; font-style: italic;">
      <span v-if="!onlyHour">
        {{ $moment(fixture.when).format('LLLL') }}
      </span>
      <span v-if="onlyHour">
        {{ $moment(fixture.when).format('h:mm') }}
      </span>
    </div>
    <div class="d-flex flex-column">
      <div class="text-left" style="font-weight: bold">
        {{ teamMap[fixture.teams[0].id].name }}
      </div>
      <div class="text-center" style="margin: 0 1rem; font-family: monospace;">
        <span style="font-size: larger;">{{ fixture.teams[0].goals }}</span>
        <font-awesome-icon :icon="['fas', 'minus']" />
        <span style="font-size: larger;">{{ fixture.teams[1].goals }}</span>
      </div>
      <div class="text-right">
        {{ teamMap[fixture.teams[1].id].name }}
      </div>
      <div class="text-center">
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
  computed: {
  }
}
</script>
