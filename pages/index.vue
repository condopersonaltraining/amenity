<template lang="pug">
  v-layout(justify-center align-center)
    v-flex(xs12 sm8)
      div(v-if="!$store.state.user")
        landing
      div(v-else)
        authenticated
  </v-layout>

</template>

<script>
import Landing from '~/components/Landing'
import Authenticated from '~/components/Authenticated'

export default {
  components: {
    Landing,
    Authenticated
  }
}
</script>

<style scoped>
.fake {
  background: blue;
}
.wrapper {
  margin-top: -7.5em;
}
.flexWrapper {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
.container {
  height: calc(100vh - 100px);
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
}
.title {
  font-size: 2.5em !important;
  /*margin-top: -5em;*/
}

@media (min-width: 750px) {
  .title {
    font-size: 3.5em !important;
  }
}
</style>
