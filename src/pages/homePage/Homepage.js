import React from 'react';
import Banner from "./banner/Banner";
import Aboutme from "./about/Aboutme";
import Contact from "./contact/Contact";
import Service from "./services/Service";
import Portfolio from "./portfolio/Portfolio";
import Details from "./details/Details";
import Testimonial from "./testimonial/Testimonial";

const Homepage = () => {
  return (
	<div>
	  <Banner />
        <Aboutme />
        <Service />
        <Portfolio />
        <Details />
        <Testimonial />
        <Contact />
	</div>
  )
}

export default Homepage
