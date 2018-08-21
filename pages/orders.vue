<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
        Orders
      </h1>
        <h2 class="subtitle">
        {{ total_count }}
      </h2>
              <div style="width:100%;margin-bottom: 1rem;" v-for="order in orders" :key="order['connect-id']">
          <a :href="'/books/'+order.post.textbook.isbn" class="button button--blue">{{order.post.textbook['book-title']}}</a>
          <p>Sold to <nuxt-link :to="'/users/'+order.buyer['user-id']">{{order.buyer['name']}}</nuxt-link></p>
          <p>By <nuxt-link :to="'/users/'+order.seller['user-id']">{{order.seller['name']}}</nuxt-link></p>
          <p>{{ getHumanDate(order.timestamp) }}</p>
          <p v-show="!order.replied">Awaiting buyer confirmation</p>
        </div>
        <a href="#" @click.prevent="getUnis()" class="button button--grey" v-if="total_count != orders.length">More</a>
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
    let { data } = await app.$axios.get(`api/v1/orders`)
    console.log(data)
    return {
      orders: data.data,
      next_page: 2,
      total_count: data.total
    }
  },

  methods: {
    async getUnis() {
      let { data } = await this.$axios.get(`api/v1/orders?page=${this.next_page}`)
      this.orders = this.orders.concat(data.data)
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
