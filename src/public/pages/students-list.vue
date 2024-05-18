<script setup>
import TableStudentsList from "@/public/components/table-students-list.vue";
import Sidebar from "@/public/components/sidebar.component.vue";
</script>

<template>
  <Sidebar />
  <section class="card mx-8 px-8 py-4">
    <table-students-list></table-students-list>
  </section>
</template>

<style scoped>

</style>