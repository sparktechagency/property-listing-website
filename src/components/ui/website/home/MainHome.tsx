import React from 'react';
import Banner from './Banner';
import WeHandle from './WeHandle';
import WhyChooseUs from './WhyChooseUs';
import BusinessListing from './BusinessListing';
import CustomerReview from './CustomerReview';
import GetInTouch from './GetInTouch';
import FAQ from './FAQ';


const MainHome = () => {
    return (
        <div>
            <Banner /> 
            <WeHandle />  
            <WhyChooseUs /> 
            <BusinessListing />
            <CustomerReview /> 
            <GetInTouch /> 
            <FAQ />
        </div>
    );
};

export default MainHome;