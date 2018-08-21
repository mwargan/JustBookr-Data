<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
        Posts
      </h1>
        <h2 class="subtitle">
        {{ total_count }}
      </h2>
        <div style="width:100%;margin-bottom: 1rem;" >
          <a href="#" class="button" :class="[ active_posts ? 'button--green active' : 'button--grey' ]" @click.prevent="active_posts = !active_posts">{{active_posts ? 'Showing only available posts' : 'Show only available posts'}}</a>
        </div>
        <div style="width:100%;margin-bottom: 1rem;" v-for="post in posts" :key="post['post-id']">
          <a :href="'https://justbookr.com/post/'+post['post-id']" class="button button--blue">{{post.textbook['book-title']}}</a>
          <p>By <nuxt-link :to="'/users/'+post.user['user-id']">{{ post.user.name }}</nuxt-link></p>
          <p>{{ post.price }}</p>
          <p>{{ getHumanDate(post.date) }}</p>
          <p v-if="post.status != 1">Unavailable</p>
        </div>
        <a href="#" @click.prevent="getUnis()" class="button button--grey" v-if="total_count != posts.length">More</a>
      </div>
    </section>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import moment from 'moment'

export default {
  components: { Logo },
  async asyncData({ app }) {
    let { data } = await app.$axios.get(`api/v1/posts?page=1`)
    console.log(data)
    return {
      posts: data.data,
      next_page: 2,
      total_count: data.total,
      active_posts: false,
    }
  },
  watch: {
    active_posts: function () {
      this.next_page = 1
      this.getUnis()
    }
  },
  methods: {
    async getUnis() {
      var query = ""
      if (this.active_posts) {
        query = "&active=true&available=true"
      }
      let { data } = await this.$axios.get(`api/v1/posts?page=${this.next_page}`+query)
      if (this.next_page === 1) {
        this.posts = data.data
        this.total_count = data.total
      } else {
        this.posts = this.posts.concat(data.data)
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
