<template>
  <div>
    <div class="wrapper">
      <logo color="white" :size="75" style="position: absolute;"></logo>
      <section class="container">
        <div>
          <h1 class="title">
            <current-time format="HH:mm"></current-time>
      </h1>
          <h2 class="subtitle">
        Local time
      </h2>
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
  auth: false
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
  /* 1 */
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
