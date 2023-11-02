import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST } from "./ActionType"

export const createPayment = (reqData) => async (dispatch) => {
    dispatch({type: CREATE_PAYMENT_REQUEST});
    
    try {
        
        const {data} = await api.post(`/api/payments/${reqData.orderId}`);
        console.log("payment data:",data);
        if(data.payment_link_url){
            window.location.href= data.payment_link_url;
            window.location.href = `/payment/${orderId}`;    
        }
        dispatch({type:CREATE_PAYMENT_SUCCESS, payload:data})
        if(data)
        {
            reqData.navigate(`/payment/${orderId}`);
        }

        
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}

export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({type: UPDATE_PAYMENT_REQUEST});

    try {

        const {data} = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

        console.log("update payment :", data)
        
    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message})
    }
}