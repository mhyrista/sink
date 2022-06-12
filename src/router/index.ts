import { createRouter, createWebHistory } from "vue-router";
import WelcomeKitchenSinkView from "@/components/WelcomeKitchenSink.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: WelcomeKitchenSinkView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/speech",
      name: "speech",
      component: () => import("../views/SpeechView.vue"),
    },
    {
      path: "/face",
      name: "face",
      component: () => import("../views/FaceView.vue"),
    },
    {
      path: "/translator",
      name: "translator",
      component: () => import("../views/TranslatorView.vue"),
    },
    {
      path: "/formrecognizer",
      name: "formrecognizer",
      component: () => import("../views/FormView.vue"),
    },
    {
      path: "/customvision",
      name: "customvision",
      component: () => import("../views/CustomVisionView.vue"),
    },
    {
      path: "/computervision",
      name: "computervision",
      component: () => import("../views/ComputerVisionView.vue"),
    },
    {
      path: "/sentiment",
      name: "sentiment",
      component: () => import("../views/SentimentView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
    },
  ],
  linkActiveClass: "",
  linkExactActiveClass: "",
});

export default router;
