import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import img1 from '../../../images/doctor.png';

const OurDoctor = () => {
    return (
        <>
            <Typography variant="h5" component="h5" sx={{mt:10, textAlign:'center', fontWeight: 600,  color: 'rgb(0, 247, 255)'}}>
                    CONTACT US
            </Typography>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={1} sm={1} md={4} sx={{my: 5}}>
                        <img src={img1} alt="" style={{height:'300px', alignItems:'center'}}/>
                        <Typography variant="h6" component="h6" sx={{ textAlign:'center', fontWeight: 400, color: 'black'}}>
                        Dr. caudi</Typography>
                        <Typography variant="h6" component="h6" sx={{ textAlign:'center', fontWeight: 300,  color: 'rgb(0, 247, 255)'}}>
                        880 123456</Typography>
                    </Grid> 
                    <Grid item xs={1} sm={1} md={4} sx={{my: 5}}>
                        <img src={img1} alt="" style={{height:'300px'}} />
                        <Typography variant="h6" component="h6" sx={{ textAlign:'center', fontWeight: 400,  color: 'black'}}>
                        Dr. caudi</Typography>
                        <Typography variant="h5" component="h5" sx={{ textAlign:'center', fontWeight: 300,  color: 'rgb(0, 247, 255)'}}>
                        880 123456</Typography>
                    </Grid> 
                    <Grid item xs={1} sm={1} md={4} sx={{my: 5}}>
                        <img src={img1} alt="" style={{height:'300px'}}/>
                        <Typography variant="h6" component="h6" sx={{textAlign:'center', fontWeight: 400,  color: 'black'}}>
                        Dr. caudi</Typography>
                        <Typography variant="h6" component="h6" sx={{textAlign:'center', fontWeight: 300,  color: 'rgb(0, 247, 255)'}}>
                         880 123456</Typography>
                    </Grid> 
                </Grid>           
            </Container>
        </>
    );
};

export default OurDoctor;