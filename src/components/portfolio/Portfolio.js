import React from 'react'
import Title from '../layouts/Title'

const Portfolio = () => {
  return (
	<section id='portfolio' className='relative bg-white z-20 after:bg-white after:h-28 after:w-full after:skew-y-2 after:absolute after:-bottom-10 after:left-0 after:-z-10'>
		<div className="relative max-w-screen-lg m-auto py-10 pb-24 px-4 [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4">
			<Title title="Portfolio" subTitle="Portfolio" />
			<p>Hello, I am Rajaram Takra a Nepal based Web Designer and Developer who has been engrossed in this field since 2010. With decades of experience and technical knowledge I have further managed to sharpen my skills in Web development which has further opened a gateway for me to work with national as well as international clients. When talking about my web designing knowledge I ideally find myself in a position where I understand both the traditional and modern approach of Web Development. My skills are not only confined to Web Development and Design but has also spread its wings in Graphic Design, Front end development and more…</p>
		</div>
	</section>
  )
}

export default Portfolio
