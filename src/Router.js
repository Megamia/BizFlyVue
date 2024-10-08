import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AddNewProgram from "./pages/AddNewProgram.vue";
import PageTest1 from "./pages/page1/PageTest1.vue";
import PageTest2 from "./pages/PageTest2.vue";
import PageTest3 from "./pages/PageTest3.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/HomePage", component: HomePage },
        { path: "/AddNewProgram", component: AddNewProgram },
        { path: "/PageTest1", component: PageTest1 },
        { path: "/PageTest2", component: PageTest2 },
        { path: "/PageTest3", component: PageTest3 },
    ],
});
export default router;
