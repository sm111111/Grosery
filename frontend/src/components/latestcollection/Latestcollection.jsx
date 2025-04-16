import React from 'react'
import './Latestcollection.css'
import { GiStaryu } from "react-icons/gi";


const Latestcollection = () => {
    return (
        <div className='Latestcollection-container'>
            <div className="collection-name">
                <GiStaryu className='collection-icon' />
                <h1 className='collection-icon-name'>latest collection</h1>
                <GiStaryu className='collection-icon' />
            </div>

            <div className="collection-categogry">

                <div className="left-collection">
                    <img src="https://shuffle.store/_next/image?url=https%3A%2F%2Fja3jpvgkfodhay3v.public.blob.vercel-storage.com%2Fhomepage_banner-EAjFvZI4pGYAX5iHw9MNZHBZPs40Vk.webp&w=1920&q=75" alt="" />

                    <p className='left-collection-name'>Ket.club</p>
                </div>

                <div className="rigth-collection">
                    <img src="https://shuffle.store/_next/image?url=https%3A%2F%2Fja3jpvgkfodhay3v.public.blob.vercel-storage.com%2Fhomepage_banner-EAjFvZI4pGYAX5iHw9MNZHBZPs40Vk.webp&w=1920&q=75" alt="" />

                    <p className='left-collection-name'>suffle essentials</p>
                </div>


            </div>



        </div>
    )
}

export default Latestcollection