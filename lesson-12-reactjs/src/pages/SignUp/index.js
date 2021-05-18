import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import { SIGN_UP, URL } from "../../constants/global";
import './style.scss'

const SignUp = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFailure, setIsFailure] = useState(false);

  const handleSignUp = () => {
    // return
    // axios.post(SIGN_UP_API, {
    //   email, password 
    // })
    // .then(function (response) {
    //   if(response.data.success === true) {
    //     history.push(`/sign-in?email=${email}&password=${password}`);
    //   } else {
    //     history.push("/sign-up");
    //     setIsFailure(true);
    //   }
    // })
    // .catch(function (error) {
    //   console.log("error", error)
    //   history.push("/sign-up");
    //   setIsFailure(true);
    // });
    axios.post(`${URL}/users`, {email, password})
      .then(function (response) {
        if (response.data.isSuccess === true) {
          history.push('/sign-in')
          setIsFailure(false)
        } else {
          setIsFailure(true)
        }
      })
      .catch(function (error) {
        setIsFailure(true)
      })
  };

  return (
    <div className="sign-up">
      <div className="sign-up__box">
        <div>
          <input
            placeholder="Email"
            className="sign-up__input"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Mật khẩu"
            className="sign-up__input mt-20"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="sign-up__button mt-20 " type="submit" onClick={handleSignUp}>
          {SIGN_UP}
        </button>
        {isFailure ? <div className="sign-in__fail-text">Đăng ký không thành công</div> : <></>}
      </div>
    </div>
  );
};

export default SignUp;
