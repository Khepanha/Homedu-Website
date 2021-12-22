import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
// require("dotenv").config();

const Authentication = (user) => {
    const key = process.env.REACT_APP_jwt_key;
    const token = jwt.sign({username:user.username, email: user.email}, key,
        {
            expiresIn: "30d",
        }
    )
    // const validToken = jwt.verify(token, key);
    // console.log(Date.now());
    // console.log(validToken.exp * 100);
    // if (validToken.exp * 100 < Date.now()) {
    //     console.log('Valid');
    // } else { console.log('Expired'); }
    localStorage.setItem('access_token', token);
}

export default Authentication;