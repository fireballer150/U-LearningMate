import { LOGIN_START } from "../types";
import axios from 'axios';


export const loginStart = (email,password) => async (dispatch)=> {
    console.log("userAction으로 넘어온이메일패스워드",email,password)
    const a = {email,password}
    const b = await axios
    .post(`${process.env.REACT_APP_API_URL}/users/signin`, {email,password})
    .then((res) => {
        console.log("res1",res)
        if (res.data.message !== "ok") {
          return false;
        } else {
            localStorage.setItem("accessToken", res.data.data.accessToken);
            const c = axios
            .post(`${process.env.REACT_APP_API_URL}/users/auth`,
              { accessToken: res.data.data.accessToken },
              { withCredentials: true }
            ).then((userinformation)=>{
                console.log("userinformation",userinformation);
                dispatch({type:LOGIN_START,payload:userinformation.data.data.userInfo});
                return true
            })
        }
    }
    )
};