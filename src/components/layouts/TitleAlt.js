import React from 'react'

const TitleAlt = ({title, subTitle}) => {
  return (
	<div className='heading relative mb-8 after after:bg-white after:h-1 after:transition-all after:duration-700 after:rounded-md after:w-20 after:block [&_h2]:text-white [&_span]:text-white/10 [&_span]:absolute [&_span]:-top-6 [&_span]:font-medium [&_span]:transition-all [&_span]:duration-700'>
		<h2><span>{title}</span> {subTitle}</h2>
	</div>
  )
}

export default TitleAlt
