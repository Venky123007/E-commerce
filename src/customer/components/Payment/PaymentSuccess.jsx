import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { createPayment, updatePayment } from '../../../State/Payment/Action';
import { Alert, AlertTitle, Button, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import _ from 'lodash';
import AddressCard from '../AddressCard/AddressCard';

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const {orderId} = useParams();
    const navigate = useNavigate();

    

    const dispatch =useDispatch();
    const {order} = useSelector(store=>store);
    //console.log("orderItns :",order.order?.orderItems[0].product.color);

    useEffect(()=>{
        const urlParam = new URLSearchParams(window.location.search);

        setPaymentId(urlParam.get("razorpay_payment_id"));
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"))
    },[])

    useEffect(()=>{
        const data = {orderId, paymentId};
        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data))

    },[orderId, paymentId])

    const handleCheckout = ()=>{
        console.log("orderId :", orderId);
        const reqData = {orderId,navigate}
        dispatch(createPayment(reqData));
    }
    

  return (
    <div className='px-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>

            <Alert
            variant='filled'
            severity='success'
            sx={{mb:6, width:"fit-content"}}
            >
                <AlertTitle>Congratulations 🎉🎊</AlertTitle>
                 Your Order got placed successfully...!
            </Alert>

        </div>

        <OrderTracker activeStep={1}/>

        <Grid container className='space-y-5 py-5 pt-20'>

            {order.order?.orderItems.map((item)=><Grid container item className='shadow-xl rounded-md p-5'
            sx={{alignItems: "center", justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src = {item.product.imageUrl} alt="" />

                        <div className='ml-5 font-semibold'>
                            <p className='font-semibold'>{item.product.title}</p>
                            <div>
                                <span>Color: {_.capitalize(item.product.color)}, </span>
                                <span>Size: {item.size}</span>
                            </div>
                            <p>Seller: {item.product.brand}</p>
                            <p>₹{item.discountedPrice}</p>


                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <AddressCard address={order.order?.shippingAddress}/>
                </Grid>

            </Grid>)}

        </Grid>
        <Button variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }} onClick={handleCheckout}>
                        Payment
                    </Button>
        
    </div>
  )
}

export default PaymentSuccess