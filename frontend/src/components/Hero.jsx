// import React from 'react'
import React from 'react';
import { FaStar } from 'react-icons/fa6'
import { MdOutlineLocalOffer  } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
// import NewCollections from './NewCollections'

const Hero = () => {
    
  return (
    <section className=' bg-hero  bg-center bg-cover bg-no-repeat h-screen w-full pb-12
    '>
        <div className='max_padd_container  relative top-32 xs:top-32 '>
            <h1 className='h2 capitalize max-w-[37rem] '>Gigital Shopping Hub Junction</h1>
            <p className='text-gray-50 regular-16 mt-4 max-w-[33rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique nisi, velit facere accusamus architecto tempora, labore a ratione eveniet quia dicta necessitatibus molestias. Distinctio odit sunt, optio illum ad ullam suscipit sit.</p>
            <div className='flex justify-start !items-center gap-x-4 my-8 '>
                <div className='!regular-24 flex justify-center gap-x-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='bold-16 sm:bold-20'>
                    176k <span className='regular-16 sm:regular-20'>Excelent Reviews</span>
                </div>
            </div>
            <div className='max-xs:flex-col flex gap-2'>
                <NavLink to={''}  className={"btn_dark_rounded flexCenter"}> Shop Now</NavLink>
                <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer/> Offers</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Hero
