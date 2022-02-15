import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/eleGrid',
        name: 'eleGrid',
        component: ()=> import("@/views/eleGrid.vue")
    },
    {
        path: '/study',
        name: 'study',
        component: ()=> import("@/views/study.vue")
    }
]

console.log("start index.js ", process.env.BASE_URL);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
