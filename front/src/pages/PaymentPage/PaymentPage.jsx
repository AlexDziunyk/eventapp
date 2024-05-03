import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../axios/axios'

const PaymentPage = () => {

  const stripe = useStripe();
  const elements = useElements();
  const { eventId, price } = useParams();

  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const [event, setEvent] = useState("");

  const getEventData = async () => {
    try {
      const { data } = await axios.get(`/events/getEventById/${eventId}`);
      setEvent(data.result);
    } catch (error) {
      console.log(error);
    }
  }

  const addUserToEvent = async () => {
    try {
      const { data } = await axios.post(`/users/addEventToUser`, {
        eventId: eventId,
      });

      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  const addNotification = async () => {
    try {
      const { data } = await axios.post('/notifications/add', { title: `Event: ${event.title}!`, text: `You bought ticket for ${event.price} for event ${event.title}! This event will happen ${event.date}` });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  const handleSubmitPayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`
      },
      redirect: "if_required"
    })

    if (error) {
      navigate('/completion?status=failed');
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      addUserToEvent();
      addNotification();
      navigate('/completion?status=success');

    } else {
      navigate('/completion?status=failed');
    }

    setProcessing(false);

  }

  useEffect(() => {
    getEventData();
  }, []);


  return (
    <div className='payment'>
      <div className='payment__container'>
        <PaymentElement />
        <button disabled={processing} onClick={handleSubmitPayment}>Pay {price}$</button>
      </div>
    </div>
  )
}

export default PaymentPage;