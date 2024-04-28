<script setup>

</script>

<template>
  <section class="flex flex-column items-center pb-8 mb-4 overflow-hidden">
    <section class="flex flex-column items-center min-w-80 sm:w-1/4 p-6 rounded-lg z-10">
      <section class="flex px-8 sm:px-32 mx-auto">
        <h3 class="black-color mb-2 text-3xl sm:text-5xl font-semibold tracking-tighter text-nowrap">Subscripions</h3>
      </section>
    </section>
    <section class="flex mt-1 mx-auto">
      <section class="card flex flex-column justify-content-center align-items-center py-8 min-w-80 sm:w-1/4 px-8 py-12 border-round-xl z-10">
        <span class="black-color text-xl font-bold tracking-tighter">Basic</span>
        <span class="green-color mx-2 text-3xl sm:text-5xl font-black tracking-tighter">$12</span>
        <span class="black-color mb-4 text-lg tracking-tighter">per user, per month</span>
        <span class="pricing__card--white w-full py-3 text-xl text-center font-bold tracking-tighter">Get subscription</span>
        <ul class="flex flex-column items-center mt-4">
          <li class="black-color mb-1 text-lg font-semibold opacity-75 tracking-tighter">+50 students</li>
          <li class="black-color mb-1 text-lg opacity-50 tracking-tighter">Offline access</li>
          <li class="black-color mb-1 text-lg opacity-50 tracking-tighter">Updates and new features</li>
          <li class="black-color mb-1 text-lg opacity-50 tracking-tighter">24/7 VIP Support</li>
        </ul>
      </section>
      <section class="card flex flex-column justify-content-center align-items-center principal-card min-w-80 sm:w-1/4 px-8 py-12 border-round-xl z-30">
        <span class="black-color text-xl font-bold tracking-tighter">Premium</span>
        <span class="green-color mx-2 text-3xl sm:text-5xl font-black tracking-tighter">$12</span>
        <span class="black-color mb-4 text-lg tracking-tighter">per user, per month</span>
        <span class="pricing__card--green w-full py-3 text-xl text-center font-bold tracking-tighter">Get subscription</span>
        <ul class="flex flex-column items-center mt-4">
          <li class="black-color mb-1 text-lg font-semibold opacity-75 tracking-tighter">+50 students</li>
          <li class="black-color mb-1 text-lg font-semibold opacity-75 tracking-tighter">Offline access</li>
          <li class="black-color mb-1 text-lg font-semibold opacity-75 tracking-tighter">Updates and new features</li>
          <li class="black-color mb-1 text-lg font-semibold opacity-75 tracking-tighter">24/7 VIP Support</li>
        </ul>
      </section>
      <section class="card flex flex-column justify-content-center align-items-center min-w-80 sm:w-1/4 px-8 py-12 border-round-xl z-10">
        <span class="black-color text-xl font-bold tracking-tighter">Expert</span>
        <span class="green-color mx-2 text-3xl sm:text-5xl font-black tracking-tighter">$12</span>
        <span class="black-color mb-4 text-lg tracking-tighter">per user, per month</span>
        <span class="pricing__card--white w-full py-3 text-xl text-center font-bold tracking-tighter">Get subscription</span>
        <ul class="flex flex-column items-center mt-4">
          <li class="black-color mb-1 text-lg font-semibold opacity-75 tracking-tighter">+50 students</li>
          <li class="black-color mb-1 text-lg font-semibold opacity-75 tracking-tighter">Offline access</li>
          <li class="black-color mb-1 text-lg font-semibold opacity-75 tracking-tighter">Updates and new features</li>
          <li class="black-color mb-1 text-lg opacity-50 tracking-tighter">24/7 VIP Support</li>
        </ul>
      </section>
    </section>
  </section>
</template>

<style scoped>


:root {
  --green-color: #1EC089;
  --black-color: #595959;
}


.black-color {
  color: var(--black-color);
}

.green-color {
  color: var(--green-color);
}

.card {
  border: solid 1px rgb(214, 214, 214);
}

.principal-card {
  scale: 1.1;
  background-color: white;
}

.pricing__card--green {
  background-color: #1EC089;
  color: white;
  border: solid 2px transparent;
}

.pricing__card--green:hover {
  background-color: white;
  color: #1EC089;
  border: solid 2px #1EC089;
  transition: ease-out 0.2s;
}

.pricing__card--white {
  background-color: white;
  color: #1EC089;
  border: solid 2px #1EC089;
}

.pricing__card--white:hover {
  background-color: #1EC089;
  color: white;
  transition: ease-out 0.2s;
}
</style>