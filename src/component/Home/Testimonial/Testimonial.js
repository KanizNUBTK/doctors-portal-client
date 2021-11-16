import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import img1 from '../../../images/people-1.png';
import img2 from '../../../images/people-2.png';
import img3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <div style={{margin:'50px'}}>
           <Typography variant="h5" component="h5" sx={{mt:10, fontWeight: 600,  color: 'rgb(0, 247, 255)'}}>
                    Testimonial
            </Typography>
           <Typography variant="h3" component="h3" sx={{mt:2, fontWeight: 400,  color: 'black'}}>
                    What's our Patients <br /> Says
            </Typography>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={1} sm={1} md={4} sx={{my: 5}}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsa.
                                </Typography>
                                <div style={{display:'flex'}}>
                                    <div> <img src={img1} alt="" /></div>
                                    <div style={{margin: '20px'}}>
                                        <Typography variant="h6" component="h6" sx={{ fontSize: 20, fontWeight: 600, color: 'rgb(0, 247, 255)' }} color="text.secondary" gutterBottom>
                                            Winson herry
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            California
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid> 
                    <Grid item xs={1} sm={1} md={4} sx={{my: 5}}>
                        <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, omnis?
                                    </Typography>
                                    <div style={{display:'flex'}}>
                                        <div> <img src={img2} alt="" /></div>
                                        <div style={{margin: '20px'}}>
                                            <Typography variant="h6" component="h6" sx={{ fontSize: 20,  fontWeight: 600, color: 'rgb(0, 247, 255)'}} color="text.secondary" gutterBottom>
                                                Winson herry
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                California
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                    </Grid> 
                    <Grid item xs={1} sm={1} md={4} sx={{my: 5}}>
                        <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, 
                                    </Typography>
                                    <div style={{display:'flex'}}>
                                        <div> <img src={img3} alt="" /></div>
                                        <div style={{margin: '20px'}}>
                                            <Typography variant="h6" component="h6" sx={{ fontSize: 20,  fontWeight: 600, color: 'rgb(0, 247, 255)' }} color="text.secondary" gutterBottom>
                                                Winson herry
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                California
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                    </Grid> 
                </Grid>           
            </Container>
        </div>
    );
};

export default Testimonial;