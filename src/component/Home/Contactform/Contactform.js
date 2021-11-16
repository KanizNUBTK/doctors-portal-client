import React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png';

const bannerBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
}

const Contactform = () => {
    return (
        <div style={bannerBg}>
            <div style={{padding:'150px'}}>
                <Typography variant="h5" component="h5" sx={{mb:5, textAlign:'center', fontWeight: 600,  color: 'rgb(0, 247, 255)'}}>
                    CONTACT US
                </Typography>
                <Typography variant="h3" component="h3" sx={{mb:5, textAlign:'center', fontWeight: 600,  color: 'white'}}>
                    Always Contact With Us
                </Typography>
                <TextField
                fullWidth
                id="fullWidth"
                defaultValue="Email Address"
                variant="filled"
                size="small"
                sx={{background: 'white', color:'rgb(134, 127, 127)', mb: 2}}
                />
                <TextField
                fullWidth
                id="fullWidth"
                defaultValue="Subject"
                variant="filled"
                size="small"
                sx={{background: 'white', color:'rgb(134, 127, 127)', mb: 2}}
                />
                <TextField
                fullWidth
                id="fullWidth"
                defaultValue="Your message"
                variant="filled"
                size="small"
                sx={{background: 'white', color:'rgb(134, 127, 127)', mb: 2}}
                />
            </div>
            
        </div>
    );
};

export default Contactform;