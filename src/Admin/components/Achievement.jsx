import { Style } from '@mui/icons-material'
import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TriangleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achievement = () => {
  return (
    <Card className='' sx={{position:"relative", bgcolor:"#2B2B52", color:"white"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                Aira-fashions
            </Typography>
            <Typography variant='body2'>Congratulations 🥳</Typography>
            <Typography variant='h5' sx={{my:3.1}}> 560.3K </Typography>

            <Button size = 'small' variant='contained'>ViewDetails</Button>
            <TriangleImg src=''></TriangleImg>
            <TrophyImg src='https://o.remove.bg/downloads/86cc808a-f062-4dbd-8aee-eb06f03ea480/pngtree-gold-trophy-cup-icon-isometric-3d-style-png-image_1850544-removebg-preview.png'/>

        </CardContent>
    </Card>
  )
}

export default Achievement