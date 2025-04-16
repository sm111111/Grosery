import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GiStaryu } from "react-icons/gi";

import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineWifiTethering } from "react-icons/md";
import { SiDogecoin } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { HiOutlineBars4 } from "react-icons/hi2";

const Navbar = () => {
    return <div className='navbar-container'>

        <div className="company-logo-name">
            <GiStaryu className='company-logo' />
            <h1 className='company-name'>STARTHUB STORE</h1>
        </div>

        <div className="paymnet-option">
            <h4>We accept</h4>
            <FaBitcoin className='cryptocurrency-icons ' />
            <FaEthereum className='cryptocurrency-icons' />
            <MdOutlineWifiTethering className='cryptocurrency-icons' />
            <SiDogecoin className='cryptocurrency-icons' />
            <SiBinance className='cryptocurrency-icons' />
        </div>

        <div className="navbarTools">
            <Link to='/all' className='navbarTools-link'>All Products</Link>
            <Link to='/collection' className='navbarTools-link' >Collections</Link>
            <Link to='/cart' className='navbarTools-link'>
                <PiShoppingCartSimpleFill className='cart-icon' />
            </Link>
        </div>

        <div className="phone-view">
            <GiStaryu />
            <HiOutlineBars4 />
        </div>
    </div>

};

export default Navbar;