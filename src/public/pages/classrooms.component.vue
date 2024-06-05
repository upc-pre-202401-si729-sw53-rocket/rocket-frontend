<script>
import apiService from '../../shared/services/api.service.js';
import Sidebar from "@/public/components/sidebar.component.vue";

export default {
  components: {Sidebar},
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
  <Sidebar />
  <section class="flex pl-8 w-full">
    <div class="classrooms-container">
    <Card v-for="(classroom, index) in classrooms" :key="index" class="mt-6 mr-4 border-round-2xl">
      <template #header>
        <img :src="classroom.image" alt="classroom" class="image border-round-top-2xl"/>
      </template>
      <template #title>{{ classroom.name }}</template>
      <template #subtitle>{{ classroom['number-students'] }} students in this group</template>
      <template #content>
        <div class="flex justify-content-end">
          <router-link to="/admin/classroom">
            <Button class ="px-4" label="View"></Button>
          </router-link>
        </div>
      </template>
    </Card>
  </div>
  </section>
</template>

<style scoped>
.classrooms-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
}

.classroom-card {
  flex: 1 0 20%; 
  max-width: 20%; 
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>