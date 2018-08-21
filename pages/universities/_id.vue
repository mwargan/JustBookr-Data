<template>
  <div>
    <div class="wrapper">
      <logo :size="75" style="position: absolute;"></logo>
      <section class="container">
        <div>
          <img v-if="university['uni-logo']" :src="university['uni-logo']" :alt="university['uni-name']">
          <h1 class="title">{{university['uni-name']}}</h1>
          <h2 class="subtitle">{{university.country.name}}</h2>
          <p v-if="university.address">{{university.address}}</p>
          <div class="links">
            <a :href="'https://justbookr.com/university/'+university['uni-id']" target="_blank" class="button button--blue" rel="noopener">See on JustBookr</a>
            <a v-if="university['uni-tel']" :href="'tel:'+university['uni-tel']" target="_blank" class="button button--grey" rel="noopener">Call</a>
            <a v-if="university.url" :href="university.url" target="_blank" class="button button--grey" rel="noopener">Visit website</a>
          </div>
        </div>
      </section>
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
import Logo from '~/components/Logo.vue'
import pChart from '~/components/popularityChart.vue'


export default {
  components: { Logo, pChart },
  async asyncData({ app, params }) {
    var view_array = []
    let uni = await app.$axios.$get(`api/v1/universities/${params.id}`)
    await app.$axios.$get(`api/v1/universities/${params.id}/views?past_year=true`).then(res => {
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
      university: uni,
      views: view_array
    }
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
  box-shadow: #e3e3e3 0 0 1rem;
}

</style>
