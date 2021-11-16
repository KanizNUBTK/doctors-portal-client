import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SingleService from '../SingleService/SingleService';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name:'service 1',
        description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio',
        img: fluoride
    },
    {
        name:'service 1',
        description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio',
        img: cavity
    },
    {
        name:'service 1',
        description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container sx={{my: 10}}>
            <Typography sx={{ textAlign: 'center' , color: 'primary.main' ,m: 2,fontWeight: 500}} variant="h6" component="div">
                OUR SERVICES   
            </Typography>
            <Typography sx={{ textAlign: 'center' , m: 2 ,fontWeight: 'bold' }} variant="h6" component="div">
                SERVICES WE PROVIDE
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                services.map(service => <SingleService
                    key={service.name}
                    service={service}
                ></SingleService> )
            }
            </Grid>
        </Container>
      </Box>
    );
};

export default Services;