<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Data center
      </h1>
      <h2 class="subtitle">
        by JustBookr
      </h2>
      <div class="links">
        <template v-if="$auth.loggedIn">
        <nuxt-link to="/users" class="button button--blue">Users</nuxt-link>
        <nuxt-link to="/posts" class="button button--blue">Posts</nuxt-link>
        <nuxt-link to="/universities" class="button button--blue">Universities</nuxt-link>
        <nuxt-link to="/books" class="button button--blue">Books</nuxt-link>
        <nuxt-link to="/orders" class="button button--blue">Orders</nuxt-link>
        <nuxt-link to="/businesses" class="button button--blue">Businesses</nuxt-link>
        <a class="button button--grey" href="#" @click.prevent="$auth.logout()">Logout</a>
        </template>
        <template v-else>
          <a class="button button--blue" @click.prevent="$auth.loginWith('laravel.passport.custom')">Continue with JustBookr</a>
        </template>
      </div>
      <br/>
      <online-indicator></online-indicator>
    </div>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'
import onlineIndicator from '~/components/onlineIndicator.vue'

export default {
  components: { Logo, onlineIndicator },
  auth: false,

  // computed: {
  //   currentTime: function() {
  //     return moment()
  //   }
  // }
}

</script>
<style>

</style>
