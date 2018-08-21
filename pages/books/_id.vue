<template>
  <div>
    <navbar :title="book['book-title']" :subtitle="book.author" :subtext="book.edition" :image="book['image-url']" :link="'https://justbookr.com/textbook/'+book.isbn" />
    <div class="wrapper">
<!--       <section class="container">
        <div>
          <img v-if="book['image-url']" :src="book['image-url']" :alt="book['book-title']">
          <h1 class="title">{{book['book-title']}}</h1>
          <h2 class="subtitle">{{book.author}}</h2>
          <p v-if="book.edition">{{book.edition}} edition</p>
          <div class="links">
            <a :href="'https://justbookr.com/textbook/'+book.isbn" target="_blank" class="button button--blue" rel="noopener">See on JustBookr</a>
          </div>
        </div>
      </section> -->
      <section class="container">
        <div style="width:100%;">
          <h2 class="subtitle">Activity in the last year</h2>
          <div style="width:100%;max-height:300px;">
            <p-chart :chartData="views"></p-chart>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import pChart from '~/components/popularityChart.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: { pChart, Navbar },
  async asyncData({ app, params }) {
        var view_array = []
    let res = await app.$axios.$get(`api/v1/books/${params.id}`)
    await app.$axios.$get(`api/v1/books/${params.id}/views?past_year=true&not_user=1`).then(res => {
      var step
      for (step = 0; step < 12; step++) {
        var count = res.find(view => view.month === (step + 1))
        if (count) {
          view_array.push(count.score)
        } else {
          view_array.push(0)
        }
      }
    })
    return {
      book: res,
      views: view_array
    }
  }
}

</script>
<style scoped>
img {
  height: 125px;
  width: 100px;
  border-radius: 0.5rem;
  object-fit: cover;
  background: #fff;
  box-shadow:#e3e3e3 0 0 1rem;
}
.wrapper {
  min-height: 100vh;
  margin-top:3rem;
}
</style>
