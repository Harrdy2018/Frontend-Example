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
        path: '/helpForm',
        name: 'helpForm',
        component: ()=> import("@/views/helpForm.vue")
    },
    {
        path: '/eleBase',
        name: 'eleBase',
        component: ()=> import("@/views/eleBase.vue")
    },
    {
        path: '/study',
        name: 'study',
        component: ()=> import("@/views/study.vue")
    },
    {
        path: '/sendMessage',
        name: 'sendMessage',
        component: ()=> import("@/views/SendMessageExample/Parent.vue")
    }
]

console.log("start index.js ", process.env.BASE_URL);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
