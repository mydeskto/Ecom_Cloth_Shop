import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState  } from 'react';
import toast from 'react-hot-toast';
import {ShopContext} from '../context/ShopContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useTimeout } from 'react';
import axios from 'axios';
// import {useTimeout} from '../context/TimeOut'

const Login = () => {
  
  const navigate = useNavigate();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const {setIsLogin} = useContext(ShopContext);
  
  async function loginUser(event) {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:1300/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const { status, user } = await response.json();

        if (status === 'ok') {
            // Store token in localStorage
            localStorage.setItem('token', user);
            toast.success('Login successful!');
            setIsLogin(true);
            navigate('/'); // Redirect to the homepage or another authenticated page
        } else {
            toast.error('Please check your Email and Password!');
        }
    } catch (error) {
        console.error('Error during login:', );
        toast.error('An error occurred. Please try again later.');
    }
}
  

    // if(data.user){
    //   window.location.href ='/'
    //   toast.success('login succesfull!');
    // }else{
    //   alert('please check your email and passowrd')
    // }
    
 
  return (
    <section className='max-padd-conatiner flex justify-center items-center flex-col pt-32'>
      <div className='max-w-[555px] h-auto bg-white m-auto px-14 py-10
      rounded-md'>
        <h3 className='h3'>Login</h3>
        <form action="" onSubmit={loginUser}>
        <div className='flex flex-col gap-4 mt-7'>
         
         <input type="email"className='h-14 w-full pl-5 bg-slate-900/10 outline-none rounded-xl' 
         value={email} onChange={(e)=>{setEmail(e.target.value)}}
         placeholder='Email Address'/>
         <input type="password"className='h-14 w-full pl-5 bg-slate-900/10 outline-none rounded-xl' 
         value={password} onChange={(e)=>{setPassword(e.target.value)}}
         placeholder='Password'/>
       </div>
       <button className='btn_dark_rounded my-4 w-full !rounded-md'>Continue</button>
        </form>
        <p className='text-black font-bold'>Don't have an account? <span className='
        text-secondary underline cursor-pointer'><NavLink to={'/signup'}>Sign Up</NavLink></span></p>
        <div className='flexCenter mt-6 gap-3'>
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </section>
  )
}

export default Login
