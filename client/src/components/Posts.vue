<template>
  <v-container>
    <v-layout column align-center>

    </v-layout>
  </v-container>
</template>

<script>
  import Me from './Me.vue'
  export default {
    name: 'Posts',
    data: function () {
      return {

      }
    },
    components: { Me }
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
