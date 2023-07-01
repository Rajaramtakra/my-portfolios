import React from 'react'
import logo from "../../assets/images/logo.png";
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
	<header className='fixed z-20 w-full'>
	<div className="max-w-screen-xl mx-auto p-4">
	<div className='w-full flex justify-between items-center'>
	  <div className='max-w-[200px]'>
	  	<img src={logo} alt="" />
	  </div>
	  <Navbar />
	</div>
	</div>
	</header>
  )
}

export default Header
