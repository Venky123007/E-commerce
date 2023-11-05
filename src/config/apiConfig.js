import axios from "axios"

// export const API_BASE_URL = "https://hissing-wren-production.up.railway.app/"
export const API_BASE_URL = "http://localhost:3007/"

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL : API_BASE_URL,  //specify the domain name or ip address of your server here
    headers:{
        "Authorization" : `Bearer ${jwt}`,
        'Content-Type' : "application/json"
    }
})