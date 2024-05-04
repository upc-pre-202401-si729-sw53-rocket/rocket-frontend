log in
<template>
      <Message v-if="dialogMessage" :key="messageKey" severity="error" @close="handleClose">{{ dialogMessage }}</Message>
  <article class="flex h-full mx-0 sm:mx-8 p-0 sm:p-8 justify-content-between">
    <article class="w-50 my-5 sm:my-8 ml-4 sm:ml-8">
      <div class="my-4">
        <span class="inline-flex items-center gap-2">
          <span class="font-bold text-xl font-italic text-primary">ROCKETNOTES</span>
        </span>
      </div>

      <div class="flex gap-2 mb-4">
        <span class="font-bold text-sm">LOGIN</span>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="username" aria-describedby="username-help" placeholder="Email address *" class="py-3"/>
        </div>
        <div class="flex flex-column gap-2">
          <InputText id="password" v-model="password" aria-describedby="password-help" placeholder="Password *" type="password" class="py-3" />
        </div>
        <div class="flex justify-content-between my-3">
          <Button class="px-6 py-3 mr-4" @click="handleLogin">LOGIN</Button>
          <router-link to="/reset-your-password" class="my-auto font-semibold">Forgot your password?</router-link>
        </div>
        <router-link to="/sign-up">
          <div class="flex justify-content-between my-3">
            <Button class="w-full justify-content-center px-5 py-3">
              CREATE A NEW ACCOUNT
            </Button>
          </div>
        </router-link>
      </form>
    </article>

    <article class="w-50">
      <img src="../../assets/cover.png" alt="Model Image" class="hidden sm:flex p-8"/>
    </article>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const dialogMessage = ref('');
const messageKey = ref(0);
const handleLogin = async () => {
  if (!username.value || !password.value) {
        dialogMessage.value = 'Please fill in all fields';
        messageKey.value++;
        return;
    }
    try {
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;

        const user = users.find(user => user.username === username.value && user.password === password.value);

        if (user) {
            router.push('/classroom'); // Redirige a '/classroom'
        } else {
          dialogMessage.value = 'Error logging in';
            messageKey.value++;        }
    } catch (error) {
        console.error('Error:', error);
    }
    const handleClose = () => {
    dialogMessage.value = '';
};
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>