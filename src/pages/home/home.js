import React from 'react'
import './home.css'
import Sidebar from "../../components/sidebar/sidebar.js";
import Navbar from "../../components/navbar/navbar.js";
import Dashboard from "../../components/dashboard/dashboard.js";

const Home = () => {
  return (
    <div className='home'>
        <div className='home__right'>
            <Sidebar/>
        </div>
        <div className='home__left'>
           <Navbar/>
           <Dashboard/> 
        </div>

    </div>
  )
}

export default Home