<!-- https://merrymaker.github.io/bs4-holygrail-layout/ -->
<template>
  <div class="d-flex flex-column vh-100">
    <header class="header my-right-fixed-top text-right text-light p-2">
      <client-only>
        <NuxtLink to="/login">
          <b-button variant="secondary" class="rounded-circle" style="padding: .3rem">
            <template v-if="$auth.$state.loggedIn">
              <b-img
                :src="$auth.user.picture.data.url"
                class="mt-1"
                rounded="circle"
                width="30px"
                height="30px"
              />
            </template>
            <template v-else>
              <font-awesome-icon :icon="['fas', 'user']" style="width: 18px; height: 18px;" />
            </template>
          </b-button>
        </NuxtLink>
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
.my-right-fixed-top {
  z-index:1040;
  position: fixed;
  top: 0;
  right: 0;
}
</style>
