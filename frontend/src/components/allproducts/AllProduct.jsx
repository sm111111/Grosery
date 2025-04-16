import React, { useState, useEffect } from 'react';
import './AllProduct.css';
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import axios from 'axios';

const AllProduct = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/allclothdata')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Search Filter
    const filteredData = data.filter((item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sorting Functionality
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOption === 'latest') return new Date(b.date) - new Date(a.date);
        if (sortOption === 'lowToHigh') return a.productPrice - b.productPrice;
        if (sortOption === 'highToLow') return b.productPrice - a.productPrice;
        return 0;
    });

    return (
        <div className='AllProduct-container'>
            {/* Search Area */}
            <div className="search-area">
                <input
                    type="text"
                    placeholder='Search here...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button><FiSearch className='search-area-icon' /></button>
            </div>

            <div className="allproduct-two-section">
                {/* Sorting Area */}
                <div className="leftSide-allproduct">
                    <span>Sort by</span>
                    <button onClick={() => setSortOption('latest')} style={{
                        background: 'transparent',
                        border: '1px solid white',
                        padding: '8px 12px',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }} >Latest Arrivals</button>
                    <button onClick={() => setSortOption('lowToHigh')} style={{
                        background: 'transparent',
                        border: '1px solid white',
                        padding: '8px 12px',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }} >Price: Low to High</button>
                    <button onClick={() => setSortOption('highToLow')} style={{
                        background: 'transparent',
                        border: '1px solid white',
                        padding: '8px 12px',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }} >Price: High to Low</button>
                </div>

                {/* Display Products */}
                <div className="rigthSide-allproduct">
                    {sortedData.map((item) => (
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
        </div>
    );
};

export default AllProduct;
