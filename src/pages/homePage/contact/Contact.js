import React from 'react';
import TitleAlt from '../../../components/layouts/TitleAlt';
import { socialData } from '../../../constant';
import mapBg from "../../../assets/images/map.jpg";
import { Parallax } from 'react-parallax';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
	<Parallax bgImage={mapBg} strength={300}>
	<section id='contact' className='relative z-10 py-28 xl:py-40 xl:pb-52 before:bg-primary-100/90 before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10'>
	  <div className="relative max-w-screen-xl m-auto text-white px-4">
		<div className="text-center [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4 [&_.heading:after]:m-auto">
			<TitleAlt title="Contact Me" subTitle="Contact Me" />
			</div>
			<div className="flex flex-wrap">
				<div className="w-full md:w-1/2 [&_ul]:flex [&_ul]:text-[27px] [&_ul]:gap-5 [&_ul]:my-4 lg:[&_ul]:my-8 [&_p:first-child]:text-[21px] [&_span]:block [&_span]:uppercase">
					<div className='max-w-[26rem] [&_a]:block [&_li:hover]:-translate-y-1 transition-all'>
						<p><span>NAMASTE,</span> I am Looking For Next Exciting Project. Can't Wait Anymore! Are You The One, I am looking For?</p>
						<p>Rajaram Takra, <br/> Bhaktapur, Nepal <br/> +(977) 9841110019</p>
						<ul>
						{
							socialData.map(({icon, link}) => (
								
								<li> <a href={link}>{icon}</a> </li>
							))
						}
						</ul>
						<a href="mailto:crisalnp@gmail.com">crisalnp@gmail.com</a>
					</div>
				</div>
				<div className='w-full md:w-1/2'>
					<ContactForm />
				</div>
			</div>
	  </div>
	</section>
	</Parallax>
  )
}

export default Contact
