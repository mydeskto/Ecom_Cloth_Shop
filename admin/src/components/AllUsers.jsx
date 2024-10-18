import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {TbTrash} from 'react-icons/tb'
import {toast} from 'react-hot-toast'
// import { useRef } from 'react'
const AllUsers = () => {

 const [user , setUser] = useState([])
//  const previousUserCount = useRef(0);
   
  async function fetchUser(){

    const response = await axios.post('http://localhost:1300/api/users')
    const data = response.data
    setUser(data)
    console.log(data)
    if(data.success == true){
      // fetchUser();
    }
  }

  const handleRemove = async (userEmail) => {
    try {
     const response = await axios.post('http://localhost:1300/api/removeUser', { userEmail });
      // Refresh the product list after removal

      // if (data.length > previousUserCount.current) {
      //   toast.success('New user added!');
      // }
  
      // setAllProducts(data);
      // previousUserCount.current = data.length; // Update the previous product count
    

      if(response.success == true){
        fetchInfo();
        toast.success("User Removed Succesfully")
      }
      fetchInfo();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  useEffect(()=>{
    fetchUser()
  }, [])

  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
      <h4 className='font-bold p-5 uppercase'>Product List</h4>
      {/* <button onClick={fetchInfo}>See products</button> */}
      <div className='max-h-[77vh] overflow-auto px-4 text-center'>
        <table className='w-full mx-auto '>
          <thead className='w-full mx-auto'>
            <tr className='bg-primary font-bold sm:regular-22 text-start py-12'>
              <th className='p-2'>Users</th>
              <th className='p-2'>Name</th>
              <th className='p-2'>Email Address</th>
              {/* <th className='p-2'>New Price</th> */}
              {/* <th className='p-2'>category</th> */}
              <th className='p-2'>Remove</th>
            </tr>
          </thead>
          <tbody>
           {user.map((user , i)=>(
            <tr  key={i} className='border-b border-slate-900/20 text-slate-800 p-6 gap-5 h-10 medium-14 '>
                
            <td className=' flexStart sm:flexCenter'>
            {i + 1}
            </td>
            <td className=''>{user.name}</td>
            <td className=' '>${user.email}</td>
            {/* <td className=' '>${product.price}</td> */}
            {/* <td className=' 2'>{product.category}</td> */}
            <td className =' bold-22 pl-6 sm:pl-14 cursor-pointer  ' onClick={()=> handleRemove(user.email) } ><TbTrash  className='transform hover:scale-150'/></td>
           </tr> 

           ))} 
            
              
                {/* } */}
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers
