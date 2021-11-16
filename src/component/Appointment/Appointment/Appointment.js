import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderAppointment from '../HeaderAppointment/HeaderAppointment';
import AviableAppointment from '../AviableAppointment/AviableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navbar></Navbar>
            <HeaderAppointment date={date} setDate={setDate}></HeaderAppointment>
            <AviableAppointment date={date} ></AviableAppointment>
        </div>
    );
};

export default Appointment;