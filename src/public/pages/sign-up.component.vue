signup
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const schoolName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const options = ref(['As a school', 'As a teacher']);
const selectedOption = ref(options.value[0]);
const dialogMessage = ref('');

const handleRegister = async () => {
  if (!schoolName.value || !email.value || !password.value || !confirmPassword.value || !selectedOption.value) {
        dialogMessage.value = 'Please fill in all fields';
        messageKey.value++;
        return;
    }

    if (password.value !== confirmPassword.value) {
        dialogMessage.value = 'Passwords do not match';
        messageKey.value++;
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/users', {
            username: email.value,
            password: password.value,
            schoolName: schoolName.value,
            type: selectedOption.value.value // Use the 'value' property of the selected option
        });

        if (response.status === 201) {
            router.push('/classroom'); // Redirige a '/classroom'
        } else {
            dialogMessage.value = 'Error creating account';
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
    <article class="w-50 my-4 sm:my-4 ml-4 sm:ml-8">
      <div class="my-4">
        <span class="inline-flex items-center gap-2">
          <span class="font-bold text-xl font-italic text-primary">ROCKETNOTES</span>
        </span>
      </div>

      <div class="flex gap-2 mb-4">
        <span class="font-bold text-sm">Signup</span>
      </div>
      <SelectButton v-model="selectedOption" :options="options" aria-labelledby="basic" class="mb-4"/>
      <form>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="schoolName" v-model="schoolName" aria-describedby="schoolName-help" placeholder="School name *" class="py-3"/>
        </div>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="email" v-model="email" aria-describedby="email-help" placeholder="Email address *" class="py-3" />
        </div>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="password" v-model="password" aria-describedby="password-help" placeholder="Password *" type="password" class="py-3" />
        </div>
        <div class="flex flex-column pb-5 gap-2">
          <InputText id="confirmPassword" v-model="confirmPassword" aria-describedby="confirmPassword-help" placeholder="Confirm your password *" type="password" class="py-3" />
        </div>
        <Button class="w-full justify-content-center px-5 py-3 mb-2" @click="handleRegister">CREATE A NEW ACCOUNT</Button>
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