import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg  '>
      <div className='relative flexCenter group overflow-hidden
      transition-all duration-100'>
        <Link to={`product/${id}`} className='h-12 w-12 bg-white rounded-full 
       flex justify-center items-center absolute top-1/2 bottom-1/2
       !py-2 z-20
       transition-all durattion-700 '>
        <FaSearch className= 'scale-125 flexCenter hover:rotate-90  hover:scale-125 transition-all duration-200'/>
          
        </Link>
        <img src={image} alt={`${name} Image`} 
        className='w-full block object-cover group-hover:scale-150 transition-all duration-200 '/>
        
      </div>
      <div className='p-4 overflow-hidden '>
      <h3 className='my-[6px] medium-16 line-clamp-2 text-gray-30'>{name}</h3>
        <div className='flex gap-5'>
        <p className='text-secondary bold-16 line-through'>Old Price: {old_price}</p>
        <p className='bold-16 '>New Price: {new_price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default Item;