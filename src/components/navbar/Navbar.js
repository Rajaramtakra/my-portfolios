import React from 'react'
import { navLinksdata } from '../../constant';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
	<nav className='text-lg [&_ul]:flex [&_ul]:flex-wrap [&_ul]:justify-between [&_ul]:items-center [&_ul]:gap-10 [&_li]:text-white [&_li]:relative [&_li]:after:m-auto [&_a]:after:w-0 [&_a]:after:absolute [&_a]:after:bg-white [&_a]:after:h-[2px] [&_a]:after:left-[50%] [&_a]:after:right-[50%] [&_a]:after:-bottom-[5px] [&_a]:after:invisible hover:[&_a]:after:w-full [&_.active]:after:w-full hover:[&_a]:after:visible [&_.active]:after:visible hover:[&_a]:after:left-0 [&_.active]:after:left-0 hover:[&_a]:after:right-0 [&_.active]:after:right-0 [&_a]:after:transition-all [&_a]:after:duration-[.5s] [&_a]:cursor-pointer'>
		<ul>
			{
				navLinksdata.map(({_id, title, link}) => (
					<li key={_id}>
						<Link activeClass='active' to={link} spy={true} smooth={true} ofset={170} duration={500}>{title}</Link>
					</li>
				))
			}
		</ul>
	  </nav>
  )
}

export default Navbar
