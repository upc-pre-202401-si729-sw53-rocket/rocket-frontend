<template>
  <Sidebar />

  <div class="flex">

    <section class="flex flex-col pl-8 w-full">
      <div class="header mb-4">
        <h1 class="text-2xl font-bold">Reports</h1>
      </div>

      <div class="reports-container">
        <div v-for="(report, index) in reports" :key="index" class="report-card mt-6 mr-4 p-4 border rounded-lg shadow-sm">
          <div class="flex justify-between items-center mb-2">
            <h2 class="font-bold">{{ report.teacherName }}</h2>
            <i class="pi pi-pen-to-square edit-icon cursor-pointer"></i>
          </div>
          <p>{{ report.info }}</p>
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <button class="add-report-button" @click="showModal = true">Add New Report</button>
      </div>

      <Dialog v-model:visible="showModal" :modal="true" :closable="false" :draggable="false">
        <template #header>
          <h2>ADD NEW REPORT</h2>
        </template>
        <template #default>
          <form class="add-report-form">
            <div class="input-group">
              <label for="teacherCode">Teacher code</label>
              <InputText id="teacherCode" v-model="teacherCode" aria-describedby="teacherCode-help" class="input-field" />
            </div>
            <div class="input-group">
              <label for="studentCode">Student code</label>
              <InputText id="studentCode" v-model="studentCode" aria-describedby="studentCode-help" class="input-field" />
            </div>
            <div class="input-group">
              <label for="description">Description</label>
              <InputText id="description" v-model="description" aria-describedby="description-help" class="input-field" />
            </div>
            <div class="flex buttons">
              <Button class="w-full justify-content-center px-8 py-3 mr-3 gray-button" @click="showModal = false">CANCEL</Button>
              <Button class="w-full justify-content-center px-8 py-3 green-button" @click="saveReport">SAVE</Button>
            </div>
          </form>
        </template>
      </Dialog>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from "@/public/components/sidebar.component.vue";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const reports = ref([
  { teacherName: 'Teacher 1', info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

  { teacherName: 'Teacher 2', info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

]);

const showModal = ref(false);
const teacherCode = ref('');
const studentCode = ref('');
const description = ref('');

const saveReport = () => {
  if (teacherCode.value && studentCode.value && description.value) {
    reports.value.push({
      teacherName: teacherCode.value,
      info: `${studentCode.value}: ${description.value}`
    });
    teacherCode.value = '';
    studentCode.value = '';
    description.value = '';
    showModal.value = false;
  } else {
    alert('Please fill in all required fields.');
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: -300px;
}

.add-report-button {
  height: 40px;
  padding: 0 20px;
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 6px 100px;
  cursor: pointer;
  margin-left: 500px;

}

.reports-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: auto;
  margin-left: 50px;
}

.report-card {
  flex: 1 0 100%;
  max-width: 200%;
  margin-bottom: 20px; 
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
}

.edit-icon {
  font-size: 24px;
  margin-left: auto;
}

.add-report-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.input-field {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.gray-button {
  background-color: gray;
}

.green-button {
  background-color: #4CAF50;
  color: white;
}
</style>
