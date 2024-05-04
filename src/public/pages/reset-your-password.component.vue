resetyourpassword
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const dialogMessage = ref('');
const messageKey = ref(0);

const handleResetPassword = async () => {
  if (!username.value || !newPassword.value || !confirmPassword.value) {
    dialogMessage.value = 'Please fill in all fields';
    messageKey.value++;
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    dialogMessage.value = 'Passwords do not match';
    messageKey.value++;
    return;
  }

  try {
    const response = await axios.post('http://localhost:3000/reset-password', {
      username: username.value,
      password: newPassword.value
    });

    if (response.status === 200) {
      dialogMessage.value = 'Password reset successful';
      messageKey.value++;
    } else {
      dialogMessage.value = 'Error resetting password';
      messageKey.value++;
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const handleClose = () => {
  dialogMessage.value = '';
};
</script>

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
        <span class="font-bold text-sm">Reset your password right now (this action is reversible)</span>
      </div>
      <form @submit.prevent="handleResetPassword">
      <div class="flex flex-column pb-2 gap-2">
        <InputText id="username" v-model="username" aria-describedby="username-help" placeholder="Username *" class="py-3"/>
        <InputText id="newPassword" v-model="newPassword" aria-describedby="newPassword-help" placeholder="New password *" class="py-3"/>
        <InputText id="confirmPassword" v-model="confirmPassword" aria-describedby="confirmPassword-help" placeholder="Retry new password *" type="password" class="py-3" />
      </div>
        <div class="flex justify-content-between my-3">
          <Button class="px-6 py-3 mr-4">RESET</Button>
        </div>
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
.black-button {
  background-color: #000;
  color: #fff;
  border: none;
}
</style>