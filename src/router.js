import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MoviesPage from "../pages/MoviesPage.vue";
import SeriesPage from "../pages/SeriesPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      props: true
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesPage,
      props: true
    },
    {
      path: "/series",
      name: "series",
      component: SeriesPage,
      props: true
    }
  ]
});
export { router };
