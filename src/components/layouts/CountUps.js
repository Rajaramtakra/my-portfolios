import React from 'react';
import { countData } from '../../constant';
import CountUp from 'react-countup';

const CountUps = () => {
  return (
	<div>
	  {
		countData.map(({des}) => (
			<div className='w-full lg:w-1/3 md:w-1/2 px-4'>
					<div className='mt-4 font-bold w-[240px] h-[240px] m-auto p-3 border-[10px] border-white/20 rounded-full flex flex-wrap justify-center items-center [&_h2]:mb-0 [&_h2]:text-white [&_span]:text-6xl [&_h6]:font-medium [&_h6]:-mt-14 [&_h6]:text-white [&_h6]:mb-0'>
						<h2><CountUp 
						enableScrollSpy = {"true"}
						start={0}
						end = { 5 }
						duration= { 10 }
						/></h2>
						<span>+</span>
						<h6>{des}</h6>
					</div> 
				</div>
		  ))
	  }
	</div>
  )
}

export default CountUps
