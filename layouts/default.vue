<!-- https://merrymaker.github.io/bs4-holygrail-layout/ -->
<template>
  <div class="d-flex flex-column vh-100">
    <header class="header my-right-fixed-top text-right text-light">
      <client-only>
        <b-button style="background-color: navy; padding: 0; margin:0; max-height: 36px; max-width: 36px;">
          <template v-if="$auth.$state.loggedIn">
            <NuxtLink to="/logout" style="color: white;">
              <b-img
                :src="$auth.user.picture.data.url"
                style="width: 36px; height: 36px;"
              />
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/login" style="color: white;">
              <font-awesome-icon
                :icon="['fas', 'user']"
                style="width: 36px; height: 36px; transform: scale(.666, .666);"
              />
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

.my-right-fixed-top {
  z-index: 1040;
  position: fixed;
  top: -1px;
  right: -1px;
}
</style>
