import { TrendingUp } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import DevicesIcon from '@mui/icons-material/Devices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        stats: '275K',
        title: 'Sales Today',
        color: '#be2edd',
        icon: <TrendingUp sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: '30.4K',
        title: 'Customers',
        color: '#07f9a2',
        icon: <AccountCircleIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: '1.7K',
        title: 'Products',
        color: '#eb4d4b',
        icon: <DevicesIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: '75K',
        title: 'Revenue',
        color: '#70a1ff',
        icon: <AttachMoneyIcon sx={{fontSize:"1.75rem"}}/>
    },
]

const renderStats = ()=> {
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display:'flex',
                alignItems:'center'
            }}>
                <Avatar variant='rounded' sx={{
                    mr:3,
                    width:44,
                    height:44,
                    boxShadow:3,
                    color:"white",
                    bgcolor:`${item.color}`
                }}>
                    {item.icon}
                </Avatar>

                <Box sx={{
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const MonthlyOverView = () => {
  return (
    <Card sx={{bgcolor:"#2B2B52", color:"white"}}>
        <CardHeader title="Monthly Overview"
        action={
            <IconButton size='small'>
                <MoreVertIcon/>
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component='span' sx={{fontWeight:600}}>
                    Total 48.5% growth
                </Box>
                😎 this month
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:'2rem !important',
                letterSpacing: '.15px !important'
            }
        }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5,0]}>
                {renderStats()}
            </Grid>
        </CardContent>

        
    </Card>
  )
}

export default MonthlyOverView