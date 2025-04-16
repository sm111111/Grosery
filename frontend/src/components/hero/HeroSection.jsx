import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const heroToCollection = useNavigate();

    const heroToCollectionNavigation = (e) => {
        e.preventDefault();
        heroToCollection('./collection')
    }

    return <div className='hero-section'>
        <img src="https://shuffle.store/_next/image?url=https%3A%2F%2Fja3jpvgkfodhay3v.public.blob.vercel-storage.com%2Fhomepage_banner-EAjFvZI4pGYAX5iHw9MNZHBZPs40Vk.webp&w=1920&q=75" alt="" />

        <button className='hero-section-button' onClick={heroToCollectionNavigation}>
            view the collection
        </button>

    </div>;
};

export default HeroSection;