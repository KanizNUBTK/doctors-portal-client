import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppoinmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{width:400, marginTop: '-110px'}}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlignt: 'left' 
                    }}>
                    <Box >
                        <Typography variant ="h6" sx={{mb: 5}} style={{color: '#33F0FF', }}>
                            Appoinment
                        </Typography>
                        <Typography variant ="h4" sx={{my: 5}} style={{color: 'white', }}>
                            Make an Appoinment Today
                        </Typography>
                        <Typography variant ="h6" sx={{mb: 5}} style={{color: 'white', fontSize: 14, fontWeight: 300}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos esse sit fugit fugiat.
                        </Typography>
                        <Button  variant="contained" style={{backgroundColor: '#33F0FF'}}>Learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;