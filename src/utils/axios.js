import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone2-4b964/us-central1/api'
    // cloud fn url
})

export default instance
