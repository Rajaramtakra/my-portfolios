import React, { Component } from "react";
import Slider from "react-slick";
import { testimonialData } from "../../constant";
import { FaQuoteLeft } from "react-icons/fa";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
		  arrows = {false}
          ref={slider => (this.slider1 = slider)}
        >
		{
			testimonialData.map(({image, author, degination, des}) => (
          <div className="md:!flex">
				    <div className="text-center">
              <div className="relative inline-block after:content-[''] after:absolute after:bg-white after:left-0 after:right-0 after:m-auto after:-bottom-[.9rem] after:w-9 after:h-9 after:shadow-[2px_2px_4px_rgba(0,0,0,0.1)] after:rotate-45 after:rounded-[90px_0_0_0]">
              <figure className="relative m-0 w-[12.5rem] h-[12.5rem] rounded-full overflow-hidden background-white border-[15px] border-white/20 shadow-[2px_2px_5px_rgba(0,0,0,0.15)]">
                <img src={image} alt="img" />
              </figure>
              <div className="absolute text-2xl bottom-0 left-[3%] w-16 h-16 rounded-full flex justify-center items-center bg-gray-200 z-10 border-[5px] border-white text-gray-400">
              <FaQuoteLeft />
              </div>
					  </div>
					<div className="mt-8 [&_h4]:mb-0 [&_h4]:leading-none [&_h4]:text-primary">
						<h4>{author}</h4>
						<span>{degination}</span>
					</div>
				</div>
				<div className="md:pl-8 md:pt-10 lg:text-xl [&_em]:leading-8 max-md:text-center">
					<em>{des}</em>
				</div>
			</div>
		  ))
		}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        className="mt-4 inline-block bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] max-w-[210px] m-auto p-3 pb-1 text-center [&_.slick-slide]:opacity-40 [&_.slick-slide:hover]:opacity-100 [&_.slick-current]:!opacity-100">
			{
			testimonialData.map(({image}) => (
				<div className="!w-[45px] h-[45px] rounded-full overflow-hidden cursor-pointer">
					<figure className="mb-0">
						<img src={image} alt="img" />
					</figure>
				</div>
			))
		  }
        </Slider>
      </div>
    );
  }
}