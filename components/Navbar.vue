<template>
  <nav class="container" :class="{'active': isActive}">
        <logo :size="75" style="position: absolute; left: 0;top: 0;"></logo>
        <transition-group name="list">
          <img v-if="image" :src="image" alt="title" class="image" key="image">
          <h1 class="title items" key="title">{{title}}</h1>
          <h2 class="subtitle items" v-if="subtitle" key="subtitle">{{subtitle}}</h2>
          <p key="subtext" v-if="subtext" class="subtext items">{{subtext}}</p>
          <div class="links items" key="links">
            <a :href="link" target="_blank" class="button button--blue" rel="noopener">See on JustBookr</a>
          </div>
        </transition-group>
  </nav>
</template>
<script>
	import moment from 'moment'
import Logo from '~/components/Logo.vue'

export default {
  components: { Logo },
	props: {
    image: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    subtext: {
      type: String
    },
    link: {
      type: String
    }
  },
  data() {
    return {
      timeFromNow: null,
      isActive: false,
      lastScrollTop: false
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > this.lastScrollTop - 300){
            //this.isActive = true
   }
   if (document.documentElement.scrollTop == 0) {
                this.isActive = false
   }
   this.lastScrollTop = st <= 0 ? 0 : st;
    }
  }
}

</script>
<style scoped>
nav.container {
  position: relative;
    min-height: 100vh;
  top:0;
  bottom:70%;
  height:100%;
  left:0;
  right:0;
}
  nav, .items, .list-move {
  transition: all 0.4s ease;
}

nav.active {
    position: fixed;
  background: #fff;
  height:100px;
    min-height: 0;
}
 .active .image {
  display: none;
    transform: translate3d(0, 30px, 0);
  }
 .active .title {
    transform: translate3d(-30vw, 8vh, 0) scale(0.5);
  }
 .active .subtitle {
  display: none;
/*    transform: translate3d(-10%, 12%, 0) scale(0.7);
*/  }
 .active .subtext {
    display: none;
  }
  .active .links {
    transform: translate3d(21vw, -12vh, 0);
  }
img {
  height: 125px;
  width: 100px;
  border-radius: 0.5rem;
  object-fit: cover;
  background: #fff;
  box-shadow:#e3e3e3 0 0 1rem;
}
</style>