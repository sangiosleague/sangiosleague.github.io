<template>
  <b-card>
    <!-- :title="`${fixture.teams[0].id} ${fixture.teams[0].goals} - ${fixture.teams[1].goals} ${fixture.teams[1].id}`" tag="article"
    class="d-flex justify-content-center align-items-center bd-highlight mb-3"-->
    <div style="font-size: smaller; font-style: italic;">
      {{ $moment(fixture.when).format('LLLL') }}
    </div>
    <div class="d-flex justify-content-center align-items-center bd-highlight mb-3">
      <div class="flex-fill">{{ fixture.teams[0].id }}</div>
      <div class="flex-fill" style="margin: 0 1rem; font-family: monospace;">
        <span style="font-size: larger;">{{ fixture.teams[0].goals }}</span>
        <font-awesome-icon :icon="['fas', 'minus']" />
        <span style="font-size: larger;">{{ fixture.teams[1].goals }}</span>
      </div>
      <div class="flex-fill">{{ fixture.teams[1].id }}</div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
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
      required: false
    }
  }
}
</script>
