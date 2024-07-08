import { createRouter, createWebHistory } from "vue-router";
import MoviesPage from "../pages/MoviesPage.vue";
import SeriesPage from "../pages/SeriesPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/movies",
      name: "movies",
      component: MoviesPage
    },
    {
      path: "/series",
      name: "series",
      component: SeriesPage
    }
  ]
});
export { router };
