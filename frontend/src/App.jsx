import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div className='app-container'>
      <section className='app-navbar'>
        <Navbar />
      </section>

      <section className='section-container'>
        <Outlet />
      </section>

      <Footer />



    </div>
  )
}

export default App
