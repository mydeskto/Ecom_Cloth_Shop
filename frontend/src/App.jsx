
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Category from './pages/Category'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';

import bannermens from './assets/bannermens.png'
import bannerwomens from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

function App() {
  

  return (
    <>
      <main className='bg-primary text-tertiary'>

        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/mens' element={<Category category="men" banner={bannermens}/>}/>
          <Route path='/womens' element={<Category category="women" banner={bannerwomens} />}/>
          <Route path='/kids' element={<Category category="kid" banner={bannerkids} />}/>
          <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>}/>
          
          </Route>
          <Route path='/cart-page' element={<Cart />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/profile' element={<Profile />}/>

        </Routes>

        <Footer />
        <Toaster
        position="bottom-center"
         toastOptions={{
          duration: 2000, // Toast duration (1 second)
          style: {
            border: '2px solid black', // Black border
            padding: '24px',
            // paddingLeft:'20px',
            // paddingRight :'20px',
            color: 'black', // Black text
            backgroundColor: 'white', // White background
          },
        }}
        containerStyle={{
          // position: 'absolute',
          // top: '50%',
          // left: '50%',
          // transform: 'translate(-50%, -50%)',
        }}
      />

      
      </main>
    </>
  )
}

export default App
