import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css';
import { FiPlus } from "react-icons/fi";
import { FaMinus, FaCartShopping } from "react-icons/fa6";

const DetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);


    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/allclothdata')
            .then(response => {
                const selectedProduct = response.data.find(item => item.id === parseInt(id));
                setProduct(selectedProduct);
            })
            .catch((error) => {
                console.error('Error fetching data for details page:', error);
            });
    }, [id]);

    const handleQuantityChange = (action) => {
        if (action === "increase") {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (action === "decrease" && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const SendToCart = async (e) => {
        e.preventDefault();

        if (!selectedSize) {
            alert("Please select a size before adding to cart!");
            return;
        }

        const cartData = {
            clothName: product.productName,
            price: product.productPrice,
            size: selectedSize,
            quantity: quantity
        };

        try {
            // Send the POST request to add the product to the cart
            await axios.post('http://localhost:5000/api/cart', cartData);
            alert("Product added to cart successfully!");
            setTimeout(() => navigate('/cart'), 2000)
        } catch (error) {
            console.error('There was an error sending data to the server', error);
        }
    };

    if (!product) {
        return <h2>Product not found...</h2>;
    }

    return (
        <div className='DetailsPage-container'>
            <div className="DetailsPage-leftSide">
                <div className="deatils-imgWrapper">
                    <img src={product.productImages[0]?.photos1} alt={product.productName} />
                </div>

                <div className="extra-cloth">
                    {product.productImages.map((imageObj, index) => {
                        const imageUrl = Object.values(imageObj)[0]; // Extract image URL
                        return (
                            <div key={index} className="deatils-imgWrapper-small">
                                <img src={imageUrl} alt={`Product ${index + 1}`} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="DetailsPage-rightSide">
                <div className="product-name-price">
                    <p>{product.productName}</p>
                    <p>${product.productPrice}</p>
                </div>

                <div className="size">
                    <span>Size:</span>
                    {product.productSize.map((size, index) => (
                        <span
                            key={index}
                            onClick={() => setSelectedSize(size)}
                            className={selectedSize === size ? 'selected' : ''}
                        >
                            {size.toUpperCase()}
                        </span>
                    ))}
                </div>

                <div className="DESCRIPTION">
                    <h4>{product.productDescription}</h4>
                    <h4>Details:</h4>
                    <ul>
                        <li>Rib knit hem and cuffs</li>
                        <li>Oversized fit</li>
                        <li>Shuffle logo print</li>
                        <li>Raglan shoulders</li>
                    </ul>
                    <h4>Female model is 170cm/ 5'7 and wears size S</h4>
                    <h4>Male model is 182.5cm/ 6'0 and wears size M</h4>
                </div>

                <div className="cart-increse-decrese">
                    <div className="increse-decrese">
                        <h2>Quantity</h2>
                        <div className="i-d">
                            <span onClick={() => handleQuantityChange("decrease")}><FaMinus /></span>
                            <p>{quantity}</p>
                            <span onClick={() => handleQuantityChange("increase")}><FiPlus /></span>
                        </div>
                    </div>

                    <div className="cart-details">
                        <button onClick={SendToCart}>Add to cart <FaCartShopping /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
