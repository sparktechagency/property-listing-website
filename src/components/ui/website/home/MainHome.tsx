import React from 'react';
import Banner from './Banner';
import WeHandle from './WeHandle';
import WhyChooseUs from './WhyChooseUs';
import BusinessListing from './BusinessListing';


const MainHome = () => {
    return (
        <div>
            <Banner /> 
            <WeHandle />  
            <WhyChooseUs /> 
            <BusinessListing />
        </div>
    );
};

export default MainHome;