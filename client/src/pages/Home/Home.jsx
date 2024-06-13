import React from 'react';
import AboutUs from './AboutUs';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import PopularClasses from './PopularClasses/PopularClasses';
import Herosection from './Banner/Herosection';
import Banner2 from './Banner/Banner2';
import Apply from './Apply';


const Home = () => {
  return (
    <div>
      <Herosection/>
      <Banner2></Banner2>
      <div className='py-10'><PopularInstructors /></div>
      <PopularClasses />
      <AboutUs></AboutUs>
      <Apply/>
    </div>
  );
};

export default Home;