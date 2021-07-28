<!-- https://merrymaker.github.io/bs4-holygrail-layout/ -->
<template>
  <div class="d-flex flex-column vh-100">
    <header class="header my-right-fixed-top text-right text-light">
      <client-only>
        <b-button class="" style="background-color: navy;">
          <template v-if="$auth.$state.loggedIn">
            <NuxtLink to="/logout" style="color: white;">
              <b-img
                :src="$auth.user.picture.data.url"
                width="40px"
                height="auto"
              />
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/login">
              <font-awesome-icon :icon="['fas', 'user']" style="width: 20px; height: 20px;" />
            </NuxtLink>
          </template>
        </b-button>
      </client-only>
    </header>
    <main role="main">
      <Nuxt />
    </main>
    <footer class="footer fixed-bottom">
      <Navbar />
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style scoped>
a {
  color: white;
}
.btn-secondary {
    color: #fff;
    background-color: transparent;
    border-color: #6c757d;
}

.my-right-fixed-top {
  z-index: 1040;
  position: fixed;
  top: -1px;
  right: -1px;
}
</style>
