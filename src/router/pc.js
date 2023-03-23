export default [
  {
    path: "",
    name: "pcHome",
    component: () =>
      import(/* webpackChunkName: "pcHome" */ "../views/pc/home"),
  },
];
