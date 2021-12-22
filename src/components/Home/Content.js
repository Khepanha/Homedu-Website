// import LearningKid from '../../assets/images/kid_learning.jpg';
import Particles from 'react-particles-js';
const Content = () => {
    return (
        <div className="flex flex-col" id="content">
            <Particles
                className="bg-white lg:h-210 md:h-250 h-270"
                params={{
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#b6b2b2"
                            }
                        },
                        "opacity": {
                            "value": 0.5211089197812949,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 8.017060304327615,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 12.181158184520175,
                                "size_min": 0.1,
                                "sync": true
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#c8c8c8",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "bounce",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
            // height="100vh"
            />
            <div className="absolute text-black grid lg:grid-cols-2 grid-cols-1 lg:mx-32 mx-8 gap-20 place-items-center mt-16 font-balsamiq">
                <div className="grid grid-cols-1 lg:place-items-start md:place-items-center sm:place-items-center place-self-start">
                    <span className="font-semibold lg:text-5xl md:text-5xl sm:text-4xl text-4xl">Art of observation</span>
                    <p className="text-2xl w-full md:w-3/4 mt-8">Crystallizing detail potential within and around you. By asking why it happens the way it is? Can it be different?</p>
                </div>
                <div className="grid grid-cols-1 lg:place-items-start md:place-items-center sm:place-items-center place-self-start">
                    <strong className="font-semibold lg:text-5xl md:text-5xl sm:text-4xl text-4xl">New norm of attention span</strong>
                    <p className="text-2xl lg:w-full md:w-3/4 w-full mt-8">We believe in science, which "shorter is better" for kids. Time shouldn't be wasted spending on watching long length videos or class lectures.</p>
                </div>
                <div className="grid grid-cols-1 lg:place-items-start md:place-items-center sm:place-items-center place-self-start">
                    <strong className="font-semibold lg:text-5xl md:text-5xl sm:text-4xl text-4xl">Collaboration with team</strong>
                    <p className="text-2xl w-full md:w-3/4 mt-8">Weekly, 45-minutes you'll meet your facilitators to resolve your doubts, foster your learning outcomes and allocate you into cohort challenging to grow.</p>
                </div>
                <div className="grid grid-cols-1 lg:place-items-start md:place-items-center sm:place-items-center place-self-start">
                    <strong className="font-semibold lg:text-5xl md:text-5xl sm:text-4xl text-4xl">Reverse thinking methodology</strong>
                    <p className="text-2xl lg:w-full md:w-3/4 w-full mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="grid grid-cols-1 lg:place-items-start md:place-items-center sm:place-items-center place-self-start">
                    <strong className="font-semibold lg:text-5xl md:text-5xl sm:text-4xl text-4xl">Space to explore science</strong>
                    <p className="text-2xl w-full md:w-3/4 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="grid grid-cols-1 lg:place-items-start md:place-items-center sm:place-items-center place-self-start">
                    <strong className="font-semibold lg:text-5xl md:text-5xl sm:text-4xl text-4xl">Developing grit</strong>
                    <p className="text-2xl lg:w-full md:w-3/4 w-full mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
}

export default Content;