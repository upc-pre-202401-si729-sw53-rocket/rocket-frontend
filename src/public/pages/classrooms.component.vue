<script>
import apiService from '../../shared/services/api.service.js';

export default {
  data() {
    return {
      classrooms: null,
    };
  },
  methods: {
    fetchData() {
      apiService.getClassrooms()
          .then(response => {this.classrooms = response.data;})
          .catch(error => {console.error('Error fetching data:', error);});
    }
  },
  mounted() {this.fetchData();}
}
</script>

<template>
  <section class="flex pl-8 w-full">
    <Card v-for="(classroom, index) in classrooms" :key="index" class="mt-6 mr-4 border-round-2xl">
      <template #header>
        <img :src="classroom.image" alt="classroom" class="image border-round-top-2xl"/>
      </template>
      <template #title>{{ classroom.name }}</template>
      <template #subtitle>{{ classroom['number-students'] }} students in this group</template>
      <template #content>
        <Button class="ml-8 mr-2">Grade</Button>
        <Button>Attendance</Button>
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
</style>