<script setup>
import TableFacilities from "../../public/components/table-facilities.component.vue";
import TableClassroomEquipment from "../../public/components/table-classroom-equipment.vue";
import Sidebar from "@/public/components/sidebar.component.vue";
</script>

<template>
  <Sidebar />
  <div class="card px-8 py-4">
    <TabView>
      <TabPanel header="Facilities">
        <table-facilities></table-facilities>
      </TabPanel>
      <TabPanel header="Classroom equipment">
          <table-classroom-equipment></table-classroom-equipment>
      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped>

</style>