/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\vue_blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-dc05eefc",
    path: "/frontEnd/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-dc05eefc").then(next)
    },
  },
  {
    path: "/frontEnd/index.html",
    redirect: "/frontEnd/"
  },
  {
    path: "/00.目录页/01.前端.html",
    redirect: "/frontEnd/"
  },
  {
    name: "v-6d211532",
    path: "/pages/cfb29a/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6d211532").then(next)
    },
  },
  {
    path: "/pages/cfb29a/index.html",
    redirect: "/pages/cfb29a/"
  },
  {
    path: "/01.前端/01.知识总结/02.第二个.html",
    redirect: "/pages/cfb29a/"
  },
  {
    name: "v-1c32e20c",
    path: "/pages/1a89bc/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1c32e20c").then(next)
    },
  },
  {
    path: "/pages/1a89bc/index.html",
    redirect: "/pages/1a89bc/"
  },
  {
    path: "/01.前端/01.知识总结/01.git操作.html",
    redirect: "/pages/1a89bc/"
  },
  {
    name: "v-02c059d6",
    path: "/pages/f2ec99/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-02c059d6").then(next)
    },
  },
  {
    path: "/pages/f2ec99/index.html",
    redirect: "/pages/f2ec99/"
  },
  {
    path: "/01.前端/02.问题记录/02.第二个.html",
    redirect: "/pages/f2ec99/"
  },
  {
    name: "v-35b0d28e",
    path: "/pages/7054e9/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-35b0d28e").then(next)
    },
  },
  {
    path: "/pages/7054e9/index.html",
    redirect: "/pages/7054e9/"
  },
  {
    path: "/02.页面/01.html/01.待定.html",
    redirect: "/pages/7054e9/"
  },
  {
    name: "v-38b6b73e",
    path: "/pages/ecc339/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-38b6b73e").then(next)
    },
  },
  {
    path: "/pages/ecc339/index.html",
    redirect: "/pages/ecc339/"
  },
  {
    path: "/01.前端/02.问题记录/01.第一个.html",
    redirect: "/pages/ecc339/"
  },
  {
    name: "v-332ea080",
    path: "/pages/0c1bb9/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-332ea080").then(next)
    },
  },
  {
    path: "/pages/0c1bb9/index.html",
    redirect: "/pages/0c1bb9/"
  },
  {
    path: "/02.页面/02.css/01.待定.html",
    redirect: "/pages/0c1bb9/"
  },
  {
    name: "v-1ca87a40",
    path: "/archives/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1ca87a40").then(next)
    },
  },
  {
    path: "/archives/index.html",
    redirect: "/archives/"
  },
  {
    path: "/@pages/archivesPage.html",
    redirect: "/archives/"
  },
  {
    name: "v-0a9fb360",
    path: "/tags/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0a9fb360").then(next)
    },
  },
  {
    path: "/tags/index.html",
    redirect: "/tags/"
  },
  {
    path: "/@pages/tagsPage.html",
    redirect: "/tags/"
  },
  {
    name: "v-4ace98c0",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4ace98c0").then(next)
    },
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    path: "/@pages/categoriesPage.html",
    redirect: "/categories/"
  },
  {
    name: "v-bb0e1570",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bb0e1570").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]