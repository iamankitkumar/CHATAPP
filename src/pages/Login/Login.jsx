import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import assets from './../../assets/assets';
import { signup, loginUser } from '../../Components/Config/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Redirect to chat if user is logged in
        navigate('/chat');
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign Up") {
      signup(userName, email, password);
    } else {
      loginUser(email, password).then(() => {
        navigate('/chat'); // Redirect to chat page on successful login
      }).catch(error => {
        console.error(error);
        toast.error("Login failed!");
      });
    }
  };

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <p>You are logged in.</p>
          <button onClick={() => auth.signOut().then(() => navigate('/'))}>Logout</button>
        </div>
      ) : (
        <form onSubmit={onSubmitHandler} className="login-form">
          <h2>{currState}</h2>
          {currState === "Sign Up" && (
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              placeholder='Username'
              className="form-input"
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='Email address'
            className="form-input"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder='Password'
            className="form-input"
            required
          />
          <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login Now"}</button>
          <div className='login-term'>
            <input type='checkbox' required />
            <p>Agree to the terms of use & privacy Policy.</p>
          </div>
          <div className="login-forget">
            {currState === "Sign Up" ? (
              <p className="login-toggle">
                Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
              </p>
            ) : (
              <p className="login-toggle">
                Create an account <span onClick={() => setCurrState("Sign Up")}>Click here</span>
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
