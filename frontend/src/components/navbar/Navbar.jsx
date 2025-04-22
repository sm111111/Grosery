import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { MdOutlineWifiTethering } from 'react-icons/md';
import { SiDogecoin, SiBinance } from 'react-icons/si';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { HiOutlineBars4 } from 'react-icons/hi2';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className='glass-navbar'>
            <h2 className='logo-text'>STARTHUB</h2>

            <nav className={`nav-links ${open ? 'show' : ''}`}>
                <Link to='/all'>All Products</Link>
                <Link to='/collection'>Collections</Link>
                <Link to='/cart' className='cart-icon-link'>
                    <PiShoppingCartSimpleFill />
                </Link>
            </nav>

            <div className={`crypto-icons ${open ? 'show' : ''}`}>
                <FaBitcoin />
                <FaEthereum />
                <MdOutlineWifiTethering />
                <SiDogecoin />
                <SiBinance />
            </div>

            <button className="menu-btn" onClick={() => setOpen(!open)}>
                <HiOutlineBars4 />
            </button>
        </header>
    );
};

export default Navbar;
