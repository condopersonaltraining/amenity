<template lang="pug">
  v-app
    v-navigation-drawer(
      v-model="drawer"
      fixed
      app)
      v-list
        v-list-tile(
          color="secondary"
          router
          nuxt
          exact
          v-for="(item, i) in items"
          :key="i"
          :to="item.to")
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")      
    v-toolbar(app dark color="primary")
      v-btn(
        icon
        @click.native.stop="drawer = !drawer")
        v-icon menu
      // v-toolbar-title(v-text="title")
      v-toolbar-title.ml-0
        v-img(:src="require('../assets/title.svg')" width="86")
      v-spacer
      div(v-if="user" id="user" class="text-xs-center")
        v-menu(
          offset-x
          :close-on-content-click="false"
          :nudge-top="200"
          v-model="menu")
          //Icon buttons must be HTML
          <v-btn icon slot="activator"><v-icon medium>settings</v-icon></v-btn>
            v-card
              v-list
                v-list-tile(avatar)
                  v-list-tile-avatar
                    img(:src="$store.state.user.photoURL" alt="John")
                  v-list-tile-content
                    v-list-tile-title(v-if="user.displayName") {{user.displayName}}
                v-divider
                v-list-tile
                  v-spacer
                  v-list-tile-action
                    v-btn(primary class="mt-2" color="primary" @click.native="logout") Logout 
      div(v-else)
        login-button
    //v-content
      v-container(fluid)
        router-view
    v-content
      nuxt
    //v-footer(app color="info" dark class="pl-2")
      span &copy; 2019
</template>

<script>
import LoginButton from '~/components/LoginButton'
export default {
  components: {
    LoginButton
  },
  data () {
    return {
      drawer: null,
      fixed: false,
      items: [
        { icon: 'home', title: 'Welcome', to: '/' },
        { icon: 'info', title: 'About', to: '/about' },
        { icon: 'person', title: 'Admin', to: '/admin' }
        // { icon: 'store', title: 'FireStore', to: '/firestore' }
      ],
      title: 'Amenity.io',
      menu: false
    }
  },
  computed: {
    user () {
      return this.$store.getters.activeUser
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('signOut').then(() => {
        alert('logged out!')
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
.v-navigation-drawer>.list:not(.list--dense) .list__tile {
  font-size: 17px;
}
.avatar {
  max-width: 75px;
}

/* .list__tile--active.list__tile.list__tile--link {

} */

a.nuxt-link-exact-active.list__tile--active.list__tile.list__tile--link {
  font-weight: 900 !important;
  color: #3f51b5 !important;
}
.v-list__tile--link {
  border-left: 0.5rem solid transparent;
}
.v-list__tile--link.v-list__tile--active {
  color: rgba(0,0,0,.87);
  border-left: 0.5rem solid lightgray;
}

</style>
