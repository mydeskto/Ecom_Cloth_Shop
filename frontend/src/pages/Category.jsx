import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
// import all_products from '../assets/all_products'
import Item from '../components/Item'

import axios from 'axios'
import { useEffect } from 'react'

const Category = ({category , banner }) => {
  
  const [product, setProduct] = React.useState([]);

  async function  fetchdata(){

    const respnse = await axios.post('http://localhost:1300/api/allproducts')
    setProduct(respnse.data)
    console.log(respnse.data)
  }

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <section className='max_padd_container py-12 xl:py-28'>
      {/* <h1>{category}</h1>
      <img src={banner} alt={category} /> */}
      <div>
        <div>
          <img src={banner} alt=""  className='block my-7 mx-auto' />
        </div>
        <div className='flex justify-between items-center my-8 mx-2 '>
          <h5 className='font-bold '>Shopping<span>1-12</span>out of 36 products</h5>
          <div className='flex justify-between items-center max-sm:p-4 gap-x-4 px-8 py-3
          rounded-5xl ring-1 ring-slate-900/15 '>Sort by <MdOutlineKeyboardArrowDown/></div>
        </div>
        {/* container */}
        <div className= 'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-5'>
        {product.map((item) => {
           if (category === item.category ){
            return <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image} 
            old_price={item.old_price}
            new_price={item.new_price}
          />
           } 
        })}
        </div>
      </div>
    </section>
  )
}

export default Category
