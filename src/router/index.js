import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/public/pages/home.component.vue";
import RegisterAttendance from "@/public/pages/register-attendance.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home },
        { path: '/register-attendance', component: RegisterAttendance }
    ]
});

export default router;
