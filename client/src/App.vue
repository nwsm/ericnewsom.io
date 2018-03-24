<template>
  <v-app>
    <v-layout column align-center>
      <div style="width: 40em">
        <Me></Me>
      </div>
    </v-layout>

    <router-view></router-view>
    <v-footer :fixed="fixed" app>
      <span> eric newsom </span>
    </v-footer>
  </v-app>
</template>

<script>
import Me from './components/Me.vue'
export default {
  data () {
    return {
      fixed: false
    }
  },
  components: { Me },
  name: 'App'
}
</script>
