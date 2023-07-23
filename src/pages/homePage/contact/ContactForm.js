import React from 'react'

const ContactForm = () => {
  return (
	<form className='flex flex-wrap [&_label]:block -mx-4 [&_label]:absolute [&_label]:-translate-y-8 [&_label]:left-4 [&_input:focus+label]:-translate-y-16 [&_input:placeholder-shown+label]:-translate-y-16 [&_label]:transition-all [&_label]:duration-300'>
		<div className='w-full md:w-1/2 px-4 mb-12 relative'>
			<input type="text" placeholder=" "/>
			<label>Name</label>
		</div>
		<div className='w-full md:w-1/2 px-4 mb-12 relative'>
			<input type="email" placeholder='' />
			<label>Email</label>
		</div>
		<div className='w-full md:w-1/2 px-4 mb-12 relative'>
			<input type="phone" />
			<label>Phone</label>
		</div>
		<div className='w-full md:w-1/2 px-4 mb-12 relative'>
			<input type="text" />
			<label>Address</label>
		</div>
		<div className='w-full px-4'>
			<textarea rows="2"></textarea>
			<label>Message</label>
		</div>
	</form>
  )
}

export default ContactForm
