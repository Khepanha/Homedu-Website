import { React, useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from '../../assets/images/HE.png';

const Navbar = () => {
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(false);
    const [openNavDropdown, setOpenNavDropdown] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    // const [openSetting, setOpenSetting] = useState(false);
    const [user, setUser] = useState('');

    const onClickHomedu = () => {
        history.replace('/');
        history.go(0);
    }
    const onClickGetStarted = () => {
        history.replace('/login');
        history.go(0);
    }
    const handleAcheivement = () => {
        history.replace('/certificate');
        history.go(0);
    }
    const toggleNavdropdown = () => {
        setOpenNavDropdown(!openNavDropdown);
    }
    const handleClickProfile = () => {
        setOpenProfile(!openProfile);
    }
    // const handleClickSetting = () => {
    //     setOpenSetting(!openSetting);
    // }
    const handleLogout = () => {
        window.localStorage.removeItem('access_token');
        window.location.reload();
    }

    let profileRef = useRef();
    let buttonRef = useRef();
    let burgermenuRef = useRef();
    let navdropdownRef = useRef();
    useEffect(() => {
        const checkAccess = localStorage.getItem('access_token');
        if (checkAccess) {
            setIsLogin(true);
            const base64url = checkAccess.split('.')[1];
            const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            const currentUser = JSON.parse(jsonPayload).username;
            setUser(currentUser);
        } else {
            setIsLogin(false);
        }

        const handleClickOutside = (event) => {
            if (!profileRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setOpenProfile(false);
            }
            if (!burgermenuRef.current.contains(event.target) && !navdropdownRef.current.contains(event.target)) {
                setOpenNavDropdown(false);
            }
        };
        const hideProfile_Navdropdown = () => {
            setOpenProfile(false);
            setOpenNavDropdown(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", hideProfile_Navdropdown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener('resize', hideProfile_Navdropdown)
        }

    }, [setIsLogin]);
    return (

        <nav className="flex flex-row justify-between items-center h-24 w-full bg-white bg-opacity-0 border-b-0 border-gray-300 font-balsamiq">
            <div className="flex flex-row flex-none items-center pl-6">
                <Link to='/' className="px-3 cursor-pointer" onClick={onClickHomedu}>
                    <img className="h-10" alt="img" src={Logo}></img>
                </Link>
                <div className="lg:block hidden font-semibold text-lg">
                    <Link className="p-4 inline-block transform hover:scale-110 transition duration-300 ease-in text-gray-700" to='/school'>School</Link>
                    <Link className={isLogin ? "p-4 inline-block transform hover:scale-110 transition duration-300 ease-in text-gray-700" : "hidden"} to='/classroom/curriculum'>Classroom</Link>
                    <Link onClick={handleAcheivement} className={isLogin ? "p-4 inline-block transform hover:scale-110 transition duration-300 ease-in text-gray-700" : "hidden"} to='/certificate'>Achievements</Link>
                    <Link className="p-4 inline-block transform hover:scale-110 transition duration-300 ease-in text-gray-700" to='/learn_more'>Learn More</Link>
                </div>
            </div>
            <div
                ref={burgermenuRef}
                className='px-4 cursor-pointer lg:hidden'
                onClick={toggleNavdropdown}
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </div>
            <div ref={navdropdownRef} className={openNavDropdown ? 'py-2 w-48 right-4 bg-white shadow-2xl rounded-b-lg rounded-tl-lg absolute z-10 top-24' : 'hidden'}>
                <Link to='/school' onClick={toggleNavdropdown} className="block px-4 py-2 hover:bg-gray-100">School</Link>
                <Link to='/classroom/curriculum' onClick={toggleNavdropdown} className={isLogin ? "block px-4 py-2 hover:bg-gray-100" : "hidden"}>Classroom</Link>
                <Link to='/learn-more' onClick={toggleNavdropdown} className="block px-4 py-2 hover:bg-gray-100">Learn More</Link>
                <Link to='/login' onClick={toggleNavdropdown} className="block px-4 py-2 hover:bg-gray-200 h-full">Log In</Link>
            </div>
            <div className="flex-none pr-10 lg:block hidden font-semibold">
                <Link onClick={onClickGetStarted} className={!isLogin ? "p-4 inline-block py-2 ml-2 transition duration-300 ease-in border-2 rounded-3xl text-white bg-logo-color hover:bg-purple-700" : "hidden"} to='/login'>Get Started</Link>
                <button ref={buttonRef} onClick={handleClickProfile} className={isLogin ? "py-2 ml-2 w-40 transition duration-300 ease-in shadow-lg rounded-3xl text-white bg-logo-color hover:bg-purple-700" : "hidden"}>
                    <div className="flex flex-row justify-center items-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        <span className="flex-none mx-2">{user}</span>
                        <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </button>
                <button onClick={handleLogout} ref={profileRef} className={openProfile ? "absolute z-10 flex flex-row justify-center items-center right-10 top-28 rounded-b-2xl rounded-tl-2xl shadow-lg w-40 p-4 bg-white hover:bg-gray-200 transition duration-300 ease-in text-red-500 border-t border-gray-100" : "hidden"}>
                    <svg className="w-5 h-5 text-red-500 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                    Log out
                </button>
            </div>
        </nav>


        // <nav className="flex flex-row justify-between items-center absolute z-10 h-24 w-full bg-white bg-opacity-80 border-b-0 border-gray-300 font-balsamiq">
        //     <div className="flex flex-row flex-none items-center lg:pl-10 md:pl-10 pl-10">
        //         <Link to='/' className="px-3 cursor-pointer" onClick={onClickHomedu}>
        //             <img className="h-10" alt="img" src={Logo}></img>
        //         </Link>
        //     </div>
        //     <div
        //         ref={burgermenuRef}
        //         className='px-4 cursor-pointer lg:hidden'
        //         onClick={toggleNavdropdown}
        //     >
        //         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        //             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        //         </svg>
        //     </div>
        //     <div ref={navdropdownRef} className={openNavDropdown ? 'py-2 w-48 right-4 bg-white shadow-2xl rounded-b-lg rounded-tl-lg absolute z-10 top-24' : 'hidden'}>
        //         <Link to='/school' onClick={toggleNavdropdown} className="block px-4 py-2 hover:bg-gray-200">School</Link>
        //         <Link to='/classroom/curriculum' onClick={toggleNavdropdown} className={isLogin ? "block px-4 py-2 hover:bg-gray-200" : "hidden"}>Classroom</Link>
        //         <Link to='/learn-more' onClick={toggleNavdropdown} className="block px-4 py-2 hover:bg-gray-200">Learn More</Link>
        //         <Link to='/login' onClick={toggleNavdropdown} className="block px-4 py-2 hover:bg-gray-200 h-full">Log In</Link>
        //     </div>
        //     <div className="flex-none pr-10 lg:block hidden font-semibold">
        //         <Link className="p-4 inline-block transform hover:scale-110 transition duration-300 ease-in text-gray-700" to='/school'>School</Link>
        //         <Link className={isLogin ? "p-4 inline-block transform hover:scale-110 transition duration-300 ease-in text-gray-700" : "hidden"} to='/classroom/curriculum'>Classroom</Link>
        //         <Link onClick={handleAcheivement} className={isLogin ? "p-4 inline-block transform hover:scale-110 transition duration-300 ease-in text-gray-700" : "hidden"} to='/certificate'>Achievements</Link>
        //         <Link className="p-4 inline-block transform hover:scale-110 transition duration-300 ease-in text-gray-700" to='/learn_more'>Learn More</Link>
        //         <Link onClick={onClickGetStarted} className={!isLogin ? "p-4 inline-block py-2 ml-2 transition duration-300 ease-in border-2 rounded-lg text-white hover:bg-gray-500 border-gray-800 bg-gray-800 hover:border-gray-500" : "hidden"} to='/login'>Get Started</Link>
        //         <button ref={buttonRef} onClick={handleClickProfile} className={isLogin ? "py-2 ml-2 w-40 transition duration-300 ease-in border rounded-sm text-black hover:text-blue-500 border-gray-400" : "hidden"}>
        //             <div className="flex flex-row justify-center items-center">
        //                 <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        //                 <span className="flex-none mx-2">{user}</span>
        //                 <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        //             </div>
        //         </button>
        //         <button onClick={handleLogout} ref={profileRef} className={openProfile ? "absolute flex flex-row justify-center items-center right-10 top-24 rounded-b-md rounded-tl-md shadow-lg w-40 p-4 bg-white hover:bg-gray-200 transition duration-300 ease-in text-red-500" : "hidden"}>
        //             <svg className="w-5 h-5 text-red-500 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
        //             Log out
        //         </button>





        //         {/* <div ref={profileRef} className={openProfile ? "absolute flex flex-row bg-gray-100 right-40 top-24 shadow-2xl" : "hidden"}> */}

        //         {/* <ul className={openSetting ? "hidden" : "list-none w-80 p-4"}>
        //                 <li className="">
        //                     <a href="#" className="no-underline flex text-lg font-normal px-2 py-2 items-center rounded-lg hover:bg-gray-200">
        //                         <div className="flex flex-row items-center h-8 w-80">
        //                             <span className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full mr-4">
        //                                 <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
        //                             </span>
        //                             Home
        //                         </div>
        //                     </a>
        //                 </li>
        //                 <li className="">
        //                     <a href="#" onClick={handleClickSetting} className="no-underline flex text-lg font-normal px-2 py-2 items-center rounded-lg hover:bg-gray-200">
        //                         <div className="flex flex-row items-center h-8 w-80">
        //                             <span className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full mr-4">
        //                                 <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
        //                             </span>
        //                             Settings & privacy
        //                             <svg className="ml-12 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
        //                         </div>
        //                     </a>
        //                 </li>
        //                 <li className="">
        //                     <a href="#" className="no-underline flex text-lg font-normal px-2 py-2 items-center rounded-lg hover:bg-gray-200">
        //                         <div className="flex flex-row items-center h-8 w-80">
        //                             <span className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full mr-4">
        //                                 <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
        //                             </span>
        //                             Help & support
        //                         </div>
        //                     </a>
        //                 </li>
        //                 <li className="">
        //                     <a href="#" className="no-underline flex text-lg font-normal px-2 py-2 items-center rounded-lg hover:bg-gray-200">
        //                         <div className="flex flex-row items-center h-8 w-80">
        //                             <span className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full mr-4">
        //                                 <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
        //                             </span>
        //                             About us
        //                         </div>
        //                     </a>
        //                 </li>
        //             </ul> */}

        //         {/* Settings & privacy */}

        //         {/* <ul className={openSetting ? "list-none w-80 p-4" : "hidden"}>
        //                 <li>
        //                     <span onClick={handleClickSetting} className="flex flex-row h-12 px-2 py-2 items-center cursor-pointer">
        //                         <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
        //                         Settings & privacy
        //                     </span>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="no-underline flex text-lg font-normal px-2 py-2 items-center rounded-lg hover:bg-gray-200">
        //                         <div className="flex flex-row items-center h-8 w-80">
        //                             <span className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full mr-4">
        //                                 <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
        //                             </span>
        //                             Personal info
        //                         </div>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="no-underline flex text-lg font-normal px-2 py-2 items-center rounded-lg hover:bg-gray-200">
        //                         <div className="flex flex-row items-center h-8 w-80">
        //                             <span className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full mr-4">
        //                                 <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
        //                             </span>
        //                             Password
        //                         </div>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="no-underline flex text-lg font-normal px-2 py-2 items-center rounded-lg hover:bg-gray-200">
        //                         <div className="flex flex-row items-center h-8 w-80">
        //                             <span className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full mr-4">
        //                                 <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
        //                             </span>
        //                             Language
        //                         </div>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="no-underline flex text-lg font-normal px-2 py-2 items-center rounded-lg hover:bg-gray-200">
        //                         <div className="flex flex-row items-center h-8 w-80 text-red-400">
        //                             <span className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full mr-4">
        //                                 <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
        //                             </span>
        //                             Log out
        //                         </div>
        //                     </a>
        //                 </li>
        //             </ul> */}
        //         {/* </div> */}
        //     </div>
        // </nav>
    );
};
export default Navbar;