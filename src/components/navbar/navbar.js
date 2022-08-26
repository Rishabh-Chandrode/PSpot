import React from 'react'
import './navbar.css'
import { BiArrowBack } from 'react-icons/bi';
const Navbar = () => {
  return (
    <div className='navbar' >
<div onClick={()=> {window.location.reload()}}>
<BiArrowBack className='backarrow' />
</div>
    </div>
  )
}

export default Navbar