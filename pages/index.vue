<template>
  <div class="container">
    <div id="daysUntilKickOff" class="text-center m-2 fixed-top" style="color: white;">
      &nbsp;
      <span v-if="year === '2021'">
        <b>{{ daysUntilKickOff }} days </b> until kick-off
      </span>
    </div>

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
            <img src="/resources/svgos/youtube.svg" title="youtube" class="my_icon">
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sangiosleague/" target="_instagram" class="text-white">
            <img src="/resources/svgos/instagram.svg" title="instagram" class="my_icon">
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/events/534655621392000/" target="_facebook" class="text-white">
            <img src="/resources/svgos/facebook.svg" title="facebook" class="my_icon">
          </a>
        </li>
      </ul>
    </div>
    <div id="winners" style="text-align: center">
      <b-img
        :src="announcement"
        fluid
        alt="winners"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
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
  font-size:  x-large;
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
