import { Typography } from '@mui/material';
import { Container, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setDoctors(data)});
    },[])
    return (
        <div>
            <Container sx={{py:5}}>
                <Typography variant="h5" sx={{ textAlign: 'center' , color: 'primary.main' ,m: 2,py:5,fontWeight: 500}} gutterBottom component="div">
                    Our Doctors
                </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {
                            doctors.map(doctor=><Doctor
                                key={doctor._id}
                                doctor={doctor}
                            >
                            </Doctor>)
                        }
                    </Grid>
            </Container>
        </div>
    );
};

export default Doctors;