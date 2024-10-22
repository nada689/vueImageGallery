import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Photo_Gallery from "../views/Photo_Gallery.vue";

const routes = [
    { path: "/", name: "home", component: HomeView },
    {
        path: "/Photo_Gallery",
        name: "Photo_Gallery",
        component: Photo_Gallery,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
