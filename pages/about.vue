<template lang="pug">
  v-layout(justify-center align-center)
    v-flex(xs12 sm8)
      v-card
        v-card-title.headline About Nuxt.js Firebase Auth
        v-card-text
            p If you are not logged in then you should be redirected to login when clicking this link to the Admin page</p>
            p.title Test Me
              div Admin:
                nuxt-link(to="/admin") /admin
              div Admin Subroute: 
                nuxt-link(to="/admin/settings") /admin/settings  
</template>

<script>
export default {
}
</script>
