import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { useNavigate } from "react-router-dom";

import { useGoogleLogin, googleLogout } from "@react-oauth/google";


const Login = () => {
  const [showPassword, setShowPassword ] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => setUser(tokenResponse),
    onError: console.log,
    onNonOAuthError: console.log
  });

  useEffect(() => {
    if (user && user.access_token) {
      navigate('/home');
    }
  }, [user]);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>

          <div className="login-center">
            <h2>Welcome!</h2>
            {/* <p>Please enter your details</p> */}
            <form>
              {/* <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div> */}
              <div>
                <br/><br/>
                <h1>Introducing CoinConnect<br/>Your Gateway to Seamless Crypto Trading! </h1>
                <br/><br/>
                <div className="login-center-buttons" >
                  <button type="button" onClick={login}> 
                    <img src={GoogleSvg} alt="" />
                    Log In with Google
                  </button>
                </div>
                <br/><br/><br/><br/>
                <p  className="ads">Are you ready to step into the world of digital finance? <br/>
                  Look no further!   CoinConnect is here to revolutionize your<br/> crypto trading experience.</p>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
