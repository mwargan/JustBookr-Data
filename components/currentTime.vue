<template>
  <div>
  	{{ timeFromNow }}
  </div>
</template>
<script>
	import moment from 'moment'

export default {
	props: {
    format: {
      type: String,
      default: "dddd, HH:mm",
      required: false
    }
  },
  data() {
    return {
      timeFromNow: null
    }
  },
  created() {
    this.getTimeFromNow()
    setInterval(this.getTimeFromNow, 1000) //update every 1 second
  },
  destroyed() {
    clearInterval(this.getTimeFromNow)
  },
  methods: {
    getTimeFromNow() {
      this.timeFromNow = moment().format(this.format)
    }
  }
}

</script>
