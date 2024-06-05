<script>
import apiService from '../../shared/services/api.service.js';
import { routerViewLocationKey } from 'vue-router';
import Sidebar from "@/public/components/sidebar.component.vue";
import { ref } from 'vue';
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      students: [],
      classrooms: null,
      selectedClassroom: null,
      courses: null,
      showAttendanceView: false,
      showGradeView: false,
      showInvalidGradeDialog: false,
      isAddingGrade: false,
      isEditing: false,
      invalidGrade: false,
      gradeColumns: 6,
      isAddingAttendance: false,
      showDeleteDialog: false,
      showCourseForm: false,
    newCourse: {
      room: '',
      name: '',
      start: '',
      end: '',
      days: '',
      teacher: '',
    }
    };
  },

  methods: {
    fetchData() {
      apiService.getClassrooms()
      .then(response => {
            this.classrooms = response.data;

            this.classrooms.forEach(classroom => {
              classroom.student.forEach(student => {
                if (!student.grades) {
                  student.grades = [];
                }

                for (let i = 0; i < 5; i++) {
                  student.grades.push(Math.floor(Math.random() * 21));
                }

                const sum = student.grades.reduce((a, b) => a + b, 0);
                const avg = sum / student.grades.length;

                student.average = avg;
              });
            });
          })
          .catch(error => {console.error('Error fetching data:', error);});
    },
    viewCourses(classroom) {
      this.selectedClassroom = classroom;
        this.courses = classroom.courses; 
        this.students = classroom.student;
    },
    resetView() {
      this.selectedClassroom = null;
      this.courses = null;
      this.showAttendanceView = false;
      this.showGradeView = false;
    },
    showAttendance() {
      this.showAttendanceView = true; 
    },
    showGrade() {
      this.showGradeView = true; 
    },
    addGrade() {
      this.isAddingGrade = true;
      this.classrooms.forEach(classroom => {
        classroom.student.forEach(student => {
          const newGrade = Math.floor(Math.random() * 21);
          student.grades.push(null);

          const sum = student.grades.reduce((a, b) => a + b, 0);
          const avg = sum / student.grades.length;
          student.average = avg;
        });
      });
      this.gradeColumns++;
    },
    saveGrades() {
      if (this.invalidGrade) {
        return;
      }
      this.isAddingGrade = false;
    },
    recalculateAverage(student, index) {
  if (student.grades[index] > 20) {
    this.showInvalidGradeDialog = true;
    this.invalidGrade = true;
        return;  }
        this.invalidGrade = false;

  const sum = student.grades.reduce((a, b) => a + b, 0);
  const avg = sum / student.grades.length;
  student.average = parseFloat(avg.toFixed(1));
},
addAttendance() {
      this.isAddingAttendance = true;
      this.students.forEach(student => {
        if (!student.additionalAttendance) {
          student.additionalAttendance = null;
        }
      });
    },
    saveAttendance() {
      this.isAddingAttendance = false;
    },
    openDeleteDialog() {
    this.showDeleteDialog = true;
  },
  closeDeleteDialog() {
    this.showDeleteDialog = false;
  },
  deleteCourse() {
    // Aquí va el código para eliminar el curso
    this.showDeleteDialog = false;
  },  
  openCourseForm() {
    this.showCourseForm = true;
  },
  closeCourseForm() {
    this.showCourseForm = false;
  },
  saveCourse() {
    // Aquí va el código para guardar el nuevo curso
    this.showCourseForm = false;
  },
  },
  mounted() {this.fetchData();}
}
</script>

