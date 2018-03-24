import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
