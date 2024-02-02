import { createRouter, createWebHistory} from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/about",
        name: "about",
        component: AboutPage,
       
    },
    {
        path: "/projects/:slug",
        name: "project-page",
        component: ProjectPage,
    }
    ],
    
});

export { router };