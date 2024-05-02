<script setup>

</script>

<template>
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
      <form>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="New password *" class="py-3"/>
        </div>
        <div class="flex flex-column gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Retry new password *" type="password" class="py-3" />
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