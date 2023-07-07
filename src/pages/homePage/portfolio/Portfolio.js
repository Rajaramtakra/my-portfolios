import React, { useState } from 'react';
import Title from '../../../components/layouts/Title';
import All from './All';
import Design from './Design';
import Logo from './Logo';
import Development from './Development';
import Wordpress from './Wordpress';

const Portfolio = () => {
	const [allData, setAllData] = useState(true);
	const [designData, setDesignData] = useState(false);
	const [logoData, setLogoData] = useState(false);
	const [developmentData, setDevelopmentData] = useState(false);
	const [wordPressData, setWordPressData] = useState(false);
  return (
	
	<section id='portfolio' className='relative bg-white z-20 after:bg-white after:h-28 after:w-full after:skew-y-2 after:absolute after:-bottom-10 after:left-0 after:-z-10'>
		<div className="relative max-w-screen-xl m-auto py-10 pb-24 px-4 [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4">
			<Title title="Portfolio" subTitle="Portfolio" />
			<p>With my expertise technical skills my work portfolio is not only limited to national clients but has also embarked to international clients. My love for my work has made me work more and garnish my skills. Mentioned are the areas and clients with whom I have closely worked with.</p>
			<div className='[&_ul]:space-x-2 text-center [&_li]:inline-block [&_li]:border [&_li]:border-primary [&_li]:py-2 [&_li]:px-4 [&_li:hover]:bg-primary [&_li:hover]:text-white [&_li]:transition-all [&_li]:duration-300 [&_li]:cursor-pointer'>
			<ul>
				<li 
				onClick={() => 
					setAllData(true) & 
					setDesignData(false) & 
					setLogoData(false) & 
					setDevelopmentData(false) & 
					setWordPressData(false)
				} className={`${allData ? "bg-primary text-white" : ""}`}>All
				</li>

				<li 
				onClick={() => 
				setDesignData(true) & 
				setAllData(false) & 
				setLogoData(false) & 
				setDevelopmentData(false) & 
				setWordPressData(false)
				} className={`${designData ? "bg-primary text-white" : ""}`}>Design</li>

				<li 
				onClick={() => 
				setLogoData(true) & 
				setAllData(false) & 
				setDesignData(false) & 
				setDevelopmentData(false) & 
				setWordPressData(false)
				} className={`${logoData ? "bg-primary text-white" : ""}`}>Logo</li>

				<li 
				onClick={() => 
				setDevelopmentData(true) & 
				setAllData(false) & 
				setLogoData(false) & 
				setDesignData(false) & 
				setWordPressData(false)
				} className={`${developmentData ? "bg-primary text-white" : ""}`}>Web Development</li>

				<li 
				onClick={() => 
				setWordPressData(true) & 
				setAllData(false) & 
				setLogoData(false) & 
				setDevelopmentData(false) & 
				setDesignData(false)
				} className={`${wordPressData ? "bg-primary text-white" : ""}`}>WordPress</li>
			</ul>
			<div className='mt-8'>
				{
					allData && <All />
				}
				{
					designData && <Design />
				}
				{
					logoData && <Logo />
				}
				{
					developmentData && <Development />
				}
				{
					wordPressData && <Wordpress />
				}
			</div>
			</div>
		</div>
	</section>
  )
}

export default Portfolio
