import React from 'react';
import './Move.css';
import { GiStaryu } from "react-icons/gi";


const Move = () => {
    const items = Array(20).fill("Shuffle Essentials"); // Creates 10 repeating items

    return (
        <div className='Move-container'>
            <div className="scrolling-wrapper">
                {items.map((item, index) => (
                    <div className="wrapper-move" key={index}>
                        <GiStaryu className='wrapper-move-icon' />
                        <p className='move-name'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Move;
