import axios from "axios"

export const API_BASE_URL = "hissing-wren-production.up.railway.app/"

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL : API_BASE_URL,  //specify the domain name or ip address of your server here
    headers:{
        "Authorization" : `Bearer ${jwt}`,
        'Content-Type' : "application/json"
    }
})