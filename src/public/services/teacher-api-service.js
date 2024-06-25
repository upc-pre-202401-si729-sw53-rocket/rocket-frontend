import axios from "axios";

const API_URL = 'https://rocket-organize-backend.up.railway.app/api/teacher';

const apiServiceTeacher = {
    getTeachersList() {
        return axios.get(API_URL);
    },
    addTeacher(teacher) {
        return axios.post(API_URL, teacher, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    updateTeacher(id, teacher) {
        return axios.put(`${API_URL}/${id}`, teacher, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    deleteTeacher(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
};

export default apiServiceTeacher;