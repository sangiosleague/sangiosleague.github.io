<template>
  <div id="more" class="container">
    <h1 v-if="$store.state.year !== '2020'">
      <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
    </h1>
    <div class="container">
      <b-card v-if="$store.state.year === '2021'" id="winners">
        <a href="/resources/2020/Regolamento%20Sangios%20League%202020.pdf" target="_blank">
          Sangios League 2020 Regolamento Ufficiale <font-awesome-icon :icon="['fas', 'external-link-alt']" />
        </a>
      </b-card>
      <b-card>
        <a href="/public_privacy_policy.txt" target="_blank">
          Informativa sulla privacy <font-awesome-icon :icon="['fas', 'user-secret']" />
        </a>
      </b-card>
      <b-card>
        <a href="https://github.com/sangiosleague/sangiosleague.github.io" target="_blank">
          Source Code <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </b-card>
    </div>
  </div>
</template>

<style>
#more .card {
  margin-bottom: 1rem;
}
</style>
