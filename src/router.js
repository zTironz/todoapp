import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/edits/Editor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
    component: () => import('./edits/Todos.vue')
  },
  {
    path: '/editor',
    component: Editor
  }
]
})
