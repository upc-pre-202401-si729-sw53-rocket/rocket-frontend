<template>
  <div>
    <Sidebar />
    <section class="flex pl-8 w-full flex-column">
      <h1>Infrastructure reports</h1>
      <div class="reports-container">
        <table class="table-auto w-full mt-4 border-collapse">
          <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Date</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="report in infrastructureReports" :key="report.idInfrastructureReport" class="border-b">
            <td class="px-4 py-2">{{ report.idInfrastructureReport }}</td>
            <td class="px-4 py-2">{{ report.description }}</td>
            <td class="px-4 py-2">{{ report.dateTime }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from "@/public/components/sidebar.component.vue";
import infrastructureReportService from '../services/infrastructure-report.service';
import axios from "axios";

const infrastructureReports = ref([]);

const showModal = ref(false);
const newReport = ref({
  idInfrastructureReport: '',
  description: '',
  dateTime: '',
  teacherId: ''
});

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
        // Reset the form
        newReport.value = {
          idInfrastructureReport: '',
          description: '',
          dateTime: '',
          teacherId: ''
        };
      })
      .catch(error => {
        console.error('Error saving report:', error);
      });
};

const closeModal = () => {
  showModal.value = false;
};

fetchReports();
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
  margin-left: 500px;
}
</style>
