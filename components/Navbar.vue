<template>
  <b-navbar>
    <b-navbar-nav class="mr-auto d-flex">
      <b-nav-item href="#home" class="flex-fill" :to="'/'">
        <font-awesome-icon :icon="['fas', 'home']" />
        <div>Home</div>
      </b-nav-item>
      <b-nav-item href="#futbol" class="flex-fill" :to="'/matches'">
        <font-awesome-icon :icon="['fas', 'futbol']" />
        <div>Matches</div>
      </b-nav-item>
      <b-nav-item href="#list" class="flex-fill" :to="'/groups'">
        <font-awesome-icon :icon="['fas', 'list']" />
        <div>Groups</div>
      </b-nav-item>
      <b-nav-item href="#flag" class="flex-fill" :to="'/teams'">
        <font-awesome-icon :icon="['fas', 'flag']" />
        <div>Teams</div>
      </b-nav-item>
      <b-nav-item href="#flag" class="flex-fill" :to="'/more'">
        <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
        <div>More</div>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
}
</script>

<style  lang="scss" scoped>
.navbar {
  display: block;
  padding: 0;
  a.nav-link {
    text-align: center;
    padding:  0.3rem 0 0 0;
  }
}
</style>
