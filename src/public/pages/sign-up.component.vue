<script setup>
import { ref } from 'vue';

const options = ref(['As a school', 'As a teacher']);
</script>

<template>
  <article class="flex h-full mx-0 sm:mx-8 p-0 sm:p-8 justify-content-between container">
    <article class="w-50 my-4 sm:my-4 ml-4 sm:ml-8">
      <div class="my-4">
        <span class="inline-flex items-center gap-2">
          <span class="font-bold text-xl font-italic text-primary">ROCKETNOTES</span>
        </span>
      </div>

      <div class="flex gap-2 mb-4">
        <span class="font-bold text-sm">Signup</span>
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
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Password *" type="password" class="py-3" />
        </div>
        <div class="flex flex-column pb-5 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Confirm your password *" type="password" class="py-3" />
        </div>
        <Button class="w-full justify-content-center px-5 py-3 mb-2">CREATE A NEW ACCOUNT</Button>
        <router-link to="/login">
          <Button class="w-full justify-content-center px-5 py-3 black-button">BACK TO LOGIN</Button>
        </router-link>
      </form>
    </article>

    <article class="w-50">
      <img src="../../assets/cover.png" alt="Model Image" class="hidden sm:flex p-8"/>
    </article>
  </article>
</template>

<style scoped>
.container {
  margin-top: 5em;
}

@media (max-width: 768px) {
  .container {
    margin-top: 10em;
  }
}

.black-button {
  background-color: #000;
  color: #fff;
  border: none;
}
</style>