<template>
  <div>
    <div class="wrapper">
      <logo color="white" :size="75" style="position: absolute;"></logo>
      <section class="container">
        <div>
          <img v-if="university['uni-logo']" :src="university['uni-logo']" :alt="university['uni-name']">
          <h1 class="title">
            <current-time></current-time>
      </h1>
          <h2 class="subtitle">
                    {{university['uni-name']}}
      </h2>
          <h2 class="subtitle">{{university.country.name}}
</h2>
          <div class="links">
            <a :href="'https://justbookr.com/university/'+university['uni-id']" target="_blank" class="button button--white" rel="noopener">JustBookr</a>
            <a :href="university.url" target="_blank" class="button button--white" rel="noopener">Website</a>
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
    return app.$axios.$get(`api/v1/universities/${params.id}`)
      .then((res) => {
        return { university: res }
      })
  }
}

</script>
<style scoped>
.wrapper {
  width: 100wh;
  height: 100%;
  color: #fff;
  background: linear-gradient(-65deg, #EE7752, #E73C7E, #3e73b9, #23D5AB);
  background-size: 400% 400%;
  -webkit-animation: Gradient 555s ease infinite;
  -moz-animation: Gradient 555s ease infinite;
  animation: Gradient 555s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}


.title {

  color: #fff;
}

.subtitle {

  color: #fff;
}

img {
  height: 125px;
  width: 125px;
  border-radius: 50%;
  object-fit: scale-down;
  background: #fff;
}

</style>
