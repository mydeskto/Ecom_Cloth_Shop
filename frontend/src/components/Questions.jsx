import React from 'react'

const Questions = () => {
  return (
    <div className='w-full h-auto '>
        
      <div className=' flex justify-center items-left flex-col p-2'>
      <h2 className='pl-24 font-extrabold ' >FAQ</h2>
      <details   className='pl-20 ring-1 no-top-ring ring-slate-900/5 p-3'>
        <summary className='font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
        </summary>
        <p className='w-2/3 p-2'>
        <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia earum esse dolores praesentium quisquam minima.

        </li>
        </p>
      </details>
      {/* <hr className=' '/> */}
      <details className='pl-20 ring-1 no-top-ring ring-slate-900/5 p-3  '>
        <summary className='font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
        </summary>
        <p className='w-2/3'>
            <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci inventore soluta ut laboriosam ipsum. Dolor, non quidem. Id, eveniet?

            </li>
            <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis quisquam delectus atque perspiciatis iste minima natus, numquam quibusdam accusantium.

            </li>
        </p>
      </details>
      </div>
    </div>
  )
}

export default Questions
