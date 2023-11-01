import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarousalData } from './MainCarousalData';
import {useNavigate} from 'react-router-dom';


const MainCarousal = () => {
    const navigate = useNavigate();

    const handleRedirect = ()=>{
        navigate(`/women/clothing/women_dress`)
    }

    const items = mainCarousalData.map((item, index) => <img onClick = {handleRedirect} className='cursor-pointer' 
    role='presentation' src={item.image} alt={`Image ${index}`} key={index}/>)


    
    return (
            <AliceCarousel
        items={items}
        disableButtonsControls={true}
        autoPlay={true}
        autoPlayInterval={1000}
        infinite
        animationDuration={2000}
    />
        
    )
};

export default MainCarousal;