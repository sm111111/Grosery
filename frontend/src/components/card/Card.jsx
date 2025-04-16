import React from 'react';
import './Card.css';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Card = ({ img, name, price, size = "large" }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    return <div className={`card-container ${size}`} >

        <div className="img-wrapper">
            <img src={img} alt={name} />
        </div>

        <div className="name-price-cart">
            <div className="name-price-cart-name-price">
                <p>{name}</p>
                <p>$ {price}</p>
            </div>

            <div className="name-price-cart-cart">
                <PiShoppingCartSimpleFill />
            </div>
        </div>

    </div>;
};

export default Card;