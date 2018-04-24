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
<<<<<<< HEAD
=======
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
>>>>>>> e96e889186955463017e86a38ffbe1d62b1ce702
    }
  ]
})
