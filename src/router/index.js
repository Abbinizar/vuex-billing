import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Billing from '@/components/Billing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Billing',
      component: Billing
    }
  ]
})
