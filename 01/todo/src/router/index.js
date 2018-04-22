import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Demo1 from '@/components/Demo1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
    }
  ]
})
