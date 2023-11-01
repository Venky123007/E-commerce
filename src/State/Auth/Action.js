import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig";



const token = localStorage.getItem("jwt");
const registerRequest = ()=>({type:REGISTER_REQUEST});
const registerSUCCESS = (user)=>({type:REGISTER_SUCCESS, payload:user});
const registerFAILURE = (error)=>({type:REGISTER_FAILURE, payload:error});


export const register = (userData)=> async (dispatch) => {
    
    dispatch(registerRequest());

        try{
            const response = await axios.post(`${API_BASE_URL}auth/signup`, userData)

            const user = response.data;

            if(user.jwt){
                localStorage.setItem("jwt", user.jwt)
            }
            console.log("user ",user);
            dispatch(registerSUCCESS(user.jwt));
        }
        catch(error) {
            dispatch(registerFAILURE(error.message))
        }
}


const loginRequest = ()=>({type:LOGIN_REQUEST});
const loginSUCCESS = (user)=>({type:LOGIN_SUCCESS, payload:user});
const loginFAILURE = (error)=>({type:LOGIN_FAILURE, payload:error});

export const login = (userData)=> async (dispatch) => {
    dispatch(loginRequest());

        try{
            const response = await axios.post(`${API_BASE_URL}auth/signin`, userData)
            const user = response.data;

            if(user.jwt){
                localStorage.setItem("jwt", user.jwt)
            }
            console.log("user :",user);
            dispatch(loginSUCCESS(user.jwt));
        }
        catch(error) {
            dispatch(loginFAILURE(error.message))
        }
}


const getUserRequest = ()=>({type:GET_USER_REQUEST});
const getUserSUCCESS = (user)=>({type:GET_USER_SUCCESS, payload:user});
const getUserFAILURE = (error)=>({type:GET_USER_FAILURE, payload:error});

export const getUser = (jwt)=> async (dispatch) => {
    dispatch(getUserRequest());

        try{
            const response = await axios.get(`${API_BASE_URL}api/users/profile`,{
                headers:{
                    "Authorization":`Bearer ${jwt}`
                }
            })
            const user = response.data;
            console.log("user :",user);
            dispatch(getUserSUCCESS(user));
        }
        catch(error) {
            dispatch(getUserFAILURE(error.message))
        }
}

export const logout = ()=> (dispatch) => {
        dispatch({type:LOGOUT, payload:null})
        localStorage.clear();
}


            // const config = {
            //     method: 'post',
            //     url: `${API_BASE_URL}auth/signup`,
            //     data: userData,
            //     headers: {
            //         // Set headers for preflight requests (OPTIONS)
            //         'Access-Control-Allow-Origin' : 'http://localhost:5173/',
            //         'Access-Control-Request-Method': 'POST', // The method of the actual request
            //         'Access-Control-Request-Headers': 'Content-Type', // The headers of the actual request
            //         // Add any other headers as needed for your application
            //     },
            // };
            //const response = await axios.post(config);