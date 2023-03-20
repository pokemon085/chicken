import { createRouter, createWebHistory } from "vue-router";
import { mobile } from "./mobile";
import { pc } from "./pc";
import isMobile from "@/lib/isMobile";

const routes = [
  {
    path: "/",
    name: "root",
    redirect: isMobile ? "mobile" : "pc",
    component: () => import(/* webpackChunkName: "root" */ "../views"),
    children: [...mobile, ...pc],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
