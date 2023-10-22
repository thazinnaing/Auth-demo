import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import React from 'react';

const Login = () => {
    const {setToken}=useAuth();
    const navigate=useNavigate();

    const handleLogin=()=>{
        setToken("Test token");
        navigate("/", {replace: true})
    };

    setTimeout(()=>{
        handleLogin()
    }, 2000);

  return (
    <div>
      Login Page
    </div>
  );
}

export default Login;
