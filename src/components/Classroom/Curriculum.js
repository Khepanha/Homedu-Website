import { Link } from "react-router-dom";
import Particles from 'react-particles-js';
// import Card from '../../assets/images/login_logo1.jpg';

const Curriculum = () => {
    return (
        <div className="flex justify-center items-center top-0 w-full min-h-screen">
            {/* <div className="relative flex justify-center items-center top-20 w-full min-h-screen"> */}
                {/* <Particles
                    className="fixed bg-black w-full h-screen bg-scroll"
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 3
                            },
                            "move": {
                                "enable": true,
                                "speed": 1
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    // height="100vh"
                /> */}
            <div className="top-20 pb-16">
                <div className="flex justify-center mt-12">
                    <h1 className="font-bold text-white text-xl lg:text-3xl text-center bg-yellow-300 mx-6 mb-10 w-full lg:w-full h-14 flex justify-center items-center rounded-lg">CS Fundamentals for Elementary Schools</h1>
                </div>
                <h1 className="text-center font-bold text-3xl md:text-4xl text-white md:mt-4 mb-4">Select the right course for you!</h1>
                <div className="flex flex-wrap justify-center mt-14">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full sm:w-52 m-6 overflow-hidden ">
                        <span className="h-20 m-6 text-7xl text-center text-red-400">A</span>
                        <h2 className="text-center px-2 pb-5">Kindergarten (Supports pre-readers)</h2>
                        <Link to='/classroom/course' className="bg-red-400 text-white p-3 text-center hover:bg-red-500 transition duration-300 ease-in">View Course</Link>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full sm:w-52 m-6 overflow-hidden ">
                        <span className="h-20 m-6 text-7xl text-center text-yellow-300">B</span>
                        <h2 className="text-center px-2 pb-5">1st grade (Supports pre-readers)</h2>
                        <Link to='/classroom/course' className="bg-yellow-300 text-white p-3 text-center hover:bg-yellow-500 transition duration-300 ease-in">View Course</Link>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full sm:w-52 m-6 overflow-hidden ">
                        <span className="h-20 m-6 text-7xl text-center text-green">C</span>
                        <h2 className="text-center px-2 pb-11">2nd grade</h2>
                        <Link to='/classroom/course' className="bg-green text-white p-3 text-center hover:bg-weight-green transition duration-300 ease-in">View Course</Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mt-8">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full sm:w-52 m-6 overflow-hidden ">
                        <span className="h-20 m-6 text-7xl text-center text-teal">D</span>
                        <h2 className="text-center px-2 pb-5">3rd grade</h2>
                        <Link to='/classroom/course' className="bg-teal text-white p-3 text-center hover:bg-weight-teal transition duration-300 ease-in">View Course</Link>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full sm:w-52 m-6 overflow-hidden ">
                        <span className="h-20 m-6 text-7xl text-center text-blue-400">E</span>
                        <h2 className="text-center px-2 pb-5">4th grade</h2>
                        <Link to='/classroom/course' className="bg-blue-400 text-white p-3 text-center hover:bg-blue-500 transition duration-300 ease-in">View Course</Link>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full sm:w-52 m-6 overflow-hidden ">
                        <span className="h-20 m-6 text-7xl text-center text-indigo-500">F</span>
                        <h2 className="text-center px-2 pb-5">5th grade</h2>
                        <Link to='/classroom/course' className="bg-indigo-500 text-white p-3 text-center hover:bg-indigo-600 transition duration-300 ease-in">View Course</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;