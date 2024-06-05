<template>
  <Sidebar />
  <div class="report-list-container">
    <TabView>
      <TabPanel header="Infrastructure Reports">
        <h1 class="title">List of Infrastructure Reports</h1>
        <DataTable :value="reports" class="datatable">
          <Column field="id" header="Report Id" />
          <Column field="description" header="Description" />
          <Column field="date" header="Date" />
          <Column field="state" header="State" />
          <Column header="Operations">
            <template #body="slotProps">
              <Button icon="pi pi-eye" class="black-icon" @click="viewReport(slotProps.data)" />
              <Button icon="pi pi-trash" class="red-icon" @click="confirmDeleteReport(slotProps.data)" />
            </template>
          </Column>
        </DataTable>
        <Dialog :visible="dialogVisible" :modal="true" :closable="true" class="custom-dialog" @hide="hideDialog">
          <template v-if="selectedReport">
            <h2>{{ selectedReport.id }}</h2>
            <p><strong>Teacher code:</strong> {{ selectedReport.teacherCode }}</p>
            <p><strong>Date:</strong> {{ selectedReport.date }}</p>
            <p><strong>Description:</strong> {{ selectedReport.description }}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoKdffIuPPLMdCqWtJWKlqQM14r7y0jgeew&s" alt="Report Image" class="report-image" />
            <div>
              <label for="state">State:</label>
              <Dropdown v-model="selectedReport.state" :options="states" placeholder="Select a State" />
            </div>
            <div class="dialog-footer">
              <Button label="Cancel" icon="pi pi-times" @click="hideDialog" />
              <Button label="Save" icon="pi pi-check" @click="saveReport" />
            </div>
          </template>
        </Dialog>
        <Dialog :visible="deleteDialogVisible" :modal="true" :closable="true" class="custom-dialog" @hide="hideDeleteDialog">
          <template v-if="reportToDelete">
            <h2>Remove report {{ reportToDelete.id }}</h2>
            <p>Are you sure you want to remove this report? This action is irreversible.</p>
            <div class="dialog-footer">
              <Button label="Cancel" icon="pi pi-times" @click="hideDeleteDialog" />
              <Button label="Remove" icon="pi pi-check" class="red-icon" @click="deleteReport" />
            </div>
          </template>
        </Dialog>
      </TabPanel>
      <TabPanel header="Departures Reports">
        <h1 class="title">List of Departures Reports</h1>
        <div class="search-container">
          <label for="search" class="search-label">Search Students:</label>
          <input id="search" type="text" v-model="searchQuery" placeholder="Enter student name or code..." class="search-input" @input="filterStudents" />
          <ul v-if="filteredStudents.length" class="search-dropdown">
            <li v-for="student in filteredStudents" :key="student.code" @click="selectStudent(student)">
              <strong>{{ student.name }}</strong><br />
              <small class="student-code">{{ student.code }}</small>
            </li>
          </ul>
        </div>
        <DataTable :value="filteredReports" class="datatable">
          <Column field="id" header="Report Id" />
          <Column field="studentCode" header="Student Code" />
          <Column field="teacherCode" header="Teacher Code" />
          <Column field="description" header="Description" />
          <Column field="date" header="Date" />
        </DataTable>
        <Dialog :visible="dialogVisible" :modal="true" :closable="true" class="custom-dialog" @hide="hideDialog">
          <template v-if="selectedReport">
            <h2>{{ selectedReport.id }}</h2>
            <p><strong>Teacher code:</strong> {{ selectedReport.teacherCode }}</p>
            <p><strong>Date:</strong> {{ selectedReport.date }}</p>
            <p><strong>Description:</strong> {{ selectedReport.description }}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoKdffIuPPLMdCqWtJWKlqQM14r7y0jgeew&s" alt="Report Image" class="report-image" />
            <div>
              <label for="state">State:</label>
              <Dropdown v-model="selectedReport.state" :options="states" placeholder="Select a State" />
            </div>
            <div class="dialog-footer">
              <Button label="Cancel" icon="pi pi-times" @click="hideDialog" />
              <Button label="Save" icon="pi pi-check" @click="saveReport" />
            </div>
          </template>
        </Dialog>
        <Dialog :visible="deleteDialogVisible" :modal="true" :closable="true" class="custom-dialog" @hide="hideDeleteDialog">
          <template v-if="reportToDelete">
            <h2>Remove report {{ reportToDelete.id }}</h2>
            <p>Are you sure you want to remove this report? This action is irreversible.</p>
            <div class="dialog-footer">
              <Button label="Cancel" icon="pi pi-times" @click="hideDeleteDialog" />
              <Button label="Remove" icon="pi pi-check" class="red-icon" @click="deleteReport" />
            </div>
          </template>
        </Dialog>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Sidebar from "@/public/components/sidebar.component.vue";
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

