<script setup>
import Sidebar from "@/public/components/sidebar.component.vue";
import { ref } from 'vue';

const options = ref(['As a school', 'As a teacher']);
</script>

<template>
  <Sidebar />
  <section class="flex h-full p-0 sm:p-8">
    <article class="w-50 my-4 sm:my-4 ml-4 sm:ml-8 sm:mx-auto">
      <div class="flex gap-2">
        <h1 class="text-3xl">Settings</h1>
      </div>
      <SelectButton v-model="value" :options="options" aria-labelledby="basic" class="mb-4"/>
      <form>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="School name *" class="py-3"/>
        </div>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Email address *" class="py-3" />
        </div>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Password *" class="py-3" />
        </div>
        <div class="flex flex-column pb-3 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Confirm your password *" type="password" class="py-3" />
        </div>
        <div class="flex buttons">
          <Button class="w-full justify-content-center px-8 py-3 mr-3 gray-butto">CANCEL</Button>
          <Button class="w-full justify-content-center px-8 py-3 black-button">SAVE</Button>
        </div>
      </form>
    </article>
  </section>
</template>

<style scoped>
.gray-button {
  background-color: white;
  color: gray;
  border: 1px solid gray;
}

</style>