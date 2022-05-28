import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import('../pages/Home/index.vue');
const TvPlayPage = () => import("../pages/TvPlayPage.vue");

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/TvPlayPage", name: "TvPlayPage", component: TvPlayPage },
];
const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
