import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HeroSection from '../hero/HeroSection'
import Move from '../move/Move'
import Card from '../card/Card'
import Latestcollection from '../latestcollection/Latestcollection'
import axios from 'axios'
import './HomeLanding.css'

const HomeLanding = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/allclothdata')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='HomeLanding-container'>
            <HeroSection />
            <Move />
            <div className="viewAll">
                <div className="viewresult">
                    {data.slice(0, 4).map((item) => (
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
            <Latestcollection />
        </div>
    );
};


export default HomeLanding