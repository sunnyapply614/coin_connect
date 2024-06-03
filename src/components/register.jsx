import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword ] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email : "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) =>{
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
  }

  const register = () => {
    const  { email, password, confirmPassword } = user
      if (email && password && (password === confirmPassword)) {
        navigate("/");
        axios.post("http://localhost:8000/register", user)
          .then( (res) => alert(res.data.message));
      } else if(password && (password != confirmPassword)){
          alert("Password incorrect");
      } else {
          alert("Confirm your details");
      }
  }

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Sign Up!</h2>
            <br/><br/><br/><br/>
            <p>Please enter your details</p>
            <form method = "POST">
              <input type="email" name = "email" value = {user.email} placeholder="Email"  onChange={ handleChange } />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} value={user.password} name = "password" placeholder="Password"  onChange={ handleChange } />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
              </div>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} value={user.confirmPassword} name = "confirmPassword" placeholder="Confirm Password"  onChange={ handleChange } />
              </div>
              <div>        
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
                <button type="button" onClick={register}>Sign Up</button>
              </div>
              <br/><br/><br/><br/>
              <p className="login-bottom-p">
                Do you have an account? <a href="/">Go Back</a>
              </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
