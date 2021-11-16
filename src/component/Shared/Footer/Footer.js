import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import './Footer.css';

const Footer = () => {
    return (
        <Container sx={{ flexGrow: 1 }} className="footer" >
            <div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={1} sm={1} md={3} sx={{my: 5}}>
                        <ul>
                            <li>emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>treatment of Personal diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check up</li>
                        </ul>
                    </Grid>
                    <Grid item xs={1} sm={1} md={3}>
                        <ul>
                            <h2 className="textColor">Services</h2>
                            <li>emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>treatment of Personal diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                        </ul>
                    </Grid>
                    <Grid item xs={1} sm={1} md={3}>
                        <ul>
                            <h2 className="textColor">Oral health</h2>
                            <li>emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>treatment of Personal diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                        </ul>
                    </Grid>
                    <Grid item xs={1} sm={1} md={3}>
                    <div>
                        <h2 className="textColor">Our Address</h2>
                        <address>New York 0 101010 Hudson yard</address>
                    </div>
                    <div></div>
                    <div>
                        <h3>Call now</h3>
                        <button>+2025550295</button>
                    </div>
                    </Grid>
                </Grid>
            </div>
            <div>
                <p>Copyright 2020 All Rights Reserved</p>
            </div>
        </Container>
    );
};

export default Footer;