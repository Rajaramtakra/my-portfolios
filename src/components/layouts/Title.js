import React from 'react'

const Title = ({title, subTitle}) => {
  return (
	<div className='heading relative mb-6 after:bg-primary after:transition-all after:duration-700 after:h-1 after:rounded-md after:w-20 after:block [&_h2]:text-primary [&_span]:text-black/10 [&_span]:absolute [&_span]:-top-6 [&_span]:font-medium [&_span]:transition-all [&_span]:duration-700'>
				<h2><span>{subTitle}</span> {title}</h2>
			</div>
  )
}

export default Title
