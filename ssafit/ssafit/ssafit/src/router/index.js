import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/video/:id",
      name: "VideoDetail",
      component: () => import("../components/video/VideoDetailVue.vue"),
    },
    {
      path: "/review/:id",
      name: "ReviewDetailView",
      component: () => import("../components/review/ReviewDetailView.vue"),
    },
    {
      path: "/review/create",
      name: "ReviewCreateView",
      component: () => import("../components/review/ReviewCreateView.vue"),
    },
    {
      path: "/review/edit/:id",
      name: "ReviewEditView",
      component: () => import("../components/review/ReviewEditView.vue"),
    },
  ],
});

export default router;
