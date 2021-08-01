<!-- https://merrymaker.github.io/bs4-holygrail-layout/ -->
<template>
  <client-only>
    <div id="theBackground" :style="cssVars" class="d-flex flex-column">
      <header class="header my-right-fixed-top text-right text-light">
        <b-button :href="gitUrl" target="_github" style="background-color: navy; padding: 0; margin:0; max-height: 36px; max-width: 36px;">
          <font-awesome-icon
            :icon="['fab', 'github']"
            style="width: 36px; height: 36px; transform: scale(.666, .666);"
          />
        </b-button>
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
      </header>
      <main role="main">
        <Nuxt />
      </main>
      <footer class="footer fixed-bottom">
        <Navbar />
      </footer>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      gitUrl: `https://github.com/sangiosleague/sangiosleague.github.io/commit/${process.env.NUXT_ENV_CURRENT_GIT_SHA}`
    }
  },
  computed: {
    cssVars () {
      return {
        '--background-blend-mode': this.theYear === '2021' ? 'normal' : 'color',
        '--color': this.theYear === '2021' ? 'transparent' : 'gray'
      }
    },
    ...mapGetters({
      theYear: 'getYear'
    })
  }
}
</script>

<style lang="scss" >

/* https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
   https://css-tricks.com/apply-a-filter-to-a-background-image/ */
#theBackground {
  z-index:0;
  background: linear-gradient(to right, var(--color), var(--color)), url(https://sangiosleague.it/top-image.jpg);
  background-position: center center;
  background-size: cover;
  background-blend-mode: var(--background-blend-mode);
  height: min-content;
  min-height: calc(100vh - #{$footerHeight});
}

.my-right-fixed-top {
  z-index: 1040;
  position: fixed;
  top: -2px;
  right: -2px;
}
</style>
