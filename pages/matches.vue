<template>
  <div class="container">
    <h1 v-if="!hasMatches">
      Matches
    </h1>
    <div v-if="hasMatches" id="matches">
      <div class="fixed-top">
        <swiper id="swiperThumbs" ref="swiperThumbs" class="swiper gallery-thumbs" :options="swiperOptionThumbs" @slideChange="onThumbnailChange">
          <swiper-slide
            v-for="(fixtures, day) in fixturesMap"
            :key="day"
          >
            <span>
              {{ $moment(day, 'L').format('D MMMM') }}
            </span>
          </swiper-slide>
        </swiper>
      </div>
      <swiper id="swiperTop" ref="swiperTop" class="swiper gallery-top" :options="swiperOption" @slideChange="onTopChange">
        <swiper-slide v-for="(fixtures, day) in fixturesMap" :key="day">
          <div
            v-for="fixture in fixtures"
            :key="fixture.id"
            style="width: 100%"
          >
            <Match :fixture="fixture" :only-hour="true" :team-map="teamMap" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        keyboard: {
          enabled: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        loop: false
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true
      },
      swiperTop () {
        return this.$refs.swiperTop.swiper
      },
      swiperThumbs () {
        return this.$refs.swiperThumbs.swiper
      }
    }
  },
  computed: {
    fixturesMap () {
      const $moment = this.$moment
      return this._.reduce(this.$store.state.fixtures, function (result, value, key) {
        const day = $moment(value.when).format('L')
        if (day) {
          (result[day] || (result[day] = [])).push(value)
        }
        return result
      }, {})
    },
    hasMatches () {
      return this.$store.state.fixtures.length > 0
    },
    teamMap () {
      return this.$store.state.teamMap
    }
  },
  mounted () {
    this.getFixtures()
    this.getTeams()
  },
  methods: {
    onThumbnailChange (val) {
      this.$refs.swiperTop.$swiper.slideTo(val.activeIndex)
    },
    onTopChange (val) {
      this.$refs.swiperThumbs.$swiper.slideTo(val.activeIndex)
    },
    async getTeams () {
      await this.$store.dispatch('getTeams')
    },
    async getFixtures () {
      await this.$store.dispatch('getFixtures')
    }
  }
}
</script>

<style lang="scss" scoped>
#matches {
  height: calc(100vh - (#{$footerHeight} + #{$headerHeight}));
}

.swiper {
  height: 100%;

  .swiper-slide {
    background: rgba(127, 127, 127, 0) !important;
    display: flex !important;
    align-items: center !important;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: scroll;
    max-height: calc(100vh - (#{$footerHeight} + #{$headerHeight}));

    div > .card {
      margin: 0 1rem 1rem 1rem;
    }
    div:first-child > .card {
      margin: 1rem;
    }
  }
}

.swiper#swiperThumbs {
  margin-top: .75rem;

  .swiper-slide {
    width: 25%;
    color: darkgray;
    background: rgba(127, 127, 127, 0.5) !important;
  }
  .swiper-slide-active {
    color: white;
    background: rgba(127, 127, 127, 0) !important;
  }
}
</style>
