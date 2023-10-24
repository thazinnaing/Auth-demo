import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Provider/AuthProvider";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {

  const userRef=useRef();
  const navigate=useNavigate();
  const {setToken}=useAuth();

  const [userName, setUserName]= useState("");
  const [password, setPassword]=useState("");
  const [submit, setSubmit]=useState(false);

  const validLogin=[userName,password].every(Boolean);

  useEffect(()=>{
    userRef.current.focus();
  },[])

  const onClickHandler=(e)=>{
    e.preventDefault();
    setToken("Test token");
    setSubmit(x=> !x)
    navigate("/")
    
  }

  return(
    <section className="login-container">
        <h2>Login Now!</h2>

        <form className="form-container" autoComplete="off">
            <label htmlFor="userName">UserName: </label>
            <input 
                type="text"
                id="userName"
                ref={userRef}
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
            />
            
            <label htmlFor="password">Password: </label>
            <input 
                type="password"
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />

            <div className="btn-container">
              <button className="register-btn"
                  type="submit"
                  onClick={onClickHandler}
                  disabled={!validLogin}
              > Login
              </button>
              
              <button className="login-btn"
                  type="button"
                  onClick={()=>navigate("/register")}
              > Sign in
              </button>

            </div>
            
        </form>

    </section>
  )
}

export default Login;
