<template>
  <div :class="['network',online ? 'online' : 'offline']">
    <div class="circle"></div>
    {{ online ? '' : 'No internet connection' }}
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      online: true
    }
  },
  mounted() {
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    }
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }
}

</script>
<style>
.network {
  font-weight: 400;
  font-size: 1rem;
}

.network .circle {
    display: none;
}

.network.offline .circle {
    display: inline-block;
  width: 1rem;
  height: 1rem;
  padding: .1rem .5rem;
  border-radius: 1rem;
  background: red;
}

</style>
