
import React from 'react'
import "./Page.css";
import Navbar from './Navbar';
import dev from  "../assets/dev.png";
import LoginPage from './LoginPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {

    const userDetail =[
        { name:"",
          email:"",
          password:"",
            
        }
    ]

    const [data,setData] =useState(userDetail);
    const navigate = useNavigate();

    const handleInput=(event)=>{

        console.log(event.target.value);
        console.log(event.target.name);
        let name = event.target.name;
        let value = event.target.value;

        setData({...data,[name]:value})
    }
    const handleSubmit = (event)=>{
      event.preventDefault();

      if (!data.name || !data.email || !data.password) {
  alert("Please Enter The Details !");
  return;

      }else{
        const getData = JSON.parse(localStorage.getItem("user") ||"[]")

       let arr = [];
       arr = [...getData]
       arr.push(data);

      localStorage.setItem("user",JSON.stringify(arr) );
       alert("SignUp Successfully");
       navigate("/login")
       
       event.target.reset();

      }

      }
   
    
  return (
    <>
       <Navbar/>
        <div className='SignUp'>
            <h2>SignUp</h2>
         <form onSubmit={handleSubmit} >
            <input type='text' name='name' placeholder='Enter your Name' onChange={handleInput}/>
         <br />
          <input type='email' name='email'placeholder='Enter  Email'onChange={handleInput}/>
          <br />
          <input type="password" name="password" placeholder='Enter Password'onChange={handleInput}/>
          <br />
          <p>Already Have anAcount ? <a href='/login'>Please Login</a></p>
          <button type='submit'>Sign In</button>
         </form></div>

         <img src={dev} alt="developer" width="330" className='image' />

    </>
  )
}

export default SignUpPage