import React from 'react'
import pattern from "../../assets/images/pattern.png";
import { Link } from 'react-scroll';
import { FaPaperPlane } from 'react-icons/fa';
import TitleAlt from '../layouts/TitleAlt';

const Details = () => {
  return (
	<section id='details' className='relative bg-primary z-10 py-28 xl:py-40 xl:pb-52 before:bg-primary-100/75 before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10 after:bg-white after:h-28 after:w-full after:skew-y-2 after:absolute after:-bottom-10 after:left-0 after:-z-10' style={{background:`url(${pattern})`}}>
	  <div className="relative max-w-screen-xl m-auto text-white px-4 flex">
		<div className="basis-full md:basis-1/2 [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4">
			<TitleAlt title="Details" subTitle="Details" />
			<p>You showcase me your website idea, I’ll make it a reality. I provide full range of Custom Website Design, Web Development services to all kinds of business weather small, large or medium size. I design websites which are distinct in nature with greater accessibility. My services can be a boon to your organization in making your business global, therefore to maintain our relation longevity I also offer service of revised website design. For price and service related queries please contact me.</p>
			<Link className='mt-2 md:mt-6 border-2 px-14 py-4 inline-block [&_svg]:inline-block text-[1rem] uppercase transition-all hover:bg-primary-200'>View In details <FaPaperPlane /></Link>
		</div>
	  </div>
	</section>
  )
}

export default Details
