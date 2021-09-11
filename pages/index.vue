<template>
  <div class="container">
    <header class="header my-left-fixed-top">
      <b-dropdown id="dropdown-dropright" dropright :text="year" variant="secondary" class="m-2">
        <b-dropdown-item href="#" @click="onSetYear('2020')">
          2020
        </b-dropdown-item>
        <b-dropdown-item href="#" @click="onSetYear('2021')">
          2021
        </b-dropdown-item>
      </b-dropdown>
    </header>

    <div id="social">
      <ul class="list-unstyled flex row">
        <li>
          <a href="https://www.youtube.com/channel/UCsgeUQl2xfuZUCUGQ1D0_dw" target="_youtube" class="text-white">
            <img src="/resources/svgos/youtube.svg" title="youtube" class="my_icon" style="transform: scale(1.5, 1.5)">
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sangiosleague/" target="_instagram" class="text-white">
            <img src="/resources/svgos/instagram.svg" title="instagram" class="my_icon">
          </a>
        </li>
        <!-- li>
          <a href="https://www.facebook.com/events/534655621392000/" target="_facebook" class="text-white">
            <img src="/resources/svgos/facebook.svg" title="facebook" class="my_icon">
          </a>
        </li -->
      </ul>
    </div>

    <div id="winners" style="text-align: center; margin-bottom: 1rem;">
      <img class="img-fluid" :src="`${$axios.defaults.baseURL}/${year}/image/winners.jpg`">
    </div>
    <div v-if="is2021">
      <div id="topScorer" style="text-align: center; margin-bottom: 1rem;">
        <img class="img-fluid" :src="`${$axios.defaults.baseURL}/${year}/image/topScorer.jpg`">
      </div>
      <div id="bestGoalkeeper" style="text-align: center; margin-bottom: 1rem;">
        <img class="img-fluid" :src="`${$axios.defaults.baseURL}/${year}/image/bestGoalkeeper.jpg`">
      </div>
    </div>
    <div>
      <div id="runnersUp" style="text-align: center; margin-bottom: 1rem;">
        <img class="img-fluid" :src="`${$axios.defaults.baseURL}/${year}/image/runnersUp.jpg`">
      </div>
    </div>
    <div v-if="is2021">
      <div id="announcement" style="text-align: center; margin-bottom: 1rem;">
        <nuxt-img
          class="img-fluid"
          :src="announcement"
          alt="announcement"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    is2021 () {
      return this.year === '2021'
    },
    daysUntilKickOff () {
      const start = this.$moment('2021-08-07')
      const now = this.$moment()
      return start.diff(now, 'days')
    },
    announcement () {
      return '/resources/announcement_2021.jpg'
    },
    ...mapGetters({
      year: 'getYear'
    })
  },
  methods: {
    async onSetYear (y) {
      this.$store.commit('setYear', {
        year: y
      })
      await this.$store.dispatch('getTeams')
    }
  }
}

</script>

<style lang="scss" scoped>
#daysUntilKickOff {
  font-size:  larger;
  margin-top: 1rem;
}

.my_icon {
  width: 24px;
  height: auto;
}

.my-left-fixed-top {
  z-index:1050;
  position: fixed;
  top: 0;
  left: 0;
}

#social {
  ul {
    margin-bottom: .5rem;
  }
  li {
    margin: .25rem 0 0 .75rem;
    border: 1px #6c757d solid;
    border-radius: 50%;
    padding: .5rem;
  }
}

</style>
