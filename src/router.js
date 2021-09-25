
import { createWebHistory, createRouter } from "vue-router"


import Locations from '@/views/Locations.vue'
import Home from '@/views/Home.vue'

    const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/direccion:id',
            name: 'direccion',
            component: Locations,
        },    
    ]

    const router = createRouter({
        'history':createWebHistory(),
        routes,
      });

    export default router