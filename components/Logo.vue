<template>
  <nuxt-link class="JustBookrLogo" to="/">
    <img v-if="color === 'dark'" src="https://justbookr.com/images/logoDark.svg" alt="JustBookr Logo - Dark" :width="size">
    <img v-else src="https://justbookr.com/images/logoWhite.svg" alt="JustBookr Logo - White" :width="size" :style="'width:'+size+'px'">
  </nuxt-link>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 125,
      required: false
    },
    color: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ['dark', 'white'].indexOf(value) !== -1
      },
      default: "dark"
    }
  },

  created() {
    //this.getTimeFromNow()
    //setInterval(this.getTimeFromNow, 1000) //update every 1 second
  },
  destroyed() {
    //clearInterval(this.getTimeFromNow)
  },
  methods: {
    getTimeFromNow() {
      //this.timeFromNow = moment().format("dddd, HH:mm")
    }
  }
}
</script>

<style scoped>
 .JustBookrLogo > img {
    background: none;
    border-radius: 0;
    margin: 1rem 2rem;
    height: auto;
    object-fit: initial;
  }
</style>
