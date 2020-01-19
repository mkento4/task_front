import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14d0ea60 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4039b142 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _285bae3e = () => interopDefault(import('../pages/usersCompanies/createComment.vue' /* webpackChunkName: "pages/usersCompanies/createComment" */))
const _0f2dd31a = () => interopDefault(import('../pages/usersCompanies/createTask.vue' /* webpackChunkName: "pages/usersCompanies/createTask" */))
const _7a312432 = () => interopDefault(import('../pages/usersCompanies/dashboard.vue' /* webpackChunkName: "pages/usersCompanies/dashboard" */))
const _655cbd98 = () => interopDefault(import('../pages/usersCompanies/taskComList.vue' /* webpackChunkName: "pages/usersCompanies/taskComList" */))
const _036e01d6 = () => interopDefault(import('../pages/usersCompanies/taskList.vue' /* webpackChunkName: "pages/usersCompanies/taskList" */))
const _0609cfe6 = () => interopDefault(import('../pages/usersCompanies/taskCommentEdit/_id.vue' /* webpackChunkName: "pages/usersCompanies/taskCommentEdit/_id" */))
const _e32f68a8 = () => interopDefault(import('../pages/usersCompanies/taskEdit/_id.vue' /* webpackChunkName: "pages/usersCompanies/taskEdit/_id" */))
const _163b8448 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/inspire",
      component: _14d0ea60,
      name: "inspire"
    }, {
      path: "/login",
      component: _4039b142,
      name: "login"
    }, {
      path: "/usersCompanies/createComment",
      component: _285bae3e,
      name: "usersCompanies-createComment"
    }, {
      path: "/usersCompanies/createTask",
      component: _0f2dd31a,
      name: "usersCompanies-createTask"
    }, {
      path: "/usersCompanies/dashboard",
      component: _7a312432,
      name: "usersCompanies-dashboard"
    }, {
      path: "/usersCompanies/taskComList",
      component: _655cbd98,
      name: "usersCompanies-taskComList"
    }, {
      path: "/usersCompanies/taskList",
      component: _036e01d6,
      name: "usersCompanies-taskList"
    }, {
      path: "/usersCompanies/taskCommentEdit/:id?",
      component: _0609cfe6,
      name: "usersCompanies-taskCommentEdit-id"
    }, {
      path: "/usersCompanies/taskEdit/:id?",
      component: _e32f68a8,
      name: "usersCompanies-taskEdit-id"
    }, {
      path: "/",
      component: _163b8448,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
