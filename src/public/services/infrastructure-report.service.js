import axios from 'axios';

const API_URL = 'https://rocket-organize-backend.up.railway.app/api/infrastructure-report';

const infrastructureReportService = {
    getInfrastructureReports() {
        return axios.get(API_URL);
    },
    addInfrastructureReport(report) {
        return axios.post(API_URL, report, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export default infrastructureReportService;
