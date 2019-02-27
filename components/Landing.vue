<template lang="pug">
  div
    v-img(:src="require('~/assets/lulu.jpeg')" aspect-ratio=2 position="0% 25%")
    v-layout
      v-flex(xs6 md6)
        v-img(:src="require('~/assets/cream.jpg')")
      v-flex(xs6 md6)
        v-img(:src="require('~/assets/shopping.jpg')")
    v-card(flat)
      v-card-title(v-if="$vuetify.breakpoint.xs" primary-title)
        div
          h3.headline {{ title }}
          div {{ subtitle }}
      v-card-title(v-else primary-title)
        div
          h3.display-1 {{ title }}
          div.subheading {{ subtitle }}
      v-card-actions.pt-0
        v-btn(color="secondary" flat) Book Now
    v-card
      v-container.pa-1(grid-list-sm)
        v-layout(row wrap)
          v-flex(xs12 md6)
            v-card(color="pink lighten-3" class="white--text")
              v-card-title(primary-title)
                div
                  div.headline Unmatched Convenience
                  span Recieve a supervised workout within the comfort of your own building. Progress from bodyweight to barbell.
          v-flex(xs12 md6)
            v-card(color="orange accent-2" class="white--text")
              v-card-title(primary-title)
                div
                  div.headline Custom Program Design
                  span Quit completing someone else's workout - Your experiences, beliefs and any injury history matter when it comes to creating a successful plan of action.
          v-flex(xs12 md6)
            v-card(color="red lighten-2" class="white--text")
              v-card-title(primary-title)
                div
                  div.headline Professional Coaching
                  span Helping individuals make realistic behavioral changes and seeing real results is both an art and science. Our client relationships go further than the session.

</template>

<script>
export default {
  data: () => ({
    title: 'Healthier At Home',
    subtitle: 'Creating balance has never come more simply - Personalize your workout at home with the assistance of an Exercise Professional'
  }),
  methods: {
  }
}
</script>

<style lang="css">
</style>
