import { loadStripe } from '@stripe/stripe-js';
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51Jw6owFMOAIivMQmPAu6RH2lHMG6645v1asL3tRe5HiFakhURqrqBbgbziUwDWiqgA1oEB7oKDUrsGr4K1d1BxTi00wivXrBjD');

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data));
    },[appointmentId])

    return (
        <div>
            <h2>Please pay for:{appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
          { appointment?.price && <Elements stripe={stripePromise}>
                <CheckOutForm
                    appointment={appointment}
                ></CheckOutForm>
            </Elements>}
        </div>
    );
};

export default Payment;