import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/invitation/HomeView.vue'
import DashboardView from '@/views/admin/DashboardView.vue'
import LoginView from '@/views/auth/LoginView.vue'

import MainLayout from '@/layouts/MainLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', name: 'Home', component: HomeView }
        ]
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            { path: '', name: 'Dashboard', component: DashboardView }
        ],
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router