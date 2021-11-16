import React from 'react';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DentalCare = () => {
    return (
        <Container>
             <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={treatment} style={{height:'400px'}} alt="" />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant ="h4" sx={{my: 5}}>
                            Exceptional dental <br /> Care, on Your Terms
                    </Typography>
                    <Typography variant ="caption" sx={{mb: 5}} style={{color: 'rgb(134, 127, 127)'}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis numquam reprehenderit quo suscipit. Ipsam velit, fuga temporibus natus maxime aperiam
                    </Typography>
                    <br />
                    <Button variant="contained" sx={{my: 10}}>Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DentalCare;