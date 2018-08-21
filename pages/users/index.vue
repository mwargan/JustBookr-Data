<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
        Users
      </h1>
        <h2 class="subtitle">
        {{ total_count }}
      </h2>
        <div style="width:100%;margin-bottom: 1rem;" >
          <a href="#" class="button" :class="[ active_users ? 'button--green active' : 'button--grey' ]" @click.prevent="active_users = !active_users">{{active_users ? 'Showing users active in the past 6 months' : 'Show only active users'}}</a>
        </div>
        <div style="width:100%;margin-bottom: 1rem;" v-for="user in users" :key="user['user-id']">
          <nuxt-link :to="'/users/'+user['user-id']" class="button button--blue">{{user['name']}}</nuxt-link>
          <p v-if="user.last_login === user['user-registered']">New user</p>
          <p>{{ getHumanDate(user.last_login) }}</p>
        </div>
        <a href="#" @click.prevent="getUnis()" class="button button--grey" v-if="total_count != users.length">More</a>
      </div>
    </section>
  </div>
</template>
<script>
import moment from 'moment'
import Logo from '~/components/Logo.vue'

export default {
  components: { Logo },
  async asyncData({ app }) {
    let { data } = await app.$axios.get(`api/v1/users?order_by=last_login`)
    return {
      users: data.data,
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
      let { data } = await this.$axios.get(`api/v1/users?order_by=last_login&page=${this.next_page}`+query)
      if (this.next_page === 1) {
        this.users = data.data
        this.total_count = data.total
      } else {
        this.users = this.users.concat(data.data)
      }
      this.next_page = data.current_page + 1
    },
    getHumanDate(date) {
      date = Number(date)
      return moment(date, 'X').fromNow()
    }
  },
}

</script>
<style>


</style>
