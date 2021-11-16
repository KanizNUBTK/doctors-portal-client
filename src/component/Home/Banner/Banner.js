import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter}}>
                   <Box>
                        <Typography variant="h3">
                                Your new smile <br />
                                Stars Hare
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 ,fontSize: 14, color: 'gray', fontWeight: 300}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea possimus non accusantium consequatur vel porro ullam repellat? Deleniti, officia?
                        </Typography>
                        <Button  variant="contained" style={{backgroundColor: '#33F0FF'}}>Get Appiontment</Button>
                   </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width: '350px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;