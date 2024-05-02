import apiService from "../../shared/services/api.service.js";

export default {
    data() {
        return {
            facilitiesList: null,
        };
    },
    methods: {
        fetchData() {
            apiService.getListFacilities()
                .then(response => {this.facilitiesList = response.data;})
                .catch(error => {console.error('Error fetching data:', error);});
        }
    },
    mounted() {this.fetchData();}
}