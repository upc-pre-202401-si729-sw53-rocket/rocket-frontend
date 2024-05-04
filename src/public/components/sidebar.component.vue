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
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <router-link to="/" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-building mr-2"></i>
                      <span class="font-medium">Classrooms</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/all-reports" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-file-excel mr-2"></i>
                      <span class="font-medium">All reports</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/maintenance" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-building-columns mr-2"></i>
                      <span class="font-medium">Maintenance</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/classroom-setup" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-users mr-2"></i>
                      <span class="font-medium">Classroom setup</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/students" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-id-card mr-2"></i>
                      <span class="font-medium">Students</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/teachers" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-user mr-2"></i>
                      <span class="font-medium">Teachers</span>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="list-none px-3 m-0">
              <li>
                <div class="my-2">
                  <span class="font-medium mx-3">PREFERENCES</span>
                </div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <router-link to="/settings" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-cog mr-2"></i>
                      <span class="font-medium">Settings</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/help-and-center" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-question-circle mr-2"></i>
                      <span class="font-medium">Help & Center</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/dark-mode" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-moon mr-2"></i>
                      <span class="font-medium">Dark mode</span>
                    </router-link>
                  </li>
                  <li class="mt-8">
                    <router-link to="/log-out" v-ripple class="router-link-exact-active flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-sign-out mr-2"></i>
                      <span class="font-medium">Log Out</span>
                    </router-link>
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
                <router-link to="/home">
                  <span class="font-bold text-xl font-italic text-primary">ROCKETNOTES</span>
                </router-link>
              </div>

          </div>
          <div class="ml-0 sm:ml-8 align-self-center">
            <span class="hidden xl:flex font-semibold text-sm font-italic">Pages/</span>
          </div>
        </div>
      </template>
      <template #end>
        <IconField class="mr-0 sm:mr-4" iconPosition="left">
          <InputIcon>
            <i class="pi pi-search mb-4" />
          </InputIcon>
          <InputText placeholder="Search"/>
        </IconField>
        <ul class="hidden xl:flex list-none p-0 m-0 justify-content-end overflow-hidden">
          <li class="my-auto">
            <router-link to="/subscriptions"  v-ripple class="flex align-items-center cursor-pointer p-2 mr-1 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-crown"></i>
            </router-link>
          </li>
          <li class="my-auto">
            <a v-ripple class="flex align-items-center cursor-pointer p-2 mr-1 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell"></i>
            </a>
          </li>
          <li class="my-auto">
            <a v-ripple class="flex align-items-center cursor-pointer p-2 mr-1 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
              <router-link to="/settings">
                <i class="pi pi-sliders-h"></i>
              </router-link>
            </a>
          </li>
          <li class="my-auto">
            <router-link to="/login" v-ripple class="flex align-items-center cursor-pointer p-1 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
              <Avatar icon="pi pi-user" shape="circle" />
            </router-link>
          </li>
        </ul>
      </template>
    </Toolbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>