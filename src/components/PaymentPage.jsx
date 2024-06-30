import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import styled from 'styled-components';

// Replace with your own publishable key
const stripePromise = loadStripe('pk_test_51PWIxYRx1RunhJ8tFz1oCUyq8pCh5pgHM9wMosT3DbDGvsOWpVxRbkELnA8BOpStxWPVOE8Ug69qZP4bphsauT7w001vuXLSiP');

const PaymentPage = () => {
    return (
        <PaymentContainer>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </PaymentContainer>
    );
};

const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 800px;
    margin: auto;
    background-color: #f5f5f5;
    border-radius: 10px;
`;

export default PaymentPage;
