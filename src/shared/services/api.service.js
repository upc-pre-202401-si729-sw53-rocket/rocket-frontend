import axios from 'axios';

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000'
        });
    }

    getClassrooms() {
        return this.api.get('/classrooms');
    }

    getListStudents() {
        return this.api.get('/list-students');
    }
}

export default new ApiService();