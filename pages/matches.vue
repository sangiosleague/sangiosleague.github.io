<template>
  <client-only>
    <div>
      <div class="fixed-top">
        <swiper id="swiperThumbs" ref="swiperThumbs" class="swiper gallery-thumbs" :options="swiperOptionThumbs" @slideChange="onThumbnailChange">
          <swiper-slide v-for="index in 4" :key="index">
            <span> matchday {{ index }}</span>
          </swiper-slide>
        </swiper>
      </div>
      <swiper id="swiperTop" ref="swiperTop" class="swiper gallery-top" :options="swiperOption" @slideChange="onTopChange">
        <swiper-slide v-for="slide in slides" :key="slide.card">
          <div
            v-for="card in slide"
            :key="card"
          >
            <Match :title="card" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </client-only>
</template>

<script>
export default {
  data () {
    return {
      gitUrl: `https://github.com/sangiosleague/sangiosleague.github.io/commit/${process.env.NUXT_ENV_CURRENT_GIT_SHA}`,
      slides: [['match 1', 'match 2', 'match 3', 'match 4', 'match 5', 'match 6'], ['match 7', 'match 8', 'match 9', 'match 10'], ['semi final 1', 'semi final 2'], ['final']],
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
  methods: {
    onThumbnailChange (val) {
      this.$refs.swiperTop.$swiper.slideTo(val.activeIndex)
    },
    onTopChange (val) {
      this.$refs.swiperThumbs.$swiper.slideTo(val.activeIndex)
    }
  }
}
</script>

<style lang="scss">
main[role="main"]>div:first-child {
  padding-top: 50px;
  h1 {
    background-color: #fff;
  }
}

.swiper#swiperThumbs {
  .swiper-slide {
    width: 25%;
    color: #aaa;
  }
  .swiper-slide-active {
    color: #000;
  }
}
.swiper {
  height: 100%;

  .swiper-slide {
    background: rgba(234, 234, 234, 0.5);
    display: flex !important;
    align-items: center !important;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: scroll;
    max-height: calc(100vh - 101px); /* fallback */
    max-height: calc((var(--vh, 1vh) * 100) - 101px);

    div:first-child > .card {
      margin: 1rem;
    }
    div > .card {
      margin: 0 1rem 1rem 1rem;
    }
  }
}
</style>
