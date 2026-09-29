import axios from 'axios'

const api=   axios.create ({
    baseURL:"http://localhost:8080",
    withCredentials: true
})

export async function register({userName,email,password}) {
    
    const respones= await api.post('/api/auth/register',{
        userName,email,password
    })
    return respones.data

}

export async function login({userName,password}) {
    const respones = await api.post('/api/auth/login',{
        userName,password
    })
    return respones.data
    
}

export async function logOut() {
    const respones= await api.post('/api/auth/logOut')
    return respones.data
}

export async function getMe() {
    const respones = await api.get('api/auth/getMe')
    return respones.data
    
}