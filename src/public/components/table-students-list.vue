<template>
  <div class="card flex justify-content-center">
    <!-- Add Teacher Dialog -->
    <Dialog v-model:visible="visibleAddTeacher" modal header="Add Teacher" :style="{ width: '30vw' }">
      <form @submit.prevent="addTeacher">
        <section class="flex flex-column pb-2 gap-2">
          <InputText id="id" v-model="selectedTeacher.id" placeholder="Id *" class="py-3" />
          <InputText id="name" v-model="selectedTeacher.name" placeholder="Name *" class="py-3" />
          <InputText id="paternalSurname" v-model="selectedTeacher.paternalSurname" placeholder="Paternal Surname *" class="py-3" />
          <InputText id="maternalSurname" v-model="selectedTeacher.maternalSurname" placeholder="Maternal Surname *" class="py-3" />
          <InputText id="email" v-model="selectedTeacher.email" placeholder="Email *" class="py-3" />
          <InputText id="phone" v-model="selectedTeacher.phone" placeholder="Phone *" class="py-3" />
        </section>
        <section class="flex justify-content-end mt-3">
          <Button label="CANCEL" class="px-6 py-3 mr-2 button-gray" @click="visibleAddTeacher = false"/>
          <Button label="SAVE" class="px-6 py-3" type="submit"/>
        </section>
      </form>
    </Dialog>

    <!-- Edit Teacher Dialog -->
    <Dialog v-model:visible="visibleEdit" modal header="Edit Teacher" :style="{ width: '30vw' }">
      <form @submit.prevent="updateTeacher">
        <section class="flex flex-column pb-2 gap-2">
          <InputText id="id" v-model="selectedTeacher.id" placeholder="Id *" class="py-3" />
          <InputText id="name" v-model="selectedTeacher.name" placeholder="Name *" class="py-3" />
          <InputText id="paternalSurname" v-model="selectedTeacher.paternalSurname" placeholder="Paternal Surname *" class="py-3" />
          <InputText id="maternalSurname" v-model="selectedTeacher.maternalSurname" placeholder="Maternal Surname *" class="py-3" />
          <InputText id="email" v-model="selectedTeacher.email" placeholder="Email *" class="py-3" />
          <InputText id="phone" v-model="selectedTeacher.phone" placeholder="Phone *" class="py-3" />
        </section>
        <section class="flex justify-content-end mt-3">
          <Button label="CANCEL" class="px-6 py-3 mr-2 button-gray" @click="visibleEdit = false"/>
          <Button label="SAVE" class="px-6 py-3" type="submit"/>
        </section>
      </form>
    </Dialog>

    <!-- Delete Teacher Dialog -->
    <Dialog v-model:visible="visibleDelete" modal header="Remove Teacher" :style="{ width: '30vw' }">
      <form @submit.prevent="deleteTeacher">
        <section class="flex justify-content-between">
          <p class="m-0">
            Are you sure you want to delete this teacher? (this action is irreversible)
          </p>
        </section>
        <section class="flex justify-content-end mt-3">
          <Button label="CANCEL" class="px-6 py-3 mr-2 button-gray" @click="visibleDelete = false"/>
          <Button label="REMOVE" class="px-6 py-3" type="submit"/>
        </section>
      </form>
    </Dialog>
  </div>

  <section class="table">
    <section>
      <h1>Teachers List</h1>
    </section>

    <section class="my-4">
      <section class="flex justify-content-between w-full">
        <div class="flex align-items-center">
          <span class="mr-3">Search</span>
          <InputText id="search" v-model="searchQuery" placeholder="Write something here" class="py-2 pr-8"/>
        </div>
        <Button label="ADD TEACHER" @click="visibleAddTeacher = true" class="px-4"/>
      </section>
    </section>

    <article>
      <DataTable :value="teachersList" tableStyle="min-width: 50rem">
        <Column field="id" header="Id" :style="{ 'width': '20%' }"></Column>
        <Column field="name" header="Teacher Name" :style="{ 'width': '20%' }"></Column>
        <Column field="paternalSurname" header="Paternal Surname" :style="{ 'width': '20%' }"></Column>
        <Column field="maternalSurname" header="Maternal Surname" :style="{ 'width': '20%' }"></Column>
        <Column field="email" header="Email" :style="{ 'width': '20%' }"></Column>
        <Column field="phone" header="Phone" :style="{ 'width': '20%' }"></Column>
        <Column header="Operations" :style="{ 'width': '15%' }">
          <template #body="{ rowData }">
            <div class="flex justify-content-evenly">
              <i class="pi pi-trash" @click="deleteTeacherDialog(rowData)" />
              <i class="pi pi-pencil" @click="editTeacherDialog(rowData)" />
            </div>
          </template>
        </Column>
      </DataTable>
    </article>
  </section>
</template>

<script setup>
import { ref } from "vue";
import apiServiceTeacher from "@/public/services/teacher-api-service.js";

const visibleAddTeacher = ref(false);
const visibleEdit = ref(false);
const visibleDelete = ref(false);
const teachersList = ref([]);
const selectedTeacher = ref({
  id: "",
  name: "",
  paternalSurname: "",
  maternalSurname: "",
  email: "",
  phone: ""
});
const searchQuery = ref("");

const fetchTeachers = () => {
  apiServiceTeacher.getTeachersList()
      .then(response => {
        teachersList.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
};

const addTeacher = () => {
  const teacherData = {
    name: selectedTeacher.value.name,
    paternalSurname: selectedTeacher.value.paternalSurname,
    maternalSurname: selectedTeacher.value.maternalSurname,
    email: selectedTeacher.value.email,
    phone: selectedTeacher.value.phone
  };

  apiServiceTeacher.addTeacher(teacherData)
      .then(() => {
        fetchTeachers();
        visibleAddTeacher.value = false;
      })
      .catch(error => {
        console.error('Error adding teacher:', error);
      });
};

const updateTeacher = () => {
  const teacherData = {
    id: selectedTeacher.value.id,
    name: selectedTeacher.value.name,
    paternalSurname: selectedTeacher.value.paternalSurname,
    maternalSurname: selectedTeacher.value.maternalSurname,
    email: selectedTeacher.value.email,
    phone: selectedTeacher.value.phone
  };

  apiServiceTeacher.updateTeacher(selectedTeacher.value.id, teacherData)
      .then(() => {
        fetchTeachers();
        visibleEdit.value = false;
      })
      .catch(error => {
        console.error('Error updating teacher:', error);
      });
};

const deleteTeacher = () => {
  if (!selectedTeacher.value.id) {
    console.error('No teacher selected for deletion');
    console.error(selectedTeacher.value.id);
    return;
  }

  apiServiceTeacher.deleteTeacher(selectedTeacher.value.id)
      .then(() => {
        fetchTeachers();
        visibleDelete.value = false;
      })
      .catch(error => {
        console.error('Error deleting teacher:', error);
      });
};

const editTeacherDialog = (teacher) => {
  selectedTeacher.value = {...teacher};
  visibleEdit.value = true;
};

const deleteTeacherDialog = (teacher) => {
  console.log(teacher);
  selectedTeacher.value = {...teacher};
  visibleDelete.value = true;
};

fetchTeachers();
</script>

<style scoped>
.button-gray {
  background-color: white;
  color: gray;
  border: gray solid 1px;
}

.table {
  width: 50vw;
  margin: auto;
}
</style>