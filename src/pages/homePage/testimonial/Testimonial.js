import React from 'react';
import Title from '../../../components/layouts/Title';
import TestimonialItem from '../../../components/layouts/TestimonialItem';

const Testimonial = () => {
	
  return (
	<section id='testimonial' className='relative bg-white z-20 after:bg-white after:h-28 after:w-full after:skew-y-2 after:absolute after:-bottom-10 after:left-0 after:-z-10'>
		<div className="relative max-w-screen-lg m-auto py-8 lg:pb-24 px-4 [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4">
			<Title title="Testimonials" subTitle="Testimonials" />
			<div className='md:mt-16'>
			<TestimonialItem />
			</div>
		</div>
	</section>
  )
}

export default Testimonial
