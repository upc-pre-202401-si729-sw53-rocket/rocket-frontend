import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/public/pages/home.component.vue";
import RegisterAttendance from "@/public/pages/register-attendance.component.vue";
import Login from "@/public/pages/login.component.vue";
import SignUp from "@/public/pages/sign-up.component.vue";
import ResetYourPassword from "@/public/pages/reset-your-password.component.vue";
import Subscriptions from "@/public/pages/subscriptions.component.vue";
import HelpAndCenter from "@/public/pages/help-and-center.component.vue";
import Settings from "@/public/pages/settings.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home },
        { path: '/login', component: Login },
        { path: '/sign-up', component: SignUp },
        { path: '/reset-your-password', component: ResetYourPassword },
        { path: '/register-attendance', component: RegisterAttendance },
        { path: '/subscriptions', component: Subscriptions },
        { path: '/help-and-center', component: HelpAndCenter },
        { path: '/settings', component: Settings }
    ]
});

export default router;
