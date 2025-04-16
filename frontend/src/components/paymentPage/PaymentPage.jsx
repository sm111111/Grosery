import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCcMastercard, FaCcVisa, FaGooglePay, FaApplePay } from 'react-icons/fa';
import './PaymentPage.css';

const PaymentPage = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [upiId, setUpiId] = useState('');


    useEffect(() => {
        axios.get('http://localhost:5000/api/cart')
            .then(response => {
                const price = response.data.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                setTotalPrice(price);
            })
            .catch((error) => {
                console.error('Error fetching cart data: ', error);
            });
    }, []);

    const handlePaymentOptionClick = (method) => {
        setPaymentMethod(method);
    };

    const handlePayment = () => {
        if (paymentMethod === 'MasterCard' || paymentMethod === 'Visa') {

            if (!cardNumber || !cvv) {
                alert('Please fill in your card details');
                return;
            }
        } else if (paymentMethod === 'Google Pay' || paymentMethod === 'Apple Pay') {

            if (!upiId) {
                alert('Please provide your UPI ID');
                return;
            }
        }
        alert(`Payment of $${totalPrice.toFixed(2)} processed via ${paymentMethod}`);
    };

    return (
        <div className="payment-page">
            <h2>Payment Options</h2>

            <div className="cart-total">
                <strong>Total: <span>${totalPrice.toFixed(2)}</span></strong>
            </div>

            <div className="payment-methods">
                <button className="payment-option" onClick={() => handlePaymentOptionClick('MasterCard')}>
                    <FaCcMastercard size={30} color="#ff6f00" />
                    Pay with MasterCard
                </button>
                <button className="payment-option" onClick={() => handlePaymentOptionClick('Visa')}>
                    <FaCcVisa size={30} color="#1a73e8" />
                    now Pay with Visa also
                </button>
                <button className="payment-option" onClick={() => handlePaymentOptionClick('Google Pay')}>
                    <FaGooglePay size={30} color="#4285F4" />
                    Pay with Google Pay
                </button>
                <button className="payment-option" onClick={() => handlePaymentOptionClick('Apple Pay')}>
                    <FaApplePay size={30} color="#000000" />
                    Pay with Apple Pay
                </button>
            </div>


            {paymentMethod === 'MasterCard' || paymentMethod === 'Visa' ? (
                <div className="payment-form">
                    <label>Card Number:</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Enter card number"
                    />
                    <label>CVV:</label>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="Enter CVV"
                    />
                </div>
            ) : paymentMethod === 'Google Pay' || paymentMethod === 'Apple Pay' ? (
                <div className="payment-form">
                    <label>UPI ID:</label>
                    <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="Enter UPI ID"
                    />
                </div>
            ) : null}


            {paymentMethod && (
                <button className="pay-btn" onClick={handlePayment}>
                    Pay ${totalPrice.toFixed(2)}
                </button>
            )}
        </div>
    );
};

export default PaymentPage;
