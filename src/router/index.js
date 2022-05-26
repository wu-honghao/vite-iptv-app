import { createRouter, createWebHashHistory } from "vue-router";
import TvPlayPage from "../pages/TvPlayPage.vue";
import Home from "../pages/Home.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/TvPlayPage", name: "TvPlayPage", component: TvPlayPage },
];
const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
