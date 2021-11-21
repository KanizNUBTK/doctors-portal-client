import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { useState } from 'react';
import { Alert } from '@mui/material';

const AddDoctor = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [image, setImage]= useState(null);
    const [success, setSuccess] = useState(false);
    const handleSubmit=e=>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://floating-scrubland-06607.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess(true);
                    console.log('doctor added succeefully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
        });

    }


    return (
        <div>
            <h1>add doctor</h1>
           <form onSubmit={handleSubmit}>
           <TextField
            sx={{width:'75%'}}
            label="Name" 
            required
            onChange={e=>setName(e.target.value)}
            variant="standard" />
            <TextField
            sx={{width:'75%'}}
            label="Email" 
            required
            onChange={e=>setEmail(e.target.value)}
            variant="standard" />
            <br />
            <Input 
            accept="image/*"
            multiple type="file"
            onChange={e=>setImage(e.target.files[0])} />
            <br />
            <Button variant="contained" type="submit">
             Add Doctor
           </Button>
           </form>
           {success && <Alert severity="success">Doctor added successfully!</Alert>}
        </div>
    );
};

export default AddDoctor;