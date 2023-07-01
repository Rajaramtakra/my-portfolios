import React from 'react'
import TitleAlt from '../layouts/TitleAlt'

const Contact = () => {
  return (
	<section id='contact' className='relative bg-primary z-10 py-28 xl:py-40 xl:pb-52 before:bg-primary-100/75 before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10'>
	  <div className="relative max-w-screen-xl m-auto text-white px-4 flex">
		<div className="basis-full md:basis-1/2 [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4">
			<TitleAlt title="Contact Me" subTitle="Contact Me" />
			<p>You showcase me your website idea, I’ll make it a reality. I provide full range of Custom Website Design, Web Development services to all kinds of business weather small, large or medium size. I design websites which are distinct in nature with greater accessibility. My services can be a boon to your organization in making your business global, therefore to maintain our relation longevity I also offer service of revised website design. For price and service related queries please contact me.</p>
		</div>
	  </div>
	</section>
  )
}

export default Contact
