import { createRouter, createWebHistory } from 'vue-router';
import Classrooms from "@/public/pages/classrooms.component.vue";
import Maintenance from "@/public/pages/maintenance.component.vue";
import Login from "@/public/pages/login.component.vue";
import SignUp from "@/public/pages/sign-up.component.vue";
import ResetYourPassword from "@/public/pages/reset-your-password.component.vue";
import Subscriptions from "@/public/pages/subscriptions.component.vue";
import HelpAndCenter from "@/public/pages/help-and-center.component.vue";
import Settings from "@/public/pages/settings.component.vue";
import GenerateReport from "@/public/pages/generate-report.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
        { path: '/sign-up', component: SignUp },
        { path: '/reset-your-password', component: ResetYourPassword },

        { path: '/classrooms', component: Classrooms },
        { path: '/maintenance', component: Maintenance },

        { path: '/subscriptions', component: Subscriptions },
        { path: '/help-and-center', component: HelpAndCenter },
        { path: '/settings', component: Settings },
        { path: '/infrastructure-report', component: GenerateReport }
    ]
});

export default router;
