import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ModalBooking from '../ModalBooking/ModalBooking';


const Bookings = ({booking,date,setBookingSuccess}) => {
    const {name,time,space,price}=booking;
    const [openbooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => {setBookingOpen(true);};
    const handleBookingClose = () => {setBookingOpen(false);};
    return (
     <>
        <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{py: 5, px: 5}}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main' , fontWeight: 600}}>
                        {name}
                    </Typography> 
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography> 
                    <Typography variant="caption" display="block" gutterBottom>
                        Price: ${price} 
                    </Typography> 
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} Spaces Available
                    </Typography> 
                    <Button onClick={handleBookingOpen} variant="contained">Book Appiontment</Button>
                </Paper>
            </Grid>
            <ModalBooking
                booking={booking}
                openbooking={openbooking}
                handleBookingClose={handleBookingClose}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></ModalBooking>
     </>
    );
};

export default Bookings;