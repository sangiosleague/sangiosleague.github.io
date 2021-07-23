<template>
  <client-only>
    <div>
      <h1 class="fixed-top">
        matches
      </h1>
      <swiper class="swiper gallery-thumbs" :options="swiperOption">
        <swiper-slide v-for="slide in slides" :key="slide.card">
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
    </div>
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
        },
        loop: false
      }
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
