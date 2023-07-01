import React from 'react';
import { Link } from 'react-scroll';
import me from '../../assets/images/rajaram-takra-250x250.jpg';
import signature from '../../assets/images/signature.png';
import resume from '../../assets/images/rajaramtakra.pdf';
import { FaDownload, FaLongArrowAltRight } from 'react-icons/fa';
import Title from '../layouts/Title';
import {motion} from 'framer-motion';

const Aboutme = () => {
  return (
	<section id='about' className='relative bg-white z-20 after:bg-white after:h-28 after:w-full after:skew-y-2 after:absolute after:-bottom-10 after:left-0 after:-z-10'>
		<div className="relative max-w-[1170px] m-auto py-8 xl:pb-24 px-4 [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4">
			<div className="flex flex-wrap items-center -mx-4">
				<div className="basis-full lg:basis-4/12 py-x text-center max-lg:mb-8">
					<figure className='relative w-[250px] inline-block h-[250px] rounded-full border-[15px] border-primary overflow-hidden [&_span]:absolute [&_span]:bg-primary/50 [&_span]:text-white [&_span]:top-0 [&_span]:bottom-0 [&_span]:left-0 [&_span]:right-0 [&_span]:flex [&_span]:justify-center [&_span]:items-center [&_span]:scale-0 [&_span]:hover:scale-100 [&_span]:transition-all [&_span]:duration-500 [&_span]:rounded-full'>
						<img src={me} alt="Me" />
						<span>That's Me!</span>
					</figure>
				</div>
				<div className="basis-full lg:basis-8/12 px-4">
				<Title title="Who Is Rajaram?" subTitle="Who Is Rajaram?" />
				<p>Hello, I am Rajaram Takra a Nepal based Web Designer and Developer who has been engrossed in this field since 2010. With decades of experience and technical knowledge I have further managed to sharpen my skills in Web development which has further opened a gateway for me to work with national as well as international clients. When talking about my web designing knowledge I ideally find myself in a position where I understand both the traditional and modern approach of Web Development. My skills are not only confined to Web Development and Design but has also spread its wings in Graphic Design, Front end development and more…</p>
				<figure className='w-[250px] mt-6'><img src={signature} alt="Signature" /></figure>
			<div className='gap-5 flex flex-wrap mt-4'>
				<Link className='flex justify-between items-center max-sm:w-full mt-2 md:mt-6 text-white bg-primary text-[1rem] uppercase transition-all hover:bg-primary-200 [&_span]:p-3 [&_span]:px-4' to={"about"}><span>Start Project With Me</span> <FaLongArrowAltRight className='h-full bg-black/20 p-3 text-2xl w-12' /></Link>
				<Link className='mt-2 md:mt-6 max-sm:w-full flex items-center text-white bg-primary text-[1rem] uppercase transition-all hover:bg-primary-200 [&_span]:p-3 [&_span]:px-4' to={resume}> <FaDownload className='bg-black/20 p-3 text-2xl w-12 h-full'/> <span>Download Resume</span></Link>
			</div>
				</div>
			</div>
		</div>
		<div className='border-t border-black/20 py-4 pt-8 lg:py-14 xl:py-24 px-4'>
			<div className="max-w-screen-xl m-auto">
				<div className="text-center [&_h4]:text-primary [&_h4]:uppercase lg:[&_h4]:text-3xl">
					<h4>Front End Development</h4>

					<div className='text-left [&_p]:mb-[2px] overflow-hidden'>
						<div className='relative mt-8'>
							<p className='uppercase'>Photoshop/ Xd</p>
							<span className='w-full h-2 block rounded-md bg-gray-300'>
								<motion.span
									initial ={{ x: "-100%", opacity: 0}}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{duration: 1, delay: 0.5}}
									className='w-full block h-full bg-gradient-to-r from-primary via-secondary/50 to-secondary rounded-md'>
									<span className='absolute right-0 -top-10'>100%</span>
								</motion.span>
							</span>
						</div>
						<div className='relative mt-8'>
						<p className='uppercase'>HTML5/ CSS3/ SCSS</p>
						<span className='w-full h-2 block rounded-md bg-gray-300'>
							<motion.span
								initial ={{ x: "-100%", opacity: 0}}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{duration: 1, delay: 0.5}} className='w-[90%] block h-full bg-gradient-to-r from-primary via-secondary/50 to-secondary rounded-md'>
								<span className='absolute right-0 -top-10'>90%</span>
							</motion.span>
						</span>
						</div>
						<div className='relative mt-8'>
						<p className='uppercase'>Gulp/ Github/ Git</p>
						<span className='w-full h-2 block rounded-md bg-gray-300'>
							<motion.span
								initial ={{ x: "-100%", opacity: 0}}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{duration: 1, delay: 0.5}}
								 className='w-[70%] block h-full bg-gradient-to-r from-primary via-secondary/50 to-secondary rounded-md'>
								<span className='absolute right-0 -top-10'>70%</span>
							</motion.span>
						</span>
						</div>
						<div className='relative mt-8'>
						<p className='uppercase'>Bootstrap</p>
						<span className='w-full h-2 block rounded-md bg-gray-300'>
							<motion.span
								initial ={{ x: "-100%", opacity: 0}}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{duration: 1, delay: 0.5}}
								className='w-[95%] block h-full bg-gradient-to-r from-primary via-secondary/50 to-secondary rounded-md'>
								<span className='absolute right-0 -top-10'>95%</span>
							</motion.span>
						</span>
						</div>
						<div className='relative mt-8'>
						<p className='uppercase'>Javascript/ Jquery</p>
						<span className='w-full h-2 block rounded-md bg-gray-300'>
							<motion.span 
							initial ={{ x: "-100%", opacity: 0}}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{duration: 1, delay: 0.5}}
							className='w-[75%] block h-full bg-gradient-to-r from-primary via-secondary/50 to-secondary rounded-md'>
								<span className='absolute right-0 -top-10'>75%</span>
							</motion.span>
						</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Aboutme