<template>
      <Sidebar />

  <section class="flex pl-8 w-full">
    <template v-if="!selectedClassroom">
      <div class="classrooms-container">
      <Card v-for="(classroom, index) in classrooms" :key="index" class="classroom-card mt-6 mr-4 border-round-2xl">
        <template #header>
          <img :src="classroom.image" alt="classroom" class="image border-round-top-2xl"/>
        </template>
        <template #title>{{ classroom.name }}</template>
        <template #subtitle>{{ classroom['number-students'] }} students in this group</template>
        <template #content>
          <Button @click="viewCourses(classroom)">View</Button>
        </template>
      </Card>
    </div>
    </template>
    <template v-else-if="selectedClassroom && !showAttendanceView && !showGradeView">
  <div class="header-container">
    <Button @click="resetView" class="back-button">Back</Button>
    <h2>Courses from the Classroom</h2>
  </div>
  <div class="courses-container">
    <Card v-for="(course, index) in courses" :key="index" class="mt-6 mr-4 border-round-2xl">
      <template #header> 
        <img :src="course.image" alt="course" class="image border-round-top-2xl"/>
      </template>
      <template #title>{{ course.name }}</template>
      <template #subtitle>{{ course.description }}</template>
      <template #content>
        <div class="button-container">
          <Button @click="showAttendance">Attendance</Button>
          <Button @click="showGrade">Grades</Button>
          <Button icon="pi pi-trash" @click="openDeleteDialog" class="trash-button"></Button>        </div>
      </template>
    </Card>
    <Dialog v-model:visible="showDeleteDialog" header="Remove a course" :modal="true">
  <p>Are you sure you want to delete this course in this classroom? (this action is irreversible)</p>
  <div class="delete-course-button-container">
  <Button label="Cancel" @click="closeDeleteDialog"></Button>
  <Button label="Remove" @click="deleteCourse"></Button>
  </div>
</Dialog>
<Button label="Add New" @click="openCourseForm" class="add-button"></Button>

<Dialog v-model:visible="showCourseForm" header="Create a course" :modal="true">
  <div class="input-container">
    <label>Room</label>
    <InputText v-model="newCourse.room" placeholder="Room"></InputText>
  </div>
  <div class="input-container">
    <label>Course</label>
    <InputText v-model="newCourse.name" placeholder="Course"></InputText>
  </div>
  <div class="time-container">
    <div class="input-container">
      <label>Start</label>
      <Calendar id="calendar-start" v-model="newCourse.start" timeOnly placeholder="Start" />
      <label>End</label>
      <Calendar id="calendar-end" v-model="newCourse.end" timeOnly placeholder="End" />
    </div>
  </div>
  <div class="input-container">
    <label>Days</label>
    <InputText v-model="newCourse.days" placeholder="Days"></InputText>
  </div>
  <div class="input-container">
    <label>Teacher</label>
    <InputText v-model="newCourse.teacher" placeholder="Teacher"></InputText>
  </div>
  <div class="button-container">
    <Button label="Cancel" @click="closeCourseForm"></Button>
    <Button label="Save" @click="saveCourse"></Button>
  </div>
</Dialog>
  </div>
</template>
    <template v-if="showAttendanceView">
  <div class="card">
    <DataTable :value="students"  tableStyle="min-width: 100rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Attendance</span>
          <Button icon="pi pi-refresh" @click="resetView" rounded raised />
        </div>
        <div class="days-header">
          <span v-for="(day, index) in days" :key="index" class="day-name">{{ day }}</span>
        </div>
      </template>
      <Column field="name" header="Name">
    <template #body="slotProps">
      <div class="student-info">
        <img :src="slotProps.data.image" alt="Student profile picture" class="student-profile-picture" />
        <div class="student-name">{{ slotProps.data.name }}</div>
      </div>
    </template>
  </Column>
      <Column field="Dia" header="Lunes">
        <template #body="slotProps">
    <div>
      <Button :icon="slotProps.data.attendance.Lunes ? 'pi pi-check' : 'pi pi-times'" :severity="slotProps.data.attendance.Lunes ? '' : 'danger'" aria-label="Attendance" />
    </div>
  </template>
      </Column>
      <Column field="Dia" header="Martes">
        <template #body="slotProps">
    <div>
      <Button :icon="slotProps.data.attendance.Martes ? 'pi pi-check' : 'pi pi-times'" :severity="slotProps.data.attendance.Martes ? '' : 'danger'" aria-label="Attendance" />
    </div>
  </template>
      </Column>
      <Column field="Dia" header="Miercoles">
        <template #body="slotProps">
    <div>
      <Button :icon="slotProps.data.attendance.Miercoles ? 'pi pi-check' : 'pi pi-times'" :severity="slotProps.data.attendance.Miercoles ? '' : 'danger'" aria-label="Attendance" />
    </div>
  </template>
      </Column>
      <Column field="Dia" header="Jueves">
        <template #body="slotProps">
    <div>
      <Button :icon="slotProps.data.attendance.Jueves ? 'pi pi-check' : 'pi pi-times'" :severity="slotProps.data.attendance.Jueves ? '' : 'danger'" aria-label="Attendance" />
    </div>
  </template>
      </Column>
      <Column field="Dia" header="Viernes">
        <template #body="slotProps">
    <div>
      <Button :icon="slotProps.data.attendance.Viernes ? 'pi pi-check' : 'pi pi-times'" :severity="slotProps.data.attendance.Viernes ? '' : 'danger'" aria-label="Attendance" />
    </div>
  </template>
      </Column>
    </DataTable>
  </div>
