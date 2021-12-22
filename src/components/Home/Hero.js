import React from "react";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import Typical from 'react-typical';
// import video from '../../assets/videos/video-3.mp4';
import video from '../../assets/videos/videoplayback.mp4';
import img_slide_1 from '../../assets/images/congrats_studio_tutorials.jpg';
import hero_image_2 from '../../assets/images/HeroImage_2.jpg';
import hero_image_1 from '../../assets/images/HeroImage_1.jpg';
import hero_image_3 from '../../assets/images/HeroImage_3.png';
import hero_image_4 from '../../assets/images/HeroImage_4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import '../../style.css';

let SCROLL = Scroll.Link;
SwiperCore.use([Pagination, Autoplay, EffectFade]);


const Hero = () => {
    // const [changeContent, setChangeContent] = useState()
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => { }}
                speed={400}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                className="absolute"
            >
                <SwiperSlide>
                    <div className="bg-logo-color grid grid-cols-2 place-items-center h-200">
                    {/* <div className="bg-hero-color-2 grid grid-cols-2 place-items-center h-200"> */}
                        <div className="pl-24">
                            <p className="text-white font-balsamiq font-semibold text-lg text-left w-150">
                                Program leads by engineering experts (First ever in Southeast Asia)
                            </p>
                            <p className="text-white font-balsamiq font-semibold text-5xl py-6">
                                Inventor program
                            </p>
                            <p className="text-white font-balsamiq font-semibold text-lg text-left w-150">
                                Play, learn and invent the next big things. Assembling their own computer kit to foster their creativities, solving real world problems and becoming the new inventors. 
                            </p>
                        </div>
                        <img className="w-130 h-96 rounded-2xl" src={hero_image_1} alt="img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-hero-color-1 grid grid-cols-2 place-items-center h-200">
                        <div className="pl-24">
                            <p className="text-white font-balsamiq font-semibold text-lg text-left w-150">
                                Ages 8-17 years old
                            </p>
                            <p className="text-white font-balsamiq font-semibold text-5xl py-6">
                                Coding for kids & teens
                            </p>
                            <p className="text-white font-balsamiq font-semibold text-lg text-left w-150">
                                A fun way to learn and develop problem-solving & critical thinking skills through coding. Play your way through the basics in drag-and-drop block based coding then move on to more advanced concepts.
                            </p>
                        </div>
                        <img className="w-130 h-96 rounded-2xl" src={hero_image_3} alt="img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-hero-color-3 grid grid-cols-2 place-items-center h-200">
                        <div className="pl-24">
                            <p className="text-white font-balsamiq font-semibold text-lg text-left w-150">
                                Hands-on. Build. and Compete
                            </p>
                            <p className="text-white font-balsamiq font-semibold text-5xl py-6">
                            Robotics & Engineering for Children
                            </p>
                            <p className="text-white font-balsamiq font-semibold text-lg text-left w-150">
                                Robotics allows children to learn STEM concepts in a hands-on environment. They learn how to program, design, and make their own robots. From manual control robot car, to autonomous artificial intelligence flying drone.
                            </p>
                        </div>
                        <img className="w-130 h-96 rounded-2xl" src={hero_image_4} alt="img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-hero-color-2 grid grid-cols-2 place-items-center h-200">
                    {/* <div className="bg-hero-color-3 grid g  rid-cols-2 place-items-center h-200"> */}
                        <div className="pl-24">
                            <p className="text-white font-balsamiq font-semibold text-lg text-left w-150">
                                From kindergarten to grade 2
                            </p>
                            <p className="text-white font-balsamiq font-semibold text-5xl py-6">
                                Your children STEAM journey starts here
                            </p>
                            <p className="text-white font-balsamiq font-semibold text-lg text-left w-150">
                                Children are born curios and eager to learn, providing playground, mentorship and STEAM toys materials for them to play, build and unlock their creativities start from young ages.
                            </p>
                        </div>
                        <img className="w-130 h-96 rounded-2xl" src={hero_image_2} alt="img" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="bg-hero-color-1 grid grid-cols-2 place-items-center h-200">
                        <div className="pl-24">
                            <p className="text-white font-balsamiq font-semibold text-5xl py-6">
                                Text-based coding
                            </p>
                            <p className="text-gray-300 font-balsamiq font-semibold text-lg text-left w-150">
                                Children that are in the 11+ age range are likely ready to start with a text-based coding language like professional Software engineers. They will explore Python, Java, CSS/HTML, JavaScript, Swift, and Ruby are all examples of text-based coding languages.
                            </p>
                        </div>
                        <img className="w-130 h-96 rounded-2xl" src={hero_image_3} alt="img" />
                    </div>
                </SwiperSlide> */}
                
            </Swiper>

            <div className="flex flex-col justify-center items-center font-balsamiq">
                <div className="flex flex-col justify-center items-center py-11 mx-16">
                    <h1 className="mx-0 font-semibold lg:text-7xl md:text-5xl sm:text-4xl text-4xl text-center">
                        A space to learn, invent and inspire.
                    </h1>
                    <div className="flex lg:text-4xl md:text-2xl text-lg mt-4 text-center">
                        <h1>We commit to deliver exclusive educational experience based on these principles:</h1>
                    </div>
                </div>
                <SCROLL to='content' className="flex flex-col justify-center items-center text-gray-500 transition duration-300 ease-in-out animate-bounce cursor-pointer hover:text-blue-500"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    learn more
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </SCROLL>
            </div>

            {/* <div className="grid place-items-center lg:h-130 md:h-72 h-130 m-8 bg-logo-color rounded-3xl overflow-y-hidden">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center w-full h-full lg:gap-2 gap-0">
                    <div className="flex-none">
                        <p className="text-white font-balsamiq font-semibold text-5xl py-6">
                            Code Block Building & Fun
                        </p>
                        <p className="text-gray-300 font-balsamiq font-semibold text-md w-72">
                            Block coding is the most basic form of computer programming and a great way for kids to get started.
                        </p>
                    </div>
                    <div className="flex lg:w-96 md:w-80 w-96 lg:h-52 md:h-48 h-52 shadow-2xl">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={() => {}}
                            speed = {400}
                            loop = {true}
                            autoplay={{
                                delay: 3000,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            className="bg-white w-full h-full rounded-lg"
                        >
                            <SwiperSlide>
                                <img className="w-full h-full" src={img_slide_1} alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-full h-full" src={img_slide_2} alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-full h-full" src={img_slide_3} alt="img" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center py-11 mx-16">
                    <h1 className="mx-0 font-semibold lg:text-7xl md:text-5xl sm:text-4xl text-4xl text-center">
                        A space to learn, invent and inspire.
                    </h1>
                    <div className="flex lg:text-4xl md:text-2xl text-lg mt-4 text-center">
                        <h1>We commit to deliver exclusive educational experience based on these principles:</h1>
                    </div>
                </div>
                <SCROLL to='content' className="flex flex-col justify-center items-center text-gray-500 transition duration-300 ease-in-out animate-bounce cursor-pointer hover:text-blue-500"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    learn more
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </SCROLL>
            </div> */}
        </>


        // <div className="flex flex-col justify-center items-center overflow-x-hidden">
        //     {/* <video className="flex-none rounded-lg w-3/5 h-1/4" src={video} autoPlay loop muted></video> */}
        //     <video className="max-w-none min-w-full min-h-full" src={video} autoPlay loop muted></video>
        //     <div className="absolute text-white top-96 md:top-72 left-10">
        //         <div className="text-6xl sm:text-7xl md:text-8xl font-semibold">
        //             <h2>School for next</h2>
        //             <h2>
        //                 generation of{' '}
        //                 <Typical
        //                     className="inline-block"
        //                     steps={['dreamers', 5000,
        //                             'inventors', 5000,
        //                             'changemakers', 5000,
        //                             'innovators', 5000
        //                     ]}
        //                     loop={Infinity}
        //                 />
        //             </h2>
        //         </div>
        //         <h4 className="text-3xl sm:4xl md:text-5xl mt-8">Birthplace of new changemakers</h4>
        //         <div className="mt-14">
        //             <Link to='/login' className="p-8 py-4 transition duration-300 ease-in border-2 rounded-lg text-3xl text-white hover:text-blue-500 border-gray-800 bg-gray-800">Get Started</Link>
        //         </div>
        //         {/* <h4 className="mt-8">hfdfhdfhh</h4> */}
        //     </div>
        //     {/* <iframe className="mt-10 w-4/5 h-96 rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/wMnUXTNX4Ak" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        //     {/* <iframe className="w-full" width="967" height="544" src="https://www.youtube.com/embed/E2TKzn0lpLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        //         <p>hid fldf idf fdi fdjifms fidf sijfdif idf</p>
        //     </iframe> */}
        //     <div className="flex flex-col justify-center items-center">
        //         <div className="flex flex-col justify-center items-center py-11 mx-16">
        //             <h1 className="mx-0 font-semibold lg:text-7xl md:text-5xl sm:text-4xl text-4xl text-center">
        //                 A space to learn, invent and inspire.
        //             </h1>
        //             <div className="flex lg:text-4xl md:text-2xl text-lg mt-4 text-center">
        //                 <h1>We commit to deliver exclusive educational experience based on these principles:</h1>
        //             </div>
        //         </div>
        //         <SCROLL to='content' className="flex flex-col justify-center items-center text-gray-500 transition duration-300 ease-in-out animate-bounce cursor-pointer hover:text-blue-500"
        //             smooth={true}
        //             duration={500}
        //             spy={true}
        //             exact='true'
        //             offset={-80}
        //         >
        //             learn more
        //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        //         </SCROLL>
        //     </div>
        // </div>
    );
};

export default Hero;