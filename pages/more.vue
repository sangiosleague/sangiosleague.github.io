<template>
  <div>
    <h1 v-if="$store.state.year !== '2020'">
      <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
    </h1>
    <div v-if="$store.state.year === '2020'" id="winners" class="container">
      <b-card>
        <a href="/resources/2020/Regolamento%20Sangios%20League%202020.pdf" target="_blank">
          <h4>Sangios League 2020 Regolamento Ufficiale
            <font-awesome-icon :icon="['fas', 'external-link-alt']" /></h4>
        </a>
      </b-card>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
</style>
