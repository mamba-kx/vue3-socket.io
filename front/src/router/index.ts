import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/main/index.vue")
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/chat-view/index.vue")
  }
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
