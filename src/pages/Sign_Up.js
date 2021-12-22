import { GoogleSpreadsheet } from "google-spreadsheet";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Login_logo from '../assets/images/login_logo1.jpg';
import Logo from '../assets/images/logo.jpg';
import { useHistory } from "react-router-dom";
import bcrypt from 'bcryptjs';
import creds from "../client_secret.json";
import Authentication from "../auth/Jwt_Token";

const SignUp = () => {

    const history = useHistory();
    const [disableButton, setDisableButton] = useState(false);
    const [EmailExist, SetEmailExist] = useState(false);
    const [data, setData] = useState({
        username: '',
        email: '',
        phone_number: '',
        password: ''
    });

    const { username, email, phone_number, password } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setDisableButton(true);
        const doc = new GoogleSpreadsheet('1tBUgfe1NbKV_1uN0_n5lED3g89WHqXMQDBMSYOIkNpU');
        try {
            await doc.useServiceAccountAuth({
                client_email: creds.client_email,
                private_key: creds.private_key,
            });
            await doc.loadInfo();

            const SheetSignupWithEmail = doc.sheetsByTitle['Login_SignUp_with_email'];
            const SheetSignupWithGoogle = doc.sheetsByTitle['GoogleLogin_SignUp'];
            const SheetSignupWithEmailObj = await SheetSignupWithEmail.getRows();
            const SheetSignupWithGoogleObj = await SheetSignupWithGoogle.getRows();
            const UserDataSignupWithEmail = [];
            const UserDataSignupWithGoogle = [];
            SheetSignupWithEmailObj.forEach(row => {
                UserDataSignupWithEmail.push({ email: row.email.toString() });
            })
            SheetSignupWithGoogleObj.forEach(row => {
                UserDataSignupWithGoogle.push({ email: row.email.toString() });
            })
            const index_signup_with_email = UserDataSignupWithEmail.findIndex(i => i.email === data.email);
            const index_signup_with_google = UserDataSignupWithGoogle.findIndex(j => j.email === data.email);
            if (index_signup_with_email >= 0 || index_signup_with_google >= 0) {
                SetEmailExist(true);
                setDisableButton(false);
            }
            else {
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(password, salt);
                setData(data.password = hash);
                await SheetSignupWithEmail.addRow(data);
                Authentication(data);
                alert('Sign up successfully!');
                history.replace('/classroom/curriculum');
                history.go(0);
            }

        } catch (e) {
            console.error('Error', e);
        }
        setData({ ...data, username: '', email: '', phone_number: '', password: '' });
    }

    const googleSignupSuccess = async (response) => {
        const googleData = {username: await response.profileObj.name, email: await response.profileObj.email};
        const doc = new GoogleSpreadsheet('1tBUgfe1NbKV_1uN0_n5lED3g89WHqXMQDBMSYOIkNpU');
        try{
            await doc.useServiceAccountAuth({
                client_email: creds.client_email,
                private_key: creds.private_key,
            });
            await doc.loadInfo();
            const SheetSignupWithGoogle = doc.sheetsByTitle['GoogleLogin_SignUp'];
            const SheetSignupWithGoogleObj = await SheetSignupWithGoogle.getRows();
            const UserDataSignupWithGoogle = [];
            SheetSignupWithGoogleObj.forEach(row => {
                UserDataSignupWithGoogle.push({ email: row.email.toString() });
            })
            const index_signup_with_google = UserDataSignupWithGoogle.findIndex(i => i.email === googleData.email);
            if (index_signup_with_google >= 0) {
                Authentication(googleData);
                history.replace('/classroom/curriculum');
                // window.location.reload();
                history.go(0);
            } else {
                await SheetSignupWithGoogle.addRow(googleData);
                Authentication(googleData);
                history.replace('/classroom/curriculum');
                // window.location.reload();
                history.go(0);
            }
        } catch (e) {
            console.error('Error', e);
        }
    }
    const googleSignupFail = (response) => {
        console.log('login failed.');
    }

    return (
        <div className="flex items-center justify-center my-16 pb-8 bg-gray-50 absolute inset-x-0 top-20">
            <div className="flex-1 h-full max-w-4xl mx-auto shadow-xl rounded-lg">
                <div className="flex flex-col-reverse justify-center md:justify-start items-center md:items-start md:flex-row bg-white rounded-lg">
                    <div className="flex flex-col h-auto md:h-auto w-130 md:w-1/2 p-6 md:p-0 mx-14 md:mx-0">
                        <img className="h-80 w-full rounded-tl-lg" src={Login_logo} alt="img" />
                        <span className="font-semibold p-2 md:p-4">Log in to learn from Homedu</span>
                        <p className="p-2 md:p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <form className="flex flex-col items-center justify-center p-6 sm:p-12 md:w-1/2 bg-white" onSubmit={handleSubmit}>
                        <img className="w-16 h-16 rounded-full" alt="img" src={Logo}></img>
                        <span className="text-2xl mt-4 text-center font-semibold">Sign Up</span>
                        <div className="py-4 pt-8">
                            <svg className="w-6 h-6 inline absolute mt-2 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <input className="border-2 border-gray-200 leading-tight focus:outline-none focus:border-yellow-300 rounded-sm pl-10 w-96 h-10"
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={username}
                                required={true}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={EmailExist ? "py-0" : "py-4"}>
                            <svg className="w-6 h-6 inline absolute mt-2 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <input className={EmailExist ? "appearance-none border-2 border-red-500 leading-tight focus:outline-none focus:border-yellow-300 rounded-sm pl-10 w-96 h-10" : "border-2 border-gray-200 leading-tight focus:outline-none focus:border-yellow-300 rounded-sm pl-10 w-96 h-10"}
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={email}
                                required={true}
                                onChange={handleChange}
                            />
                            <p className={EmailExist ? "text-red-400 py-2 text-sm" : "hidden"}>
                                Email already exist.
                            </p>
                        </div>
                        <div className="py-4">
                            <svg className="w-6 h-6 inline absolute mt-2 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <input className="border-2 border-gray-200 leading-tight focus:outline-none focus:border-yellow-300 rounded-sm pl-10 w-96 h-10"
                                type="text"
                                name="phone_number"
                                placeholder="Telegram phone number"
                                value={phone_number}
                                required={true}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="py-4">
                            <svg className="w-6 h-6  inline absolute mt-2 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            <input className="border-2 border-gray-200 leading-tight focus:outline-none focus:border-yellow-300 rounded-sm pl-10 w-96 h-10"
                                type="text"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                required={true}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="pb-4">
                            <button className={!disableButton ? "bg-yellow-200 hover:bg-yellow-300 transition duration-300 ease-in rounded-sm border border-gray-200 shadow-lg w-96 h-10" : "bg-gray-200 rounded-sm border border-gray-200 shadow-lg w-96 h-10 cursor-not-allowed"} type="submit">Sign Up</button>
                        </div>
                        <span className="font-semibold">OR</span>
                        <div className="py-4">
                            <GoogleLogin
                                className="flex justify-center w-96 h-10"
                                // clientId="795016447699-sfr6rl5mhf3a9a87t5su7q5er4ofgn68.apps.googleusercontent.com"
                                clientId="527363975776-gqtip7tt8nichnmrnq8ta4nab9hfm4pb.apps.googleusercontent.com"
                                buttonText="Sign up with Google"
                                onSuccess={googleSignupSuccess}
                                onFailure={googleSignupFail}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;