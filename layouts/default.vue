<!-- https://merrymaker.github.io/bs4-holygrail-layout/ -->
<template>
  <div class="d-flex flex-column vh-100">
    <header class="header my-right-fixed-top text-right text-light p-2">
      <client-only>
        <b-button class="rounded-circle">
          <template v-if="$auth.$state.loggedIn">
            <NuxtLink to="/logout" style="color: white;">
              <b-img
                :src="$auth.user.picture.data.url"
                class="mt-1"
                rounded="circle"
                width="30px"
                height="30px"
              />
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/login">
              <font-awesome-icon :icon="['fas', 'user']" style="width: 18px; height: 18px;" />
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
  z-index:1040;
  position: fixed;
  top: 0;
  right: 0;
}
</style>
