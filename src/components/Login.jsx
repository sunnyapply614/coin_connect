import React, { useEffect, useState, CSSProperties } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin} from "@react-oauth/google";
import axios from "axios";
// const flag = 1;

const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
    password: "",
  });

  const handleChange = (e) =>{
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
  }

  const login_google = useGoogleLogin({
    onSuccess: tokenResponse => setUser(tokenResponse),
    onError: console.log,
    onNonOAuthError: console.log
  });

  // const login_google_sub = () => {
  //   alert(flag);
  //   if(flag) { login_google(); }
  //   else alert("First, Log In our website please!")
  // }

  const login = () => {
    const  { email, password } = user
    
    if( email && password ){
      // alert(user.email);
      console.log('login', user);
      axios.post("http://localhost:8000/login", user)
          .then( res => {
            alert("Welcome, Log in with Google Please!")
            // setLoginUser(res.data.user)
          })
        // /check if user detail is being sent back, if it is, 
        //  it exists in database      
    }else {alert("Email and Password are required");}
  } 

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
            <br/><br/>
            <h1>Introducing CoinConnect<br/>Your Gateway to Seamless Crypto Trading! </h1>
            <br/><br/><br/><br/>
            <form>
              <input type="email" name = "email" value={user.email} placeholder="Email" onChange={ handleChange }/>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} name = "password" value={user.password} placeholder="Password" onChange={ handleChange }/>
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
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={login}>Log In</button>
                <button type="button" onClick={login_google} >
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
              <br/><br/><br/><br/>
              <p className="login-bottom-p">
                Don't have an account? <a href="/register">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
