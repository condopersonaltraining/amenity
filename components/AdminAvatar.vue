<template lang="pug">
  div#user.text-xs-center
    v-btn(primary class="mt-2" color="primary" @click.native="logout")
      Logout
    v-menu(offset-x :close-on-content-click="false" :nudge-top="200" v-model="menu")
      v-btn(icon slot="activator")
        v-icon(medium) settings
      v-card
        v-list
          v-list-tile(avatar)
            v-list-tile-avatar
              img(v-if="user.displayName" :src="$store.state.user.photoURL" alt="John")
            
            v-list-tile-content
              v-list-tile-title(v-if="user.displayName") {{user.displayName}}
          v-divider
          v-list-tile
            v-spacer
            v-list-tile-action
              v-btn(primary class="mt-2" color="primary" @click.native="logout")
                Logout
</template>

<script>
export default {
  props: ['user']
}
</script>

<style lang="css">
</style>
