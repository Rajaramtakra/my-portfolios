import React from 'react';
import { portfolioData } from '../../../constant/';
import { motion } from 'framer-motion';

const Wordpress = () => {
  return (
	<div className='flex flex-wrap -mx-1 justify-center'>
		{portfolioData.filter(portfolio => {
          return portfolio.des === 'Web Development, Wordpress';
        })
		.map(portfolio => {
			return (
			  <motion.div
			  layoutScroll
			  initial ={{ scale: 0, opacity: 0}}
			  whileInView={{ scale: 1, opacity: 1 }}
			  transition={{duration: .5, delay: 0.1}}
				className='w-full sm:w-1/2 md:w-1/3 px-1 mt-2'>
				<div className='relative [&_.info]:hover:scale-[1]'>
				<figure className='[&_img]:h-[224px] [&_img]:w-full [&_img]:object-cover'>
				<img src={portfolio.image} alt="" />
				</figure>
				<div className='info absolute top-0 left-0 text-white w-full h-full flex flex-wrap items-center justify-center bg-primary/90 scale-0 transition-all duration-300 [&_span]:block [&_a:after]:content-[""]  [&_a:after]:w-full [&_a:after]:h-full [&_a:after]:absolute [&_a:after]:top-0 [&_a:after]:left-0'>
				<a href="*">{portfolio.title} <span>{portfolio.des}</span></a>				
				</div>
				</div>
			  </motion.div>
			);
		  })}
	</div>
  )
}

export default Wordpress
