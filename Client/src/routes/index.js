import { createRouter, createWebHistory } from 'vue-router';
import HeroContainer from '../components/Body/Hero/HeroContainer.vue';

const routes = [
    { path:"/", name: "Home", component: HeroContainer }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;