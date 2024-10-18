import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {TbTrash} from 'react-icons/tb'
const ListProduct = () => {
  const [allProducts , setAllproducts] = useState([])

  // useEffect(()=>{
  async  function fetchInfo(){
    const response =   await axios.post('http://localhost:1300/api/allproducts')
      const data = response.data
      console.log(data)
      setAllproducts(data)
      console.log(data[0].image)
    }
    useEffect(()=>{
      fetchInfo()
    } , [])

    const handleRemove = async (productname) => {
      try {
       const response = await axios.post('http://localhost:1300/api/remove', { productname });
        // Refresh the product list after removal
        if(response.success == true){
          fetchInfo();
        }
        fetchInfo();
      } catch (error) {
        console.error('Error removing product:', error);
      }
    };

  // })
  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
      <h4 className='font-bold p-5 uppercase'>Product List</h4>
      {/* <button onClick={fetchInfo}>See products</button> */}
      <div className='max-h-[77vh] overflow-auto px-4 text-center'>
        <table className='w-full mx-auto '>
          <thead className='w-full mx-auto'>
            <tr className='bg-primary font-bold sm:regular-22 text-start py-12'>
              <th className='p-2'>Products</th>
              <th className='p-2'>Title</th>
              <th className='p-2'>Old Price</th>
              <th className='p-2'>New Price</th>
              <th className='p-2'>category</th>
              <th className='p-2'>Remove</th>
            </tr>
          </thead>
          <tbody>
          {allProducts.map((product, i) => (
            
              <tr key={i} className='border-b border-slate-900/20 text-gray-20 p-6 medium-14 '>
                
                <td className=' flexStart sm:flexCenter'>
                  <img src={product.image} alt="" width={43} height={43} className='rounded-lg ring-1 ring-slate-900/5 my-1' />
                </td>
                <td className=''>{product.name}</td>
                <td className=' '>${product.old_price}</td>
                <td className=' '>${product.new_price}</td>
                <td className=' 2'>{product.category}</td>
                <td className =' bold-22 pl-6 sm:pl-14 cursor-pointer  ' onClick={() => handleRemove(product.name)} ><TbTrash  className='transform hover:sc'/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProduct
