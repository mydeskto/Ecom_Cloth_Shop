import React from 'react'

const NewsLetter = () => {
  return (
    <section className='max_padd_container py-12 xl:py28 bg-banneroffer'>
      <div className='mx-auto xl:w-[80%] flex justify-center items-center
      flex-col gap-y-6'>
        <h3 className='h3'>Get Exclusive offers on Your Email</h3>
        <h4 className='uppercasee bold-18'>Subscribe to our newsletter and stay updated</h4>
        <div className='flex justify-between items-center   rounded-full
        bg-primary ring ring-slate-900/5 hover:ring-slate-900/15 w-full
        mx-w-[588px] mb-10 mt-10'>
          <input type="text" placeholder='Enter Your Email' className='w-full bg-transparent ml-7
         border-none outline-none regular-16 ' />
          <button className='btn_dark_rounded' >Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
