import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import './AddToCartPage.css';
import { useNavigate } from 'react-router-dom'

const CartItem = ({ item, removeItem }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="product-img" />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Size: <span>{item.size}</span></p>
                <p>Price: <span>${item.price} x {item.quantity}</span></p>
            </div>
            <button className="remove-item-btn" onClick={() => removeItem(item.id)}>
                <FaTrash />
            </button>
        </div>
    );
};

const AddToCartPage = () => {
    const [allcart, setAllcart] = useState([]);
    const [userName, setUserName] = useState('John Doe');

    const navigate = useNavigate();

    const navigatePayment = (e) => {
        e.preventDefault();
        navigate('/pay')
    }

    useEffect(() => {
        axios.get('https://grosery-2.onrender.com/api/cart')
            .then(response => {
                setAllcart(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the cart data: ', error);
            });
    }, []);

    // Remove item from the cart
    const removeItem = async (id) => {
        try {
            await axios.delete(`https://grosery-2.onrender.com/api/cart/${id}`);
            setAllcart(allcart.filter(item => item.id !== id)); // Update local state
        } catch (error) {
            console.error('There was an error removing the item: ', error);
        }
    };

    // Calculate total price
    const totalPrice = allcart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="cart-page">
            <h2>{userName}'s Cart</h2>
            {allcart.length > 0 ? (
                <div className="cart-items">
                    {allcart.map((item) => (
                        <CartItem key={item.id} item={item} removeItem={removeItem} />
                    ))}
                    <div className="cart-total">
                        <strong>Total: <span>${totalPrice.toFixed(2)}</span></strong>
                    </div>
                    <button className="checkout-btn" onClick={navigatePayment}>Proceed to Checkout</button>
                </div>
            ) : (
                <p className="empty-cart" >Your cart is empty.</p>
            )}
        </div>
    );
};

export default AddToCartPage;
