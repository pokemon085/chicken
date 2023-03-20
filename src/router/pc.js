const errorPage = [
  {
    path: "/404",
    component: () => import("@/common/mobile/404"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

export const pc = [
  {
    path: "pc",
    name: "pc",
    redirect: { name: "pcHome" },
    component: () => import(/* webpackChunkName: "pc" */ "../views/pc"),
    children: [
      {
        path: "home",
        name: "pcHome",
        component: () =>
          import(/* webpackChunkName: "pcHome" */ "../views/pc/home"),
        children: [],
      },
      ...errorPage,
    ],
  },
  ...errorPage,
];
