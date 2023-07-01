import React, { useState, useEffect } from 'react'
import logo from "../../assets/images/logo.png";
import Navbar from '../navbar/Navbar';

const Header = () => {
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
	  window.addEventListener("scroll", () => {
		setScroll(window.scrollY > 10)
	  })
	}, []);
  return (
	<header className={scroll ? "fixed z-30 w-full scrolled bg-primary/90 shadow-lg [&_.brand-logo]:max-w-[150px]" : "fixed z-20 w-full transition-all duration-300" }>
		
	<div className="max-w-screen-xl mx-auto p-4">
	<div className='w-full flex justify-between items-center'>
	  <div className='brand-logo max-w-[200px] transition-all duration-300'>
	  	<img src={logo} alt="" />
	  </div>
	  <Navbar />
	</div>
	</div>
	</header>
  )
}

export default Header
