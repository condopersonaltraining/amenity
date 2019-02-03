<template lang="pug">
  section.mt-3
    h1.title Admin Dashboard
    h2.subheading The routes below are are using 
      code nuxt-child
    v-flex(xs12 id="adminNav")
      nuxt-link(class="adminNavRoute" to="/admin") Dashboard Home
      nuxt-link(class="adminNavRoute" to="/admin/settings") Settings
      nuxt-link(class="adminNavRoute" to="/admin/items") Database Example
    v-flex(id="adminChild" xs12)
      nuxt-child(:key="$router.fullPath")
</template>

<script>
export default {
}
</script>

<style>
#adminNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.adminNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#adminChild {
  margin-top: 1em;
}
</style>
<!--  -->
