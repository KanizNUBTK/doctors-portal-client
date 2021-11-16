import React from 'react';
import { Container ,CircularProgress, Alert} from '@mui/material';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,isLoading,authError,loginUser,signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e=>{
        const field = e.target.name;
        const value = e.target.value;
        //console.log(field,value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password,location ,history);
        console.log(loginData.email, loginData.password);
        //e.preventdefault();
    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle(location,history);
    }

    return (
        <Container>
               <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 5}}>
                    <Typography variant ="body1">Login</Typography>
                    <div onClick={handleLoginSubmit}>
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Email" 
                        name="email"
                        onChange={handleOnchange}
                        variant="standard" />
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="password" 
                        type="password" 
                        name="password"
                        onChange={handleOnchange}
                        variant="standard" />
                        <NavLink 
                        style={{textDecoration: 'none'}}
                        to="/register">
                        <Button type="submit" variant="text" sx={{width: '75%', m: 1}}>New User? Please Register</Button>
                        </NavLink>
                        <Button type="submit" variant="contained" sx={{width: '75%', m: 1}}>Login</Button>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        </div>
                        <p>------------------------</p>
                        <Button onClick={handleGoogleSignIn} variant="contained">Google sign In</Button>
                    </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;