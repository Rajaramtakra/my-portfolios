import React from 'react'
import detailsBg from "../../../assets/images/bg-2.jpg";
import TitleAlt from '../../../components/layouts/TitleAlt';
import CountUp from 'react-countup';

const Details = () => {
  return (
	<section id='details' className='relative bg-primary z-10 py-28 xl:py-40 xl:pb-52 before:bg-primary-100/80 before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10 after:bg-white after:h-28 after:w-full after:skew-y-2 after:absolute after:-bottom-10 after:right-0 after:left-0 after:m-auto after:-z-10' style={{background:`url(${detailsBg})`}}>
	  <div className="relative text-center max-w-screen-xl m-auto text-white px-4">
		<div className="w-full [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4">
			<TitleAlt title="Details" subTitle="Details" />
		</div>
		<div className="flex flex-wrap -mx-4">
			<div className='w-full lg:w-1/3 md:w-1/2 px-4'>
				<div className='mt-4 font-bold w-[240px] h-[240px] m-auto p-3 border-[10px] border-white/20 rounded-full flex flex-wrap justify-center items-center [&_h2]:mb-0 [&_h2]:text-white [&_span]:text-6xl [&_h6]:font-medium [&_h6]:-mt-14 [&_h6]:text-white [&_h6]:mb-0'>
					<h2><CountUp 
					enableScrollSpy = {"true"}
					start={0}
					end = { 5 }
					duration= { 10 }
					/></h2>
					<span>+</span>
					<h6>TOTAL WORKING EXPERIENCE</h6>
				</div> 
			</div>
			<div className='w-full lg:w-1/3 md:w-1/2 px-4'>
				<div className='mt-4 font-bold w-[240px] h-[240px] m-auto p-3 border-[10px] border-white/20 rounded-full flex flex-wrap justify-center items-center [&_h2]:mb-0 [&_h2]:text-white [&_span]:text-6xl [&_h6]:font-medium [&_h6]:-mt-14 [&_h6]:text-white [&_h6]:mb-0'>
					<h2><CountUp 
					enableScrollSpy = {"boolean"}
					start={0}
					end = { 300 }
					duration= {5 }
					/></h2>
					<span>+</span>
					<h6>TOTAL WORKING EXPERIENCE</h6>
				</div> 
			</div>
			<div className='w-full lg:w-1/3 md:w-1/2 px-4'>
				<div className='mt-4 font-bold w-[240px] h-[240px] m-auto p-3 border-[10px] border-white/20 rounded-full flex flex-wrap justify-center items-center [&_h2]:mb-0 [&_h2]:text-white [&_span]:text-6xl [&_h6]:font-medium [&_h6]:-mt-14 [&_h6]:text-white [&_h6]:mb-0'>
					<h2><CountUp 
					enableScrollSpy = {"boolean"}
					start={0}
					end = { 150 }
					duration= {5 }
					/></h2>
					<span>+</span>
					<h6>TOTAL WORKING EXPERIENCE</h6>
				</div> 
			</div>
		</div>
	  </div>
	</section>
  )
}

export default Details
