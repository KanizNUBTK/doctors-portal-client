import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import Apointments from '../Apointments/Apointments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Calender
                  date={date}
                  setDate={setDate}
              ></Calender>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Apointments date={date}></Apointments>
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;