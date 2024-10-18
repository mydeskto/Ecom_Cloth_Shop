import React from 'react'
// import Latest from '../assets/latest'
import Item from './Item'
import axios from 'axios'
import { useEffect } from 'react'
const NewCollections = () => {


  const [popular, setPopular] = React.useState([]);

  async function  fetchdata(){

    const respnse = await axios.post('http://localhost:1300/api/allproducts')
    setPopular(respnse.data)
    console.log(respnse.data)
  }

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <section className='bg-primary'>
      <div >
        <h2 className='h3 text-center pt-5'>Latest Collections</h2>

        <hr className='h-[3px] w-2/3 mx-auto bg-gradient-to-l from-transparent via-black to-transparent'/>
        {/* Container */}
        <div className= 'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-5'
        >
          {popular.map((item) => (
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
  )
}

export default NewCollections
