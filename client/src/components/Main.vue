<template>
  <v-container grid-list-mid text-xs-right>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <v-card color="primary" class="white--text">
          <v-card-title primary-title>
            <div class="headline">Blog</div>
            <div>My personal blog, hosted here. NodeJS/Express backend with a PostgreSQL database.</div>
          </v-card-title>
          <v-card-actions>
            <a href="https://github.com/nwsm/ericnewsom.io"><v-btn flat dark>Github</v-btn></a>
            <router-link :to="'Posts'"><v-btn flat dark>Site</v-btn></router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Main',
    data: function () {
      return {

      }
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
