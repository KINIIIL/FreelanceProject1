import Vue from "vue";
import VueRouter from "vue-router";
import MainContent from "../views/MainContent.vue";
import CardPage from "../components/CardPage.vue";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

// Тут приписаны наши пути
const routes = [
  {
    // Главная страница
    path: "/",
    name: "main",
    component: MainContent,
  },
  {
    // Страница каждой уникальной карточки
    path: "/cards/:id",
    name: "cardPage",
    component: CardPage,
  },
  {
    // При неправильном пути выводим 404
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
