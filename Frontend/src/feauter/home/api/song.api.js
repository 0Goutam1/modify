import axios from "axios"
const api= axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials:true
})

export async function getSong({mood}) {
    const response= await api.get('api/song/?mood='+ mood)
    return response.data
}