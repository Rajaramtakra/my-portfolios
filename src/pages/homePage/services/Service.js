import React from 'react'
import serviceBG from "../../../assets/images/services.jpg";
import { Link } from 'react-scroll';
import { FaPaperPlane } from 'react-icons/fa';
import TitleAlt from '../../../components/layouts/TitleAlt';
import ServiceCard from '../../../components/layouts/ServiceCard';
import { Parallax } from "react-parallax";




const Service = () => {
  return (
	<Parallax bgImage={serviceBG} strength={300}>
	<section id='service' className='relative z-10 py-28 xl:py-40 xl:pb-52 before:bg-primary-100/90 before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10 after:bg-white after:h-28 after:w-full after:-skew-y-2 after:absolute after:-bottom-10 after:left-0 after:-z-10 !bg-no-repeat !bg-cover'>
	  	<div className="relative max-w-screen-xl m-auto text-white px-4 flex flex-wrap">
			<div className="basis-full md:basis-1/2 [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4 md:pr-[3.6rem] mb-8">
				<TitleAlt title="Services" subTitle="Services" />
				<p>You showcase me your website idea, I’ll make it a reality. I provide full range of Custom Website Design, Web Development services to all kinds of business weather small, large or medium size. I design websites which are distinct in nature with greater accessibility. My services can be a boon to your organization in making your business global, therefore to maintain our relation longevity I also offer service of revised website design. For price and service related queries please contact me.</p>
				<Link className='mt-2 md:mt-6 border-2 px-14 py-4 inline-block [&_svg]:inline-block text-[1rem] uppercase transition-all hover:bg-primary-200'>View In details <FaPaperPlane /></Link>
			</div>
			<div className="basis-full md:basis-1/2">
				<ServiceCard />
			</div>
		</div>
	</section>
	</Parallax>
  )
}

export default Service
