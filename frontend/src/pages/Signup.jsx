import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [name , setName] = useState('');''
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  

    async function registeruser(event){
      event.preventDefault()
     const response = await fetch('http://localhost:1300/api/register' , {
      method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body :JSON.stringify({
          name,
          email, 
          password
        })
      })
      const data = await response.json()
      
      if(data.status === 'ok'){
        navigate('/login')
      }
      
   }
  return (
    <section className='max-padd-conatiner flex justify-center items-center flex-col pt-32'>
      <div className='max-w-[555px] h-auto bg-white m-auto px-14 py-10
      rounded-md'>
        <h3 className='h3'>Sign Up</h3>
        <form onSubmit={registeruser}>
        <div className='flex flex-col gap-4 mt-7'>
          <input type="text"className='h-14 w-full pl-5 bg-slate-900/10 outline-none rounded-xl'
          value={name} onChange={(e)=>{setName(e.target.value)}} name='name'
          placeholder='Your Name'/>
          <input type="email"className='h-14 w-full pl-5 bg-slate-900/10 outline-none rounded-xl'
          value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email'
          placeholder='Email Address'/>
          <input type="password"className='h-14 w-full pl-5 bg-slate-900/10 outline-none rounded-xl'
          value={password} onChange={(e)=>{setPassword(e.target.value)}} name='password'
          placeholder='Password'/>
        </div>
        <button className='btn_dark_rounded my-4 w-full !rounded-md'>Continue</button>
        </form>
        <p className='text-black font-bold'>Already Have an account? <span className='
        text-secondary underline cursor-pointer'><NavLink to={'/login'}>Login</NavLink></span></p>
        <div className='flexCenter mt-6 gap-3'>
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </section>
  )
}

export default Signup
