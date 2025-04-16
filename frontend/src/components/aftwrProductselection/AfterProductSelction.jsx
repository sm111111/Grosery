import React from 'react'
import './AfterProductSelction.css'
import DetailsPage from '../deatilsPage/DetailsPage'
import MoreMarch from '../moremarch/MoreMarch'

const AfterProductSelction = () => {
    return (
        <div className='AfterProductSelction'>
            <DetailsPage />

            <h1>more March</h1>
            <MoreMarch />
        </div>
    )
}

export default AfterProductSelction