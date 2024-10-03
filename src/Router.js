import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AddNewProgram from "./pages/AddNewProgram.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/HomePage", component: HomePage },
        { path: "/AddNewProgram", component: AddNewProgram },
    ],
});
export default router;
