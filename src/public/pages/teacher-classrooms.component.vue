<template>
  <Sidebar />
  <section class="flex pl-8 w-full">
    <template v-if="!selectedClassroom">
      <div class="classrooms-container flex">
        <Card v-for="(classroom, index) in classrooms" :key="index" class="classroom-card mt-6 mr-4 border-round-2xl">
          <template #header>
            <img :src="classroom.image" alt="classroom" class="image border-round-top-2xl" />
          </template>
          <template #title>{{ classroom.name }}</template>
          <template #subtitle>{{ classroom['number-students'] }} students in this group</template>
          <template #content>
            <Button @click="viewCourses(classroom)">View</Button>
          </template>
        </Card>
      </div>
    </template>
    <template v-else>
      <div class="courses-container mx-auto">
        <h2>Courses from the Classroom</h2>
        <DataTable :value="courses" tableStyle="min-width: 50rem">
          <Column field="idCourse" header="IdCourse" :style="{ width: '20%' }"></Column>
          <Column field="idSection" header="IdSection" :style="{ width: '20%' }"></Column>
          <Column field="name" header="Name" :style="{ width: '20%' }"></Column>
        </DataTable>
        <Button label="Add New" @click="openCourseForm" class="add-button"></Button>
        <Dialog v-model:visible="showCourseForm" header="Create a course" :modal="true">
          <form @submit.prevent="saveCourse">
            <div class="input-container">
              <label>IdCourse</label>
              <InputText v-model="newCourse.idCourse" placeholder="IdCourse" />
            </div>
            <div class="input-container">
              <label>IdSection</label>
              <InputText v-model="newCourse.idSection" placeholder="IdSection" />
            </div>
            <div class="input-container">
              <label>Name</label>
              <InputText v-model="newCourse.name" placeholder="Name" />
            </div>
            <div class="button-container">
              <Button label="Cancel" @click="closeCourseForm" />
              <Button label="Save" type="submit" />
            </div>
          </form>
        </Dialog>
      </div>
    </template>
  </section>
</template>

<script>
import { ref } from 'vue';
import apiService from '../../shared/services/api.service.js';
import Sidebar from "@/public/components/sidebar.component.vue";
import axios from 'axios';

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      classrooms: [],
      selectedClassroom: null,
      courses: [],
      showCourseForm: false,
      newCourse: {
        idCourse: '',
        idSection: '',
        name: '',
      }
    };
  },
  methods: {
    fetchData() {
      apiService.getClassrooms()
          .then(response => {
            this.classrooms = response.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    viewCourses(classroom) {
      this.selectedClassroom = classroom;
      axios.get('https://rocket-organize-backend.up.railway.app/api/courses')
          .then(response => {
            this.courses = response.data;
          })
          .catch(error => {
            console.error('Error fetching courses:', error);
          });
    },
    resetView() {
      this.selectedClassroom = null;
      this.courses = [];
    },
    openCourseForm() {
      this.showCourseForm = true;
    },
    closeCourseForm() {
      this.showCourseForm = false;
    },
    saveCourse() {
      axios.post('https://rocket-organize-backend.up.railway.app/api/courses', this.newCourse, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
          .then(() => {
            this.viewCourses(this.selectedClassroom);
            this.showCourseForm = false;
            this.newCourse = {
              idCourse: '',
              idSection: '',
              name: '',
            };
          })
          .catch(error => {
            console.error('Error saving course:', error);
          });
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style scoped>
.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.loading-indicator {
  margin-top: 20px;
  text-align: center;
}
.back-button {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.add-button {
  margin-top: 20px;
}
.courses-container {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
</style>
