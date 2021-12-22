// import {React, useEffect, useState, useRef} from 'react';
// import { Link } from "react-router-dom";

// const NavDropdown = ({isOpen, toggle}) => {
//     const [isLogin, setIsLogin] = useState(false);
//     const navdropdownRef = useRef();
//     useEffect(() => {
//         const checkAccess = localStorage.getItem('access_token');
//         if (checkAccess) {
//             setIsLogin(true);
//         } else {
//             setIsLogin(false);
//         }
//         const handleClickOutside = (event) => {
//             if (!navdropdownRef.current.contains(event.target)) {
                
//             }
//         }
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         }
//     }, [setIsLogin]);
//     return (
//         <div ref={navdropdownRef} className={isOpen ? 'py-2 w-48 right-4 bg-white shadow-2xl rounded-b-lg rounded-tl-lg absolute z-10 top-24':'hidden'}>
//             <Link to='/school' onClick={toggle} className="block px-4 py-2 hover:bg-gray-200">School</Link>
//             <Link to='/classroom/curriculum' onClick={toggle} className={isLogin ? "block px-4 py-2 hover:bg-gray-200" : "hidden"}>Classroom</Link>
//             <Link to='/learn-more' onClick={toggle} className="block px-4 py-2 hover:bg-gray-200">Learn More</Link>
//             <Link to='/login' onClick={toggle} className="block px-4 py-2 hover:bg-gray-200 h-full">Log In</Link>
//         </div>
//     );
// }

// export default NavDropdown;