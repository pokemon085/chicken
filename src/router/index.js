import { createRouter, createWebHistory } from "vue-router";
import { mobile } from "./mobile";
import { pc } from "./pc";

const routes = [
  ...mobile,
  ...pc,
  {
    path: "/",
    name: "root",
    component: () => import(/* webpackChunkName: "root" */ "../views/index"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
