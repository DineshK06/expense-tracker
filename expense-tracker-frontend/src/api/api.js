import axios from 'axios';

const API = axios.create({
    baseUrl: 'http://localhost:8080/api'
})

export default API;