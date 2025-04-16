import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='Footer-container'>
            <div className="top-footer">
                <img src="https://shuffle.store/_next/image?url=https%3A%2F%2Fja3jpvgkfodhay3v.public.blob.vercel-storage.com%2Fhomepage_bottom_banner-HI37E9oZWtBoB6QpwK17T8fTZXxkU0.webp&w=1920&q=75" alt="" />
            </div>

            <footer className='footers'>
                <div className="navigation-tools">
                    <Link to='/' className='navigation-tools-link'>home</Link>
                    <Link to='/cart' className='navigation-tools-link'>cart</Link>
                    <Link to='/all' className='navigation-tools-link'>all product</Link>
                    <Link to='/collection' className='navigation-tools-link'>collections</Link>
                </div>

                <div className="other-tools">
                    <p>© 2024, Shuffle.store Operated by Studio Plaid. Need help?
                        <b> Email support@shuffle.store</b></p>
                    <div className="refund-privary-tos">
                        <Link to='/refund' className='refund-privary-tos-link'> refund</Link>
                        <Link to='/privacypolicy' className='refund-privary-tos-link'> privary policy</Link>
                        <Link to='/termsandservices' className='refund-privary-tos-link'> term of services</Link>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer