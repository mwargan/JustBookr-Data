<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Time
      </h1>
      <h2 class="subtitle">
        by JustBookr
      </h2>
      <p> This is a simple example web app using the JustBookr API in a static Progressive Web App.</p>
      <div class="links">
        <nuxt-link to="/login" class="button button--green">Login</nuxt-link>
        <nuxt-link to="/" class="button button--grey">Local time</nuxt-link>
        <nuxt-link to="explore" class="button button--grey">Explore universities</nuxt-link>
        <a href="https://justbookr.com/" target="_blank" class="button button--blue" rel="noopener">JustBookr</a>
      </div>
      <br/>
            <online-indicator></online-indicator>

    </div>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'
import onlineIndicator from '~/components/onlineIndicator.vue'
import currentTime from '~/components/currentTime.vue'

export default {
  components: { Logo, onlineIndicator, currentTime },
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
