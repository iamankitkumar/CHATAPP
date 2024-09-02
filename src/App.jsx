import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const App = () => {
  const navigate = useNavigate();
  const auth = getAuth(); // Initialize Firebase auth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/chat'); // Redirect to chat page if user is authenticated
      } else {
        navigate('/'); // Redirect to login page if user is not authenticated
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  );
};

export default App;
