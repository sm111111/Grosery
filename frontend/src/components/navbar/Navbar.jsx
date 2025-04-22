import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {
    GiStaryu,
    FaBitcoin,
    FaEthereum,
    MdOutlineWifiTethering,
    SiDogecoin,
    SiBinance,
    PiShoppingCartSimpleFill,
    HiOutlineBars4
} from 'react-icons/all';

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
