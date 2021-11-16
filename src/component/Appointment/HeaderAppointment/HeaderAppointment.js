import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import chair from '../../../images/chair.png';

const HeaderAppointment = ({date, setDate}) => {
    
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}}  src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderAppointment;