import React from 'react';
import './AviableAppointment.css';
import Bookings from '../Bookings/Bookings';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container ,Alert} from '@mui/material';
import { useState } from 'react';

const bookings=[
    {
        id:1,
        name:'service1',
        time:'11.00AM-12.00pm',
        price: 20,
        space: 5,
    },
    {
        id:2,
        name:'service2',
        time:'11.00AM-12.00pm',
        price: 25,
        space: 5,
    },
    {
        id:3,
        name:'service3',
        time:'11.00AM-12.00pm',
        price: 30,
        space: 5,
    },
    {
        id:4,
        name:'service4',
        time:'11.00AM-12.00pm',
        price: 35,
        space: 5,
    },
    {
        id:5,
        name:'service5',
        time:'11.00AM-12.00pm',
        price: 40,
        space: 5,
    },
    {
        id:6,
        name:'service6',
        time:'11.00AM-12.00pm',
        price: 45,
        space: 5,
    },
]

const AviableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
           <Typography variant="h4" gutterBottom component="div" sx={{ color: 'info.main' , mb: 5,fontWeight: 700}} className="date">Available Appointment {date.toDateString()}</Typography>
           {bookingSuccess && <Alert severity="success">Booking SuccessFully!</Alert>}
            <Grid container spacing={2}>
               {
                   bookings.map(booking => <Bookings
                   key={booking.id}
                   booking={booking}
                   date={date}
                   setBookingSuccess={setBookingSuccess}
                   ></Bookings>)
               }
            </Grid>
        </Container>
    );
};

export default AviableAppointment;