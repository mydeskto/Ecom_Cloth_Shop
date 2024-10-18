import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollections from'../components/NewCollections'
import NewsLetter from '../components/NewsLetter'
import Questions from '../components/Questions'
// import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useEffect } from 'react'
// import { useTimeout } from 'react';
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
const Home = () => {
  
  const {setIsLogin } = useContext(ShopContext);

  
  useEffect(() => {
    // Check if the user is already logged in (i.e., token exists in localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      
      <Hero />

      <Popular />

      <Offers/>
      
    <NewCollections />
      <Questions/>
    <NewsLetter/>
      
    </div>
  )
}

export default Home
