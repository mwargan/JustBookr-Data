<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
        Time
      </h1>
        <h2 class="subtitle">
        by JustBookr
      </h2>
        <nuxt-link to="/" class="button button--green">Local time</nuxt-link>
        <nuxt-link v-for="university in universities" :key="university['uni-id']" :to="'university/'+university['uni-id']" class="button button--blue">{{university['uni-name']}}</nuxt-link>
        <a href="#" @click.prevent="getUnis()" class="button button--grey">More</a>
      </div>
    </section>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'

export default {
  components: { Logo, Card },
  async asyncData({ app }) {
    let { data } = await app.$axios.$get(`api/v1/universities`)
    return {
      universities: data,
      next_page: 2
    }
  },
  data() {
    return {
      universities: [],
      next_page: 2
    }
  },

  methods: {
    async getUnis() {
      let { data } = await this.$axios.get(`api/v1/universities?page=${this.next_page}`)
      this.universities = this.universities.concat(data.data)
      this.next_page = data.current_page + 1
    }
  },
}

</script>
<style>


</style>
