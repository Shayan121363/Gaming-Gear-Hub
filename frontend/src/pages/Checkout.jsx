import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Load Stripe outside of components' render to avoid recreating Stripe object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    // Call backend to create payment intent
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/checkout/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount * 100 }), // Amount in cents
      });
      
      const { clientSecret } = await response.json();

      // For testing purposes, if it's a dummy secret, just mock success
      if (clientSecret === 'pi_dummy_secret_dummy') {
         setTimeout(() => {
           setSucceeded(true);
           setProcessing(false);
         }, 1500);
         return;
      }

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
      }
    } catch (err) {
      setError('An error occurred during payment processing.');
      setProcessing(false);
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: "#ffffff",
        fontFamily: 'Inter, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#a0a0a5"
        }
      },
      invalid: {
        color: "#e63946",
        iconColor: "#e63946"
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-container">
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Secure Checkout</h2>
      <p style={{ marginBottom: '2rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
        Total to pay: <span style={{ color: 'var(--color-accent-primary)', fontWeight: 'bold' }}>${amount.toFixed(2)}</span>
      </p>

      <div className="StripeElement">
        <CardElement options={cardStyle} />
      </div>

      {error && <div style={{ color: 'var(--color-accent-primary)', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
      
      {succeeded ? (
        <div style={{ color: '#4ade80', textAlign: 'center', fontWeight: 'bold', padding: '1rem', border: '1px solid #4ade80', borderRadius: '8px' }}>
          Payment Succeeded! Thank you for your purchase.
        </div>
      ) : (
        <button 
          disabled={processing || disabled || succeeded} 
          className="btn-primary" 
          style={{ width: '100%', marginTop: '1rem' }}
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner">Processing...</div> : "Pay Now"}
          </span>
        </button>
      )}
    </form>
  );
};

const Checkout = () => {
  const location = useLocation();
  const amount = location.state?.amount || 0; // Default to 0 if not coming from gear store
  const itemName = location.state?.itemName || 'Items';

  return (
    <div className="container section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {amount > 0 ? (
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} />
          </Elements>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', padding: '4rem 0' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-text-primary)' }}>Your Cart is Empty</h2>
            <p style={{ marginBottom: '2rem' }}>You haven't added any gear to your cart yet.</p>
            <a href="/gear" className="btn-primary">Browse Gear Store</a>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Checkout;
