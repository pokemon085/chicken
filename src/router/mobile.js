// import errorPage from "./errorPage";
export default [
  {
    path: "/mobile",
    name: "mobile",
    component: () => import(/* webpackChunkName: "mobile" */ "../views/mobile"),
    children: [
      {
        path: "",
        name: "mobileHome",
        component: () =>
          import(/* webpackChunkName: "mobileHome" */ "../views/mobile/home"),
        children: [],
      },
      // ...errorPage,
    ],
  },
  // ...errorPage,
];
