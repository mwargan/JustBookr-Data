<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
        Books
      </h1>
        <h2 class="subtitle">
        {{ total_count }}
      </h2>
        <div style="width:100%;margin-bottom: 1rem;" >
          <a href="#" class="button" :class="[ active_books ? 'button--green active' : 'button--grey' ]" @click.prevent="active_books = !active_books">{{active_books ? 'Showing books with at least one currently available post' : 'Show only books with active posts'}}</a>
        </div>
      <div style="width:100%;margin-bottom: 1rem;" v-for="book in books" :key="book.isbn">
        <nuxt-link :to="'/books/'+book.isbn" class="button button--blue">{{book['book-title']}}</nuxt-link>
        <p>{{ book.posts_count }} total posts</p>
        <p>{{ Math.round(book.purchases_count/book.posts_count * 100) }}% sold</p>
      </div>
        <a href="#" @click.prevent="getUnis()" class="button button--grey" v-if="total_count != books.length">More</a>
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
    let { data } = await app.$axios.get(`api/v1/books`)
    console.log(data)
    return {
      books: data.data,
      next_page: 2,
      total_count: data.total,
      active_books: false
    }
  },
  watch: {
    active_books: function () {
      this.next_page = 1
      this.getUnis()
    }
  },
  methods: {
    async getUnis() {
      var query = ""
      if (this.active_books) {
        query = "&active=true&available=true"
      }
      let { data } = await this.$axios.get(`api/v1/books?page=${this.next_page}`+query)
      if (this.next_page === 1) {
        this.books = data.data
        this.total_count = data.total
      } else {
        this.books = this.books.concat(data.data)
      }
      this.next_page = data.current_page + 1
    }
  },
}

</script>
<style>


</style>
