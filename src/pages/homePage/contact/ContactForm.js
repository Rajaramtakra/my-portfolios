import React from 'react'

const ContactForm = () => {
  return (
	<form className='flex flex-wrap -mx-4 floating-form'>
		<div className='w-full md:w-1/2 px-4 mb-12 relative'>
			<input type="text" placeholder='' />
			<label>Name</label>
		</div>
		<div className='w-full md:w-1/2 px-4 mb-12 relative'>
			<input type="email" placeholder='' />
			<label>Email</label>
		</div>
		<div className='w-full md:w-1/2 px-4 mb-12 relative'>
			<input type="phone" placeholder='' />
			<label>Phone</label>
		</div>
		<div className='w-full md:w-1/2 px-4 mb-12 relative'>
			<input type="text" placeholder='' />
			<label>Address</label>
		</div>
		<div className='w-full px-4 mb-12 relative'>
			<textarea rows="2" placeholder='' ></textarea>
			<label>Message</label>
		</div>
		<div className='w-full px-4 mb-12'>
		<button className='btn btn-border' type='submit'>Submit Now</button>
		</div>
	</form>
	
  )
}

export default ContactForm
