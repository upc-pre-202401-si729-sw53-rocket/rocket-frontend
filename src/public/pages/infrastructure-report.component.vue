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
          <form>
            <div class="flex flex-column pb-2 gap-2">
              <InputText id="teacherName" v-model="teacherName" aria-describedby="teacherName-help" placeholder="Teacher Name *" class="py-3"/>
            </div>
            <div class="flex flex-column pb-2 gap-2">
              <InputText id="reportInfo" v-model="reportInfo" aria-describedby="reportInfo-help" placeholder="Report Info *" class="py-3" />
            </div>
            <div class="drop-container mb-4">
              <label for="file-input" class="drop-area flex flex-column align-items-center">
                <div class="icon mb-3">
                  <i class="pi pi-upload"></i>
                </div>
                Upload image
                <input type="file" id="file-input" class="file-input mt-3">
              </label>
              <div class="preview-container">
                <img id="preview" alt="Preview" class="preview-image">
              </div>
            </div>
            <div class="flex buttons">
              <Button class="w-full justify-content-center px-8 py-3 mr-3 gray-button" @click="showModal = false">CANCEL</Button>
              <Button class="w-full justify-content-center px-8 py-3 black-button" @click="saveReport">SAVE</Button>
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
  { teacherName: 'Teacher 1', info: 'Report info 1' },
  { teacherName: 'Teacher 2', info: 'Report info 2' },
  // ...
]);

const showModal = ref(false);
const teacherName = ref('');
const reportInfo = ref('');

const saveReport = () => {
  if (teacherName.value && reportInfo.value) {
    reports.value.push({ teacherName: teacherName.value, info: reportInfo.value });
    teacherName.value = '';
    reportInfo.value = '';
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
  margin: 4px 2px;
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
  margin-bottom: 20px; /* Cambiado de -200px a 20px */
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
}

.edit-icon {
  font-size: 24px;
  margin-left: auto;
}

.drop-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed #ddd;
  padding: 10px;
  border-radius: 5px;
}

.icon {
  font-size: 24px;
}

.file-input {
  display: none;
}

.preview-container {
  margin-top: 10px;
}

.preview-image {
  max-width: 100%;
  height: auto;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.gray-button {
  background-color: gray;
}

.black-button {
  background-color: black;
  color: white;
}
</style>
