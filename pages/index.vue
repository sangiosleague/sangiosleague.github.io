<template>
  <client-only>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="slide in slides" :key="slide">
        <div
          v-for="card in slide"
          :key="card"
        >
          <b-card

            :title="card"
            tag="article"
          >
            <b-row no-gutters>
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">
                Go somewhere
              </b-button>
            </b-row>
          </b-card>
        </div>
      </swiper-slide>
    </swiper>
  </client-only>
</template>

<script>
export default {
  data () {
    return {
      gitUrl: `https://github.com/sangiosleague/sangiosleague.github.io/commit/${process.env.NUXT_ENV_CURRENT_GIT_SHA}`,
      slides: [['card 1', 'card 2', 'card 3', 'card 4', 'card 5'], ['card 6']],
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
          // type: "progressbar",
        },
        loop: false
      }
    }
  }
}
</script>

<style lang="scss">
body {
  background: url(/logo_watermark.svg) no-repeat center center fixed;
  background-size: contain;
}

.swiper {
  height: 100%;

  .swiper-slide {
    background: rgba(234, 234, 234, 0.5);
    display: flex !important;
    align-items: center !important;
    flex-direction: column;
    flex-wrap: nowrap;
  }
}
</style>
