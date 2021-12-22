import { GoogleSpreadsheet } from "google-spreadsheet";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import bcrypt from 'bcryptjs';
import creds from "../client_secret.json";
import Login_logo from '../assets/images/login_logo1.jpg';
import Logo from '../assets/images/logo.jpg';
import Authentication from "../auth/Jwt_Token";

const Login = () => {
    
    const history = useHistory();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const {email, password} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const onClickSignUp = () => {
        history.replace('/sign_up');
        // window.location.reload();
        history.go(0);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();

        const doc = new GoogleSpreadsheet('1tBUgfe1NbKV_1uN0_n5lED3g89WHqXMQDBMSYOIkNpU');
        try {
            await doc.useServiceAccountAuth({
                client_email: creds.client_email,
                private_key: creds.private_key,
            });
            await doc.loadInfo();

            const sheet = doc.sheetsByTitle['Login_SignUp_with_email'];
            const user_obj = await sheet.getRows();
            const user_data = [];
            user_obj.forEach(row => {
                user_data.push({username: row.username.toString(), email: row.email.toString(), password: row.password.toString()});
            });
            const index = user_data.findIndex(i => i.email === data.email);
            if (index >= 0){
                if (await bcrypt.compare(data.password, user_data[index].password)){
                    const finalData = {username: user_data[index].username, email: data.email, password: data.password}
                    Authentication(finalData);
                    history.replace('/classroom/curriculum');
                    history.go(0);
                }
                else {
                    return(setValidEmail(true), setValidPassword(false));
                }
            } else {
                return(setValidEmail(false), setValidPassword(true));
            }
        } catch(e) {
            console.error('Error', e);
        }

        setData({...data, username:"", email: "", password: ""});
    }

    const googleLoginSuccess = async (response) => {
        const googleData = {username: await response.profileObj.name, email: await response.profileObj.email};
        const doc = new GoogleSpreadsheet('1tBUgfe1NbKV_1uN0_n5lED3g89WHqXMQDBMSYOIkNpU');
        try{
            await doc.useServiceAccountAuth({
                client_email: creds.client_email,
                private_key: creds.private_key,
            });
            await doc.loadInfo();
            const SheetLoginWithGoogle = doc.sheetsByTitle['GoogleLogin_SignUp'];
            const SheetLoginWithGoogleObj = await SheetLoginWithGoogle.getRows();
            const UserDataLoginWithGoogle = [];
            SheetLoginWithGoogleObj.forEach(row => {
                UserDataLoginWithGoogle.push({ email: row.email.toString() });
            });
            const index_login_with_google = UserDataLoginWithGoogle.findIndex(i => i.email === googleData.email);
            if (index_login_with_google >= 0) {
                Authentication(googleData);
                history.replace('/classroom/curriculum');
                history.go(0);
            } else {
                await SheetLoginWithGoogle.addRow(googleData);
                Authentication(googleData);
                history.replace('/classroom/curriculum');
                history.go(0);
            }
        } catch(e) {
            console.error('Error', e);
        }
    }
    const googleLoginFail = (response) => {
        console.log('login failed');
    }
    // <img className="" src={Logo} alt="image"/>
    return (
        <div className="flex items-center justify-center my-16 bg-gray-50 absolute inset-x-0 top-20">
            <div className="flex-1 h-full max-w-4xl mx-auto shadow-xl rounded-lg">
                <div className="flex flex-col-reverse justify-center md:justify-start items-center md:items-start md:flex-row bg-white rounded-lg">
                    <div className="flex flex-col h-auto md:h-auto w-130 md:w-1/2 p-6 md:p-0 mx-14 md:mx-0">
                        <img className="h-80 w-full rounded-tl-lg" src={Login_logo} alt="img"/>
                        <span className="font-semibold p-2 md:p-4">Log in to learn from Homedu</span>
                        <p className="p-2 md:p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <form className="flex flex-col items-center justify-center sm:p-12 w-130 md:w-1/2" onSubmit={handleSubmit}>
                        <img className="w-16 h-16 rounded-full" alt="img" src={Logo}></img>
                        <span className="text-2xl mt-4 text-center font-semibold">Log In</span>
                        <div className={validEmail ? "py-4 pt-8":"py-0 pt-8"}>
                            <svg className="w-6 h-6 inline absolute mt-2 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <input className={validEmail ? 'appearance-none border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:border-yellow-300 pl-10 w-96 h-10' : 'appearance-none border-2 border-red-500 rounded text-gray-700 leading-tight focus:outline-none focus:border-yellow-300 pl-10 w-96 h-10'}
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={email}
                                required={true}
                                onChange={handleChange}
                            />
                            <p className={validEmail ? "hidden": "text-red-400 py-2 text-sm"}>
                                invalid email.
                            </p>
                        </div>
                        <div className={validPassword ? "py-4":"py-0"}>
                            <svg className="w-6 h-6  inline absolute mt-2 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            <input className={validPassword ? "appearance-none border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:border-yellow-300 pl-10 w-96 h-10" : "appearance-none border-2 border-red-500 rounded text-gray-700 leading-tight focus:outline-none focus:border-yellow-300 pl-10 w-96 h-10"}
                                type="text"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                required={true}
                                onChange={handleChange}
                            />
                            <p className={validPassword ? "hidden": "text-red-400 py-2 text-sm"}>
                                invalid password.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <button className="bg-yellow-200 hover:bg-yellow-300 transition duration-300 ease-in rounded-sm border border-gray-200 shadow-lg w-96 h-10" type="submit">Log In</button>
                            <div className="flex flex-row text-blue-400 py-8 border-b-2">
                                <Link to="/sign_up" onClick={onClickSignUp} className="hover:text-blue-600 pr-4">Sign Up</Link>
                                <Link to="/forgot_password" className="hover:text-blue-600 pl-4">Forgot Password?</Link>
                            </div>
                            <div className="pt-12">
                                <GoogleLogin
                                    className="flex justify-center w-96 h-10"
                                    // clientId="795016447699-sfr6rl5mhf3a9a87t5su7q5er4ofgn68.apps.googleusercontent.com"
                                    clientId="527363975776-gqtip7tt8nichnmrnq8ta4nab9hfm4pb.apps.googleusercontent.com"
                                    buttonText="Sign in with Google"
                                    onSuccess={googleLoginSuccess}
                                    onFailure={googleLoginFail}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;



// import { GoogleSpreadsheet } from "google-spreadsheet";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import bcrypt from 'bcryptjs';
// import creds from "../client_secret.json";
// import LOGIN from '../components/Account/Login';
// import Authentication from "../auth/Jwt_Token";

// const Login = () => {
    
//     const history = useHistory();
//     const [data, setData] = useState({
//         email: "",
//         password: "",
//     });
//     const [validEmail, setValidEmail] = useState(true);
//     const [validPassword, setValidPassword] = useState(true);

//     const {email, password} = data;

//     const handleChange = (e) => {
//         setData({...data, [e.target.name]: e.target.value});
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         const doc = new GoogleSpreadsheet('1QlkD17TfcR5JxTziIA2RaVRqEroTwbEbSTlIaWDS8ag');
//         try {
//             await doc.useServiceAccountAuth({
//                 client_email: creds.client_email,
//                 private_key: creds.private_key,
//             });
//             await doc.loadInfo();

//             const sheet = doc.sheetsByIndex[0];
//             const user_obj = await sheet.getRows();
//             const user_data = [];
//             user_obj.forEach(row => {
//                 user_data.push({email: row.email.toString(), password: row.password.toString()});
//             });
//             const index = user_data.findIndex(i => i.email === data.email);
//             if (index >= 0){
//                 if (await bcrypt.compare(data.password, user_data[index].password)){
//                     Authentication(data.email);
//                     history.replace('/');
//                     // sessionStorage.setItem('key', 'value');
//                 }
//                 else {
//                     return(setValidEmail(true), setValidPassword(false));
//                 }
//             } else {
//                 return(setValidEmail(false), setValidPassword(true));
//             }
//         } catch(e) {
//             console.error('Error', e);
//         }

//         setData({...data, email: "", password: ""});
//     }

//     const responseGoogle = (response) => {
//         console.log(response);
//         console.log(response.profileObj);
//     }
//     // <img className="" src={Logo} alt="image"/>
//     return (
//         <>
//             <LOGIN 
//                 validEmail={validEmail}
//                 validPassword={validPassword}
//                 handleChange={handleChange}
//                 handleSubmit={handleSubmit}
//                 email={email}
//                 password={password}
//                 responseGoogle={responseGoogle}
//             />
//         </>
//     );
// }

// export default Login;