<template>
  <div>
    <h1><font-awesome-icon :icon="['fas', 'ellipsis-h']" /></h1>
    <div class="container">
      <div v-if="$store.state.year === '2020'" id="winners">
        <b-card>
          <a href="/resources/2020/Regolamento%20Sangios%20League%202020.pdf" target="_blank">
            <h4>Sangios League 2020 Regolamento Ufficiale</h4>
            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
          </a>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
</style>
