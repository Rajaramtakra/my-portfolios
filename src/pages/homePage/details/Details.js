import React from 'react'
import detailsBg from "../../../assets/images/bg-2.jpg";
import TitleAlt from '../../../components/layouts/TitleAlt';
import CountUps from '../../../components/layouts/CountUps';
import { Parallax } from "react-parallax";


const Details = () => {
  return (
	<Parallax bgImage={detailsBg} strength={300}>
	<section id='details' className='relative  z-10 py-28 xl:py-40 xl:pb-52 before:bg-primary-100/80 before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10 after:bg-white after:h-28 after:w-full after:skew-y-2 after:absolute after:-bottom-10 after:left-0  after:-z-10'>
		
	  <div className="relative text-center max-w-screen-xl m-auto text-white px-4">
		<div className="w-full [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4 [&_.heading:after]:m-auto">
			<TitleAlt title="Details" subTitle="Details" />
		</div>
		<div>
			<CountUps />
		</div>
	  </div>
	  
	</section>
	</Parallax>
	
  )
}

export default Details
