<template>
  <div id="backButton" style="background-color:rgba(64,224,208,.2);height:100%;" @click="backOnEscape">
    <!-- b-alert v-if="errorMessage" show variant="danger">
      {{ errorMessage }}
    </!-->
    <b-alert v-if="$auth.$state.redirect" show>
      You have to login before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </b-alert>
    <b-row align-h="center" class="pt-4">
      <b-card v-show="!loggedIn" title="Login" bg-variant="light">
        <!-- div class="alert alert-warning">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
          {{ "loginWarning" }}
        </!-->
        <div v-for="s in strategies" :key="s.key" class="mb-2" style="width:100%">
          <b-btn
            block
            :style="{ background: s.color }"
            class="login-button"
            :disabled="!s.active"
            @click="$auth.loginWith(s.key)"
          >
            {{ s.name }}
          </b-btn>
        </div>
      </b-card>
      <b-card v-show="loggedIn" title="Logout" bg-variant="light">
        <b-btn
          v-show="loggedIn"
          block
          class="login-button"
          @click="$auth.logout()"
        >
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        </b-btn>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  middleware: ['auth'],
  computed: {
    ...mapState('auth', ['loggedIn']),
    strategies: () => [
      { key: 'facebook', name: 'Facebook', color: '#3c65c4', active: true }
    ]
  },
  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('beforeDestroy')
    window.removeEventListener('keydown', this.backOnEscape)
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log('mounted')
    window.addEventListener('keydown', this.backOnEscape)
  },
  methods: {
    backOnEscape (e) {
      // eslint-disable-next-line no-console
      console.log(e.key, e.repeat, e.srcElement.id)
      if ((e.srcElement && e.srcElement.id === 'backButton') || e.key === 'Escape') {
        // eslint-disable-next-line no-console
        console.log(e.key, e.repeat, e.srcElement)
        window.removeEventListener('keydown', this.backOnEscape)
        this.$router.back()
      }
    }
  }
}
</script>

<style scoped>
.login-button {
  border: 0;
}
</style>
