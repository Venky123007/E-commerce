import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './components/CreateProductForm';
import ProductTable from './components/ProductTable';
import CustomerTable from './components/CustomerTable';
import Dashboard from './components/AdminDashboard';
import OrderTable from './components/OrderTable';
import Shop2Icon from '@mui/icons-material/Shop2';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AdminDashboard from './components/AdminDashboard';

const menu = [
    {name: "Dashboard", path : "/admin", icon : <DashboardIcon/>},
    {name: "Products", path : "/admin/products", icon : <Shop2Icon/> },
    {name: "Customers", path : "/admin/customers", icon : <PeopleIcon/> },
    {name: "Orders", path : "/admin/orders", icon : <ShoppingBagIcon/> },
    {name: "AddProduct", path : "/admin/product/create", icon : <ShoppingCartIcon/> },
    // {name: "", path : " " },
]

const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState();
    const navigate = useNavigate();

    const drawer = (
        <Box
        sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%"
        }}
        >

            {/* {isLargeScreen && <Toolbar/>} */}
            <List>
                {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={()=> navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>

            <List>
                <ListItem disablePadding onClick={()=> navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>


        </Box>
    )

  return (
        <div className = 'relative flex h-[100vh]'>
            <CssBaseline />

            <div className='w-[15%] border border-r-gray-300 h-full fixed top-0 shadow-lg shadow-gray-600'
            // variant='permanent'
            // sx={{
            //     height: "100vh",
            //     width: 240,
            //     flexShrink:0
            // }}
            >
                {drawer}
            </div>

            <div className='w-[85%] h-full ml-[15%]'>

                <Routes>
                    <Route path='/' element={<AdminDashboard/>}></Route>
                    <Route path='/product/create' element={<CreateProductForm/>}></Route>
                    <Route path='/products' element={<ProductTable/>}></Route>
                    <Route path='/orders' element={<OrderTable />}></Route>
                    <Route path='/customers' element={<CustomerTable/>}></Route>
                </Routes>

            </div>
        </div>
  )
}

export default Admin