import { useState } from "react";
import { BiSolidCart } from "react-icons/bi";
import './MoreMarch.css'

const MoreMarch = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="MoreMarch-container"
            onClick={() => setIsHovered(!isHovered)}
        >
            <div className="MoreMarch-card">
                <img
                    src="https://shuffle.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0603%2F2028%2F4765%2Ffiles%2FIMG_6228.png%3Fv%3D1715923150&w=1920&q=75"
                    alt="Hoodie"
                />
            </div>

            {isHovered && (
                <div className="MoreMarch-after-hover">
                    <div className="MoreMarch-name-price">
                        <h3>Shuffle Hoodie</h3>
                        <h3>80.00 USD</h3>
                    </div>
                    <div className="MoreMarch-icon">
                        <BiSolidCart className="MoreMarch-icon-hover" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoreMarch;
