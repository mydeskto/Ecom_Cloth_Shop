import React from 'react';
import POPULAR from '../assets/popular';
import Item from './Item';
// import axios from 'axios'
// import {useEffect} from 'react'
const Popular = () => {

  

  return (
    <section className='bg-primary'>
      <div >
        <h2 className='h3 text-center pt-5'>Popular Products</h2>

        <hr className='h-[3px] w-2/3 mx-auto bg-gradient-to-l from-transparent via-black to-transparent'/>
        {/* Container */}
        <div className= 'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-5'
        >
          {POPULAR.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
