<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const visible = ref(false);
const route = useRoute();

const isAdminRoute = () => route.path.includes('/admin');
const isTeacherRoute = () => route.path.includes('/teacher');
</script>

<template>
  <div class="card flex justify-center">
    <Sidebar v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div class="flex flex-column h-full">
          <div class="flex align-items-center justify-content-between px-6 pt-6 pb-2 flex-shrink-0">
            <span class="inline-flex items-center gap-2">
                <span class="font-bold text-xl font-italic text-primary">ROCKETNOTES</span>
            </span>
          </div>
          <div class="overflow-y-auto ml-3">
            <ul class="list-none p-3 m-0">
              <li>
                <div class="my-2">
                  <span class="font-medium mx-3">PRINCIPAL</span>
                </div>
                <ul v-if="isAdminRoute()" class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <router-link to="/admin/classrooms" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-building mr-2"></i>
                      <span class="font-medium">Admin classrooms</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/admin/all-reports" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-file-excel mr-2"></i>
                      <span class="font-medium">All reports</span>
                    </router-link>
                  </li>
                  <!--
                  <li>
                    <router-link to="/admin/maintenance" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-building-columns mr-2"></i>
                      <span class="font-medium">Maintenance</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/admin/classroom-setup" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-users mr-2"></i>
                      <span class="font-medium">Classroom setup</span>
                    </router-link>
                  </li>-->
                  <li>
                    <router-link to="/admin/students" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-id-card mr-2"></i>
                      <span class="font-medium">Students</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/admin/teachers" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-user mr-2"></i>
                      <span class="font-medium">Teachers</span>
                    </router-link>
                  </li>
                  <li>
                    <div class="my-2">
                      <span class="font-medium mx-3">PREFERENCES</span>
                    </div>
                    <ul class="list-none p-0 m-0 overflow-hidden">
                      <li>
                        <router-link to="/admin/settings" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-cog mr-2"></i>
                          <span class="font-medium">Settings</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/admin/subscriptions" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-crown mr-2"></i>
                          <span class="font-medium">Subscriptions</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/admin/help-and-center" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-question-circle mr-2"></i>
                          <span class="font-medium">Help & Center</span>
                        </router-link>
                      </li>
                      <!--
                      <li v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-moon mr-2"></i>
                          <span class="font-medium">Dark mode</span>
                      </li>-->
                      <li class="mt-8">
                        <router-link to="/login" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-sign-out mr-2"></i>
                          <span class="font-medium">Log Out</span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul v-if="isTeacherRoute()" class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <router-link to="/teacher/classrooms" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-building mr-2"></i>
                      <span class="font-medium">Teacher classrooms</span>
                    </router-link>
                  </li>
                  <!--
                  <li>
                    <router-link to="/teacher/excused-departures" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-file-excel mr-2"></i>
                      <span class="font-medium">Excused Departures</span>
                    </router-link>
                  </li>-->
                  <li>
                    <router-link to="/teacher/infrastructure-report" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-building-columns mr-2"></i>
                      <span class="font-medium">Infrastructure report</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/teacher/send-an-email" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-envelope mr-2"></i>
                      <span class="font-medium">Send an email</span>
                    </router-link>
                  </li>
                  <li>
                    <div class="my-2">
                      <span class="font-medium mx-3">PREFERENCES</span>
                    </div>
                    <ul class="list-none p-0 m-0 overflow-hidden">
                      <li>
                        <router-link to="/teacher/settings" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-cog mr-2"></i>
                          <span class="font-medium">Settings</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/teacher/subscriptions" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-crown mr-2"></i>
                          <span class="font-medium">Subscriptions</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/teacher/help-and-center" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-question-circle mr-2"></i>
                          <span class="font-medium">Help & Center</span>
                        </router-link>
                      </li>
                      <!--
                      <li v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-moon mr-2"></i>
                        <span class="font-medium">Dark mode</span>
                      </li>-->
                      <li class="mt-8">
                        <router-link to="login" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                          <i class="pi pi-sign-out mr-2"></i>
                          <span class="font-medium">Log Out</span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Sidebar>
    <Toolbar class="w-full py-4 px-6 toolbar justify-content-center sm:justify-content-between">
      <template #start>
        <div class="flex justify-content-center mx-auto">
          <div class="flex ">
            <Button icon="pi pi-bars" @click="visible = true" class="menu"/>
              <div class="align-self-center">
                  <span class="font-bold text-xl font-italic text-primary">ROCKETNOTES</span>
              </div>
          </div>
          <div class="ml-0 sm:ml-8 align-self-center">
            <span class="hidden xl:flex font-semibold text-sm font-italic">Pages/</span>
          </div>
        </div>
      </template>
    </Toolbar>
  </div>
</template>

<style>
.menu {
  background-color: white;
  color: black;
  border: none;
}

.toolbar {
  border-radius: 0;
}

.router-link-exact-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>