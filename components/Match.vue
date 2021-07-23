<template>
  <b-card
    :title="title"
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
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'default title',
      required: true
    }
  }
}
</script>
