import React, { useState } from 'react';
import './Login.css';
import assets from './../../assets/assets';
import { signup } from '../../Components/Config/firebase';


const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [userName,setUserName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

    const onSubmitHandler=(event)=>{

    }
  
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" placeholder='username' className="form-input" required />
        ) : null}
        <input onChange={(e)=>setEmail(e.target.value)} value={setEmail} type="email" placeholder='Email address' className="form-input" required />
        <input onChange={(e)=>setPassword(e.target.value)} value={setPassword} type="password" placeholder='password' className="form-input" required />
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login Now"}</button>
        <div className='login-term'>
          <input type='checkbox' />
          <p>Agree to the terms of use & privacy Policy.</p>
        </div>
        <div className="login-forget">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already Have an account <span onClick={() => { setCurrState("Login"); }}> Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account <span onClick={() => { setCurrState("Sign Up"); }}> Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
