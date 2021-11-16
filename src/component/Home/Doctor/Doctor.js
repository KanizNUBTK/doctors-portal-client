import { Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

const Doctor = ({doctor}) => {
    const {name, image}= doctor;
    return (
        <div>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={ {p:5, width: 270, mx:2}}>
                    <img style={{width:'250px', height:'250px'}} src={`data:image/png;base64,${image}`} alt="" />
                    <Typography variant="h6" gutterBottom>
                        name: {name}
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Doctor;