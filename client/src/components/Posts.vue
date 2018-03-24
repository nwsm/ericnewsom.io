<template>
  <v-container>
    <v-layout column align-center>
      <router-link :to="'/'"><v-btn small color="normal">Home</v-btn></router-link>
    </v-layout>
  </v-container>
</template>

<script>
  import Me from './Me.vue'
  import Api from '../services/Api'

  export default {
    name: 'Posts',
    data: function () {
      return {

      }
    },
    components: { Me },
    mounted: function () {
      Api.getPosts()
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
