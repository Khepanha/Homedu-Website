import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Home/Navbar';
// import NavDropdown from './components/Home/NavDropdown';
// import ProtectedRoute from './components/Protected_Route/Classroom';
import ProtectedRouteClassroom from './components/Protected_Route/Classroom';
import ProtectedRouteCertificate from './components/Protected_Route/Certificate';
import Classroom from './pages/Classroom';
import ClassroomCourse from './pages/Classroom-Course';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Sign_Up';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Certificates from './components/Certificate/My_Certificate';
import notfound from './pages/NotFound';
dotenv.config();

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // }

  useEffect(() => {

    const token = localStorage.getItem('access_token');
    const key = process.env.REACT_APP_jwt_key;
    if (token) {
      try {
        jwt.verify(token, key);
        console.log('valid');
      } catch {
        console.log('expired');
        window.localStorage.removeItem('access_token');
      }
    }

    // const hideMenu = () => {
    //   if (window.innerWidth > 768 && isOpen) {
    //     setIsOpen(false);
    //   }
    // }
    // window.addEventListener('resize', hideMenu);
    // return () => {
    //   window.removeEventListener('resize', hideMenu)
    // }
  })

  return (
    <>
      <Navbar/>
      {/* <NavDropdown isOpen={isOpen} toggle={toggle} /> */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/sign_up' exact component={SignUp} />
        <Route path='/school' exact component={Home} />
        {/* <Route path='/classroom/curriculum' exact component={Classroom}/> */}
        <ProtectedRouteClassroom path='/classroom/curriculum' exact component={Classroom} />
        <Route path='/classroom/course' exact component={ClassroomCourse} />
        <ProtectedRouteCertificate path='/certificate' exact component={Certificates} />
        <Route path='/not_found' exact component={notfound} />
        <Route component={notfound} />
      </Switch>
    </>
  );
}

export default App;
