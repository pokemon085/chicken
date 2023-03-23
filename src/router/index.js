import { createRouter, createWebHistory } from "vue-router";
import mobile from "./mobile";
import pc from "./pc";
import isMobile from "@/lib/isMobile";
// import errorPage from "./errorPage";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import(/* webpackChunkName: "pc" */ "../views/pc"),
    children: [...pc],
    beforeEnter: (to, from, next) => {
      if (isMobile) {
        next("/mobile");
      } else {
        next();
      }
    },
  },
  ...mobile,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
