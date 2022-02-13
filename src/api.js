import * as axios from "axios";

export const instance = axios.create({
    baseURL: ' http://localhost:3100/',
})

export const testsApi = {
    getTests() {
        return instance.get(`tests`).then(response => response.data)
    },
    getTestId(id) {
        return instance.get(`tests/${id}`).then(response => response.data)
    },
}
export const sitesApi = {
    getSites() {
        return instance.get('sites').then(response => response.data)
    },
    getSitesId(id) {
        return instance.get(`sites/${id}`).then(response => response.data)
    }
}