import React from "react";
// import Certificates from "../Certificate/My_Certificate";
// import NotFound from "../Not_Found_Page/NotFound";
import { Redirect, Route } from 'react-router-dom';
// import { GoogleSpreadsheet } from "google-spreadsheet";
// import creds from "../../client_secret.json";


const ProtectedRouteCertificate = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem('access_token');
    return(
        <Route
            {...restOfProps}
            render={(props) => 
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
    // const [certificateExist, setCertificateExist] = useState(null);

    // useEffect(() => {

    //     const token = localStorage.getItem('access_token');
    //     const base64url = token.split('.')[1];
    //     const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
    //     const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //     }).join(''));
    //     const currentUser = JSON.parse(jsonPayload).username;
    //     async function fetchData() {
    //         const doc = new GoogleSpreadsheet('1tBUgfe1NbKV_1uN0_n5lED3g89WHqXMQDBMSYOIkNpU');
    //         try {
    //             await doc.useServiceAccountAuth({
    //                 client_email: creds.client_email,
    //                 private_key: creds.private_key,
    //             });
    //             await doc.loadInfo();

    //             const SheetAuthWithEmail = doc.sheetsByTitle['Login_SignUp_with_email'];
    //             const SheetAuthWithGoogle = doc.sheetsByTitle['GoogleLogin_SignUp'];
    //             const UserAuthWithEmailObj = await SheetAuthWithEmail.getRows();
    //             const UserAuthWithGoogleObj = await SheetAuthWithGoogle.getRows();
    //             const UserAuthWithEmailData = [];
    //             const UserAuthWithGoogleData = [];

    //             UserAuthWithEmailObj.forEach(row => {
    //                 UserAuthWithEmailData.push({ username: row.username.toString(), certificate: row.certificate });
    //             })
    //             UserAuthWithGoogleObj.forEach(row => {
    //                 UserAuthWithGoogleData.push({ username: row.username.toString(), certificate: row.certificate });
    //             })

    //             const indexAuthWithEmail = UserAuthWithEmailData.findIndex(i => i.username === currentUser);
    //             const indexAuthWithGoogle = UserAuthWithGoogleData.findIndex(j => j.username === currentUser);
    //             if (indexAuthWithEmail >= 0) {
    //                 const checkCertificate = UserAuthWithEmailData[indexAuthWithEmail].certificate;
    //                 if (checkCertificate !== undefined) {
    //                     setCertificateExist(true);
    //                 }
    //             }
    //             if (indexAuthWithGoogle >= 0) {
    //                 if (UserAuthWithGoogleData[indexAuthWithGoogle].certificate) {
    //                     setCertificateExist(true);
    //                 }
    //             }
    //             else {
    //                 setCertificateExist(false);
    //             }

    //         } catch (e) {
    //             console.error('Error', e);
    //         }
    //     }
    //     fetchData();
    // }, []);

    // if (certificateExist === null){
    //     return (<div>loading...</div>)
    // }
    // else if (certificateExist){
    //     return (<Certificates />);
    // } else {
    //     return (<NotFound />);
    // }
    // return (
    //     <Route
    //         {...restOfProps}
    //         render={(props) =>
    //             certificateExist ? <Component {...props} /> : <NotFound />
    //         }
    //     />
    // );
}

export default ProtectedRouteCertificate;