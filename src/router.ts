import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/Projetos",
    name: "LayoutProject",
    component: () => import("./pages/LayoutProjects.vue"),
  },
  {
    path: "/",
    name: "LayoutMain",
    component: () => import("./pages/Layout.vue"),
  },
  {
    path: "/Sobre",
    name: "LayoutAbout",
    component: () => import("./pages/LayoutAbout.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
