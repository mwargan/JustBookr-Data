<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <template v-if="$auth.loggedIn">
          <div>{{$auth.user.name}}</div>
          <button class="button button--grey" @click="$auth.logout()">Logout</button>
        </template>
        <template v-else>
          <form @submit.prevent="passwordGrantLogin">
            <div>
              <label for="username">Email</label>
              <input name="username" v-model="user.username" />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name="password" v-model="user.password" />
            </div>
            <div>
<!--               <button class="button button--grey" type="submit">Login with Password Grant</button>
 -->              <button class="button button--grey" type="button" @click.prevent="customPasswordGrantLogin">Login with Custom Passport Password Scheme</button>
            </div>
            <div>
              <button class="button button--grey" type="button" @click.prevent="oauthLogin">Login with OAuth</button>
            </div>
          </form>
        </template>
      </div>
    </section>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {

  components: { Logo },

  auth: false,
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  // computed: {
  //   thisUser: function() {
  //     return this.$store.state.auth.user
  //   }
  // },
  methods: {
    // async passwordGrantLogin() {
    //   await this.$auth.loginWith("password_grant", {
    //     data: {
    //       grant_type: "password",
    //       client_id: process.env.PASSPORT_PASSWORD_GRANT_ID,
    //       client_secret: process.env.PASSPORT_PASSWORD_GRANT_SECRET,
    //       scope: "*",
    //       username: this.user.username,
    //       password: this.user.password
    //     }
    //   });
    //   this.$router.replace(this.$auth.$state.redirect)
    // },
    async customPasswordGrantLogin() {
      await this.$auth.loginWith("password_grant_custom", {
        data: this.user
      })
      this.$router.replace(this.$auth.$state.redirect)
    },
    oauthLogin() {
      this.$auth.loginWith("laravel.passport")
        .then(() => this.$router.replace(this.$auth.$state.redirect));
    }
  }
};

</script>
<style scoped>
div {
  margin: 10px 0;
}

</style>