</template>
<template v-if="showGradeView">
  <div class="card">
    <DataTable :value="students"  tableStyle="min-width: 100rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Grade</span>
          <Button v-if="!isAddingGrade" @click="addGrade">Add Grade</Button>
          <Button v-else :disabled="invalidGrade" @click="saveGrades">Save</Button>
          <Button icon="pi pi-refresh" @click="resetView" rounded raised />
        </div>
        <div class="days-header">
          <span v-for="(day, index) in days" :key="index" class="day-name">{{ day }}</span>
        </div>
      </template>
      <Column field="name" header="Name">
        <template #body="slotProps">
          <div class="student-info">
            <img :src="slotProps.data.image" alt="Student profile picture" class="student-profile-picture" />
            <div class="student-name">{{ slotProps.data.name }}</div>
          </div>
        </template>
      </Column>
      <template v-for="(grade, index) in students[0].grades" :key="index">
        <Column :field="'grades[' + index + ']'" :header="'Grade ' + (index + 1)">
          <template #body="slotProps">
            <div>
              <InputText type="number" class="grade-input" v-model.number.lazy="slotProps.data.grades[index]" @change="recalculateAverage(slotProps.data, index)" :disabled="!isAddingGrade || index < gradeColumns - 1" max="20" />            </div>
          </template>
        </Column>
      </template>
      <Column field="Average" header="Average">
        <template #body="slotProps">
          <div>{{ slotProps.data.average }}</div>
        </template>
      </Column>
      <Column field="Status" header="Status">
        <template #body="slotProps">
          <div>
            <Button v-if="slotProps.data.average >= 13" label="Approved" severity="success" text raised />
            <Button v-else label="Disapproved" severity="danger" text raised />
          </div>
        </template>
      </Column>
    </DataTable>
    <Dialog v-model:visible="showInvalidGradeDialog" maximizable modal header="Invalid Grade" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <p class="m-0">
        The grade you entered is invalid. Please enter a grade between 0 and 20.
      </p>
    </Dialog>
  </div>
</template>
  </section>
</template>

<style scoped>
.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.loading-indicator {
  margin-top: 20px;
  text-align: center;
}
.back-button {
  height: 30px; 
  line-height: 30px; 
  font-size: 14px; 
}
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.student-profile-picture {
  width: 60px; 
  height: 60px; 
  border-radius: 50%; 
  object-fit: cover;
  margin-right: 10px; 
}
.student-info {
  display: flex;
  align-items: center; 
}
.grade-input {
  width: 60px; 
}
.grade-input::-webkit-inner-spin-button,
.grade-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.header-container {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.courses-container {
  display: flex; 
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 80px; 
  margin-left: -300px; 
}
.trash-button {
  color: black; 
  background-color: transparent; 
  border: none; 
  position: absolute; 
  top: 220px; 
  right: 10px; 
}
.border-round-2xl {
  position: relative;
}
.add-button {
  position: absolute;
  top: 120px;
  right: 120px;
}
.time-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; 
}
/* New CSS */
InputText {
  margin-bottom: 100px; 
}
.input-container label {
  display: block;
  width: 100%;  
  margin-bottom: 10px;
}
::v-deep InputText {
  width: 100%; 
  margin-bottom: 10px;
}
#calendar-start + label {
  margin-bottom: 20px;
}
.delete-course-button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.classrooms-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
}

.classroom-card {
  flex: 1 0 20%; 
  max-width: 20%; 
}
</style>
