import React, { useState } from 'react';
import Scanner from "react-webcam-qr-scanner";
import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "../../client_secret.json";
// import Certificate from '../../assets/images/certificate.jpg';

const Certificates = () => {
    const [qrResult, setQRResult] = useState('');
    const [data, setData] = useState(false);
    const [scan, setScan] = useState(false);
    const [disableScan, setDisableScan] = useState(false);
    const [disableDownload, setDisableDownload] = useState(true);
    const [certificate_id, setCertificate_ID] = useState('');

    const handleScan = () => {
        // setScan(true);
        if (qrResult) {
            window.location.reload();
        } else {
            setScan(true);
        }
    }
    const handleDecode = (result) => {
        if (result.data) {
            setQRResult(result.data);
            setData(true);
            setDisableDownload(false);
        }
    }
    const handleScannerLoad = (mode) => {
        // console.log(mode);
    }
    const handleChange = (e) => {
        setCertificate_ID(e.target.value);
        setDisableDownload(false);
        if (e.target.value) {
            setDisableScan(true);
        } else {
            setDisableScan(false);
            setDisableDownload(true);
        }
    }
    const handleDownload = async (e) => {
        e.preventDefault();
        const url = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        if (qrResult === '' && certificate_id === '') {
            alert('Please scan QR or Input certificate ID to verify.');
        }
        if (qrResult !== '') {
            if (!!url.test(qrResult) === false) {
                alert('Invalid QR.');
                window.location.reload();
            } else {
                window.open(qrResult);
            }
        }

        if (certificate_id !== '') {
            // window.location.href = link;
            const token = localStorage.getItem('access_token');
            if (token) {
                const base64url = token.split('.')[1];
                const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                const currentUser = JSON.parse(jsonPayload).username;
                const doc = new GoogleSpreadsheet('1tBUgfe1NbKV_1uN0_n5lED3g89WHqXMQDBMSYOIkNpU');
                try {
                    await doc.useServiceAccountAuth({
                        client_email: creds.client_email,
                        private_key: creds.private_key,
                    });
                    await doc.loadInfo();

                    const SheetAuthWithEmail = doc.sheetsByTitle['Login_SignUp_with_email'];
                    const SheetAuthWithGoogle = doc.sheetsByTitle['GoogleLogin_SignUp'];
                    const UserAuthWithEmailObj = await SheetAuthWithEmail.getRows();
                    const UserAuthWithGoogleObj = await SheetAuthWithGoogle.getRows();
                    const userData = [];
                    UserAuthWithEmailObj.forEach(row => {
                        userData.push({ username: row.username.toString(), certificate: row.certificate });
                    })
                    UserAuthWithGoogleObj.forEach(row => {
                        userData.push({ username: row.username.toString(), certificate: row.certificate });
                    })
                    const index = userData.findIndex(i => i.username === currentUser);
                    if (index >= 0) {
                        const checkCertificate = JSON.parse(userData[index].certificate.toString());
                        if (checkCertificate[certificate_id] !== undefined) {
                            window.open(checkCertificate[certificate_id]);
                        }
                        else {
                            alert('Invalid certificate ID.');
                        }
                    }
                    // check this alert need to figure it out!
                    else {
                        alert('...');
                    }
                } catch (e) {
                    console.log('Error', e);
                }
            } else {
                window.location.reload();
            }

            // window.open(qrResult);
        }
    }

    return (
        <div className="flex flex-col items-center pt-8 bg-white min-h-screen">
            <h1 className="text-gray-500 lg:text-4xl md:text-3xl sm:text-2xl text-2xl py-11 font-semibold font-sans">Scan QR code or Enter certfiicate ID</h1>
            <div className="flex lg:justify-start justify-center lg:items-start items-center lg:flex-row flex-col">
                <div className="relative flex flex-col pt-8 px-4">
                    <div className={scan ? data ? "border-0" : "border border-red-500" : "border-2 border-blue-500"}>
                        <Scanner
                            className={data ? "w-96 border-2 border-green-400" : scan ? "w-96 h-72" : "w-96 h-72 filter blur-sm bg-qr-code bg-no-repeat bg-contain bg-center"}
                            onDecode={handleDecode}
                            onScannerLoad={handleScannerLoad}
                            constraints={{
                                audio: false,
                                video: scan ? data ? false : { facingMode: "environment" } : false
                            }}
                            captureSize={{ width: 1280, height: 720 }}
                        />
                    </div>
                    <button disabled={disableScan ? true : false} onClick={handleScan} className={scan ? data ? "absolute top-36 left-44" : "hidden" : disableScan ? "absolute cursor-not-allowed top-36 left-44" : "absolute top-36 left-44"}>
                        <svg className={data ? "transition duration-500 ease-in hover:text-gray-500 text-white w-14 h-14" : "transition duration-300 ease-in hover:text-blue-600 text-blue-500 w-14 h-14"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </button>
                    <div className={data ? "flex flex-row justify-center items-center rounded-b-sm bg-success-green w-full h-16" : "hidden"}>
                        <svg className="text-green w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="ml-4 text-green">Successfully scan!</span>
                    </div>
                </div>
                <div className="flex flex-col p-2">
                    <h1 className="font-semibold font-sans px-3 text-2xl text-yellow-400">Personalize your certificate</h1>
                    <form className="w-96 px-3 pt-3 mb-6 md:mb-0" onSubmit={handleDownload}>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Certificate ID:
                        </label>
                        <input className={scan ? "cursor-not-allowed appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}
                            disabled={scan ? true : false}
                            id="grid-first-name"
                            type="text"
                            placeholder="Enter your certificate ID"
                            name="certificateID"
                            value={certificate_id}
                            onChange={handleChange}
                        />
                    </form>
                    <div className="w-96 px-3 pt-3 mb-6 md:mb-0">
                        {data ? <h1 className="break-words text-blue-500 h-44 border border-gray-300 font-semibold py-3 px-4">{qrResult}</h1> : <h1 className="text-gray-300 h-44 border border-gray-300 font-semibold py-3 px-4">Scan QR to get your certificate resource here.</h1>}
                    </div>
                    <div className={"w-96 px-3 py-3 mb-6 md:mb-0"}>
                        <button
                            onClick={handleDownload}
                            className={disableDownload ? "cursor-not-allowed font-semibold w-full bg-gray-300 text-gray-500 rounded py-3" : "font-semibold w-full bg-blue-500 hover:bg-blue-600 text-black rounded py-3"}
                            disabled={disableDownload ? true : false}
                        >
                            Get Your Certificate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificates;