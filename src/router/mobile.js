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

export const mobile = [
  {
    path: "mobile",
    name: "mobile",
    redirect: { name: "mobileHome" },
    component: () => import(/* webpackChunkName: "mobile" */ "../views/mobile"),
    children: [
      {
        path: "home",
        name: "mobileHome",
        component: () =>
          import(/* webpackChunkName: "mobileHome" */ "../views/mobile/home"),
        children: [],
      },
      ...errorPage,
    ],
  },
  ...errorPage,
];
