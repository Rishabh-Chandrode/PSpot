import React from 'react'
import "./sidebar.css"

import carimage from "../../images/carimage.webp";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__image__wrapper'>
        <img src={carimage} alt='carimage' className='sidebar__image' />
      </div>
      <div className='sidebar__item__wrapper'>
        <div className='sidebar__item'>
          dashboard
        </div>
      </div>
    </div>
  )
}

export default Sidebar 