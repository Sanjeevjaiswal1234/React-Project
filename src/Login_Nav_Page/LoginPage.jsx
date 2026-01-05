
import React from 'react'
import Navbar from './Navbar';
import "./Page.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[msg,setMsg] = useState("");
  const navigate = useNavigate();

  let handleInput= (event)=>{
         
    let name = event.target.name;
    let value = event.target.value;

    if("email"==name){
      setEmail(value);
    }
    if("password"==name){
      setPassword(value);
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
      if ( email=="" || password=="") {
  alert("Please Enter The Details !");
  
      }
      else{
        let getDetails = JSON.parse(localStorage.getItem("user"));
    console.log(getDetails)

    getDetails.map((currValue)=>{
        console.log(currValue.email);

        let storeEmail = currValue.email;
        let storePassword = currValue.password;

        if(storeEmail==email && storePassword==password ){
          alert("login Successfully");
          navigate("/home")
        }
        else{
           setMsg("Invalid Email or Password");
        }
         e.target.reset();
    })

      }
    
  }

  return (
    <>
    <Navbar/>
    <p className='errMsg'>{msg}</p>
    <div className='SignUp'>
        <h2>Login</h2>
         <form onSubmit={handleSubmit} >
         <input type='email' name='email'placeholder='Enter  Email'onChange={handleInput}/>
        <input type="password" name="password" placeholder='Enter Password'onChange={handleInput}/>
          <br /><br />
          <button type='submit'>Login</button>
           <p>If there is no account <a href='/'>Please create an account</a></p>
         </form>
    </div>
    </>
  )
}

export default LoginPage