<template>
    <v-layout column align-center>
      <v-btn color="primary" dark @click.stop="dialog = !dialog">eric newsom</v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-text class="grey lighten-3">
            <div class="card-bold left">Full Stack Developer</div>
            <div class="card-bold align-right">Anywhere, USA</div>
            <v-divider></v-divider>

            <div class="card-bold piece contact">ericnews512@gmail.com | <a href="https://www.linkedin.com/in/eric-newsom-592637133/">LinkedIn</a> | <a href="https://github.com/nwsm">Github</a></div>

            <div class="piece left">
              <div class="card-bold">Interests:</div>
              <div>Web Development</div>
              <div>Technology</div>
              <div>Video Games</div>
              <div>College Sports</div>
            </div>

            <div class="piece align-right">
              <div class="card-bold">History:</div>
              <div>Little Rock, AR</div>
              <div>University of Arkansas (Major IS, Minor CS)</div>
              <div>.NET Developer, ConocoPhillips</div>
              <div>&nbsp;</div>
            </div>

            <div class="piece left">
              <div class="card-bold">Backend Experience:</div>
              <div>.NET (MVC, WebApi)</div>
              <div>Node (Express, hapi)</div>
            </div>

            <div class="piece align-right">
              <div class="card-bold">Frontend Experience:</div>
              <div>Vue</div>
              <div>AngularJS</div>
              <div>Bootstrap</div>
              <div>HTML/JavaScript/CSS</div>
            </div>

            <v-btn small style="width:100%" color="primary contact" @click.stop="dialog=false" >close</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
  export default {
    name: 'Me',
    data: function () {
      return {
        dialog: false
      }
    }
  }
</script>

<style>
  .card-bold {
    font-weight: bold;
  }
  .align-right {
    text-align: right;
  }
  .piece {
    padding-top: 50px
  }
  .contact {
    text-align: center;
  }
</style>
