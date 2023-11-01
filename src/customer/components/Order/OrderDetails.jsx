import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>
                Delivery Address
            </h1>
        <AddressCard/>
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=><Grid item container className='cursor-pointer shadow-xl rounded-md hover:shadow-2xl p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-6'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://img3.junaroad.com/uiproducts/20298139/zoom_0-1694708452.jpg" alt="" />
                        <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Beige Cotton Casual Shirt</p>
                            <p className='opacity-80 text-xs font-semibold'><span>Color: Gray</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Size: M</span></p>
                            <p className='opacity-70 text-xs font-semibold'>Seller : Roadster</p>
                            <p className='font-semibold'>₹1099</p>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl' />
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>

            </Grid>)}


        </Grid>
    </div>
  )
}

export default OrderDetails