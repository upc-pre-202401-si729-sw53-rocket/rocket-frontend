<template>
  <div>
    <Sidebar />
    <section class="flex pl-8 w-full">
      <div class="reports-container">
        <table class="table-auto w-full mt-6 border-collapse">
          <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Teacher id</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="report in infrastructureReports" :key="report.idInfrastructureReport" class="border-b">
            <td class="px-4 py-2">{{ report.idInfrastructureReport }}</td>
            <td class="px-4 py-2">{{ report.description }}</td>
            <td class="px-4 py-2">{{ report.dateTime }}</td>
            <td class="px-4 py-2">{{ report.teacherId }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end mt-4">
        <Button class="add-report-button" @click="showModal = true">Add New Report</Button>
      </div>

      <Dialog v-model:visible="showModal" :modal="true" :closable="false" :draggable="false">
        <template #header>
          <h2>ADD NEW REPORT</h2>
        </template>
        <template #default>
          <form @submit.prevent="saveNewReport">
            <div v-for="(field, index) in fields" :key="index" class="flex flex-col pb-2 gap-2">
              <InputText v-model="newReport[field.model]" :placeholder="field.placeholder" class="py-3" />
            </div>
            <div class="flex buttons">
              <Button class="w-full justify-content-center px-8 py-3 mr-3 gray-button" @click="closeModal">CANCEL</Button>
              <Button class="w-full justify-content-center px-8 py-3 black-button" type="submit">SAVE</Button>
            </div>
          </form>
        </template>
      </Dialog>
    </section>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Sidebar from "@/public/components/sidebar.component.vue";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import infrastructureReportService from '../services/infrastructure-report.service';
import axios from 'axios';

const infrastructureReports = ref([]);

const showModal = ref(false);
const newReport = ref({
  idInfrastructureReport: '',
  description: '',
  dateTime: '',
  teacherId: ''
});

const fields = [
  {model: 'idInfrastructureReport', placeholder: 'ID'},
  {model: 'description', placeholder: 'Description *'},
  {model: 'dateTime', placeholder: 'Date *'},
  {model: 'teacherId', placeholder: 'Teacher Id *'}
];

const fetchReports = () => {
  infrastructureReportService.getInfrastructureReports()
      .then(response => {
        infrastructureReports.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching infrastructure reports:', error);
      });
};

const saveNewReport = () => {
  if (!newReport.value.description || !newReport.value.dateTime || !newReport.value.teacherId) {
    alert('Please fill in all required fields.');
    return;
  }
  axios.post('https://rocket-organize-backend.up.railway.app/api/infrastructure-report', newReport.value, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
      .then(response => {
        console.log('Report saved successfully:', response.data);
        fetchReports();
        closeModal();
        Object.keys(newReport.value).forEach(key => newReport.value[key] = '');
      })
      .catch(error => {
        console.error('Error saving report:', error);
      });
};

const closeModal = () => {
  showModal.value = false;
};

onMounted(fetchReports);
</script>

<style scoped>
.table-auto {
  width: 100%;
  border-collapse: collapse;
}

.table-auto th, .table-auto td {
  border: 1px solid #ddd;
  padding: 8px;
}

.table-auto th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f2f2f2;
  color: black;
}

.add-report-button {
  height: 40px;
  padding: 0 20px;
  background-color: #4CAF50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
