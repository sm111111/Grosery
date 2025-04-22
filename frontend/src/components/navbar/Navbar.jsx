import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GiStaryu } from 'react-icons/gi';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { MdOutlineWifiTethering } from 'react-icons/md';
import { SiDogecoin, SiBinance } from 'react-icons/si';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { HiOutlineBars4 } from 'react-icons/hi2';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='navbar-container'>
            <div className="company-logo-name">
                <GiStaryu className="logo-icon" />
                <h1 className='company-name'>STARTHUB STORE</h1>
            </div>

            <div className={`payment-option ${open ? 'show' : ''}`}>
                <FaBitcoin className='cryptocurrency-icons' />
                <FaEthereum className='cryptocurrency-icons' />
                <MdOutlineWifiTethering className='cryptocurrency-icons' />
                <SiDogecoin className='cryptocurrency-icons' />
                <SiBinance className='cryptocurrency-icons' />
            </div>

            <div className={`navbar-tools ${open ? 'show' : ''}`}>
                <Link to='/all' className='navbar-link'>All Products</Link>
                <Link to='/collection' className='navbar-link'>Collections</Link>
                <Link to='/cart' className='navbar-link cart-link'>
                    <PiShoppingCartSimpleFill className='cart-icon' />
                </Link>
            </div>

            <div className="menu-toggle" onClick={() => setOpen(!open)}>
                <HiOutlineBars4 />
            </div>
        </div>
    );
};

export default Navbar;
