import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick = {()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://img3.junaroad.com/uiproducts/20298139/zoom_0-1694708452.jpg" alt="" />
                    <div className='ml-5 space-y-2'>
                            <p className=''>Beige Cotton Casual Shirt</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Gray</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>₹1099</p>

            </Grid>

            <Grid item xs={4}>
                {true && <div>
                    <p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Delivered On March 03
                        </span>
                    </p>
                    <p className='text-xs font-semibold'>
                        Your Item Has Been Delivered
                    </p>
                    </div>}
                {false && <p>
                    <span>
                        Expected Delivery On Mar 03
                    </span>
                </p>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard