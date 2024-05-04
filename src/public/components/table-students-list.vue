<script setup>
import apiService from "../../shared/services/api.service.js";
import { ref, onMounted } from "vue";

const visibleAddStudent = ref(false);
const visibleEdit = ref(false);
const visibleDelete = ref(false);
const studentsList = ref(null);

const fetchData = () => {
  apiService.getStudentsList()
      .then(response => {
        studentsList.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visibleAddStudent" modal header="Facility" :style="{ width: '30vw' }">
      <form>
        <section class="flex justify-content-between">
          <div class="flex flex-column pb-2 gap-2">
            <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Name *" class="py-3"/>
          </div>
          <div class="flex flex-column pb-2 gap-2">
            <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="State *" class="py-3"/>
          </div>
        </section>
        <section class="flex justify-content-between">
          <div class="flex flex-column pb-2 gap-2">
            <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Period *" class="py-3"/>
          </div>
          <div class="flex flex-column pb-2 gap-2">
            <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Budget *" class="py-3"/>
          </div>
        </section>
        <section class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Description *" class="py-3"/>
        </section>
        <section class="flex justify-content-end mt-3">
          <div>
            <Button label="CANCEL" class="px-6 py-3 mr-2 button-gray"/>
            <Button label="SAVE" class="px-6 py-3"/>
          </div>
        </section>
      </form>
    </Dialog>
    <Dialog v-model:visible="visibleDelete" modal header="Remove student" :style="{ width: '30vw' }">
      <form>
        <section class="flex justify-content-between">
          <p class="m-0">
            Are you sure you want to delete this student? (this action is irreversible)
          </p>
        </section>
        <section class="flex justify-content-end mt-3">
          <div>
            <Button label="CANCEL" class="px-6 py-3 mr-2 button-gray"/>
            <Button label="REMOVE" class="px-6 py-3"/>
          </div>
        </section>
      </form>
    </Dialog>
  </div>
  <section class="table">
    <section>
      <h1>Students List</h1>
    </section>
    <section class="my-4">
      <section class="flex justify-content-between w-full">
        <div class="flex align-items-center">
          <span class="mr-3">Search</span>
          <section class="pb-2 gap-2">
            <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Write something here" class="py-2 pr-8"/>
          </section>
        </div>
        <Button label="ADD STUDENTS" @click="" class="px-4"/>
      </section>
    </section>
    <article>
      <DataTable :value="studentsList" tableStyle="min-width: 50rem">
        <Column field="name" header="Student name" :style="{ 'width': '30%' }"></Column>
        <Column field="code" header="Student code" :style="{ 'width': '30%' }"></Column>
        <Column header="Errolled status" :style="{ 'width': '15%' }">
          <template #body="row">
            <div class="card flex justify-content-center align-items-center">
              <Checkbox v-model="checked" :binary="true" />
            </div>
          </template>
        </Column>
        <Column header="Operations" :style="{ 'width': '15%' }">
          <template #body="row">
            <div class="flex justify-content-evenly">
              <i class="pi pi-trash" @click="visibleDelete = true" />
              <i class="pi pi-pencil" @click="" />
            </div>
          </template>
        </Column>
      </DataTable>
    </article>
  </section>
</template>

<style scoped>
.button-gray {
  background-color: white;
  color: gray;
  border: gray solid 1px
}

.table {
  width: 50vw;
  margin: auto
}
</style>