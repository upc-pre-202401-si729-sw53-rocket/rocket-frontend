import apiService from "../../shared/services/api.service.js";

export default {
    data() {
        return {
            equipmentList: null,
        };
    },
    methods: {
        fetchData() {
            apiService.getClassroomEquipmentList()
                .then(response => {this.equipmentList = response.data;})
                .catch(error => {console.error('Error fetching data:', error);});
        }
    },
    mounted() {this.fetchData();}
}