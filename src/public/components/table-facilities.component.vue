<script setup>
import apiService from "../../shared/services/api.service.js";
import { ref, onMounted } from "vue";

const visibleAddAFacility = ref(false);
const visibleEdit = ref(false);
const visibleDelete = ref(false);
const facilitiesList = ref(null);

const fetchData = () => {
  apiService.getListFacilities()
      .then(response => {
        facilitiesList.value = response.data;
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
    <Dialog v-model:visible="visibleAddAFacility" modal header="Facility" :style="{ width: '30vw' }">
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
    <Dialog v-model:visible="visibleDelete" modal header="Remove Facility" :style="{ width: '30vw' }">
      <form>
        <section class="flex justify-content-between">
          <p class="m-0">
            Are you sure you want to delete this facility? (this action is irreversible)
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
    <Dialog v-model:visible="visibleEdit" modal header="Facility" :style="{ width: '30vw' }">
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
  </div>
  <section>
    <article class="flex justify-content-between">
      <h1>Table Facilities</h1>
        <div>
          <Button label="ADD A NEW" @click="visibleAddAFacility = true" class="px-4"/>
        </div>
    </article>
    <article>
      <DataTable :value="facilitiesList" tableStyle="min-width: 50rem">
        <Column field="name" header="Code"></Column>
        <Column field="description" header="Description" :style="{ 'width': '40%' }"></Column>
        <Column field="budget" header="Budget"></Column>
        <Column field="creation" header="Creation"></Column>
        <Column field="period" header="Period"></Column>
        <Column field="state" header="State"></Column>
        <Column header="Operations" :style="{ 'width': '5%' }">
          <template #body="row">
            <div class="flex justify-content-around">
              <i class="pi pi-pencil" @click="visibleEdit = true" />
              <i class="pi pi-trash" @click="visibleDelete = true" />
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
</style>