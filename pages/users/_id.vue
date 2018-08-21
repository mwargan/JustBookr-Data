<template>
  <div>
    <div class="wrapper">
      <logo :size="75" style="position: absolute;"></logo>
      <section class="container">
        <div>
          <img v-if="user.profilepic" :src="user.profilepic" :alt="user.name">
          <h1 class="title">{{user['name']}}</h1>
          <h2 class="subtitle">{{user.university['uni-name']}}</h2>
          <p v-if="user.positive_ratings">{{user.positive_ratings}} positive ratings</p>
          <div class="links">
            <a :href="'https://justbookr.com/user/'+user['user-id']" target="_blank" class="button button--blue" rel="noopener">See on JustBookr</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import currentTime from '~/components/currentTime.vue'

export default {
  components: { Logo, currentTime },
  asyncData({ app, params }) {
    return app.$axios.$get(`api/v1/users/${params.id}`)
      .then((res) => {
        return { user: res }
      })
  }
}

</script>
<style scoped>
img {
  height: 125px;
  width: 125px;
  border-radius: 50%;
  object-fit: scale-down;
  background: #fff;
  box-shadow:#e3e3e3 0 0 1rem;
}

</style>
