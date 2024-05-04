<template>
    <div class="content">
       <div>
           <h1>List of Classroom</h1>
           <Button @click="showForm = true">Add Classroom</Button>
           <Dialog :visible.sync="showForm" header="Add Classroom">
               <form @submit.prevent="addNewClassroom">
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
                       <InputText v-if="slotProps.data.editing" v-model="slotProps.data.section" placeholder="Section" />
                       <span v-else>{{ slotProps.data.section }}</span>
                   </template>
               </Column>
               <Column field="classNumber" header="Classroom">
                   <template #body="slotProps">
                       <InputText v-if="slotProps.data.editing" v-model="slotProps.data.classNumber" placeholder="Classroom" />
                       <span v-else>{{ slotProps.data.classNumber }}</span>
                   </template>
               </Column>
               <Column field="capacity" header="Capacity">
                   <template #body="slotProps">
                       <InputText v-if="slotProps.data.editing" v-model="slotProps.data.capacity" placeholder="Capacity" />
                       <span v-else>{{ slotProps.data.capacity }}</span>
                   </template>
               </Column>
               <Column field="number-students" header="Enrolled students">
                   <template #body="slotProps">
                       <InputText v-if="slotProps.data.editing" v-model="slotProps.data['number-students']" placeholder="Enrolled students" />
                       <span v-else>{{ slotProps.data['number-students'] }}</span>
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
                        <i class="pi pi-trash" @click="requireConfirmation(slotProps.data)" />
                    </div>
                </template>
            </Column>
           </DataTable>
       </div>
       <ConfirmDialog group="headless">
           <template #container="{ message, acceptCallback, rejectCallback }">
               <div class="flex flex-column align-items-center p-5 surface-overlay border-round">
                   <div class="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                       <i class="pi pi-question text-5xl"></i>
                   </div>
                   <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
                   <p class="mb-0">{{ message.message }}</p>
                   <div class="flex align-items-center gap-2 mt-4">
                       <Button label="Delete" @click="acceptCallback" class="w-8rem"></Button>
                       <Button label="Cancel" outlined @click="rejectCallback" class="w-8rem"></Button>
                   </div>
               </div>
           </template>
       </ConfirmDialog>
   </div>
   </template>
   
   <script>
   import apiService from '../../shared/services/api.service.js';
   import { ref, onMounted } from "vue";
   import { useConfirm } from 'primevue/useconfirm';

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
           addNewClassroom() { this.showForm = false; },
           editStudent(data) { data.editing = !data.editing; },
           deleteClassroom(data) {},
           requireConfirmation(data) {
            this.$confirm.require({
                message: 'Are you sure you want to delete this classroom?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => this.deleteClassroom(data),
                reject: null
            });
        },
       },
       mounted() {
           this.fetchData();
       },
   };
   </script>
   
   <style scoped>
   .content {
       margin-left: 60px; 
   }
   </style>