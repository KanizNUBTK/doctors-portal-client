import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Services from '../Services/Services';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Contactform from '../Contactform/Contactform';
import OurDoctor from '../OurDoctor/OurDoctor';
import Testimonial from '../Testimonial/Testimonial';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppoinmentBanner></AppoinmentBanner>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
            <OurDoctor></OurDoctor>
            <Contactform></Contactform>
        </div>
    );
};

export default Home;