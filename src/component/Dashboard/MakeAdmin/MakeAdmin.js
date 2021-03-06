import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Alert } from '@mui/material';
import useAuth from '../../../hook/useAuth';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://floating-scrubland-06607.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                 sx={{width:'50%'}}
                 label="Email"
                 type="email"
                 onBlur={handleOnBlur}
                 name="email"
                 variant="standard" />
                 <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;