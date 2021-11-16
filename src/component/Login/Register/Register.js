import React from 'react';
import { Container ,CircularProgress, Alert} from '@mui/material';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { user, authError,registerUser, isLoading} = useAuth();

    const handleOnBlur = e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, location,history);
        e.preventDefault();
    }
    return (
        <Container>
               <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 5}}>
                    <Typography variant ="body1" style={{textAlign:'center'}}>Please register</Typography>
                    {!isLoading  && <form onSubmit={handleLoginSubmit}>
                        <TextField 
                        sx={{width: '100%', m: 1}}
                        id="standard-basic" 
                        label="Your name" 
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Email" 
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="password" 
                        type="password" 
                        name="password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="ReType Your Password" 
                        type="password" 
                        name="password2"
                        onBlur={handleOnBlur}
                        variant="standard" />
                        <NavLink 
                        style={{textDecoration: 'none'}}
                        to="/login">
                        <Button type="submit" variant="text" sx={{width: '75%', m: 1}}>Already register? Please login</Button>
                        </NavLink>
                        <Button type="submit" variant="contained" sx={{width: '75%', m: 1}}>Register</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Register;