<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
        Businesses
      </h1>
        <h2 class="subtitle">
        {{ total_count }}
      </h2>
        <div style="width:100%;margin-bottom: 1rem;" v-for="business in businesses" :key="business.id">
          <a :href="'https://justbookr.com/business/'+business.id" class="button button--blue">{{business['name']}}</a>
          <p>Created {{ business.created_at }}</p>
        </div>
        <a href="#" @click.prevent="getUnis()" class="button button--grey" v-if="total_count != businesses.length">More</a>
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
    let { data } = await app.$axios.get(`api/v1/businesses`)
    console.log(data)
    return {
      businesses: data.data,
      next_page: 2,
      total_count: data.total
    }
  },

  methods: {
    async getUnis() {
      let { data } = await this.$axios.get(`api/v1/businesses?page=${this.next_page}`)
      this.businesses = this.businesses.concat(data.data)
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
