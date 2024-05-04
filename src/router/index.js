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
import Classroom from "@/public/pages/classroom.component.vue";
import StudentsList from "@/public/pages/students-list.vue";
import TeachersList from "@/public/pages/teachers-list.vue";
import ClassroomSetup from "@/public/pages/classroom-setup.component.vue"; // Asegúrate de que la ruta sea correcta

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
        { path: '/sign-up', component: SignUp },
        { path: '/reset-your-password', component: ResetYourPassword },

        { path: '/', component: Classrooms },
        { path: '/classroom', component: Classroom },
        { path: '/maintenance', component: Maintenance },
        { path: '/students', component: StudentsList },
        { path: '/teachers', component: TeachersList },
        { path: '/classroom-setup', component: ClassroomSetup },
        { path: '/subscriptions', component: Subscriptions },
        { path: '/help-and-center', component: HelpAndCenter },
        { path: '/settings', component: Settings },
        { path: '/infrastructure-report', component: GenerateReport }
    ]
});

export default router;
