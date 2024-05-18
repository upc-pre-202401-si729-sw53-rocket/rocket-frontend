<script setup>
import CourseComponent from "@/public/components/course.component.vue";
import Sidebar from "@/public/components/sidebar.component.vue";
import { ref, onMounted } from "vue";
const visibleCourse = ref(false);

const selectedSchedulesStart = ref();
const schedulesStart = ref([
  { name: '07:00', code: '' },
  { name: '08:00', code: '' },
  { name: '09:00', code: '' },
  { name: '10:00', code: '' },
  { name: '11:00', code: '' },
  { name: '12:00', code: '' },
  { name: '13:00', code: '' },
  { name: '14:00', code: '' }
]);

const selectedSchedulesEnd = ref();
const schedulesEnd = ref([
  { name: '08:00', code: '' },
  { name: '09:00', code: '' },
  { name: '10:00', code: '' },
  { name: '11:00', code: '' },
  { name: '12:00', code: '' },
  { name: '13:00', code: '' },
  { name: '14:00', code: '' }
]);

const selectedDays = ref();
const days = ref([
  { name: 'Monday', code: '' },
  { name: 'Tuesday', code: '' },
  { name: 'Wednesday', code: '' },
  { name: 'Thursday', code: '' },
  { name: 'Friday', code: '' },
  { name: 'Saturday', code: '' },
  { name: 'Sunday', code: '' }
]);
</script>

<template>
  <Sidebar />
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visibleCourse" modal header="Create a course" :style="{ width: '30vw' }">
      <form>
        <section class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Room" class="py-3"/>
        </section>
        <section class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Course" class="py-3"/>
        </section>
        <section class="flex w-full pb-2 gap-2 justify-content-between">
          <div class="schedule">
            <Dropdown v-model="selectedSchedulesStart" :options="schedulesStart" optionLabel="name" placeholder="Start" class="w-full py-2" />
          </div>
          <div class="schedule">
            <Dropdown v-model="selectedSchedulesEnd" :options="schedulesEnd" optionLabel="name" placeholder="End" class="w-full py-2" />
          </div>
        </section>
        <section class="flex flex-column pb-2 gap-2">
          <MultiSelect v-model="selectedDays" :options="days" optionLabel="name" placeholder="Days" :maxSelectedLabels="3" class="w-full py-2" />
        </section>
        <section class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Teacher" class="py-3"/>
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
  <section class="flex flex-column px-8 pt-4 w-full">
    <article class="flex justify-content-between align-items-center">
      <h1>Couses from the Classroom</h1>
      <div>
        <Button label="ADD A NEW" @click="visibleCourse = true" class="px-4"/>
      </div>
    </article>
    <article>
      <course-component></course-component>
    </article>
  </section>
</template>

<style scoped>
.schedule {
  width: 50%
}

.button-gray {
  background-color: white;
  color: gray;
  border: gray solid 1px
}
</style>