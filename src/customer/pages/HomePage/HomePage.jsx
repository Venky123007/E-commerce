import React from 'react'
import MainCarousal from '../../components/HomeCarousal/MainCarousal'
import HomeSectionCarousal from '../../components/HomeSectionCarousal/HomeSectionCarousal'
import Footer from '../../components/Footer/Footer';
import { mens_kurta } from '../../../Data/Men/mens_kurta';
import { mensShoesPage1 } from '../../../Data/Shoes/shoes';
import { mens_shirt } from '../../../Data/Men/mens_shirt';
import { sareePage1 } from '../../../Data/Saree/sarees';
import { women_dress } from '../../../Data/Women/women_dress';
import { lehngacholiPage2 } from '../../../Data/Saree/lenghacholi';
import { dressPage1 } from '../../../Data/Dress/dress';
import { mensPantsPage1 } from '../../../Data/Pants/mens_pant';

const HomePage = () => {
  return (
    <div>

        <MainCarousal/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousal data={dressPage1} sectionName={"Women's Party Wear"}/>
            <HomeSectionCarousal data={mens_shirt} sectionName={"Men's Shirts"}/>
            <HomeSectionCarousal data={mensPantsPage1} sectionName={"Men's Jeans"}/>
            <HomeSectionCarousal data={women_dress} sectionName={"Women's Dress"}/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage