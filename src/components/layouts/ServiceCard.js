import React from 'react';
import { serviceData } from '../../constant';
const ServiceCard = ({icon, title, des}) => {
  return (
	// <div className="flex items-center mb-4">
	// 	<div className='flex justify-center items-center bg-white w-[50px] h-[50px] min-w-[50px] rounded-full text-primary mr-6'>			
	// 	{icon}
	// 	</div>
	// 	<div className='text-base [&_h4]:text-white [&_h4]:text-xl [&_h4]:mb-4'>
	// 		<h4><Link to='#'>{title}</Link></h4>
	// 		<p>{des}</p>
	// 	</div>
	// // </div>
	// <div>
	<div className="">
		{
		serviceData.map(({icon, title, des}) => (
					<div className='flex items-center mb-10'>
						<div className='flex justify-center items-center bg-white w-[50px] h-[50px] min-w-[50px] rounded-full text-primary mr-6'>			
						{icon}
						</div>
						<div className='text-base [&_h4]:text-white [&_h4]:text-xl [&_h4]:mb-4'>
						<h4>{title}</h4>
						{des}
						</div>
					</div>
				))
			}
	</div>
  )
}

export default ServiceCard
