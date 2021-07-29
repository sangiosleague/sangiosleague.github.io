<!-- https://merrymaker.github.io/bs4-holygrail-layout/ -->
<template>
  <div id="theBackground" :style="cssVars" class="d-flex flex-column vh-100">
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    cssVars () {
      return {
        '--color-v': this.theYear === '2021' ? 'transparent' : 'black',
        '--color': this.theYear === '2021' ? 'transparent' : 'black',
        '--blend-top': this.theYear === '2021' ? 'normal' : 'overlay',
        '--blend-bottom': this.theYear === '2021' ? 'normal' : 'normal'
      }
    },
    ...mapGetters({
      theYear: 'getYear'
    })
  }
}
</script>

<style>
/* https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component */
/* https://css-tricks.com/apply-a-filter-to-a-background-image/ */
#theBackground {
  background:
    linear-gradient(to right, var(--color), var(--color)),
    url(https://sangiosleague.it/top-image.jpg);
  background-position: center center;
  background-size: cover;
  background-blend-mode:
    var(--blend-top, normal),
    var(--blend-bottom, normal),
    normal;

  --color-v: transparent;
  --color: transparent;
}

.my-right-fixed-top {
  z-index: 1040;
  position: fixed;
  top: -1px;
  right: -1px;
}
</style>
