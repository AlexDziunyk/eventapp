import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import PaymentPage from './PaymentPage';
import axios from '../../axios/axios';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';

const PaymentProvider = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { price } = useParams()

  const stripePromise = loadStripe("pk_test_51PBnccDpOIVSYBlf84oAmIVlyrOfiGwHIw2iyc3vqLZkYHaBDJ5uQjSeswjrw22ZBBZWiO89gNzeXUDyBmGebIVb004BEjQBN2")


  const createPaymentIntent = async () => {
    const { data } = await axios.post('/stripe/create-payment-intent', { price });
    setClientSecret(data.clientSecret);
  }

  useEffect(() => {
    createPaymentIntent();
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (<Elements stripe={stripePromise} options={{ clientSecret }}>
        <PaymentPage />
      </Elements>)}
    </>
  )
}

export default PaymentProvider