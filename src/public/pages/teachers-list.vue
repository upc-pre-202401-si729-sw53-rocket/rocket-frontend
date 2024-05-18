<script setup>
import tableTeachersList from "@/public/components/table-teachers-list.vue";
import Sidebar from "@/public/components/sidebar.component.vue";
</script>

<template>
  <Sidebar />
  <section class="card mx-8 px-8 py-4">
    <table-teachers-list></table-teachers-list>
  </section>
</template>

<style scoped>

</style>