import { createRouter, createWebHistory } from 'vue-router';
import Classrooms from "@/public/pages/classrooms.component.vue";
import Maintenance from "@/public/pages/maintenance.component.vue";
import Login from "@/public/pages/login.component.vue";
import SignUp from "@/public/pages/sign-up.component.vue";
import ResetYourPassword from "@/public/pages/reset-your-password.component.vue";
import Subscriptions from "@/public/pages/subscriptions.component.vue";
import HelpAndCenter from "@/public/pages/help-and-center.component.vue";
import Settings from "@/public/pages/settings.component.vue";
import Classroom from "@/public/pages/classroom.component.vue";
import StudentsList from "@/public/pages/students-list.vue";
import TeachersList from "@/public/pages/teachers-list.vue";
import TeacherClassrooms from "@/public/pages/teacher-classrooms.component.vue";
import ExcusedDepartures from "@/public/pages/excused-departures.component.vue";
import InfrastructureReport from "@/public/pages/infrastructure-report.component.vue";
import SendAnEmail from "@/public/pages/send-an-email.component.vue";
import AllReports from "@/public/pages/all-reports.component.vue";
import ClassroomSetup from "@/public/pages/classroom-setup.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/login', component: Login },

        { path: '/teacher/login', component: Login },
        { path: '/admin/login', component: Login },

        { path: '/sign-up', component: SignUp },
        { path: '/reset-your-password', component: ResetYourPassword },

        { path: '/admin/classrooms', component: Classrooms },

        /* En esta ruta se almacenan todos los cursos de un salón*/
        { path: '/admin/classroom', component: Classroom },
        { path: '/admin/all-reports', component: AllReports },
        { path: '/admin/maintenance', component: Maintenance },
        { path: '/admin/classroom-setup', component: ClassroomSetup },
        { path: '/admin/students', component: StudentsList },
        { path: '/admin/teachers', component: TeachersList },

        { path: '/admin/settings', component: Settings },
        { path: '/admin/help-and-center', component: HelpAndCenter },
        { path: '/admin/subscriptions', component: Subscriptions },

        { path: '/teacher/classrooms', component: TeacherClassrooms },
        { path: '/teacher/excused-departures', component: ExcusedDepartures },
        { path: '/teacher/infrastructure-report', component: InfrastructureReport },
        { path: '/teacher/send-an-email', component: SendAnEmail },

        { path: '/teacher/settings', component: Settings },
        { path: '/teacher/help-and-center', component: HelpAndCenter },
        { path: '/teacher/subscriptions', component: Subscriptions },
    ]
});

export default router;
