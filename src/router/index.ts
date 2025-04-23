import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppView from "@/views/AppView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ResetView from "@/views/ResetView.vue";
import CookieServices from "../services/CookiesService";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: AppView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/reset",
    name: "reset",
    component: ResetView,
    meta: {
      requireAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//GUARDS
router.beforeEach((to, from, next) => {
  const cookies = new CookieServices();
  const auth = cookies.getCookie("auth") !== null;
  console.log(cookies.getCookie("auth"));
  
  const needAuth = to.meta.requireAuth;

  if (needAuth && !auth) {
    next("/auth");
  } else {
    next();
  }
});
export default router;
