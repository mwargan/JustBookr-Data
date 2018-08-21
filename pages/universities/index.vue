<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
        Universities
      </h1>
        <h2 class="subtitle">
        {{ total_count }}
      </h2>
      <div style="width:100%;margin-bottom: 1rem;" >
        <a href="#" class="button" :class="[ active_users ? 'button--green active' : 'button--grey' ]" @click.prevent="active_users = !active_users">{{active_users ? 'Showing universities with  active users in the past 6 months' : 'Show only active universities'}}</a>
      </div>
      <div style="width:100%;margin-bottom: 1rem;" v-for="university in universities" :key="university['uni-id']" >
        <nuxt-link :to="'/universities/'+university['uni-id']" class="button button--blue">{{university['uni-name']}}</nuxt-link>
        <p>{{university['users_count']}} total students</p>
      </div>
        <a href="#" @click.prevent="getUnis()" class="button button--grey" v-if="total_count != universities.length">More</a>
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
    let { data } = await app.$axios.get(`api/v1/universities?page=1`)
    console.log(data)
    return {
      universities: data.data,
      next_page: 2,
      total_count: data.total,
      active_users: false
    }
  },
  watch: {
    active_users: function () {
      this.next_page = 1
      this.getUnis()
    }
  },
  methods: {
    async getUnis() {
      var query = ""
      if (this.active_users) {
        query = "&active=true"
      }
      let { data } = await this.$axios.get(`api/v1/universities?page=${this.next_page}`+query)
      if (this.next_page === 1) {
        this.universities = data.data
        this.total_count = data.total
      } else {
        this.universities = this.universities.concat(data.data)
      }
      this.next_page = data.current_page + 1
    }
  },
}

</script>
<style>


</style>
