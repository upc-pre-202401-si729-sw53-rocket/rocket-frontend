<script setup>
import apiService from '../../shared/services/api.service.js';
import { ref, onMounted } from "vue";

const visibleDelete = ref(false);
const courses = ref(null);

const fetchData = () => {
  apiService.getCoursesList()
      .then(response => {
        courses.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visibleDelete" modal header="Remove a course" :style="{ width: '30vw' }">
      <form>
        <section class="flex justify-content-between">
          <p class="m-0">
            Are you sure you want to delete this course in this classroom? (this action is irreversible)
          </p>
        </section>
        <section class="flex justify-content-end mt-3">
          <div>
            <Button label="CANCEL" class="px-6 py-3 mr-2 button-gray"/>
            <Button label="REMOVE" class="px-6 py-3"/>
          </div>
        </section>
      </form>
    </Dialog>
  </div>
  <section class="flex w-full">
    <Card v-for="(classroom, index) in courses" :key="index" class="card mt-2 mr-4 border-round-2xl">
      <template #header>
        <img :src="classroom.image" alt="classroom" class="image border-round-top-2xl"/>
      </template>
      <template #title>
        <section class="flex justify-content-between">
        {{ classroom.name }}
          <i class="pi pi-trash" @click="visibleDelete = true" />
        </section>
      </template>
      <template #subtitle>{{ classroom['number-students'] }} students in this group</template>
      <template #content>
        <div class="flex justify-content-end">
          <router-link to="/classroom">
            <Button class ="px-4" label="View"></Button>
          </router-link>
        </div>
      </template>
    </Card>
  </section>
</template>

<style scoped>
.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.button-gray {
  background-color: white;
  color: gray;
  border: gray solid 1px
}
</style>