import Vue from 'vue'
import Router from 'vue-router'
import PushBox from '@/components/PushBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PushBox',
      component: PushBox
    }
  ]
})
