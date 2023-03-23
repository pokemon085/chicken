export default [
  {
    path: "/404",
    component: () => import("@/common/mobile/404"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];
