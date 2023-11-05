import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmedOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderTable = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const {adminOrder} = useSelector(store=>store)

  useEffect(()=>{
      dispatch(getOrders())
  },[adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder])

  console.log("admin orders", adminOrder.orders?.map((orders)=>orders.orderItems?.map((item)=>item.product.imageUrl)));

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  }

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmedOrder(orderId));
    handleClose();
  }

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  }

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    handleClose();
  }


  return (


    <div className='p-10'>
            <Card className='mt-2 bg-[gray]'>
        <CardHeader title='All Products'/>
        <TableContainer sx={{bgcolor:"#DAE0E2", color:"white"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Update</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminOrder.orders?.map((item) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <AvatarGroup sx={{justifyContent:"start"}}>
                  {item.orderItems?.map((orderItem)=><Avatar src={orderItem.product.imageUrl}></Avatar>)}
                </AvatarGroup>
              </TableCell>
              <TableCell align="left" scope="row">{item.orderItems?.map((orderItem)=><p>{orderItem.product.title}</p>)}</TableCell>
              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left">{item.totalPrice}</TableCell>
              <TableCell align="left"><span className={`text-white px-5 py-2 rounded-full
              ${item.orderStatus==="CONFIRMED"?"bg-[green]":
              item.orderStatus==="SHIPPED"?"bg-[blue]":
              item.orderStatus==="PLACED"?"bg-[#58e6f9]":
              item.orderStatus==="PENDING"?"bg-[orange]":"bg-[red]"
              }`}>{item.orderStatus}</span></TableCell>
              <TableCell align="left">
              <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          Status
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
        <MenuItem onClick={()=>handleShippedOrder(item.id)}>Shipped Order</MenuItem>
        <MenuItem onClick={()=>handleDeliveredOrder(item.id)}>Delivered Order</MenuItem>
      </Menu>
                </TableCell>
              <TableCell align="left">
                <Button onClick={()=>handleDeleteOrder(item.id)} variant='outlined'>Delete</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>

    </div>
  )
}

export default OrderTable