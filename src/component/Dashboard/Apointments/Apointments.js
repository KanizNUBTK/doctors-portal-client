import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hook/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';

const Apointments = ({date}) => {
    const {user,token} = useAuth();
    const [apointments, setApointments] = useState([]);

    useEffect(()=>{
        const url=`http://localhost:5000/appointments?email=${user.email}&date=${date}`;
        fetch(url,{
            headers: {
                'authorization':`Bearer ${token}`,
            }
        })
        .then(res=>res.json())
        .then(data=>setApointments(data));
    },[date, user.email, token])
    return (
        <div>
            <h2>Appointments: {apointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Service</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {apointments.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.patientName}
                        </TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">{row.serviceName}</TableCell>
                        <TableCell align="right">{row.payment ? 
                            'Paid' :
                            <Link to={`/dashboard/payment/${row._id}`}><button>pay</button></Link>
                        }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    );
};

export default Apointments;