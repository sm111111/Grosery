import React, { useState, useEffect } from 'react';
import './Collectinos.css'
import Card from '../card/Card'
import Move from '../move/Move'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Collectinos = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://grosery-2.onrender.com/api/allclothdata')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className='Collectinos-container'>

            <Move />

            <div className="Collectinos-wrapper">
                <img src="https://shuffle.store/_next/image?url=https%3A%2F%2Fja3jpvgkfodhay3v.public.blob.vercel-storage.com%2Fcollection_banner-wfFttNrw7n6xmYyoD0RlWPhk9EiSeU.webp&w=1920&q=75" alt="" />
            </div>



            {/* here i have to a card  */}
            <div className="bottom-all-result-collection">
                {data.map((item) => (
                    <div key={item.id} onClick={() => navigate(`/product/${item.id}`)} style={{ cursor: 'pointer' }}>
                        <Card
                            img={item.productImages[0].photos1}
                            name={item.productName}
                            price={item.productPrice}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Collectinos