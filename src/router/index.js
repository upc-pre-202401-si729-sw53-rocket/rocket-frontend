import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/public/pages/home.component.vue";
import RegisterAttendance from "@/public/pages/register-attendance.component.vue";
import Login from "@/public/pages/login.component.vue";
import SignUp from "@/public/pages/sign-up.component.vue";
import ResetYourPassword from "@/public/pages/reset-your-password.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home },
        { path: '/login', component: Login },
        { path: '/sign-up', component: SignUp },
        { path: '/reset-your-password', component: ResetYourPassword },
        { path: '/register-attendance', component: RegisterAttendance }
    ]
});

export default router;
