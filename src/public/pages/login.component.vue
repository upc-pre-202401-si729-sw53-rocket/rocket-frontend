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
        <span class="font-bold text-sm">LOGIN</span>
      </div>
      <form>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Email address *" class="py-3"/>
        </div>
        <div class="flex flex-column gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Password *" class="py-3" />
        </div>
        <div class="flex justify-content-between my-3">
          <Button class="px-6 py-3 mr-4">LOGIN</Button>
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

<style scoped>
a {
  text-decoration: none;
}
</style>