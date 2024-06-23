import axios from 'axios';

const API_URL = 'https://rocket-organize-backend.up.railway.app/api/courses';

const apiService = {
    getCourses() {
        return axios.get(API_URL);
    },
    addCourse(course) {
        return axios.post(API_URL, course, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export default apiService;
