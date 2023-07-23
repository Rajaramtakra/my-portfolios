import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import banner from "../../../assets/images/banner-img3.jpg";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Link } from 'react-scroll';
import { FaAngleDoubleDown } from 'react-icons/fa';
import pattern from "../../../assets/images/pattern.png";
import { FaPaperPlane } from 'react-icons/fa';
import TitleAlt from '../../../components/layouts/TitleAlt';
import { Parallax } from "react-parallax";



const Banner = () => {
	const [text] = useTypewriter({
		words: ["Front End Web Developer.", "Freelance Front End Developer.", "Pixel Perfect Responsive Coder.", "Clean Coder."],
		loop: true,
		typeSpeed: 50,
		deleteSpeed: 10,
		delaySpeed: 3000,
	});

	const particlesInit = useCallback(async engine => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);
	
  return (
	<div id='home'>
        <Parallax bgImage={banner} strength={300}>
        <section className='relative z-0 pt-26 h-[100vh] text-white flex flex-col justify-center text-center'>
            <Particles className='[&_canvas]:!absolute [&_canvas]:top-0 [&_canvas]:left-0 [&_canvas]:opacity-90'
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#018ec3",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 900,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        }
                    },
                    detectRetina: true,
                }}
            />
            <div className="relative max-w-screen-xl mx-auto px-4">
        <div className="py-8 [&_h1]:font-thin [&_h1]:my-5 [&_h1]:tracking-wide [&_h1]:uppercase [&_h3]:text-white [&_h3]:font-[200] [&_h4]:text-white [&_h4]:font-[200]  [&_h4]:mb-5 [&_h6]:font-light [&_h6]:text-white/70">
        <h3>Namaste, I Am</h3>
        <h1>Rajaram Takra</h1>
        <h4 >I'm A <span>{text}</span> 
        <Cursor 
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor='white'
        />

        </h4>
        <h6>From Nepal</h6>
        </div>
        
        </div>
        <div className='center flex justify-center absolute bottom-12 left-2 right-2 m-auto'>
            <Link className='animate-bounce w-[60px] h-[60px] border-2 border-white/30 rounded-full flex justify-center items-center bg-white/10 [&_svg]:text-2xl [&_svg]:fill-white/70 hover:border-white hover:[&_svg]:fill-white hover:bg-white/0' to={"info"} spy={true} smooth={true} ofset={-70} duration={500}>
            <FaAngleDoubleDown className='cursor-pointer' />
            </Link>
        </div>
        
        </section>
        </Parallax>

        <section id='info' className='relative bg-primary z-10 py-12 pb-24 lg:pb-32 xl:py-28 xl:pb-40 before:bg-primary-100/75 before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10 after:bg-white after:h-16 lg:after:h-28 after:w-full after:-skew-y-2 after:absolute after:-bottom-10 after:left-0 after:-z-10' style={{background:`url(${pattern})`}}>
        <div className="relative max-w-screen-lg m-auto text-white px-4 [&_.heading]:hover:after:w-16 [&_.heading_span]:hover:-top-4">
        <TitleAlt title="Front-end Developer from Nepal Rajaram Takra" subTitle="Front-end Developer from Nepal Rajaram Takra" />
        <p>A passionate photographer infused with web developing and designing skill, Rajaram Takra is a professional Web Developer & Designer who has been working in the web industry since decades. With a mature experience, understanding and problem solving capacity, Rajaram has been delivering magnificent service with 100% client satisfaction result.</p>
        <Link className='mt-2 md:mt-6 border-2 px-14 py-4 inline-block [&_svg]:inline-block text-[1rem] uppercase transition-all hover:bg-primary-200'>Start Project With Me <FaPaperPlane /></Link>
        </div>
        </section>
    </div>
  )
}

export default Banner