const reports = ref([
  { id: 'Report007', teacherCode: 'U202218243', description: 'There is an issue with the teacher desk in the classroom G11A.', date: '28.Jan.2021', state: 'Not attended', imageUrl: 'path/to/image1.jpg' },
  { id: 'Report001', teacherCode: 'U202218244', description: 'is simply dummy text of the printing and en boo...', date: '21.Jun.2021', state: 'Attended', imageUrl: 'path/to/image2.jpg' },
  { id: 'Report002', teacherCode: 'U202218245', description: 'is simply dummy text of the printing and en boo...', date: '9.Jan.2021', state: 'Attended', imageUrl: 'path/to/image3.jpg' },
  { id: 'Report003', teacherCode: 'U202218246', description: 'is simply dummy text of the printing and en boo...', date: '12.Mar.2021', state: 'Attended', imageUrl: 'path/to/image4.jpg' },
  { id: 'Report004', teacherCode: 'U202218247', description: 'is simply dummy text of the printing and en boo...', date: '21.Jun.2021', state: 'Attended', imageUrl: 'path/to/image5.jpg' },
  { id: 'Report005', teacherCode: 'U202218248', description: 'is simply dummy text of the printing and en boo...', date: '9.Jan.2021', state: 'Attended', imageUrl: 'path/to/image6.jpg' },
  { id: 'Report006', teacherCode: 'U202218249', description: 'is simply dummy text of the printing and en boo...', date: '12.Mar.2021', state: 'Attended', imageUrl: 'path/to/image7.jpg' },
]);

const departuresReports = ref([
  { id: 'ReportA001', studentCode: 'S202218251', teacherCode: 'U202218251', description: 'Medical appointment.', date: '15.Jul.2021', state: 'Pending', imageUrl: 'path/to/imageA1.jpg' },
  { id: 'ReportA002', studentCode: 'S202218252', teacherCode: 'U202218252', description: 'Justification of Abscence due to travel.', date: '22.Aug.2021', state: 'Resolved', imageUrl: 'path/to/imageA2.jpg' },
    { id: 'ReportA003', studentCode: 'S202218252', teacherCode: 'U202218252', description: 'Dental Appointment.', date: '22.Aug.2021', state: 'Resolved', imageUrl: 'path/to/imageA2.jpg' },
      { id: 'ReportA004', studentCode: 'S202218252', teacherCode: 'U202218252', description: 'Mewdical Appointment.', date: '22.Aug.2021', state: 'Resolved', imageUrl: 'path/to/imageA2.jpg' },
        { id: 'ReportA005', studentCode: 'S202218252', teacherCode: 'U202218252', description: 'Dental appointment.', date: '22.Aug.2021', state: 'Resolved', imageUrl: 'path/to/imageA2.jpg' },
          { id: 'ReportA006', studentCode: 'S202218252', teacherCode: 'U202218252', description: 'JUstification of Absence due to travel.', date: '22.Aug.2021', state: 'Resolved', imageUrl: 'path/to/imageA2.jpg' },
            { id: 'ReportA007', studentCode: 'S202218252', teacherCode: 'U202218252', description: 'Dental appointment.', date: '22.Aug.2021', state: 'Resolved', imageUrl: 'path/to/imageA2.jpg' },
]);

const students = ref([
  { name: 'John Doe', code: 'S202218251' },
  { name: 'Jane Smith', code: 'S202218252' },
  { name: 'Alice Johnson', code: 'S202218253' },
  // Add more students as needed
]);

let dialogVisible = ref(false);
let selectedReport = ref(null);
let states = ref(['Not attended', 'Attended']);
let deleteDialogVisible = ref(false);
let reportToDelete = ref(null);

const searchQuery = ref('');
const filteredStudents = ref([]);

const filterStudents = () => {
  if (searchQuery.value.length > 0) {
    filteredStudents.value = students.value.filter(student =>
      student.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      student.code.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else {
    filteredStudents.value = [];
  }
};

const selectStudent = (student) => {
  searchQuery.value = `${student.name} (${student.code})`;
  filteredStudents.value = [];
};

const filteredReports = computed(() => {
  if (searchQuery.value.includes('(')) {
    const selectedStudentCode = searchQuery.value.split('(')[1].replace(')', '');
    return departuresReports.value.filter(report => report.studentCode === selectedStudentCode);
  }
  return departuresReports.value;
});

const viewReport = (report) => {
  selectedReport.value = report;
  dialogVisible.value = true;
};

const hideDialog = () => {
  dialogVisible.value = false;
};

const confirmDeleteReport = (report) => {
  reportToDelete.value = report;
  deleteDialogVisible.value = true;
};

const hideDeleteDialog = () => {
  deleteDialogVisible.value = false;
};

const deleteReport = () => {
  const index = departuresReports.value.findIndex(r => r.id === reportToDelete.value.id);
  if (index !== -1) {
    departuresReports.value.splice(index, 1);
  }
  hideDeleteDialog();
};

const saveReport = () => {
  // Implement your save logic here
  hideDialog();
};
</script>

<style scoped>
.report-list-container {
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.search-label {
  font-weight: bold;
}

.search-input {
  flex: 1;
  padding: 5px;
}

.search-dropdown {
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  border: 1px solid #ccc;
  position: absolute;
  width: calc(100% - 200px);
  z-index: 10;
}

.search-dropdown li {
  padding: 10px;
  cursor: pointer;
}

.search-dropdown li:hover {
  background: #f0f0f0;
}

.student-code {
  color: #999;
}

.datatable {
  width: 100%;
}

.flex {
  display: flex;
  align-items: center;
}

.gap-2 {
  gap: 0.5rem;
}

.report-image {
  width: 100%;
  height: 210px;
  object-fit: contain;
}

.p-dropdown-items .p-dropdown-item {
  color: black;
  background-color: white;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.dialog-footer button {
  margin-left: 10px;
}

.custom-dialog .p-dialog-header .p-dialog-header-icons .p-dialog-header-close {
  position: absolute;
  top: 0;
  left: 0;
}
.modern-search {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 10px 30px;
  border-radius: 20px;
  border: 1px solid #ccc;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #ccc;
}
</style>
