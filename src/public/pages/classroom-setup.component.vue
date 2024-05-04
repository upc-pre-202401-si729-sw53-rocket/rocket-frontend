<script>
import apiService from '../../shared/services/api.service.js';
import { ref, onMounted } from "vue";
const visibleDelete = ref(false);

export default {
    data() {
    return {
        classrooms: [],
            showForm: false,
            newClassroom: {
                section: '',
                classNumber: '',
                capacity: '',
                'number-students': ''
            }    };
  },
  methods: {
    fetchData() {
    apiService.getClassrooms()
        .then(response => {
            this.classrooms = response.data.map(classroom => ({
                ...classroom,
                editing: false,
                section: classroom.section,
                classNumber: classroom.classNumber,
                capacity: classroom.capacity,
                'number-students': classroom['number-students']
            }));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
},
        // Asegúrate de implementar estos métodos
        addNewClassroom() {            this.showForm = false;
},
        editStudent(data) {
            data.editing = true;
        },
        deleteClassroom(data) {},
    },
    mounted() {
        this.fetchData();
    },};
</script>

<template>
 <div class="content">
    <div>
        <h1>List of Classroom</h1>
        <Button @click="showForm = true">Add Classroom</Button>
        <Dialog :visible.sync="showForm" header="Add Classroom">
            <form @submit.prevent="addNewClassroom">
                <!-- Aquí puedes agregar los campos de tu formulario -->
                <InputText v-model="newClassroom.section" placeholder="Section" />
                <InputText v-model="newClassroom.classNumber" placeholder="Classroom" />
                <InputText v-model="newClassroom.capacity" placeholder="Capacity" />
                <InputText v-model="newClassroom['number-students']" placeholder="Enrolled students" />
                <Button type="button" label="Cancel" @click="showForm = false"></Button>
                <Button type="submit" label="Save"></Button>
            </form>
        </Dialog>
        <DataTable :value="classrooms" tableStyle="min-width: 50rem">
    <Column field="section" header="Section">
        <template #body="slotProps">
            <span>{{ slotProps.data.section }}</span>
        </template>
    </Column>
    <Column field="classNumber" header="Classroom">
        <template #body="slotProps">
            <span>{{ slotProps.data.classNumber }}</span>
        </template>
    </Column>
    <Column field="capacity" header="Capacity">
        <template #body="slotProps">
            <span>{{ slotProps.data.capacity }}</span>
        </template>
    </Column>
    <Column field="number-students" header="Enrolled students">
        <template #body="slotProps">
            <span>{{ slotProps.data['number-students'] }}</span>
        </template>
    </Column>
    <Column header="Actions">
        <template #body="slotProps">
            <div>
                <Button label="Edit Student" @click="editStudent(slotProps.data)" />
            </div>
        </template>
    </Column>
    <Column header="Operations" :style="{ 'width': '15%' }">
        <template #body="slotProps">
            <div>
                <i class="pi pi-trash" @click="visibleDelete = true" />
            </div>
        </template>
    </Column>
</DataTable>
    </div>
</div>
</template>
<style scoped>
.content {
    margin-left: 60px; /* Ajusta este valor a lo que necesites */
}
</style>
